({
    initialize : function(component, event, helper) {
        
        toggleText = component.find("CareersDiv");
        $A.util.addClass(toggleText, 'toggle');
    },
    
    handleBubble : function(component, event, helper) {
        var params = event.getParams();
        var destination = params.ComponentAction;
        
        switch(destination){
            case "appToCareers":
                toggleText = component.find("AppDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                toggleText = component.find("CareersDiv");
                $A.util.removeClass(toggleText, 'toggle');
                break;
            case "careersToApp":
                toggleText = component.find("CareersDiv");
                $A.util.addClass(toggleText, 'toggle');
                
                toggleText = component.find("AppDiv");
                $A.util.removeClass(toggleText, 'toggle');
                break;
        }
    }
})