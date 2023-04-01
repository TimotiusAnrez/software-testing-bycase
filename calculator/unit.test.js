const unit = require('./calculate');

test('add number', () => {
	let a = Math.floor(Math.random() * 10);
	let b = Math.floor(Math.random() * 10);
	let c = Math.floor(Math.random() * 10);
	let d = Math.floor(Math.random() * 10);

	expect(unit.add(3, 4)).toBe(7);
	expect(unit.add(a, b)).toBe(a + b);
	expect(unit.add(c, d)).toBe(c + d);
});

test('substract number', () => {
	let a = Math.floor(Math.random() * 10);
	let b = Math.floor(Math.random() * 10);
	let c = Math.floor(Math.random() * 10);
	let d = Math.floor(Math.random() * 10);

	expect(unit.subtract(7, 3)).toBe(4);
	expect(unit.subtract(a, b)).toBe(a - b);
	expect(unit.subtract(c, d)).toBe(c - d);
});

test('multiply number', () => {
	let a = Math.floor(Math.random() * 10);
	let b = Math.floor(Math.random() * 10);
	let c = Math.floor(Math.random() * 10);
	let d = Math.floor(Math.random() * 10);

	expect(unit.multiply(4, 5)).toBe(4 * 5);
	expect(unit.multiply(a, b)).toBe(a * b);
	expect(unit.multiply(c, d)).toBe(c * d);
});

test('multiply number', () => {
	let a = Math.floor(Math.random() * 10);
	let b = Math.floor(Math.random() * 10);
	let c = Math.floor(Math.random() * 10);
	let d = Math.floor(Math.random() * 10);

	expect(unit.divide(4, 5)).toBe(4 / 5);
	expect(unit.divide(a, b)).toBe(a / b);
	expect(unit.divide(c, d)).toBe(c / d);
});
