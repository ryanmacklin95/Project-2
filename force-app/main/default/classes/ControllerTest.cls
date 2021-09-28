@isTest
public class ControllerTest {
    public static Id rtId = Schema.SObjectType.Pizza__c.getRecordTypeInfosByName().get('Custom Order').getRecordTypeId();
    public static List<Schema.PicklistEntry> Toppings = Schema.SObjectType.Pizza__C.fields.Toppings__c.GetPicklistValues();
    public static List<String> tops = new List<String>();
        
        
    @testSetup
    public static void SetupTests() {
        
        
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User']; 
        User testUser = new User(Alias = 'standt', Email='ee@ee.com', 
                                 EmailEncodingKey='UTF-8', LastName='Joestar', FirstName = 'Joseph', LanguageLocaleKey='en_US', 
                                 LocaleSidKey='en_US', ProfileId = p.Id, 
                                 TimeZoneSidKey='America/Los_Angeles', UserName='james@king.com');
        Account testAccount = new Account(name = 'TEst');
        Insert testAccount;
        Contact testContact = new Contact(firstName = 'Joseph', lastName = 'Joestar', accountId = testAccount.id);
        Insert testContact;
    }
    @isTest
    public static void TP_single(){
        Test.startTest();
        for (Schema.PicklistEntry i: Toppings){
            tops.add(String.valueof(i.GetValue()));
        }
        User testUser = [SELECT id, default_location__c FROM USER where lastName = 'Joestar'];
        Account testAccount = [SELECT id FROM Account where name = 'TEst'];
        Contact testContact = [SELECT firstName, lastName, AccountId FROM Contact where Accountid =: testAccount.id];
        Shopping_cart__c testCart = new Shopping_cart__c(account__c = testAccount.id, order_is_ready__c = False);
        Insert testCart;
        Pizza__c testPizza = new Pizza__c( Toppings__c = tops[1],size__c = 'small', shopping_cart__c = testcart.id, recordTypeId = rtId);
        Insert testPizza;
        testCart.Order_is_Ready__c = TRUE;
        Update testCart;
        List<Pizza__c> allpizza = new List<Pizza__c>();
        List<Shopping_cart__c> currCart = new List<shopping_cart__c>();
        System.runAs(testUser){
            User thisUser = customController.getUserinfo();
            currcart = CustomController.AllOrder();
            customcontroller.reOrder(currcart[0]);
        }
        allPizza = [SELECT Toppings__c, size__c FROM Pizza__c WHERE SIze__c = 'small'];
        System.assertEquals(allPizza[0].size__c, 'Small');
        test.stopTest();
    }
    @isTest
    public static void TP_Many(){
        Test.startTest();
        User testUser = [SELECT id, default_location__c FROM USER where lastName = 'Joestar'];
        Account testAccount = [SELECT id, name FROM Account where name = 'TEst'];
        Contact testContact = [SELECT firstName, lastName, AccountId FROM Contact where Accountid =: testAccount.id];
        testHelper.InsertCart(testAccount, 151);
        List<Shopping_cart__c> testcart = [SELECT id, order_is_ready__c FROM Shopping_cart__c where Account__c =: testAccount.id];
        testHelper.InsertPizza(testCart, 3);
        List<Pizza__c> testPizza = [SELECT toppings__c, size__c, shopping_cart__c FROM Pizza__c];
        for (Shopping_cart__c thiscart: testcart){
            thiscart.order_is_ready__c = TRUE;
        }
        update testcart;
        List<Pizza__c> allpizza = new List<Pizza__c>();
        List<Shopping_cart__c> currCart = new List<shopping_cart__c>();
        
        System.runAs(testUser){
            User thisUser = customController.getUserinfo();
            currCart = CustomController.AllOrder();
            customcontroller.reOrder(currCart[0]);
        }
        System.assertEquals(testCart.size(), currCart.size());
        test.stopTest();
    }
    
    
    
    
    //Use iteration of component
    //cart =c
    //Component: 
}