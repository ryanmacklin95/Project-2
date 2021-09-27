public class CheckoutHelperApexController 
{
    public static List<Pizza__c> orderPizzas;
    public static Shopping_Cart__C thisCart;
    
	@auraEnabled
    public static void insertCart()
    {
        contact thisContact = CustomController.getContactInfo();
        user thisUser = CustomController.getUserInfo();
        
        thisCart = new Shopping_Cart__c(Store_Location__c = thisUser.default_location__c, Account__c = thisContact.AccountId);
        insert thisCart;
   
    }
    
    @auraEnabled
    public static void makePizza(String size, String toppings)
    {
        if(orderPizzas == NULL){
            orderPizzas = new List<Pizza__C>();
        }
        
        orderPizzas.add(new Pizza__C(size__c = size, Toppings__c = toppings, Shopping_Cart__C = thisCart.Id));
    }
    
    @auraEnabled
    public static void PizzaPls()
    {
		insert orderPizzas;
    }
}