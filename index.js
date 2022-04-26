

document.addEventListener('mousemove', (event) => {

    document.body.style.backgroundColor = `rgb(${event.clientX}, ${event.clientY}, ${event.clientX - event.clientY})`;

});