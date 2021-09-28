({    
    
    init: function(component)
    {
        var p = component.get("v.parent");
        let pizzaList = p.get("v.pizzas");
        console.log(pizzaList);
        var sizeList = [];
        var toppingsList = [];
        
        let insertStuff = component.get("c.insertCart");
        insertStuff.setCallback(this, function(response){
            
            for(let i = 0; i < pizzaList.length; i++)
            {
                sizeList.push("" + pizzaList[i].split(",")[1].replaceAll('"', ''));
                toppingsList.push("" + pizzaList[i].split(",")[2].replaceAll('"', ''));
                console.log(sizeList + "" + toppingsList);
            }
            let insertPizza = component.get("c.makePizza");
            insertPizza.setParams({ size : sizeList,  toppings : toppingsList});
            insertPizza.setCallback(this, function(response){
                console.log("pizzas were inserted");
                if(response.getState() == 'SUCCESS')
                {
                    console.log("pizza was made");
                }
                else if (response.getState() == 'ERROR')
                {
                    let errors = response.getError();
                    console.error(errors);
                    console.log("something went wrong with pizza creation");
                }
            });
            
            $A.enqueueAction(insertPizza);
            
            
            if(response.getState() == 'SUCCESS')
            {
                console.log("something succeeded with cart insertion");
            }
            else if(response.getState() == 'ERROR')
            {
                let errors = response.getError();
                console.error(errors);
                console.log("something went wrong with cart insertion");
            }
        });
        $A.enqueueAction(insertStuff);  
    },
    
    //Apex controller functions    
    //function that gets fields from pizzas in the current cart from the apex controller
    getPizzaInfo : function(Component) 
    {
        
    },
    
    // function that gets the total price of the current cart from the apex controller
    getCartPrice: function(component)
    {
        var p = component.get("v.parent");
        var cart = p.get("v.pizzas");
        console.log("cart" + cart);
        var cartTotal = 0;
        
        for(let i = 0; i<cart.length; i++){
            cartTotal += cart[i].split(",")[3];
        }
    },
    //end of apex controller functions

    //functions for coupon codes    
    couponDiscounts: function(component)
    {
        let userInput = component.find("userInput").get("v.value");
        component.set("v.couponInput", userInput);
        let validCoupon = component.get("v.couponInput");
        let couponCodes = "I love pizza";
        
        if(validCoupon == couponCodes)
        {
            component.set("v.insertCouponSection", true);
            component.set("v.invalidCoupon", false);
            setTimeout(function() {
                let totalPrice = component.get("v.finalPrice");
                let couponPrice = .85 * (totalPrice - 0);
                console.log("coupon price before set: " + couponPrice);
                var cPrice = document.getElementById("CouponPrice");
                cPrice.innerHTML = "";
                var t = document.createTextNode(" $" + couponPrice.toFixed(2));
                cPrice.appendChild(t);
            },200);
            
        }
        else{
            component.set("v.invalidCoupon", true);
            component.set("v.insertCouponSection", false);
        }    
    },
    
    applyDiscount: function(component, event, helper, finalPrice)
    {
        //does the logic to lower the total price
        component.set("v.couponPrice", ((1-.15)*finalPrice) ) ;
    },
    //end of functions for coupons

    //navigation buttons functions    
    //navigates to the pizza creation page
    PizzaPage: function(component)
    {
        var cmpEvent = component.getEvent("bubblingEvent");
        cmpEvent.setParams({"ComponentAction" : 'checkoutToBuilder'});
        cmpEvent.fire();
    },
    
    showCart: function(component){
        var cmpEvent = component.getEvent("bubblingEvent");
        cmpEvent.setParams({"ComponentAction" : 'checkoutToCart'});
        cmpEvent.fire();
    },

    //purchase and redirect
    Buy: function(component){
        let removeCart = component.get("c.insertStuff");
        removeCart.setCallback(this, function(response)
                               {
                                   let returnState = response.getState();
                                   
                                   if(returnState == 'SUCCESS')
                                   {
                                       
                                   }
                                   else if(returnState == 'ERROR')
                                   {
                                       let errors= response.getError();
                                       console.error(errors);
                                   }
                               });
        
        $A.enqueueAction(removeCart);
        
        //needs to go to a delivery confirmation page
    }
    
})