console.log("Location parsed: " + localStorage.getItem("location"));

// Parses the location text to the HTML file
document.getElementById('location').getElementsByTagName('p')[0].innerHTML = "Recycling at " + localStorage.getItem("location");

// TODO: Complete this!!!!!!!!
// $.ajax({
//   url: '/recyclingentry/new/',
//   data: {
//     'location': localStorage.getItem("location")
//   },
//   dataType: 'json',
//   success: function (data) {
//     alert("It works!");
//   }
// });