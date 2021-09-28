({
    OrderAgain : function(component) {
        let reorder = component.get("c.reOrder");
        let cart = component.get("v.currCart")
        reorder.setParams({ cart: cart});
        reorder.setCallback(this, function(response){
            if (response.getState() == 'SUCCESS'){
                alert("Your order was placed!");
            }
        });
        $A.enqueueAction(reorder);
    }
})