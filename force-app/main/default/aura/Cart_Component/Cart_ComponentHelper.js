({
	deletePizza : function(component, event) {
        var button = event.getSource().get('v.title');
        var index = button.substring(button.length-1);
        
        var p = component.get('v.parent');
        var pizzaList = p.get('v.pizzas');
		myPizzas.splice(index, 1, '');
        p.set('v.pizzas', myPizzas);
        
        var imgUrls = p.get('v.imageURLs');
        imgUrls.splice(index, 1, '');

        var element = document.getElementById('Row' + index);
        element.style.display = 'none';
	},
    addPizza : function(component, event) {
    var cmpEvent = component.getEvent('bubblingEvent');
        cmpEvent.setParams({
            "ComponentAction" : 'checkoutToBuilder'
        });
        cmpEvent.fire();
    },
    editPizza : function(component, event) {
        var button = event.getSource().get('v.title');
        var index = button.substring(button.length-1);
        
        var p = component.get('v.parent');
        p.set("v.currentPizza", index-0);
        
        var cmpEvent = component.getEvent('bubblingEvent');
        cmpEvent.setParams({
            "ComponentAction" : 'editPizza'
        });
        cmpEvent.fire();
        
    },
    setCart : function(component, event) {
        var p = component.get('v.parent');
        var pizzaList = p.get('v.pizzas');
        component.set('v.myPizzas', pizzaList);
        
    }
})