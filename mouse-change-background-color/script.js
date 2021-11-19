// Create a HTML div Element called 'page'
var page = document.createElement('DIV');
// Gives the page variable full height 
page.style.height = '100vh';

// Applies the page element to the document(web page)
document.body.appendChild(page); 

//Creates variables for x & y for know where our mouse is
//x is for horizontal values, and y for vertical ones
var x = 0;
var y = 0;

// Add Event Listener for page. Listens for any mouse movement
// inside the page element. If found, run function below
page.addEventListener('mousemove', function(event) {
  //Takes the mouse movement we listened for and saves it into two variables
  x = event.clientX;
  y = event.clientY;
  
  //Here we set the background color to the x & y value that the mouse has over the web page. See css part for rgb explaination
  page.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)'; 
  //By writing variable + ', ' we combine the value with text to make it write like rgb(x, y, 100); when sent to style part (css)
  //Adds a text element to the page. It writes out the x & y value
  page.textContent = x + ', ' + y;
});

// Find the css element called 'box' to use in future
var box = document.getElementById('box');

//Function for a box that follows the mouse around
var mousebox = function() {
  //Calls the css code to push the box away from the left & top
  //the same x & y values that the mouse has
  box.style.left = x + 'px';
  box.style.top = y + 'px';
  
}  

// Find the css element called 'rbox' to use in future
var rbox = document.getElementById('rbox'); 

//Variable to hold our current angle/degree of rbox
var degree = 0;
//Setup a rotating box in the center
var rotatebox = function(){
  
  //Adds rotation, but makes it go (357, 358, 359, 0, 1, 2)
  degree = (degree + 1) % 360;
  
  //adds the current rotation to the rbox
  rbox.style.transform = 'rotate('+degree+'deg)'; 
  
  //Pushes the box from left & top by half of window width & height
  rbox.style.left = window.innerWidth / 2 + 'px';
  rbox.style.top = window.innerHeight / 2 + 'px';
}

//Sets up an update interval of how often both boxes happen. Number is in milliseconds so 100ms = 10 times per second
setInterval(mousebox,100);
setInterval(rotatebox,10);