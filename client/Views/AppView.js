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
}

function _addDiagramView() {
	var diagramView = new DiagramView();

	var diagramViewModifier = new StateModifier({
		align: [1, 0],
		origin: [0, 0]
	});

	this.add(diagramViewModifier).add(diagramView);
}

function _addModuleSelectionView() {

}

// Establishes prototype chain for EmptyView class to inherit from View
AppView.prototype = Object.create(View.prototype);
AppView.prototype.constructor = AppView;

// Default options for AppView class
AppView.DEFAULT_OPTIONS = {};
