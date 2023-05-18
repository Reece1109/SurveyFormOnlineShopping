document.getElementById("surveyForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var feedback = document.getElementById("feedback").value;
  
    // Do something with the form data, such as sending it to a server or storing it in a database
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Age: " + age);
    console.log("Feedback: " + feedback);
  
    // Display a thank you message or redirect the user to another page
    alert("Thank you for your feedback!");
    // window.location.href = "thank-you.html";
  });
  