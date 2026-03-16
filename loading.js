
function showLoading(){
const loader = document.getElementById("loadingScreen");
if(loader) loader.style.display="flex";
}

function hideLoading(){
const loader = document.getElementById("loadingScreen");
if(loader) loader.style.display="none";
}

/* auto loading for fetch */
async function fetchData(url){
showLoading();
const res = await fetch(url);
const data = await res.json();
hideLoading();
return data;
}
