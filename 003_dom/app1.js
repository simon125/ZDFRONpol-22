// pobieranie istniejącego elementu div z dokumentu index1.html

const istniejacyDiv = document.getElementById("istniejacyDiv");

console.log(istniejacyDiv);

// istniejacyDiv.innerHTML = `<input type="text" placeholder="Enter some text"/>`;

const input = document.createElement("input");

input.placeholder = "Jakis placeholder";

istniejacyDiv.appendChild(input);
