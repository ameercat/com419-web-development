document.getElementById("cookie").style.display = "block";

document.getElementById("Nope").addEventListener("click", e=>{
    document.getElementById("cookie").style.display = "none";
});


document.getElementById("Yes").addEventListener("click", e=>{
    document.getElementById("cookie").innerHTML = "<h3>Sick One</h3><p>Go check out our Instagram and enter our Mix comp for a chance to win some cheeky prizes.</p>";
});