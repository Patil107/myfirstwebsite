let heading = document.getElementById('heading'); 
// <h1 id="heading">sign up</h1>
console.log(heading.innerHTML); // Outputs the text inside the element
// sign up


let elements = document.getElementsByClassName('signup-container');
console.log(elements[0]); // Access the first element with the class 'signup-container'




for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerHTML);
}


function handleInputChange() {
    const emailValue = document.getElementById('emailInput').value;
    console.log(emailValue); // Logs the input value
}
