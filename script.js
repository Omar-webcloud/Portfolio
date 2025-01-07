document.addEventListener("DOMContentLoaded", () => {
//change background color
function
changeBackgroundColor() {
    const colors = ["#f4f4f4", "#e0f7fa", "#fce4ec", "#e8f5e9", "#fff3e0"];
    const randomColor = 
          colors[Math.floor(Math.random()* colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Show Greeting
function showGreeting() {
    const name = prompt("What is your name?");
    if (name) {
        alert(`Hello, ${name} <3 ! Welcome to my portfolio!`);
               }
               }

              
              // Event Listeners
              document.getElementById("bg-button").addEventListener("click", changeBackgroundColor);
        document.getElementById("greet-button").addEventListener("click",showGreeting);
});