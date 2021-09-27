({
	initialize : function(component, event, helper) {
		helper.clearPizza();
	},
    
    handleChange : function (cmp, event, helper) {
        var selectedOptionValue = event.getParam("value");
        helper.displayToppings(cmp, selectedOptionValue);
    },
    
    navigateToCheckout : function(component, event, helper) {
        var cmpEvent = component.getEvent("bubblingEvent");
        cmpEvent.setParams({"ComponentAction" : 'builderToCheckout'});
        cmpEvent.fire();
    },
    
    addPizzaToCart : function(component, event, helper) {
        helper.addPizza(component);
        helper.changeToCart(component);
    },
    
    showBase : function(component, event, helper) {
        helper.clearPizza();
    }
})