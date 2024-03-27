// interactivebg.js
//document.addEventListener('DOMContentLoaded', function() {
	
const targetRef = document.querySelector('.interactive');
    //const gradientBg = document.getElementById('parallax'); //Setear la zona donde hace Update

function updateMousePosition(ev) {
  const { clientX, clientY } = ev;
  targetRef.style.setProperty("left", `${clientX}px`);
  targetRef.style.setProperty("top", `${clientY}px`);
}

window.addEventListener("mousemove", updateMousePosition);

//gradientBg.addEventListener("mousemove", updateMousePosition); //Restringir la zona donde hace Update
//});