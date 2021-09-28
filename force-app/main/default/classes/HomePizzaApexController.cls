public without sharing class HomePizzaApexController 
{
	@auraEnabled
    public static void placeMLSOrder()
    {
        contact thisContact = CustomController.getContactInfo();
        user currUser = CustomController.getUserInfo();
        Shopping_Cart__C newCart = new Shopping_Cart__C(Store_location__c = currUser.Default_Location__c, Account__c = thisContact.AccountId);
        insert newCart;
        Pizza__C newPizza = new Pizza__C(size__C = 'Extra_Large', Shopping_Cart__C = newCart.id, Toppings__c = 'Pepporoni;Sausage;Bacon');
		insert newPizza;
    }
    
    @auraEnabled
    public static void placeHawaiianOrder()
    {
        contact thisContact = CustomController.getContactInfo();
        user currUser = CustomController.getUserInfo();
		Shopping_Cart__C newCart = new Shopping_Cart__C(Store_location__c = currUser.Default_Location__c, Account__c = thisContact.AccountId);
        insert newCart;
        Pizza__C newPizza = new Pizza__C(size__C = 'Medium', Shopping_Cart__C = newCart.id, Toppings__c = 'Pineapple;Bacon');
		insert newPizza;        
    }
    
    @auraEnabled
    public static void placeHeartAttackOrder()
    {
        contact thisContact = CustomController.getContactInfo();
        user currUser = CustomController.getUserInfo();
        Shopping_Cart__C newCart = new Shopping_Cart__C(Store_location__c = currUser.Default_Location__c, Account__c = thisContact.AccountId);
        insert newCart;
        Pizza__C newPizza = new Pizza__C(size__C = 'Extra_Large', Shopping_Cart__C = newCart.id, Toppings__c = '');
		insert newPizza; 
    }
}