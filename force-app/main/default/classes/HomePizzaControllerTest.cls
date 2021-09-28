@isTest
public class HomePizzaControllerTest 
{
    public static List<pizza__C> listOfPizza;
    @testSetup
    public static void testSetup(){
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
    public static void TP_Many_MLS()
    {
        Test.startTest();
        User testUser = [SELECT id, default_location__c FROM USER where lastName = 'Joestar'];
        System.runAs(testUser){
            
            for(Integer i = 0; i < 10; i++)
            {
                HomePizzaApexController.placeMLSOrder();
            }
            
             listOfPizza = [SELECT id FROM Pizza__C];
         }
        Test.stopTest();
        
        System.assertEquals(10, listOfPizza.size());
        
        
    }
    
    @isTest
    public static void TN_Single_MLS()
    {
        Test.startTest();
        User testUser = [SELECT id, default_location__c FROM USER where lastName = 'Joestar'];
        System.runAs(testUser){
        
            HomePizzaApexController.placeMLSOrder();
            
             listOfPizza = [SELECT id, toppings__c FROM Pizza__C WHERE toppings__c = 'Pepporoni'];
        }
        Test.stopTest();
        
        System.assertEquals(0, listOfPizza.size());        
    }
    
    
//hawaiian tests    
    
    
    
    
    @isTest
    public static void TP_Many_HS()
    {
        Test.startTest();
        User testUser = [SELECT id, default_location__c FROM USER where lastName = 'Joestar'];
		System.runAs(testUser){
        
        
            for(Integer i = 0; i < 10; i++)
            {
                HomePizzaApexController.placeHawaiianOrder();
            }
            
             listOfPizza = [SELECT id FROM Pizza__C];
        }
        Test.stopTest();
        
        System.assertEquals(10, listOfPizza.size());
        
        
    }
    
    @isTest
    public static void TN_Single_HS()
    {
        Test.startTest();
		User testUser = [SELECT id, default_location__c FROM USER where lastName = 'Joestar'];        
		System.runAs(testUser){
        
            HomePizzaApexController.placeHawaiianOrder();
            
             listOfPizza = [SELECT id, toppings__c FROM Pizza__C WHERE toppings__c = 'Pepporoni'];
        }
        Test.stopTest();
        
        System.assertEquals(0, listOfPizza.size());        
    }
    
    
//super cheese tests    
    
    
    
    @isTest
    public static void TP_Many_CS()
    {
        Test.startTest();
        User testUser = [SELECT id, default_location__c FROM USER where lastName = 'Joestar'];
        System.runAs(testUser){
        
            for(Integer i = 0; i < 10; i++)
            {
                HomePizzaApexController.placeHeartAttackOrder();
            }
            
             listOfPizza = [SELECT id FROM Pizza__C];
        }
        Test.stopTest();
        
        System.assertEquals(10, listOfPizza.size());
        
        
    }
    
    @isTest
    public static void TN_Single_CS()
    {
        Test.startTest();
        User testUser = [SELECT id, default_location__c FROM USER where lastName = 'Joestar'];
        System.runAs(testUser){
        
            HomePizzaApexController.placeHeartAttackOrder();
            
             listOfPizza = [SELECT id, toppings__c FROM Pizza__C WHERE toppings__c = 'Pepporoni'];
        }
        Test.stopTest();
        
        System.assertEquals(0, listOfPizza.size());        
    }
}