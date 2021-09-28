({
	pullUser : function(component, event, ProfileHelper) {
		ProfileHelper.RetrieveUserInfo(component);
	},
    pullProfile:function(component, event, ProfileHelper){
        ProfileHelper.RetrieveContactInfo(component);
        ProfileHelper.RetrieveUserInfo(component);
        ProfileHelper.RetrieveCart(component);
    }
    
})