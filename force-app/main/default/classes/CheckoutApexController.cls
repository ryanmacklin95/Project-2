public without sharing class getPizzaFields {
        
    //method for the aura component to get the pizza info from the server
    @AuraEnabled
    public static List<Pizza__C> getPizzaFields()
    {
        List<Pizza__C> Pizza = [SELECT size__c, toppings__c, price__c FROM Pizza__C WHERE name IN: theCart];
        return Pizza;
    }
    
    @AuraEnabled
    public static List<Shopping_Cart__C> getTotalCartPrice()
    {
        List<Shopping_Cart__C> totalPriceField = [SELECT Total_Cost__C FROM Shopping_Cart__C WHERE name IN: theCart];
        return totalPriceField;
    }
    

    @AuraEnabled
    public static void emptyCart()
    {
        List<Pizza__C> emptyCart = [SELECT name FROM Pizza__C WHERE name IN: theCart];
        delete emptyCart;
    }
    
    @auraEnabled
    public static void submitOrder()
    {
		List<shopping_cart__c> toBeSubmitted = [SELECT name, OrderSubmitted__c, Delivery_Time__c
             FROM shopping_cart__c WHERE ordersubmitted__c = false AND OwnerID = :user];
        
        for(Integer i = 0; i < toBeSubmitted.size(); i++)
        {
            toBeSubmitted[i].orderSubmitted__c = true;
            deliveryTime = toBeSubmitted[i].Delivery_Time__c;
        }
    }
}