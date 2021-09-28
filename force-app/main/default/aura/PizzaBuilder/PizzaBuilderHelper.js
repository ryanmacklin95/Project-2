({    
    clearPizza : function(selected) {
        setTimeout(function() {
            var c = document.getElementById("pizzaCanvas");
            var ctx = c.getContext("2d");
            var img = document.getElementById("base");
            ctx.drawImage(img,0,0,300,300);
        }, 200);
    },
    
    displayToppings : function(component, selected) {
        var allToppings = component.get("v.toppings");
        var c = document.getElementById("pizzaCanvas");
        var ctx = c.getContext("2d");
        var img = document.getElementById("base");
        ctx.drawImage(img,0,0,300, 300);
        for (let i = 0; i < allToppings.length; i++){
            if(selected.includes(allToppings[i].value)){
                var img = document.getElementById(allToppings[i].value);
                ctx.drawImage(img,0,0,300,300);
            }
        }
    },
    
    addPizza : function(component) { 
        var canvas = document.getElementById('pizzaCanvas');
        var ctx = canvas.getContext("2d");
        var dataURL = canvas.toDataURL();
        var p = component.get("v.parent");
        var imgURLs = p.get("v.imageURLs");
        var pizzas = p.get("v.pizzas");
        var sizePrice;
        var toppingPrice = (component.find("toppings").get("v.value").length) * .5;
        switch (component.find("size").get("v.value")){
            case "Small":
                sizePrice = 10;
                break;
            case "Medium":
                sizePrice = 14;
                break;
            case "Large":
                sizePrice = 16;
                break;
            case "Extra_Large":
                sizePrice = 18;
                break;
        }
        
        if(!(component.get("v.edit"))){
            var ind = p.get("v.arrayInd");
            imgURLs.push(dataURL);
            var toppings = component.find("toppings").get("v.value").toString();
            toppings = toppings.replaceAll(',', ';');
            pizzas.push(JSON.stringify([ind, component.find("size").get("v.value"), toppings, "$" + (sizePrice+toppingPrice).toFixed(2)]).replace(/[\[\]&]+/g, ''));
            p.set("v.imageURLs", imgURLs);
            p.set("v.pizzas", pizzas);
            p.set("v.arrayInd", ind+1);
            
        }else{
            var ind = p.get("v.currentPizza");
            imgURLs.splice(ind, 1, dataURL);
            var toppings = component.find("toppings").get("v.value").toString();
            toppings = toppings.replaceAll(',', ';');
            pizzas.splice(ind, 1, JSON.stringify([ind, component.find("size").get("v.value"), toppings, sizePrice+toppingPrice]).replace(/[\[\]&]+/g, ''));
            p.set("v.imageURLs", imgURLs);
            p.set("v.pizzas", pizzas);
        }
        console.log(p.get("v.pizzas"));
    },
    
    changeToCart : function(component) {
        var cmpEvent = component.getEvent("bubblingEvent");
        cmpEvent.setParams({"ComponentAction" : 'builderToCart'});
        cmpEvent.fire();
    },
    
    goToCheckout : function(component) {
        var cmpEvent = component.getEvent("bubblingEvent");
        cmpEvent.setParams({"ComponentAction" : 'builderToCheckout'});
        cmpEvent.fire();
    }
})