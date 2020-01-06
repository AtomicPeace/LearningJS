(function() {
	'use strict'
	paper.install(window); //installs paper.js on the global scope
	paper.setup(document.getElementById('mainCanvas'));
	
	var tool = new Tool();
	
	var c = Shape.Circle(200,200,80)
	c.fillcolor = "black";
	var text = new PointText(200,200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'hello world';
	
	tool.onMouseDown = function(event) {
		
		c.fillColor = 'red';
		
	};
}())

