let input = document.getElementById('inputBox');
// Select all the buttons
let buttons = document.querySelectorAll('button');

let string = "";
// Create an array of all the buttons
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // Handle different button clicks
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Evaluate the expression
                input.value = string;   // Display the result
            } catch {
                input.value = "Error";  // Handle invalid expressions
                string = "";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";                // Clear everything
            input.value = string;
        }
        else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1); // Remove last character
            input.value = string;
        }
        else {
            string += e.target.innerHTML; // Append the clicked button's value to the string
            input.value = string;
        }
    });
});
