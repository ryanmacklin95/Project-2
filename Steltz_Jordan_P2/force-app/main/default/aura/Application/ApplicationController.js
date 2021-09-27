({
    doInit: function(component, event, helper) {
        helper.getAllAppsUtil(component);
   },
  handleCreate : function(component, event, helper) {
       component.set( 'v.newRec', true);
       component.set( 'v.showList', false);
   },
    handleShowList : function(component, event, helper){
       component.set( 'v.newRec', false);
       component.set( 'v.showList', true);
       helper.getAllAppsUtil(component);
   }
});
