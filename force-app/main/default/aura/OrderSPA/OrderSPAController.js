({
    initialize : function(component, event, helper) {
        var toggleText = component.find("cartDiv");
        $A.util.addClass(toggleText, 'toggle');
        
        toggleText = component.find("checkoutDiv");
        $A.util.addClass(toggleText, 'toggle');
    },
    
    updateCart : function(component, event, helper) {
        var cartcmp = component.find("cart");
        cartcmp.set("v.pizzasInCart", this.get("v.pizzas"));
    },
    
    getPizzas : function(component, event, helper) {
        return component.get("v.pizzas");   
    },
    
    handleBubble : function(component, event, helper) {
        var params = event.getParams();
        var destination = params.ComponentAction;
        
        switch(destination){
            case "builderToCheckout":
                var toggleText = component.find("builderDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                toggleText = component.find("checkoutDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
                
            case "builderToCart":                
                var toggleText = component.find("builderDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                var cart = component.find("cart");
                var builder = component.find("builder");
                var pizzas = component.get("v.pizzas");
                var cartItems = document.getElementsByClassName("CartItems");
                var edited = builder.get("v.edit");
                
                if(edited){
                    var currPizza = component.get("v.currentPizza");
                    var size = document.getElementById("Size" + currPizza);
                    size.innerHTML = "";
                    var t = document.createTextNode(pizzas[currPizza].split(",")[1].replaceAll('"', ''));
                    size.appendChild(t);
                    var toppings = document.getElementById("Toppings" + currPizza);
                    toppings.innerHTML = "";
                    t = document.createTextNode(pizzas[currPizza].split(",")[2].replaceAll('"', ''));
                    toppings.appendChild(t);
                    var img = new Image();
                    setTimeout(function() {
                        var canvas = document.getElementById("CartCanvas" + currPizza);
                        var ctx = canvas.getContext("2d");
                        
                        var dataURL = component.get("v.imageURLs")[currPizza];  
                        
                        img.onload = function(){
                            
                            ctx.drawImage(img, 0, 0, 100, 100);
                        }
                        
                        img.src = dataURL;
                        
                        for(let i = 0; i < cartItems.length; i++){
                            cartItems[i].setAttribute('style','width:20vw;');
                        }
                    }, 100);
                }else{
                    for(let i = 0; i < pizzas.length; i++){
                        if(!(pizzas[i] == "")){
                            var size = document.getElementById("Size" + i);
                            size.innerHTML = "";
                            var t = document.createTextNode(pizzas[i].split(",")[1].replaceAll('"', ''));
                            size.appendChild(t);
                            var toppings = document.getElementById("Toppings" + i);
                            toppings.innerHTML = "";
                            t = document.createTextNode(pizzas[i].split(",")[2].replaceAll('"', ''));
                            toppings.appendChild(t);
                            document.getElementById("Row" + i).style.display = "initial";
                            document.getElementById("line" + i).style.display = "initial";
                        }
                    }
                    var destinationImage = new Image();
                    
                    setTimeout(function() {
                        var canvas = document.getElementById("CartCanvas" + (component.get("v.arrayInd") - 1));
                        var context = canvas.getContext("2d");
                        context.canvas.width = 100;
                        context.canvas.height = 100;
                        var dataURL = component.get("v.imageURLs")[component.get("v.arrayInd") - 1];   
                        destinationImage.onload = function(){
                            context.drawImage(destinationImage, 0, 0, 100, 100);
                        }
                        
                        destinationImage.src = dataURL;
                        for(let i = 0; i < cartItems.length; i++){
                            cartItems[i].setAttribute('style','width:20vw;');
                        }
                    }, 100);
                }

                builder.set("v.edit", false);
                toggleText = component.find("cartDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
            case "cartToCheckout":
                var toggleText = component.find("cartDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                toggleText = component.find("checkoutDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
            case "cartToBuilder":
                var toggleText = component.find("cartDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                var builder = component.find("builder");
                builder.find('toppings').set("v.value", null);
                builder.find('size').set("v.value", "Small");
                var c = document.getElementById("pizzaCanvas");
                var ctx = c.getContext("2d");
                var img = document.getElementById("base");
                ctx.drawImage(img,0,0,300,300);
                
                toggleText = component.find("builderDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
            case "checkoutToBuilder":
                var toggleText = component.find("checkoutDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                toggleText = component.find("builderDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
            case "checkoutToCart":
                var toggleText = component.find("checkoutDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                toggleText = component.find("cartDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
            case "editPizza":
                var toggleText = component.find("cartDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                var curr = component.get("v.pizzas")[component.get("v.currentPizza")];
                var size = curr.split(",")[1].replaceAll('"', '');
                var topping = curr.split(",")[2].replaceAll('"', '');
                topping = topping.replaceAll(";", ",");
                var builder = component.find("builder");
                builder.find("size").set("v.value", size);
                builder.set("v.edit", true);
                setTimeout(function() { 
                    builder.find('toppings').set("v.value", topping.split(','));
                }, 100);
                var c = document.getElementById("pizzaCanvas");
                var ctx = c.getContext("2d");
                var img = new Image();
                var dataURL = component.get("v.imageURLs")[component.get("v.currentPizza")];
                ctx.drawImage(img,10,10);
                img.onload = function(){
                    ctx.drawImage(img, 0, 0,300,300);
                }
                img.src = dataURL;
                
                toggleText = component.find("builderDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
        }
    }
})