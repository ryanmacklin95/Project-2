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
                
                var checkout = component.find("checkout");
                var builder = component.find("builder");
                var pizzas = component.get("v.pizzas");
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
                    }, 100);
                }else{
                    for(let i = 0; i < pizzas.length; i++){
                        if(!(pizzas[i] == "")){
                            var pizzaImg = document.getElementById("Canvas" + i);
                            pizzaImg.style.textAlign = "center";
                            pizzaImg.style.margin = "auto";
                            pizzaImg.style.width = "300px";
                            var size = document.getElementById("Size" + i);
                            size.innerHTML = "";
                            var t = document.createTextNode(pizzas[i].split(",")[1].replaceAll('"', ''));
                            size.appendChild(t);
                            size.style.textAlign = "center";
                            size.style.marginLeft = "10%";
                            size.style.width = "300px";
                            var toppings = document.getElementById("Toppings" + i);
                            toppings.innerHTML = "";
                            t = document.createTextNode(pizzas[i].split(",")[2].replaceAll('"', ''));
                            toppings.appendChild(t);
                            toppings.style.textAlign = "center";
                            toppings.style.margin = "auto";
                            toppings.style.width = "300px";
                            var editBtn = document.getElementById("editBtn" + i);
                            editBtn.style.textAlign = "center";
                            editBtn.style.margin = "auto";
                            editBtn.style.width = "300px";
                            var deleteBtn = document.getElementById("deleteBtn" + i);
                            deleteBtn.style.textAlign = "center";
                            deleteBtn.style.margin = "auto";
                            deleteBtn.style.width = "300px";
                            document.getElementById("Row" + i).style.display = "initial";
                            if(i%2==1){
                                pizzaImg.style.backgroundColor = "#711509";
                                size.style.backgroundColor = "#711509";
                                toppings.style.backgroundColor = "#711509";
                                editBtn.style.backgroundColor = "#711509";
                                deleteBtn.style.backgroundColor = "#711509";
                            }
                            document.getElementById("line" + i).style.display = "initial";
                            document.getElementById("line" + i).style.color = "#fff";
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
                    }, 100);
                }
                
                builder.set("v.edit", false);
                
                if(edited){
                    var cnumber = document.getElementById("cNumber" + i);
                    cnumber.innerHTML = "";
                    var t = document.createTextNode(i + 1 + "");
                    cnumber.appendChild(t);
                    cnumber.style.textAlign = "center";
                    cnumber.style.width = "25%";
                    var currPizza = component.get("v.currentPizza");
                    var csize = document.getElementById("cSize" + currPizza);
                    csize.innerHTML = "";
                    t = document.createTextNode(pizzas[currPizza].split(",")[1].replaceAll('"', ''));
                    csize.appendChild(t);
                    var ctoppings = document.getElementById("cToppings" + currPizza);
                    ctoppings.innerHTML = "";
                    t = document.createTextNode(pizzas[currPizza].split(",")[2].replaceAll('"', ''));
                    ctoppings.appendChild(t);
                    var cPrice = document.getElementById("cPrice" + currPizza);
                    cPrice.innerHTML = "";
                    t = document.createTextNode(pizzas[currPizza].split(",")[3].replaceAll('"', ''));
                    cPrice.appendChild(t);
                    var img = new Image();
                    setTimeout(function() {
                        var canvas = document.getElementById("cCartCanvas" + currPizza);
                        var ctx = canvas.getContext("2d");
                        
                        var dataURL = component.get("v.imageURLs")[currPizza];  
                        
                        img.onload = function(){
                            
                            ctx.drawImage(img, 0, 0, 100, 100);
                        }
                        
                        img.src = dataURL;
                    }, 100);
                }else{
                    for(let i = 0; i < pizzas.length; i++){
                        if(!(pizzas[i] == "")){
                            var cnumber = document.getElementById("cNumber" + i);
                            cnumber.innerHTML = "";
                            var t = document.createTextNode(i + 1 + "");
                            cnumber.appendChild(t);
                            cnumber.style.textAlign = "center";
                            cnumber.style.width = "350px";
                            var csize = document.getElementById("cSize" + i);
                            csize.innerHTML = "";
                            t = document.createTextNode(pizzas[i].split(",")[1].replaceAll('"', ''));
                            csize.appendChild(t);
                            csize.style.textAlign = "center";
                            csize.style.width = "350px";
                            var ctoppings = document.getElementById("cToppings" + i);
                            ctoppings.innerHTML = "";
                            t = document.createTextNode(pizzas[i].split(",")[2].replaceAll('"', ''));
                            ctoppings.appendChild(t);
                            ctoppings.style.textAlign = "center";
                            ctoppings.style.width = "350px";
                            var cPrice = document.getElementById("cPrice" + i);
                            cPrice.innerHTML = "";
                            t = document.createTextNode(pizzas[i].split(",")[3].replaceAll('"', ''));
                            cPrice.appendChild(t);
                            cPrice.style.textAlign = "center";
                            cPrice.style.marginLeft = "10%";
                            cPrice.style.width = "350px";
                            var totalPrice = document.getElementById("TotalPrice");
                            totalPrice.innerHTML = "";
                            var finalPrice = 0;
                            for(let j = 0; j < pizzas.length; j++){
                                finalPrice += (pizzas[j].split(",")[3].replaceAll('"', '').substring(1) - 0);
                            }
                            t = document.createTextNode("Order total: $" + finalPrice.toFixed(2) + "");
                            totalPrice.appendChild(t);
                            checkout.set("v.finalPrice", finalPrice+"");
                            document.getElementById("cRow" + i).style.display = "initial";
                            document.getElementById("cRow" + i).style.width = "100%";
                            if(i%2==1){
                                cnumber.style.backgroundColor = "#711509";
                                csize.style.backgroundColor = "#711509";
                                ctoppings.style.backgroundColor = "#711509";
                                cPrice.style.backgroundColor = "#711509";
                            }
                        }
                    }
                }             
                
                toggleText = component.find("checkoutDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
            case "builderToCart":                
                var toggleText = component.find("builderDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                var cart = component.find("cart");
                var checkout = component.find("checkout");
                var builder = component.find("builder");
                var pizzas = component.get("v.pizzas");
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
                            canvas.style.textAlign = "center";
                        }
                        
                        img.src = dataURL;
                    }, 100);
                }else{
                    for(let i = 0; i < pizzas.length; i++){
                        if(!(pizzas[i] == "")){
                            
                            var pizzaImg = document.getElementById("Canvas" + i);
                            pizzaImg.style.textAlign = "center";
                            pizzaImg.style.margin = "auto";
                            pizzaImg.style.width = "300px";
                            var size = document.getElementById("Size" + i);
                            size.innerHTML = "";
                            var t = document.createTextNode(pizzas[i].split(",")[1].replaceAll('"', ''));
                            size.appendChild(t);
                            size.style.textAlign = "center";
                            size.style.marginLeft = "10%";
                            size.style.width = "300px";
                            var toppings = document.getElementById("Toppings" + i);
                            toppings.innerHTML = "";
                            t = document.createTextNode(pizzas[i].split(",")[2].replaceAll('"', ''));
                            toppings.appendChild(t);
                            toppings.style.textAlign = "center";
                            toppings.style.margin = "auto";
                            toppings.style.width = "300px";
                            var editBtn = document.getElementById("editBtn" + i);
                            editBtn.style.textAlign = "center";
                            editBtn.style.margin = "auto";
                            editBtn.style.width = "300px";
                            var deleteBtn = document.getElementById("deleteBtn" + i);
                            deleteBtn.style.textAlign = "center";
                            deleteBtn.style.margin = "auto";
                            deleteBtn.style.width = "300px";
                            document.getElementById("Row" + i).style.display = "initial";
                            if(i%2==1){
                                pizzaImg.style.backgroundColor = "#711509";
                                size.style.backgroundColor = "#711509";
                                toppings.style.backgroundColor = "#711509";
                                editBtn.style.backgroundColor = "#711509";
                                deleteBtn.style.backgroundColor = "#711509";
                            }else{
                                
                            }
                            document.getElementById("line" + i).style.display = "initial";
                            document.getElementById("line" + i).style.color = "#fff";
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
                            canvas.style.textAlign = "center";
                        }
                        
                        destinationImage.src = dataURL;
                    }, 100);
                }
                
                builder.set("v.edit", false);
                
                if(edited){
                    var currPizza = component.get("v.currentPizza");
                    var csize = document.getElementById("cSize" + currPizza);
                    csize.innerHTML = "";
                    var t = document.createTextNode(pizzas[currPizza].split(",")[1].replaceAll('"', ''));
                    csize.appendChild(t);
                    var ctoppings = document.getElementById("cToppings" + currPizza);
                    ctoppings.innerHTML = "";
                    t = document.createTextNode(pizzas[currPizza].split(",")[2].replaceAll('"', ''));
                    ctoppings.appendChild(t);
                    var cPrice = document.getElementById("cPrice" + currPizza);
                    cPrice.innerHTML = "";
                    t = document.createTextNode(pizzas[currPizza].split(",")[3].replaceAll('"', ''));
                    cPrice.appendChild(t);
                    var img = new Image();
                    setTimeout(function() {
                        var canvas = document.getElementById("cCartCanvas" + currPizza);
                        var ctx = canvas.getContext("2d");
                        
                        var dataURL = component.get("v.imageURLs")[currPizza];  
                        
                        img.onload = function(){
                            
                            ctx.drawImage(img, 0, 0, 100, 100);
                        }
                        
                        img.src = dataURL;
                    }, 100);
                }else{
                    for(let i = 0; i < pizzas.length; i++){
                        if(!(pizzas[i] == "")){
                            var cnumber = document.getElementById("cNumber" + i);
                            cnumber.style.textAlign = "center";
                            cnumber.style.marginLeft = "10%";
                            cnumber.style.width = "3000px";
                            var csize = document.getElementById("cSize" + i);
                            csize.innerHTML = "";
                            var t = document.createTextNode(pizzas[i].split(",")[1].replaceAll('"', ''));
                            csize.appendChild(t);
                            csize.style.textAlign = "center";
                            csize.style.marginLeft = "10%";
                            csize.style.width = "3000px";
                            var ctoppings = document.getElementById("cToppings" + i);
                            ctoppings.innerHTML = "";
                            t = document.createTextNode(pizzas[i].split(",")[2].replaceAll('"', ''));
                            ctoppings.appendChild(t);
                            ctoppings.style.textAlign = "center";
                            ctoppings.style.marginLeft = "10%";
                            ctoppings.style.width = "3000px";
                            var cPrice = document.getElementById("cPrice" + i);
                            cPrice.innerHTML = "";
                            t = document.createTextNode(pizzas[i].split(",")[3].replaceAll('"', ''));
                            cPrice.appendChild(t);
                            cPrice.style.textAlign = "center";
                            cPrice.style.marginLeft = "10%";
                            cPrice.style.width = "3000px";
                            var totalPrice = document.getElementById("TotalPrice");
                            totalPrice.innerHTML = "";
                            var finalPrice = 0;
                            for(let j = 0; j < pizzas.length; j++){
                                finalPrice += (pizzas[j].split(",")[3].replaceAll('"', '').substring(1) - 0);
                            }
                            t = document.createTextNode("Order total: $" + finalPrice.toFixed(2) + "");
                            totalPrice.appendChild(t);
                            checkout.set("v.finalPrice", finalPrice+"");
                            document.getElementById("cRow" + i).style.display = "initial";
                        }
                    }
                }       
                
                toggleText = component.find("cartDiv");
                $A.util.removeClass(toggleText, 'toggle');
                
                break;
            case "cartToCheckout":
                var loadCart = component.find("checkout");
                loadCart.checkoutStuff();
                
                var toggleText = component.find("cartDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                var checkout = component.find("checkout");
                var pizzas = component.get("v.pizzas");
                
                for(let i = 0; i < pizzas.length; i++){
                    if(!(pizzas[i] == "")){
                        var cnumber = document.getElementById("cNumber" + i);
                        cnumber.innerHTML = "";
                        var t = document.createTextNode(i + 1 + "");
                        cnumber.appendChild(t);
                        cnumber.style.textAlign = "center";
                        cnumber.style.width = "25%";
                        var csize = document.getElementById("cSize" + i);
                        csize.innerHTML = "";
                        t = document.createTextNode(pizzas[i].split(",")[1].replaceAll('"', ''));
                        csize.appendChild(t);
                        csize.style.textAlign = "center";
                        csize.style.width = "25%";
                        var ctoppings = document.getElementById("cToppings" + i);
                        ctoppings.innerHTML = "";
                        t = document.createTextNode(pizzas[i].split(",")[2].replaceAll('"', ''));
                        ctoppings.appendChild(t);
                        ctoppings.style.textAlign = "center";
                        ctoppings.style.width = "25%";
                        var cPrice = document.getElementById("cPrice" + i);
                        cPrice.innerHTML = "";
                        t = document.createTextNode(pizzas[i].split(",")[3].replaceAll('"', ''));
                        cPrice.appendChild(t);
                        cPrice.style.textAlign = "center";
                        cPrice.style.width = "25%";
                        var totalPrice = document.getElementById("TotalPrice");
                        totalPrice.innerHTML = "";
                        var finalPrice = 0;
                        for(let j = 0; j < pizzas.length; j++){
                            console.log(pizzas[j].split(",")[3].replaceAll('"', ''));
                            finalPrice += (pizzas[j].split(",")[3].replaceAll('"', '').substring(1) - 0);
                        }
                        t = document.createTextNode("Order total: $" + finalPrice.toFixed(2) + "");
                        totalPrice.appendChild(t);
                        console.log("final price in spa: " + finalPrice);
                        checkout.set("v.finalPrice", finalPrice+"");
                        document.getElementById("cRow" + i).style.display = "initial";
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
                }, 100);
                
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