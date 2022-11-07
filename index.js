// Submit event listener
document.querySelector('#loan-form').addEventListener('submit', function(e){
     // Hide the results
     document.querySelector('#results').style.display = 'none';
       // Show the loading animation
    document.querySelector('#loading').style.display = 'block';
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

/// Calculate the results
function calculateResults(){
  // Declare UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById(interest);
  const years = document.getElementById(years);
  
}