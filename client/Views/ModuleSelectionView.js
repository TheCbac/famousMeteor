// Import additional modules to be used in this view 
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');

// Constructor function for our EmptyView class
ModuleSelectionView = function() {

    // Applies View's constructor function to ModuleSelectionView class
    View.apply(this, arguments);
}


// Establishes prototype chain for ModuleSelectionView class to inherit from View
ModuleSelectionView.prototype = Object.create(View.prototype);
ModuleSelectionView.prototype.constructor = ModuleSelectionView;

// Default options for ModuleSelectionView class
ModuleSelectionView.DEFAULT_OPTIONS = {};
