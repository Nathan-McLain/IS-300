// Function to change button color periodically
function changeColorPeriodically() {
    setInterval(function () {
      document.getElementById("cyberWizardsBtn").style.backgroundColor = getRandomColor();
    }, 2000); // Change color every 2000 milliseconds (2 seconds)
  }
  
  // Helper function to generate a random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Call the function to start changing color automatically
  changeColorPeriodically();
  