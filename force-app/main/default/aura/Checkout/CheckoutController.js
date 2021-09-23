({
    selectPizzaInCart: function(component, event, helper){
        return checkoutHelper.getPizzaInfo(component);
    },
    
    getTotalPrice: function(component, event, helper){
        return checkoutHelper.getCartPrice(component);
    },
    
    checkUserInput: function(component, event, helper){
        checkoutHelper.couponDiscounts(component);
    },
    
    reducedPrice: function(component, event, helper){
        return checkoutHelper.applyDiscount(component);
    },
    
    
    
    
//functions for redirection buttons
    showPizzaPage: function(component, event, helper){
        CheckoutHelper.PizzaPage(component);
    },

    startOver: function(component, event, helper){
        CheckoutHelper.startOver(component);
    },

    viewCart: function(component, event, helper){
        CheckoutHelper.showCart(component);
    },

    purchaseOrder: function(component, event, helper){
        CheckoutHelper.Buy(component);
    }
});