@istest
public class TestHelper {
    public static Id rtId = Schema.SObjectType.Pizza__c.getRecordTypeInfosByName().get('Custom Order').getRecordTypeId();
    public static List<Schema.PicklistEntry> Toppings = Schema.SObjectType.Pizza__C.fields.Toppings__c.GetPicklistValues();
    public static List<String> tops = new List<String>();
    
    public static void InsertCart(Account testAccount, Integer num){
        List<Shopping_cart__c> toInsert = new List<Shopping_cart__c>();
        for (Integer i = 0; i < num; i++){
            toInsert.add(new Shopping_cart__c(account__c = testAccount.id, order_is_ready__c = True));
        }
        Insert toInsert;
    }
    public static void InsertPizza(List<Shopping_cart__c> testCart, Integer num){
        for (Schema.PicklistEntry i: Toppings){
            tops.add(String.valueof(i.GetValue()));
        }
        List<Pizza__c> toInsert = new List<Pizza__c>();
        for (integer i = 0; i < testCart.size(); i++){
            for (Integer j = 0; j < num; j++){
                toInsert.add(new Pizza__c( Toppings__c = tops[1],size__c = 'small', shopping_cart__c = testcart[i].id, recordTypeId = rtId));
            }
        }
        Insert toInsert;
    }
    
    
}