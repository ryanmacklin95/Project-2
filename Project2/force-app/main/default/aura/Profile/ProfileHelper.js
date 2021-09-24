({
    RetrieveUserInfo : function(component) {
        let curruserInfo = component.get("c.getUserInfo");
        curruserInfo.setCallback(this, function(response){
            if (response.getState() == 'SUCCESS'){
                component.set("v.user", response.getReturnValue());
            }
        });
        $A.enqueueAction(curruserInfo);
    },
    RetrieveContactInfo : function(component) {
        let currContact = component.get("c.getContactInfo");
        currContact.setCallback(this, function(response){
            if (response.getState() == 'SUCCESS'){
                component.set("v.mycontact", response.getReturnValue());
                
            }
        });
        $A.enqueueAction(currContact);
    }, 

    RetrieveCart: function(component){
        let currCart = component.get("c.AllOrder");
        currCart.setCallback(this, function(response){
            if(response.getState() == 'SUCCESS'){
                component.set("v.cart", response.getReturnValue());
            }
        });
        $A.enqueueAction(currCart);
    }
})