// Submit event listener
document.querySelector('#loan-form').addEventListener('submit', function(e){
     // Hide the results
     document.querySelector('#results').style.display = 'none';
       // Show the loading animation
    document.querySelector('#loading').style.display = 'block';