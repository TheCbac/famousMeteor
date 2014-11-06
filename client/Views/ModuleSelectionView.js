// Import additional modules to be used in this view 
var View 			= require('famous/core/View');
var Surface 		= require('famous/core/Surface');
var Transform 		= require('famous/core/Transform');
var Modifier 		= require('famous/core/Modifier');
var StateModifier 	= require('famous/modifiers/StateModifier');

var Scrollview 		= require('famous/views/Scrollview');

var MouseSync 		= require('famous/inputs/MouseSync');

var Transitionable 	= require('famous/transitions/Transitionable');
var SnapTransition 	= require('famous/transitions/SnapTransition');
Transitionable.registerMethod('spring', SnapTransition);

var Draggable = require('famous/modifiers/Draggable');

var position = new Transitionable([0,0]);
var sync = new MouseSync();




// Constructor function for our EmptyView class
ModuleSelectionView = function() {

    // Applies View's constructor function to ModuleSelectionView class
    View.apply(this, arguments);

    this.scrollview = new Scrollview();
    this.module = [];
    this.types = [];

    this.scrollview.sequenceFrom(this.module);
    this.add(this.scrollview);
    // this.add(this.positionModifier).add(this.scrollview);

    _addBackground.call(this);
    // _addListeners.call(this);
};


function _addBackground() {
	var backgroundSurface = new Surface({
		size: [undefined, undefined],
		properties: {
			backgroundColor: 'white'
		}
	});

	var backgroundModifier = new StateModifier({
		transform: Transform.translate(0, 0, -0.5)
	})

	this.add(backgroundModifier).add(backgroundSurface);
}

// function _addListeners() {
// 	this.on('toggleDisplay', function() {
// 		console.log('heard something');
// 	}.bind(this));
// }

// Establishes prototype chain for ModuleSelectionView class to inherit from View
ModuleSelectionView.prototype = Object.create(View.prototype);
ModuleSelectionView.prototype.constructor = ModuleSelectionView;

ModuleSelectionView.prototype.getTypes = function() {
	return this.types;
}

ModuleSelectionView.prototype.addModule = function(doc){
	var modSurface = new Surface({ size:[100,40] });

	modSurface.setProperties({
		backgroundColor: "blue"
	});

	modSurface.setContent(doc.name);

	var surfaceDraggable = new Draggable({});

	this.types.push(doc.name);

	// modSurface.pipe(sync);

	// sync.on('update', function(data){
	// 		var currentPosition = position.get();
	// 		position.set([
	// 			currentPosition[0] + data.delta[0],
	// 			currentPosition[1] + data.delta[1]
	// 		]);

	// 		console.log(currentPosition);
	// 	});

	// sync.on('end', function(data){
	// 		console.log('end');
	// });

	// var positionModifier = new Modifier({
	// 	tranform : function(){
	// 		var currentPosition = position.get();
	// 		return Transform.translate(currentPosition[0], currentPosition[1],0 );
	// 	}
	// });

	// var blah = this.add(positionModifier).add(modSurface);
	
	this.module.push(modSurface);
	modSurface.pipe(this.scrollview);

	modSurface.on('click', function() {
		this._eventOutput.emit('toggle' + doc.name);
	}.bind(this));
};

// Default options for ModuleSelectionView class
ModuleSelectionView.DEFAULT_OPTIONS = {};


