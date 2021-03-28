console.log("Location parsed: " + localStorage.getItem("location"));
document.getElementById('location').getElementsByTagName('p')[0].innerHTML = "Recycling at " + localStorage.getItem("location");
