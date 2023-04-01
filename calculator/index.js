let result = 0;
let operation = '';
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let output = document.getElementById('output');
let addButton = document.getElementById('addButton');
let subtractButton = document.getElementById('subtractButton');
let multiplyButton = document.getElementById('multiplyButton');
let divideButton = document.getElementById('divideButton');

addButton.addEventListener('click', () => {
	let a = parseFloat(input1.value);
	let b = parseFloat(input2.value);
	result = add(a, b);
	operation = '+';
	output.value = result;
});

subtractButton.addEventListener('click', () => {
	let a = parseFloat(input1.value);
	let b = parseFloat(input2.value);
	result = subtract(a, b);
	operation = '-';
	output.value = result;
});

multiplyButton.addEventListener('click', () => {
	let a = parseFloat(input1.value);
	let b = parseFloat(input2.value);
	result = multiply(a, b);
	operation = '*';
	output.value = result;
});

divideButton.addEventListener('click', () => {
	let a = parseFloat(input1.value);
	let b = parseFloat(input2.value);
	result = divide(a, b);
	operation = '/';
	output.value = result;
});
