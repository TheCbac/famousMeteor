// Import additional modules to be used in this view 
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

// Constructor function for our EmptyView class
DiagramView = function() {

    // Applies View's constructor function to DiagramView class
    View.apply(this, arguments);

    this.rootModifier = new StateModifier({
    	size: [undefined, undefined]
    });

    this.mainNode = this.add(this.rootModifier);

    _addPlaceholders.call(this);

};

function _addPlaceholders() {
	for (var i=0; i < 6; i++) {
		var placeHolderSurface = new Surface({
			size: [100, 40],
			properties: {
				backgroundColor: 'red'
			}
		});

		var placeHolderModifier = new StateModifier({
			
			align: [0.25 + 0.25*(i%3), 0.33*(Math.floor(i/3) + 1)],
			origin: [0.5, 0.5]
			
		});

		this.add(placeHolderModifier).add(placeHolderSurface);
	}
}

// Establishes prototype chain for DiagramView class to inherit from View
DiagramView.prototype = Object.create(View.prototype);
DiagramView.prototype.constructor = DiagramView;

DiagramView.prototype.addNewModule = function(moduleName) {

};

// Default options for DiagramView class
DiagramView.DEFAULT_OPTIONS = {};
