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
};

function _addDiagramView() {
	var diagramView = new DiagramView();

	var diagramViewModifier = new StateModifier({
		size: [undefined,undefined],
	});

	diagramViewModifier.setAlign([0.8,0]);
	diagramViewModifier.setOrigin([0.95,0]);

	this.add(diagramViewModifier).add(diagramView);
}

function _addModuleSelectionView() {
		var moduleSelectionView = new ModuleSelectionView();

		var moduleViewModifier = new StateModifier({
			size:[undefined,undefined]
		});

		moduleViewModifier.setAlign([0.8,0]);
		moduleViewModifier.setOrigin([0,0]);

		this.add(moduleViewModifier).add(moduleSelectionView);

		//moduleSelectionView.addModule();
		moduleSelectionView.addModule(undefined);
		moduleSelectionView.addModule(undefined);
		// moduleSelectionView.addModule(undefined);
		// moduleSelectionView.addModule(undefined);
		// moduleSelectionView.addModule(undefined);

}





// Establishes prototype chain for EmptyView class to inherit from View
AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

// Default options for AppView class
AppView.DEFAULT_OPTIONS = {};
