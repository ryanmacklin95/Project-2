({
    selectPizzaInCart: function(component, event, helper){
        return helper.getPizzaInfo(component);
    },
    
    getTotalPrice: function(component, event, helper){
        return helper.getCartPrice(component);
    },
    
    checkUserInput: function(component, event, helper){
        helper.couponDiscounts(component);
    },
    
    reducedPrice: function(component, event, helper){
        return helper.applyDiscount(component);
    },
    
    
    
    
//functions for redirection buttons
    showPizzaPage: function(component, event, helper){
        helper.PizzaPage(component);
    },

    startOver: function(component, event, helper){
        helper.startOver(component);
    },

    viewCart: function(component, event, helper){
        helper.showCart(component);
    },

    purchaseOrder: function(component, event, helper){
        helper.Buy(component);
    }
});