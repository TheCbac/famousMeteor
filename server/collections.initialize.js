Meteor.startup(function() {
	if (SdModules.find().count()=== 0) {

		powerModId = SdModules.insert({
			name:'Power',
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


	if (ModuleTypes.find().count() === 0){

		linearPowerModId = ModuleTypes.insert({
			name: "Linear Power Module",
			type: "Power",
		});

		switchingPowerModId = ModuleTypes.insert({
			name: "Switching Power Module",
			type: "Power",
		});


		analogControlModId = ModuleTypes.insert({
			name: "Analog Control Module",
			type: "Control",
		});

		PsoC4ModId = ModuleTypes.insert({
			name: "PSoC 4 Control Module",
			type: "Control",
		});

		PsoC5ModId = ModuleTypes.insert({
			name: "PSoC 5 Control Module",
			type: "Control",
		});

		BrushedDcActuationModId = ModuleTypes.insert({
			name: "Brushed DC Actuation Module",
			type:"Actuation",
		});

		BrushlessDCActuationModId = ModuleTypes.insert({
			name: "Brushless DC Actuation Module",
			type:"Actuation",
		});

		LorentzForceActuationModId = ModuleTypes.insert({
			name: "Lorentz Force Actuation Module",
			type:"Actuation",
		});

		VoltageSensingModId = ModuleTypes.insert({
			name: "Voltage Sensing Module",
			type: "Sensing",
		});

		PressureSensingModId = ModuleTypes.insert({
			name: "Pressure Sensing Module",
			type: "Sensing",
		});

		CurrentSensingModId = ModuleTypes.insert({
			name: "Current Sensing Module",
			type: "Sensing",
		});

		WifiCommModId = ModuleTypes.insert({
			name: "WiFi Communications Module",
			type:"Communications",
		});

		BluetoothCommModId = ModuleTypes.insert({
			name: "Bluetooth Comm Module",
			type:"Communications",
		});

		UARTCommModId = ModuleTypes.insert({
			name: "UART Comm Module",
			type:"Communications",
		});

		LipoEnergyModId = ModuleTypes.insert({
			name: "LiPo Energy Module",
			type: "Energy",
		});

		NineVoltEnergyModId = ModuleTypes.insert({
			name: "9V Battery Energy Module",
			type: "Energy",
		});

		NuclearReactorEnergyModId = ModuleTypes.insert({
			name: "Nuclear Reactor Energy Module",
			type: "Energy",
		});

	}


	if (PowerUnits.find().count() === 0){
		FlybackPowerUnitId = PowerUnits.insert({
			name: "Flyback Power Unit",
			level:1
		});

		BuckPowerUnitId = PowerUnits.insert({
			name: "Buck Power Unit",
			level:1
		});

		BoostPowerUnitId = PowerUnits.insert({
			name: "Nuclear Reactor Energy Module",
			level:1
		});
	}

	if (ControlUnits.find().count() === 0){
		AnalogControlUnitId = ControlUnits.insert({
			name: "Analog Control Unit",
			level:1
		});

		PsoC4ControlUnitId = ControlUnits.insert({
			name: "PSoC4 Control Unit",
			level:1
		});

		PSoC5ControlUnitId = ControlUnits.insert({
			name: "PSoC 5 Control Module",
			level:1
		});
	}

	if (ActuationUnits.find().count() === 0){
		BrushedDcActuationUnitId = ActuationUnits.insert({
			name: "Brushed DC Actuation Unit",
			level:1
		});

		BrushlessDcActuationUnitId = ActuationUnits.insert({
			name: "Brushless DC Actuation Unit",
			level:1
		});

		AcActuationUnitId = ActuationUnits.insert({
			name: "AC Actuation Unit",
			level:1
		});
	}

	if (SensingUnits.find().count() === 0){
		AnalogSensingUnitId = SensingUnits.insert({
			name: "Analog Sensing Unit",
			level:1
		});

		PressureSensingUnitId = SensingUnits.insert({
			name: "Pressure Sensing Unit",
			level:1
		});

		TemperatureSensingUnitId = SensingUnits.insert({
			name: "Temperature Sensing Unit",
			level:1
		});
	}



});