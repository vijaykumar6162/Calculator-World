const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

let value = this.value.toLowerCase();

let links = document.querySelectorAll(".card a");

links.forEach(link => {

if(link.textContent.toLowerCase().includes(value)){
link.style.display = "block";
}
else{
link.style.display = "none";
}

});

});
