({
	placeQuickOrder : function(component) 
    {
        console.log("I might have gotten here");
        
        
		let placeNewOrder = Component.get("c.placeHeartAttackOrder");
        placeNewOrder.setCallback(this, $A.getCallback(function(response)
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
        $A.enqueueAction(placeNewOrder);
        component.set("v.OrderConfirmed", true);
	}
})