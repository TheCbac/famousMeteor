// Import additional modules to be used in this view 
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

// Constructor function for our EmptyView class
SlidingDrawerView = function() {

    // Applies View's constructor function to SlidingDrawerView class
    View.apply(this, arguments);

    _addBackgroundSurface.call(this);
}

function _addBackgroundSurface() {
	var backgroundSurface = new Surface({
		size: [500, undefined],
		opacity: 0.5,
		properties: {
			backgroundColor: 'grey'
		}
	});

	var backgroundModifier = new StateModifier({});

	this.add(backgroundModifier).add(backgroundSurface);

}

// Establishes prototype chain for SlidingDrawerView class to inherit from View
SlidingDrawerView.prototype = Object.create(View.prototype);
SlidingDrawerView.prototype.constructor = SlidingDrawerView;

SlidingDrawerView.prototype.assignType = function(cursor) {
	moduleSelectionCursor(
		cursor,
		this
	);
}

SlidingDrawerView.prototype.addModule = function(doc) {
	var moduleSurface = new Surface({
		size: [100, 40],
		properties: {
			backgroundColor: 'green'
		}
	});

	moduleSurface.setContent(doc.name);

	var moduleModifier = new StateModifier({});

	this.add(moduleModifier).add(moduleSurface);
}

// Default options for SlidingDrawerView class
SlidingDrawerView.DEFAULT_OPTIONS = {};
