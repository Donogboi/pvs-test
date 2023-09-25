<script src="js/main.js"></script>

// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Replace with your backend URL
    const backendUrl = "http://localhost"; // Update the URL to your backend
  
    // Function to display response data on the webpage
    function displayData(data) {
      // Replace 'result' with the ID of the HTML element where you want to display the data
      const resultElement = document.getElementById("result");
  
      // Display the response data on the webpage
      resultElement.innerHTML = data;
    }
  
    // Make a GET request to the root path of your backend
    fetch(backendUrl)
      .then((response) => response.text())
      .then((data) => {
        // Display the response from the backend on the webpage
        displayData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
  