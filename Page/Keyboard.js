// Create variables for the DVD's position and velocity
var x = 0;
var y = 0;
var dx = 1;
var dy = 1;

// Set the speed of the DVD
var speed = 2;

// Update the DVD's position
function update() {
  x += dx * speed;
  y += dy * speed;

  // Check if the DVD has hit the edge of the screen
  if (x < 0 || x > window.innerWidth - 100) {
    dx = -dx;
  }
  if (y < 0 || y > window.innerHeight - 100) {
    dy = -dy;
  }

  // Set the DVD's position
  keyboard.style.top = y + "px";
  keyboard.style.left = x + "px";
}

// Start the animation loop
setInterval(update, 10);
