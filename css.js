#loadingScreen{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#020617;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
z-index:9999;
}

.loader{
width:40px;
height:40px;
border:4px solid #1e293b;
border-top:4px solid #00e5ff;
border-radius:50%;
animation:spin 1s linear infinite;
}

@keyframes spin{
0%{transform:rotate(0deg)}
100%{transform:rotate(360deg)}
}

.loading-text{
margin-top:10px;
font-size:14px;
opacity:0.7;
}
