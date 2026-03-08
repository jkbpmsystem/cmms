function checkLocation(){

const input = document.getElementById("codeLocation");
const suggestionBox = document.getElementById("suggestions");
const locationName = document.getElementById("locationName");

const value = input.value.toUpperCase();

suggestionBox.innerHTML="";

if(value.length === 0){
input.classList.remove("valid","invalid");
locationName.innerText="";
return;
}

Object.keys(locations).forEach(code=>{

if(code.includes(value)){

const div=document.createElement("div");
div.className="suggestion-item";
div.innerText=code;

div.onclick=function(){

input.value=code;
suggestionBox.innerHTML="";

input.classList.add("valid");
input.classList.remove("invalid");

locationName.innerText=locations[code];

}

suggestionBox.appendChild(div);

}

});

if(locations[value]){

input.classList.add("valid");
input.classList.remove("invalid");

locationName.innerText=locations[value];

}else{

input.classList.remove("valid");

if(value.length>5){
input.classList.add("invalid");
locationName.innerText="Location not found";
}

}

}