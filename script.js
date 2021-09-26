let counter = 0;    
function onClick() {
    counter++;
    const text = document.getElementById('update');
    text.innerHTML = `Was clicked: ${counter}`;
}