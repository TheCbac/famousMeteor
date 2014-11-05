// Import additional modules to be used in this view 
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

var Scrollview = require('famous/views/Scrollview');

// Constructor function for our EmptyView class
ModuleSelectionView = function() {

    // Applies View's constructor function to ModuleSelectionView class
    View.apply(this, arguments);

    this.scrollview = new Scrollview();
    this.module = [];
    this.scrollview.sequenceFrom(this.module);
    this.add(this.scrollview);
};



// Establishes prototype chain for ModuleSelectionView class to inherit from View
ModuleSelectionView.prototype = Object.create(View.prototype);
ModuleSelectionView.prototype.constructor = ModuleSelectionView;

ModuleSelectionView.prototype.addModule = function(doc){
	var modSurface = new Surface({ size:[100,40] });

	modSurface.setProperties({
		backgroundColor: "blue"
	});

	
	this.module.push(modSurface);
	modSurface.pipe(this.scrollview);
};

// Default options for ModuleSelectionView class
ModuleSelectionView.DEFAULT_OPTIONS = {};
