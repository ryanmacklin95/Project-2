({
	RandomTimeGenerator : function(component, min, max) {
		min = Math.ceil(min);
        max = Math.floor(max);
        component.set( "v.randomNumber",JSON.stringify(Math.floor(Math.random() * (max - min) + min)));
	}
})