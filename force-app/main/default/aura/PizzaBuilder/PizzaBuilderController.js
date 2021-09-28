({
	initialize : function(component, event, helper) {
		helper.clearPizza();
	},
    
    handleChange : function (cmp, event, helper) {
        var selectedOptionValue = event.getParam("value");
        helper.displayToppings(cmp, selectedOptionValue);
    },
    
    navigateToCheckout : function(component, event, helper) {
        helper.addPizza(component);
        helper.goToCheckout(component);
    },
    
    addPizzaToCart : function(component, event, helper) {
        helper.addPizza(component);
        helper.changeToCart(component);
    },
    
    showBase : function(component, event, helper) {
        helper.clearPizza();
    }
})