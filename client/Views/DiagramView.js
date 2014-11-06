// Import additional modules to be used in this view 
var View = require('famous/core/View');
var Surface = require('famous/core/Surface');
var Transform = require('famous/core/Transform');
var StateModifier = require('famous/modifiers/StateModifier');
var Modifier 		= require('famous/core/Modifier');
var MouseSync 		= require('famous/inputs/MouseSync');

var Transitionable 	= require('famous/transitions/Transitionable');
var SnapTransition 	= require('famous/transitions/SnapTransition');

var Draggable = require('famous/modifiers/Draggable');
Transitionable.registerMethod('spring', SnapTransition);




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




	

	var positionModifier = new Modifier({
		transform : function(){
			var currentPosition = position.get();
		return Transform.translate(currentPosition[0], currentPosition[1],0 );
		}
	});

	var node = this.add(positionModifier);

	var placeHolderTypes = ['Power', 'Control', 'Actuation', 'Sensing', 'Communication', 'Energy'];

	 for (var i=0; i < 6; i++) {
		// var i =0;
		var position = new Transitionable([0,0]);
		var sync = new MouseSync();


		var placeHolderSurface = new Surface({
			size: [100, 40],
			properties: {
				backgroundColor: 'red'
			}
		});

		placeHolderSurface.name = placeHolderTypes[i];

		var placeHolderModifier = new StateModifier({
			
			align: [0.25 + 0.25*(i%3), 0.33*(Math.floor(i/3) + 1)],
			origin: [0.5, 0.5]
			
		});



		var placeHolderDraggable = new Draggable({});
	
		// placeHolderSurface.pipe(sync);
		placeHolderSurface.pipe(placeHolderDraggable);
	
		// node.add(placeHolderModifier).add(placeHolderSurface);
		// this.add(placeHolderModifier).add(placeHolderSurface);
		// this.add(positionModifier).add(placeHolderModifier).add(placeHolderSurface);
	 	this.add(placeHolderModifier).add(placeHolderDraggable).add(placeHolderSurface);

	 	addModuleDraggable(placeHolderDraggable);
	 	// placeHolderDraggable.on('end', function(data) {
	 	// 	placeHolderDraggable.setPosition([0, 0], {
	 	// 		method: 'spring',
	 	// 		period: 150,
	 	// 		velocity: data.velocity
	 	// 	});
	 	// });

	// sync.on('update', function(data){
	// 	var currentPosition = position.get();
	// 	position.set([
	// 		currentPosition[0] + data.delta[0],
	// 		currentPosition[1] + data.delta[1]
	// 	]);

	// 	// console.log(currentPosition);
	// });

	// sync.on('end', function(data){
	// 		var velocity = data.velocity;
	// 		position.set([0,0],{
	// 			method: 'spring',
	// 			period: 150,
	// 			velocity:velocity
	// 		});
	// });

}

function addModuleDraggable(draggableModifier) {
	 	draggableModifier.on('end', function(data) {
 		draggableModifier.setPosition([0, 0], {
 			method: 'spring',
 			period: 150,
 			velocity: data.velocity
 		});
 	});
}
	

}

// Establishes prototype chain for DiagramView class to inherit from View
DiagramView.prototype = Object.create(View.prototype);
DiagramView.prototype.constructor = DiagramView;

DiagramView.prototype.addNewModule = function(moduleName) {

};

// Default options for DiagramView class
DiagramView.DEFAULT_OPTIONS = {};
