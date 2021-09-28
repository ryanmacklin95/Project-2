({
	addAnother : function(component, event, helper) {
        helper.addPizza(component, event);
	
	},
    removePizza : function(component, event, helper) {
        helper.deletePizza(component, event);
        
    },
    editCart : function(component, event, helper) {
        helper.editPizza(component, event);
    },
    setCurrentCart : function(component, event, helper) {
        helper.setCart(component, event);
    },
    testPizza: function(component) {
        
        var pizza = {toppings: 'pepperoni', size: 'small'};
        var pizzas = component.get('v.myPizzas');
        pizzas.push(pizza);
        component.set('v.myPizzas', pizzas);
    }, 
    goToCheckout: function(component, event, helper){
		helper.checkout(component, event);
    }
})