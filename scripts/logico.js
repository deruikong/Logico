// Define scene componentes
const SourceWidth  = 100;
const SourceHeight  = 100;
const TargetWidth  = 100;
const TargetHeight = 100;

const Scene_1 = new Array(
  new SceneShape(new StaticShape(0, 2, 225,   SourceWidth, SourceHeight, 'images/orange.png'),   new StaticShape(0, 576, 447, 100, 100, null), new DynamicShape(0, 2,   225, 570, 570, 100, 100, 'images/orange.png')),
  new SceneShape(new StaticShape(1, 2, 340,   SourceWidth, SourceHeight, 'images/purple.png'),   new StaticShape(1, 678, 447, 100, 100, null), new DynamicShape(1, 2,   340, 670, 570, 100, 100, 'images/purple.png')),
  new SceneShape(new StaticShape(2, 2, 450,   SourceWidth, SourceHeight, 'images/yellow.png'),   new StaticShape(2, 273, 447, 100, 100, null), new DynamicShape(2, 2,   450, 270, 570, 100, 100, 'images/yellow.png')),
  new SceneShape(new StaticShape(3, 844, 225, SourceWidth, SourceHeight, 'images/red.png'),    new StaticShape(3, 475, 447, 100, 100, null), new DynamicShape(3, 844, 225, 470, 570, 100, 100, 'images/red.png')),
  new SceneShape(new StaticShape(4, 844, 340, SourceWidth, SourceHeight, 'images/violet.png'), new StaticShape(4, 172, 447, 100, 100, null), new DynamicShape(4, 844, 340, 170, 570, 100, 100, 'images/violet.png')),
  new SceneShape(new StaticShape(5, 844, 450, SourceWidth, SourceHeight, 'images/blue.png'),   new StaticShape(5, 374, 447, 100, 100, null), new DynamicShape(5, 844, 450, 370, 570, 100, 100, 'images/blue.png'))
  );

const Scene_2 = new Array(
  new SceneShape(new StaticShape(0, 2, 225,   100, 100, 'images/orange.png'),   new StaticShape(0, 172, 447, 100, 100, null), new DynamicShape(0, 2, 225,   170, 570, 100, 100, 'images/orange.png')),
  new SceneShape(new StaticShape(1, 2, 340,   100, 100, 'images/purple.png'),   new StaticShape(1, 374, 447, 100, 100, null), new DynamicShape(1, 2, 340,   370, 570, 100, 100, 'images/purple.png')),
  new SceneShape(new StaticShape(2, 2, 450,   100, 100, 'images/yellow.png'),   new StaticShape(2, 576, 447, 100, 100, null), new DynamicShape(2, 2, 450,   570, 570, 100, 100, 'images/yellow.png')),
  new SceneShape(new StaticShape(3, 844, 225, 100, 100, 'images/red.png'),    new StaticShape(3, 475, 447, 100, 100, null), new DynamicShape(3, 844, 225, 470, 570, 100, 100, 'images/red.png')),
  new SceneShape(new StaticShape(4, 844, 340, 100, 100, 'images/violet.png'), new StaticShape(4, 678, 447, 100, 100, null), new DynamicShape(4, 844, 340, 670, 570, 100, 100, 'images/violet.png')),
  new SceneShape(new StaticShape(5, 844, 450, 100, 100, 'images/blue.png'),   new StaticShape(5, 273, 447, 100, 100, null), new DynamicShape(5, 844, 450, 270, 570, 100, 100, 'images/blue.png'))
  );
  
const Scene_3 = new Array(
  new SceneShape(new StaticShape(0, 2, 225, 100, 100, 'images/orange.png'),   new StaticShape(0, 678, 447, 100, 100, null), new DynamicShape(0, 2,   225, 670, 570, 100, 100,  'images/orange.png')),
  new SceneShape(new StaticShape(1, 2, 340, 100, 100, 'images/purple.png'),   new StaticShape(1, 374, 447, 100, 100, null), new DynamicShape(1, 2,   340, 370, 570, 100, 100,  'images/purple.png')),
  new SceneShape(new StaticShape(2, 2, 450, 100, 100, 'images/yellow.png'),   new StaticShape(2, 273, 447, 100, 100, null), new DynamicShape(2, 2,   450, 270, 570, 100, 100,  'images/yellow.png')),
  new SceneShape(new StaticShape(3, 844, 225, 100, 100, 'images/red.png'),    new StaticShape(3, 576, 447, 100, 100, null), new DynamicShape(3, 844, 225, 570, 570, 100, 100, 'images/red.png')),
  new SceneShape(new StaticShape(4, 844, 340, 100, 100, 'images/violet.png'), new StaticShape(4, 475, 447, 100, 100, null), new DynamicShape(4, 844, 340, 470, 570, 100, 100, 'images/violet.png')),
  new SceneShape(new StaticShape(5, 844, 450, 100, 100, 'images/blue.png'),   new StaticShape(5, 172, 447, 100, 100, null), new DynamicShape(5, 844, 450, 170, 570, 100, 100, 'images/blue.png'))
  );
  
const Scene_4 = new Array(
  new SceneShape(new StaticShape(0, 2, 225, 100, 100, 'images/orange.png'),   new StaticShape(0, 172, 447, 100, 100, null), new DynamicShape(0, 2,   225, 170, 570, 100, 100, 'images/orange.png')),
  new SceneShape(new StaticShape(1, 2, 340, 100, 100, 'images/purple.png'),   new StaticShape(1, 273, 447, 100, 100, null), new DynamicShape(1, 2,   340, 270, 570, 100, 100, 'images/purple.png')),
  new SceneShape(new StaticShape(2, 2, 450, 100, 100, 'images/yellow.png'),   new StaticShape(2, 678, 447, 100, 100, null), new DynamicShape(2, 2,   450, 670, 570, 100, 100, 'images/yellow.png')),
  new SceneShape(new StaticShape(3, 844, 225, 100, 100, 'images/red.png'),    new StaticShape(3, 475, 447, 100, 100, null), new DynamicShape(3, 844, 225, 470, 570, 100, 100, 'images/red.png')),
  new SceneShape(new StaticShape(4, 844, 340, 100, 100, 'images/violet.png'), new StaticShape(4, 374, 447, 100, 100, null), new DynamicShape(4, 844, 340, 370, 570, 100, 100, 'images/violet.png')),
  new SceneShape(new StaticShape(5, 844, 450, 100, 100, 'images/blue.png'),   new StaticShape(5, 576, 447, 100, 100, null), new DynamicShape(5, 844, 450, 570, 570, 100, 100, 'images/blue.png'))
  );
const Scenes = new Array(Scene_1, Scene_2, Scene_3, Scene_4);

function ShapeBase(id, x, y, w, h, imgSource) {
  if (id == undefined) {
    alert("Missing id!!!");
  }
  this.id = id;
  
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  if (imgSource != null) {
    this.image = new Image();
    this.image.src = imgSource;
  }
  else {
    this.image = null;
  }

}

// Draws this shape to a given context
ShapeBase.prototype.draw = function(ctxt) {
  if(this.image != null) {
    ctxt.drawImage(this.image, this.x, this.y, this.w, this.h);
  }
}

// Clear this shape to a given context
// ShapeBase.prototype.clear = function(ctxt) {
//  ctxt.clearRect(this.x, this.y, this.w, this.h);
//}

// Determine if a point is inside the shape's bounds
ShapeBase.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}

function StaticShape(id, x, y, w, h, imgSource ) {
  if (id == undefined) {
    alert("Missing id!!!");
  }
  this.id = id;
  this.myShape = new ShapeBase(id, x, y, w, h, imgSource);
}

StaticShape.prototype.draw = function(ctxt) {
  this.myShape.draw(ctxt);
  return true;
}

StaticShape.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Width) and its Y and (Y + Height)
  return  this.myShape.contains(mx, my);
}

function DynamicShape(id, sx, sy, dx, dy, w, h, imgSource ) {
  if (id == undefined) {
    alert("Missing id!!!");
  }
  
  this.x_left = 100;
  this.x_right = 760; 
  this.y_bottom = dy;
  
  this.id = id;
  this.speedX = 0;
  this.speedY = 0;

  this.destX = dx;
  this.destY = dy;
  this.myShape = new ShapeBase(id, sx, sy, w, h, imgSource);
}

DynamicShape.prototype.draw = function(ctxt) {
  var finished = true;
  if (this.myShape.x != this.destX || this.myShape.y != this.destY) {
    if(this.myShape.x < this.x_left){
      this.speedX = 2;
      this.speedY = 0;
    } 
    else if(this.myShape.x > this.x_right) {
      this.speedX = -2;
      this.speedY = 0;
    }
    else if(this.myShape.y < this.y_bottom){
      this.speedX = 0;
      this.speedY = 2;
    }
    else if(this.myShape.x < this.destX){
      this.speedX = 2;
      this.speedY = 0;
    }
    else if (this.myShape.x > this.destX) {
      this.speedX = -2;
      this.speedY = 0;
    }
    else {
      this.speedX = 0;
      this.speedY = 0;  
    }
    
    // Calculate the new position
    this.myShape.x+=this.speedX;
    this.myShape.y+=this.speedY;

    // Adjust the position if it goes over the destination from left or right
    if (this.myShape.x > this.destX && this.speedX > 0) {
      this.myShape.x = this.destX;
    }

    if (this.myShape.y > this.destY && this.speedY > 0){
      this.myShape.y = this.destY;
    }
 
    if (this.myShape.x < this.destX && this.speedX < 0) {
      this.myShape.x = this.destX;
    }

    if (this.myShape.y < this.destY && this.speedY < 0) {
      this.myShape.y = this.destY;
    }

    // Set flag to not finished
    finished = false;
  }

  // Redraw the shape
  this.myShape.draw(ctxt);

  return finished;
}

function Coordinate(x, y) {
  this.x = x;
  this.y = y;
}

function remove(array, element) {
  const index = array.indexOf(element);

  if(index !== -1){
    array.splice(index, 1);
  }
}

function CanvasState(canvas) {
  // **** First some setup! ****
  this.x_left = 100;
  this.y_bottom = 620;
  this.TotalShapes = 12;
  this.sourceWidth = 100;
  this.sourceHeight = 100;
  this.targetWidth = 100;
  this.targetHeight = 100;
  this.scene = null
//  this.resultPositions = new Array(new Coordinate(170, 570), new Coordinate(270, 570), new Coordinate(370, 570), new Coordinate(470, 570), new Coordinate(570,570), new Coordinate(670, 570));
  
  this.canvas = canvas;
  this.width = canvas.width;
  this.height = canvas.height;
  this.ctxt = canvas.getContext('2d');
  // This complicates things a little but but fixes mouse co-ordinate problems
  // when there's a border or padding. See getMouse for more detail
  var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
    this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
    this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
    this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
  }
  // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
  // They will mess up mouse coordinates and this fixes that
  var html = document.body.parentNode;
  this.htmlTop = html.offsetTop;
  this.htmlLeft = html.offsetLeft;

  // **** Keep track of state! ****
  
  this.valid = false; // when set to false, the canvas will redraw everything
  // this.shapes = [];  // the collection of things to be drawn
  this.sourceShapes = [];
  this.targetShapes = [];
  this.resultShapes = [];
  this.dragging = false; // Keep track of when we are dragging
  // the current selected object. In the future we could turn this into an array for multiple selection
  this.sourceSelection = null;
  this.targetSelection = null;
  this.dragoffx = 0; // See mousedown and mousemove events for explanation
  this.dragoffy = 0;
  
  // **** Then events! ****
  
  // This is an example of a closure!
  // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
  // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
  // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
  // This is our reference!
  var myState = this;
  
  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
  
  // double click for making new shapes
  canvas.addEventListener('click', function(e) {
    var mouse = myState.getMouse(e);
    var mx = mouse.x;
    var my = mouse.y;
    var sourceShapes = myState.sourceShapes;
    var l = sourceShapes.length;
    for (var i = l-1; i >= 0; i--) {
      if (sourceShapes[i].contains(mx, my)) {
        var mySel = sourceShapes[i];
        // Keep track of where in the object we clicked
        // so we can move it smoothly (see mousemove)
        myState.dragoffx = mx - mySel.myShape.x;
        myState.dragoffy = my - mySel.myShape.y;
        myState.dragging = true;
        myState.sourceSelection = mySel;
        myState.valid = false;
        return;
      }
    }

    // havent returned means we have failed to select anything in sourceShapes.
    // We check if target is selected
    targetShapes = myState.targetShapes;
    l = targetShapes.length;
    for (var i = l-1; i >= 0; i--) {
      if (targetShapes[i].contains(mx, my)) {
        var mySel = targetShapes[i];
        // Keep track of where in the object we clicked
        // so we can move it smoothly (see mousemove)
        myState.dragoffx = mx - mySel.myShape.x;
        myState.dragoffy = my - mySel.myShape.y;
        myState.dragging = true;
        myState.targetSelection = mySel; 
      }
    }

    // if a target is chosen but no sourceShapes is chosen, pop up and alert
    if (myState.sourceSelection == null && myState.targetSelection) {
      alert("Please select a source!");
      myState.targetSelection = null;
      myState.valid = true;
      return;
    }

    // if a sourceShaped was selected in previoud click, 
    if (myState.sourceSelection && myState.targetSelection == null) {
      myState.sourceSelection = null;
      myState.valid = false; // Need to clear the old selection border
      return;
    }

    // if both source shape and target shape are selected, we should do paring
    if (myState.sourceSelection && myState.targetSelection)
    {
      if (myState.sourceSelection.id == myState.targetSelection.id) {
        var resultId = myState.sourceSelection.id;
        var sourceShape = myState.sourceSelection.myShape;
        myState.addResultShape(myState.scene[myState.sourceSelection.id].resultShape);
        remove(myState.sourceShapes, myState.sourceSelection);
        myState.sourceSelection = null;
        myState.targetSelection = null;
        myState.valid = false;
      }
      else {
        alert("Oops, please try again!");
//        myState.sourceSelection = null;
        myState.targetSelection = null;
        myState.valid = false; // Need to clear the old selection border
      }
    }
  }, true);

  // **** Options! ****
  
  this.selectionColor = '#CC0000';
  this.selectionWidth = 2;  
  this.interval = 1;
  setInterval(function() { myState.draw(); }, myState.interval);
}

CanvasState.prototype.addSourceShape = function(shape) {
  this.sourceShapes.push(shape);
  this.valid = false;
}

CanvasState.prototype.addTargetShape = function(shape) {
  this.targetShapes.push(shape);
  this.valid = false;
}

CanvasState.prototype.addResultShape = function(shape) {
  this.resultShapes.push(shape);
  this.valid = false;
}


CanvasState.prototype.clear = function() {
  this.ctxt.clearRect(0, 0, this.width, this.height);
}

CanvasState.prototype.drawShapes = function(shapes) {
      var ctxt = this.ctxt;
      var finished = true;

      // draw all shapes
      for (var i = 0; i < shapes.length; i++) {
        var shape = shapes[i];
        var myShape = shape.myShape;

        // We can skip the drawing of elements that have moved off the screen:
        if (myShape.x > this.width || myShape.y > this.height ||  myShape.x + myShape.w < 0 || myShape.y + myShape.h < 0) {
            continue;
        }
        
        if (shape.draw(ctxt) == false) {
          finished = false;
        }
      }

      return finished;
}

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
CanvasState.prototype.draw = function() {
   // if our state is invalid, redraw and validate!
   if (!this.valid) {
      var ctxt = this.ctxt;
      //var shapes = this.sourceShapes;
      this.clear();

      var allFinished = this.drawShapes(this.sourceShapes) && this.drawShapes(this.targetShapes) && this.drawShapes(this.resultShapes);
      
      if (allFinished && this.sourceShapes.length == 0){
        alert('Congrats');
      }

      // draw selection
      // right now this is just a stroke along the edge of the selected ShapeBase
      if (this.sourceSelection != null) {
        ctxt.strokeStyle = this.selectionColor;
        ctxt.lineWidth = this.selectionWidth;
        var mySelShape = this.sourceSelection.myShape;
        ctxt.strokeRect(mySelShape.x,mySelShape.y,mySelShape.w,mySelShape.h);
      }
      
      // ** Add stuff you want drawn on top all the time here **
      this.valid = allFinished;
    }
}

// Creates an object with x and y defined, set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky, we have to worry about padding and borders
CanvasState.prototype.getMouse = function(e) {
  var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
  
  // Compute the total offset
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar
  offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
  offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;
  
  // We return a simple javascript object (a hash) with x and y defined
  return {x: mx, y: my};
}

/*
function Positions(x, y, w, h, img)
{
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = img
}

Scene1 = {

    new StaticShape(0, 2, 225, 100, 100, 'images/blue.png'), 
    new StaticShape(0, 172, 447,s.targetWidth, s.targetHeight, 'images/s1/t_brownbag.png'), 
    new DynamicShape (0, 172,447,s.targetWidth, s.targetHeight, 'images/s1/t_bluebag.png'))},
  {new Resource(new Positions(2, 225, 100, 100, 'images/blue.png'), new Positions(172,447,s.targetWidth, s.targetHeight, 'images/s1/t_bluebag.png'), result)},
  {new Scene(source, target, result)},
  {new Scene(source, target, result)},
  {new Scene(source, target, result)},
  {new Scene(source, target, result)},
}

function SceneShape(sourceShape, targetShape, resultShape) {
  // Todo: validate parameters
  this.sourceShape = sourceShape;
  this.targetShape = targetShape;
  this.resultShape = resultShape;
}
  this.resultPositions = new Array(new Coordinate(170, 570), new Coordinate(270, 570), new Coordinate(370, 570), new Coordinate(470, 570), new Coordinate(570,570), new Coordinate(670, 570));



Scenes = {
  {1, Scene1},
  {2, Scene2}
}
*/

function SceneShape(sourceShape, targetShape, resultShape) {
  // Todo: validate parameters
  this.sourceShape = sourceShape;
  this.targetShape = targetShape;
  this.resultShape = resultShape;
}                  
                  
function init(sceneId) {
  var s = new CanvasState(document.getElementById('canvas1'));

  if (sceneId < 0 || sceneId > 4) {
    alert("Invalid parameter: scendId!");
    return;
  }

  var scene = Scenes[sceneId];
  s.scene = scene;
  for (i = 0; i < scene.length; i++) {
    s.addSourceShape(scene[i].sourceShape);
    s.addTargetShape(scene[i].targetShape);
  }
  sleep(500);
  s.valid = false;
  }

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}

// Now go make something amazing!