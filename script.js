// Function to create the calculator container and add functionality
window.alert("This calculates only if you handle with keyboards !!")
function createCalculator() {
    // Container
    const container = document.createElement('div');
    container.classList.add('container');
    
    // Row
    const row = document.createElement('div');
    row.classList.add('row');
    
    // Column (for the calculator display)
    const colDisplay = document.createElement('div');
    colDisplay.classList.add('col-md-12', 'col-lg-12');
    
    // Create a form element for the calculator display
    const formElement = document.createElement('form');
    formElement.classList.add('mb-3');
    
    // Create a label element for the calculator display
    const labelElement = document.createElement('label');
    labelElement.classList.add('form-label','h1');
    labelElement.textContent = 'Calculator';
    
    // Create an input element for the calculator display
    const inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.classList.add('form-control');
    inputElement.setAttribute('id', 'calculator-display');
    inputElement.setAttribute('aria-describedby', 'emailHelp');
    inputElement.setAttribute('readonly', 'readonly');
    
    // Append the label and input elements to the formElement using append
    formElement.append(labelElement, inputElement);
    
    // Append the formElement to the colDisplay
    colDisplay.appendChild(formElement);
    
    // Create a Column (for the calculator buttons)
    const colButtons = document.createElement('div');
    colButtons.classList.add('col-md-12', 'col-lg-12');
    
    // Create a table for the calculator buttons
    const table = document.createElement('table');
    table.classList.add('table');
    
    // Create the table body
    const tbody = document.createElement('tbody');
    
    // Define the calculator button rows and columns
    const buttonRows = [
        ['7', '8', '9', '/'],
        ['4', '5', '6', '*'],
        ['1', '2', '3', '-'],
        ['0', '.', '=', '+']
    ];
    
    // Create the button elements and append them to the table
    for (const rowLabels of buttonRows) {
        const row = document.createElement('tr');
        for (const label of rowLabels) {
            const cell = document.createElement('td');
            const button = document.createElement('button');
            button.textContent = label;
            button.classList.add('btn', 'btn-secondary', 'calc-button');     
            cell.style.padding = '0'; // Add some style to remove default padding
            button.style.width = '100%'; // Make buttons fill the cell
            button.style.height = '100%'; // Set the button height
            cell.appendChild(button);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    table.appendChild(tbody);
    colButtons.appendChild(table);
    
    row.append(colDisplay, colButtons);
    container.appendChild(row);
    document.body.appendChild(container);
    // Functionality for the calculator
    const displayInput = document.getElementById('calculator-display');
    let currentExpression = '';

    // Event listener for keyboard input
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (/\d/.test(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            // Append the key to the current expression
            currentExpression += key;
            displayInput.value = currentExpression;
        } else if (key === '=' || key === 'Enter') {
            try {
                currentExpression = eval(currentExpression);
                displayInput.value = currentExpression;
            } catch (error) {
                displayInput.value = 'Error';
            }
        } else if (key === 'c' || key === 'Escape') {
            currentExpression = '';
            displayInput.value = '';
        } else if (key === 'Backspace') {
            currentExpression = currentExpression.slice(0, -1);
            displayInput.value = currentExpression;
        }
    });

    // Disable mouse click events on buttons
    const calculatorButtons = document.querySelectorAll('.calc-button');
    calculatorButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const key = button.textContent;
            if (/\d.+\-*/.test(key)) {
                // Append the key to the current expression
                currentExpression += key;
                displayInput.value = currentExpression;
            } else if (key === '=') {
                try {
                    currentExpression = eval(currentExpression);
                    displayInput.value = currentExpression;
                } catch (error) {
                    displayInput.value = 'Error';
                }
            } else if (key === 'c') {
                currentExpression = '';
                displayInput.value = '';
            } else if (key === 'Backspace') {
                currentExpression = currentExpression.slice(0, -1);
                displayInput.value = currentExpression;
            }
        });
    });
}

// Create the calculator when the page loads
createCalculator();