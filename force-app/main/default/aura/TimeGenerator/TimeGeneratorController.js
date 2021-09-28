({
    GenerateNumber : function(component, event, helper) {
		return JSON.stringify(helper.RandomTimeGenerator(component, 30, 60));
	}
})