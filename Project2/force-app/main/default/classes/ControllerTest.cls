@isTest
public class ControllerTest {
    @isTest
    public static void TP_single(){
        Id rtId = Schema.SObjectType.Pizza__c.getRecordTypeInfosByName().get('Custom Order').getRecordTypeId();
        List<Schema.PicklistEntry> Toppings = Schema.SObjectType.Pizza__C.fields.Toppings__c.GetPicklistValues();
        List<String> tops = new List<String>();
        for (Schema.PicklistEntry i: Toppings){
            tops.add(String.valueof(i.GetValue()));
        }
        
        Profile p = [SELECT Id FROM Profile WHERE Name='Standard User']; 
        User testUser = new User(Alias = 'standt', Email='ee@ee.com', 
                                 EmailEncodingKey='UTF-8', LastName='Joestar', FirstName = 'Joseph', LanguageLocaleKey='en_US', 
                                 LocaleSidKey='en_US', ProfileId = p.Id, 
                                 TimeZoneSidKey='America/Los_Angeles', UserName='james@king.com');
        Account testAccount = new Account(name = 'TEst');
        Insert testAccount;
        Contact testContact = new Contact(firstName = 'Joseph', lastName = 'Joestar', accountId = testAccount.id);
        Insert testContact;
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
        
    }
    
    
    //Use iteration of component
    //cart =c
    //Component: 
}