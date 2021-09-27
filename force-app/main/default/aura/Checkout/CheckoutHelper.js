({    
    
    init: function(component)
    {
        var p = component.get("v.parent");
        let pizzaList = p.get("v.pizzas");
                    
        let insertPizza = component.get("c.makePizza");
        insertPizza.setCallback(this, (function(response){
            if(response.getState() == 'SUCCESS')
            {
                
            }
            else if (response.getState() == 'ERROR')
            {
                let errors = reponse.getError();
                   console.error(errors);
            }
        }));
        
        let insertStuff = component.get("c.insertCart");
        insertStuff.setCallback(this, (function(response){
            for(let thisPizza in pizzaList)
            {
                insertPizza.setParams({ size : thisPizza.split(",")[1].replaceAll('"', ''), toppings :  thisPizza.split(",")[2].replaceAll('"', '')});
                $A.enqueueAction(insertPizza);
            }
            
            let actuallyInsertPizza = component.get("c.PizzaPls");
            actuallyInsertPizza.setCallback(this, (function(response){
                if(response.getState() == 'SUCCESS')
                {
                    
                }
                else if(response.getState() == 'ERROR')
                {
                    let errors = reponse.getError();
                        console.error(errors);
                }
            }));
            
            $A.enqueueAction(actuallyInsertPizza);
            
            if(response.getState() == 'SUCCESS')
            {
                
            }
            else if(response.getState() == 'ERROR')
            {
                let errors = reponse.getError();
                   console.error(errors);
            }
        }));
        $A.enqueueAction(insertStuff);
        
        
                    
        
        
    },

//Apex controller functions    
    //function that gets fields from pizzas in the current cart from the apex controller
    getPizzaInfo : function(Component) 
    {
        var p = component.get("v.parent");
        p.get("v.pizzas");
    },

    // function that gets the total price of the current cart from the apex controller
    getCartPrice: function(component)
    {

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
        }
        else{
            component.set("v.invalidCoupon", true);
            component.set("v.insertCouponSection", false);
        }    
    },
    
    applyDiscount: function(component)
    {
        //does the logic to lower the total price
        return ((1-.15)*cartPrice);
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

    viewCart: function(component){
         var cmpEvent = component.getEvent("bubblingEvent");
            cmpEvent.setParams({"ComponentAction" : 'checkoutToCart'});
            cmpEvent.fire();
    },

      
    Buy: function(component){
        let removeCart = component.get("c.insertStuff");
        removeCart.setCallback(this, $A.getCallback(function(response)
        {
            let returnState = response.getState();
            
            if(returnState === 'SUCCESS')
            {
                
            }
            else if(returnState === 'ERROR')
            {
                let errors= response.getError();
                console.error(errors);
            }
        }));
        
        $A.enqueueAction(removeCart);
        
        //needs to go to a delivery confirmation page
    }

})