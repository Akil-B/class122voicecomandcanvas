let screen_width = 0;
let screen_height = 0;
let apple = ""; // The image of the apple
let speak_data = "";
let to_number = "";

function preload() {
  apple = loadImage("apple.png"); // Load the apple image
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight - 150;
  createCanvas(screen_width, screen_height);
  canvas.position(0,150);
}

function draw() {
  if (draw_apple == "set") {
    for (let i = 1; i <= to_number; i++) {
       x = Math.floor(Math.random() * 700); // Adjust the value as needed
       y = Math.floor(Math.random() * 400); // Adjust the value as needed
      image(apple, x, y, 50, 50); 
    }
  }
}

// Inside the recognition.onresult function

function recognition(result){
to_number = Number(content);
if (Number.isInteger(to_number)) {
  console.log( "Started drawing apple");
  draw_apple = "set";
} else {
  console.log("The speech has not recognized a number");
}
}


function speak(text) {
  if ('speechSynthesis' in window) {
    var utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  } else {
    console.log('Speech synthesis is not supported by your browser.');
  }
}

// After the document.getElementById function
document.getElementById("status").innerHTL=to_number + " Apples drawn";
speak(speak_data);