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


	if (PowerModules.find().count() === 0){

		linearPowerModId = PowerModules.insert({
			name: "Linear Power Module",
			level:1
		});

		switchingPowerModId = PowerModules.insert({
			name: "Switching Power Module",
			level:1
		});
	}

	if (ControlModules.find().count() === 0){
		analogControlModId = ControlModules.insert({
			name: "Analog Control Module",
			level:1
		});

		PsoC4ModId = ControlModules.insert({
			name: "PSoC 4 Control Module",
			level:1
		});

		PsoC5ModId = ControlModules.insert({
			name: "PSoC 5 Control Module",
			level:1
		});
	}

	if (ActuationModules.find().count() === 0){
		BrushedDcActuationModId = ActuationModules.insert({
			name: "Brushed DC Actuation Module",
			level:1
		});

		BrushlessDCActuationModId = ActuationModules.insert({
			name: "Brushless DC Actuation Module",
			level:1
		});

		LorentzForceActuationModId = ActuationModules.insert({
			name: "Lorentz Force Actuation Module",
			level:1
		});
	}


	if (SensingModules.find().count() === 0){
		VoltageSensingModId = SensingModules.insert({
			name: "Voltage Sensing Module",
			level:1
		});

		PressureSensingModId = SensingModules.insert({
			name: "Pressure Sensing Module",
			level:1
		});

		CurrentSensingModId = SensingModules.insert({
			name: "Current Sensing Module",
			level:1
		});
	}

	if (CommunicationsModules.find().count() === 0){
		WifiCommModId = CommunicationsModules.insert({
			name: "WiFi Communications Module",
			level:1
		});

		BluetoothCommModId = CommunicationsModules.insert({
			name: "Bluetooth Comm Module",
			level:1
		});

		UARTCommModId = CommunicationsModules.insert({
			name: "UART Comm Module",
			level:1
		});
	}

	if (EnergyModules.find().count() === 0){
		LipoEnergyModId = EnergyModules.insert({
			name: "LiPo Energy Module",
			level:1
		});

		NineVoltEnergyModId = EnergyModules.insert({
			name: "9V Battery Energy Module",
			level:1
		});

		NuclearReactorEnergyModId = EnergyModules.insert({
			name: "Nuclear Reactor Energy Module",
			level:1
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