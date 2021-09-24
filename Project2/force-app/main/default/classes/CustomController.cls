public without sharing class CustomController {
    @auraEnabled
    public static User getUserInfo(){
        Id currId = Id.valueof(System.UserInfo.GetUserId());
        List<User> currUser = [SELECT id FROM User WHERE id =: currId];
        return currUser[0];
	}
    @AuraEnabled
    public static Contact getContactInfo(){
        String myfirstName = userinfo.getFirstName();
        String mylastName = userinfo.getLastName();
        List<String> firstNameString = new List<String>();
        List<String> lastNameString = new List<String>();
        firstNameString.add(myFirstName);
        lastNameString.add(myLastName);
        List<Contact> currContact = [SELECT AccountId, Id, name FROM Contact WHERE firstName in: firstNameString
                      and lastName in: lastNameString];
        return currContact[0];
    }
    @auraEnabled
    public static List<Shopping_cart__c> AllOrder(){
        Contact myContact = getContactInfo();
        system.debug(mycontact.accountId);
        List<Shopping_cart__c> totOrder = [SELECT (SELECT Price__c, Toppings__c, Size__c, shopping_cart__c FROM Pizzas__r), name,id, total_cost__c FROM Shopping_cart__c where 
                                          Account__c =: myContact.AccountId AND Order_is_Ready__c = true];
        System.debug(totOrder[0]);
        return totOrder;
    }
    @auraEnabled
    public static void reOrder(Shopping_cart__c cart){
        List<Pizza__c> oldPizza = [SELECT Shopping_cart__C, toppings__c, size__c FROM Pizza__c WHERE SHopping_cart__c =: cart.id];
        Shopping_cart__c newCart = new Shopping_cart__c(Account__c = getContactInfo().AccountId, order_is_ready__c = True);
        Insert newCart;
        List<Pizza__c> allpizza = new List<Pizza__c>();
        for(Pizza__c currPizza: oldPizza){
			/*allPizza.add(new Pizza__c(Toppings__c = currPizza.toppings__c, size__c = currPizza.Size__c,
                                     shopping_cart__c = newCart.id)); */
            Pizza__c add = new Pizza__c();
            add.Toppings__c = currPizza.Toppings__c;
            add.Size__c = currPizza.Size__c;
            add.Shopping_Cart__c = newCart.id;
            allPizza.add(add);
            
        }
        Insert allPizza;
    }
    

    /*@auraenabled
    public static Map<Shopping_cart__c, List<Pizza__c>> getPizzaMap(){
        List<Shopping_cart__c> myCart = [SELECT (SELECT Price__c, Toppings__c, Size__c, shopping_cart__c FROM Pizzas__r), id, name, total_cost__c FROM Shopping_cart__c where 
                                          Account__c =: getContactInfo().AccountId];
        Set<id> pizzaId = new Set<id>();
        for (Shopping_cart__c currCart: myCart){
            for (pizza__c pizza: currCart.pizzas__r){
            	pizzaId.add(pizza.id);
            }
        }
        List<Pizza__c> myPizza = [SELECT name FROM Pizza__c WHERE id IN: pizzaId];
        Map<shopping_cart__c, List<Pizza__c>> mapPizza = new Map<shopping_cart__c, List<Pizza__c>>();
        for (shopping_cart__c currCart: myCart){
            List<Pizza__c> setPizza = new List<Pizza__c>();
            for (Pizza__c pizza: currCart.pizzas__r){
                if(pizza.shopping_cart__c == currCart.id){
                    setPizza.add(pizza);
                    break;
                }
            }
            mapPizza.put(currCart, setPizza);
        }
        return mapPizza;
        
        
   
    }
    @auraEnabled
    public static List<String> allTops(){
        List<String> topList = new List<String>();
        Map<Shopping_cart__c, List<Pizza__c>> currMap = getPizzaMap();
        List<Shopping_cart__c> currCart = AllOrder();
        for (Shopping_Cart__c cart:currCart){
            String tops ='';
            for(Pizza__c piz:currMap.get(cart)){
                tops += piz.Toppings__c + ', ';
            }topList.add(tops.substring(0, tops.length()-2));
        }
        return topList;
    }

    }*/
    
    
}