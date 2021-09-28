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
    
    reducedPrice: function(component, event, helper, finalPrice){
        helper.applyDiscount(component, event, helper, finalPrice);
        console.log("final price: " + finalPrice);
    },
    
    doInitStuff: function(component, event, helper){
     	helper.init(component);
        console.log("help");
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