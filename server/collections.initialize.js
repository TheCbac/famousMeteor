Meteor.startup(function() {
	if (SdModules.find().count()=== 0) {

		powerModId = SdModules.insert({
			name:'Power'
		});

		controlModId = SdModules.insert({
			name:"Control"
		});

		actuationModId = SdModules.insert({
			name:'Actuation'
		});

		sensingModId = SdModules.insert({
			name:'Sensing'
		});

		communicationsModId = SdModules.insert({
			name:'Communications'
		});

		energyModId = SdModules.insert({
			name:'Energy'
		});
	}
});