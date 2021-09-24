public class HomePizzaApexController 
{
	@auraEnabled
    public static void placeOrder()
    {
        Shopping_Cart__C newCart = new Shopping_Cart__C(Order_is_ready__c = true);
        insert newCart;
        Pizza__C newPizza = new Pizza__C(size__C = 'Extra Large', Shopping_Cart__C = newCart.id, Toppings__c = 'Pepporoni, Sausage, bacon');
		insert newPizza;
    }
}