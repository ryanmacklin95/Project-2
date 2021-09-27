({
	placeQuickOrder : function(component) 
    {
        console.log("I might have gotten here");
        
        
		let placeNewOrder = component.get("c.placeMLSOrder");
        placeNewOrder.setCallback(this,(function(response)
		{
            if (response.getState() == 'SUCCESS'){
               component.set("v.OrderConfirmed", true);
            }
            else if(response.getState() == 'ERROR'){
                let errors = reponse.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(placeNewOrder);
	}
})