({    
    
    //Apex controller functions    
        //function that gets fields from pizzas in the current cart from the apex controller
        getPizzaInfo : function(Component) 
        {
            let getPizza = Component.get("c.getPizzaFields");
            getPizza.setCallback(this, $A.getCallback(function(response)
            {
                let returnState = response.getState();
                
                if (returnState === 'SUCCESS'){
                   return response;
                }
                else if(returnState === 'ERROR'){
                    let errors = reponse.getError();
                    console.error(errors);
                }
            }));
            $A.enqueueAction(getPizza);
        },
    
        // function that gets the total price of the current cart from the apex controller
        getCartPrice: function(component)
        {
            var cartPrice = component.get("c.getTotalCartPrice");
            cartPrice.setCallback(this, $A.getCallback(function(response)
            {
                let returnState = response.getState();
                
                if(returnState === 'SUCCES'){
                    return response;
                }
                else if(returnState === 'ERROR'){
                    let errors = response.getError();
                    console.error(errors);
                }
            }));
            $A.enqueueAction(cartPrice);
        },
        
        
        
        
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
            }
            else{
                component.set("v.invalidCoupon", true);
            }    
        },
        
        applyDiscount: function(component)
        {
            //does the logic to lower the total price
            return ((1-.15)*cartPrice);
        },
        
        
        
        
        
        
    //navigation buttons functions    
        PizzaPage: function(component)
        {
            //goes back to josh's page
            console.log("pizza time");
        },
    
        
        //empties the current cart and then redirects user 
        startOver: function(component){
            //calls the server and removes all pizzas from the current cart
            let resetCart = component.get("c.emptyCart");
            resetCart.setCallback(this, $A.getCallback(function(response)
            {
                let returnState = reponse.getState();
                
                if(returnState === 'SUCCESS')
                {
                    component.set('v.data', reponse.getReturnValue());
                }
                else if(returnState === 'ERROR')
                {
                    let errors = response.getError();
                    console.error(errors);
                }
                    
            }));
            $A.enqueueAction(resetCart);
            
            //navigate back to home page? josh's page?
            
        },
    
        viewCart: function(component){
            //navigate back to johns page
        },
    
          
        Buy: function(component){
            let removeCart = component.get("c.submitOrderAndDeleteCart");
            removeCart.setCallback(this, $A.getCallback(function(response)
            {
                let returnState = response.getState();
                
                if(returnState === 'SUCCESS')
                {
                    component.set('v.myDate', response.getReturnValue());
                }
                else if(returnState === 'ERROR')
                {
                    let errors= response.getError();
                    console.error(errors);
                }
            }));
            
            $A.enqueueAction(removeCart);
        }
    
    })