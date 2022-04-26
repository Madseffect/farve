

document.addEventListener('mousemove', (event) => {

    document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, ${event.clientX - event.clientY})`;

});

window.addEventListener("deviceorientation", (event2)=>{
	document.body.style.backgroundColor = `rgb(${event.alpha}, ${event.beta}, ${event.gamma})`;
});

