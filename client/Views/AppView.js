// Import additional modules to be used in this view 
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

// Constructor function for our EmptyView class
AppView = function() {
    // Applies View's constructor function to EmptyView class
    View.apply(this, arguments);

    _addDiagramView.call(this);
    _addModuleSelectionView.call(this);
    _addSlidingDrawerView.call(this);

    //_addListeners.call(this);

    cursorToArray(
    	SdModules.find(),
    	this.diagramView,
    	this.moduleSelectionView,
    	this
    );

};

function _addDiagramView() {
	this.diagramView = new DiagramView();

	var diagramViewModifier = new StateModifier({
		size: [undefined,undefined],
		transform: Transform.translate(0, 0, -5)
	});

	diagramViewModifier.setAlign([0.8,0]);
	diagramViewModifier.setOrigin([0.95,0]);

	this.add(diagramViewModifier).add(this.diagramView);
}

function _addModuleSelectionView() {
		this.moduleSelectionView = new ModuleSelectionView();

		var moduleViewModifier = new StateModifier({
			size:[undefined,undefined],
			transform: Transform.translate(0, 0, 2)
		});

		moduleViewModifier.setAlign([0.8,0]);
		moduleViewModifier.setOrigin([0,0]);

		this.add(moduleViewModifier).add(this.moduleSelectionView);

		//moduleSelectionView.addModule();
		// this.moduleSelectionView.addModule(undefined);
		// this.moduleSelectionView.addModule(undefined);
		// moduleSelectionView.addModule(undefined);
		// moduleSelectionView.addModule(undefined);
		// moduleSelectionView.addModule(undefined);

}

function _addSlidingDrawerView() {
	this.slidingDrawerView = new SlidingDrawerView();

	this.slidingDrawerModifier = new StateModifier({
		size: [undefined, undefined]
	});

	this.slidingDrawerModifier.setAlign([0.8, 0]);
	this.slidingDrawerModifier.setOrigin([0, 0]);

	this.slidingDrawerModifier.setTransform(Transform.translate(0, 0, -1));

	this.add(this.slidingDrawerModifier).add(this.slidingDrawerView);
}

// function _addListeners() {
// 	var types = SdModules.find({});
// 	console.log(types);
// 	types.forEach(function(data) {
// 		console.log(data);
// 		addListener(data.name, this);
// 	});

// 	// addListener('Power', this);
// 	// addListener('Control', this);
// }


// Establishes prototype chain for EmptyView class to inherit from View
AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

AppView.prototype.addModifierListener = function(moduleName, self) {
	console.log('adding listener');
	self.toggleDisplay = false;
	self.moduleSelectionView.on('toggle' + moduleName, function() {
		if (!self.toggleDisplay) {
			self.slidingDrawerModifier.setTransform(Transform.translate(-500, 0, 0), {
				duration: 300,
				curve: 'easeOut'
			});

			self.slidingDrawerView.assignType(ModuleTypes.find({type: moduleName}));

		}
		else {
			self.slidingDrawerModifier.setTransform(Transform.translate(0, 0, -1), {
				duration: 300,
				curve: 'easeOut'
			});
		}

		self.toggleDisplay = !self.toggleDisplay;
	}.bind(this));
}

// Default options for AppView class
AppView.DEFAULT_OPTIONS = {};
