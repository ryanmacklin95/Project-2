public class CheckoutHelperApexController 
{
    public static Shopping_Cart__C thisCart;
    
    @auraEnabled
    public static void insertCart()
    {
        //contact thisContact = CustomController.getContactInfo();
        //user thisUser = CustomController.getUserInfo();
        
        thisCart = new Shopping_Cart__c(/*Store_Location__c = thisUser.default_location__c, Account__c = thisContact.AccountId*/);
        insert thisCart;
        
        
    }
    
    @auraEnabled
    public static void makePizza(List<String> size, List<String> toppings)
    {
        system.debug('help');
        
        //List<Pizza__C> orderPizzas = new List<Pizza__C>();

        Shopping_cart__c thisCart = [SELECT id FROM Shopping_cart__c ORDER BY createddate DESC LIMIT 1];
        
        for(Integer i = 0; i < size.size(); i++){
            Pizza__c pizzaToAdd = new Pizza__C();
            pizzaToAdd.Size__c = size[i];
            system.debug('size added');
            pizzaToAdd.Toppings__c = toppings[i];
            system.debug('toppings added');
            pizzaToAdd.Shopping_Cart__c = thisCart.Id;
            system.debug('cart added');
            
            insert pizzaToAdd;
        }
        //system.debug('order pizzas: ' + orderPizzas);
        //insert orderPizzas;
    }
    
}