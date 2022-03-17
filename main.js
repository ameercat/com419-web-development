document.getElementById("cookie").style.display = "block";

document.getElementById("Nope").addEventListener("click", e=>{
    document.getElementById("cookie").style.display = "none";
});


document.getElementById("Yes").addEventListener("click", e=>{
    document.getElementById("cookie").innerHTML = "<h3>First Lesson - Don't admit that</h3><p>But you did So your reward your third year will now feature 30% extra dementor!</p>";
});