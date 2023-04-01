// describe('Decribe my first test', () => {
// 	it('Visit the kitchen sink', () => {
// 		cy.visit('https://example.cypress.io');
// 		cy.contains('type').click();
// 		//should be on a new URL which includes '/comands/actions'
// 		cy.url().should('include', '/commands/actions');

// 		//Get an input, type into it
// 		cy.get('.action-email').type('fake@email.com');

// 		//verify that the value has been updated
// 		cy.get('.action-email').should('have.value', 'fake@email.com');
// 	});
// });

describe('Test additional calculation', () => {
	it('test additional function', () => {
		cy.visit('127.0.0.1:5500/index.html');
		cy.get('#input1').type('1');
		cy.get('#input2').type('2');
		cy.get('#addButton').click();
		cy.get('#output').should('have.value', '3');
	});
});

describe('Test substraction calculation', () => {
	it('test substraction function', () => {
		cy.visit('127.0.0.1:5500/index.html');
		cy.get('#input1').type('1');
		cy.get('#input2').type('2');
		cy.get('#subtractButton').click();
		cy.get('#output').should('have.value', '-1');
	});
});

describe('Test multiply calculation', () => {
	it('test multiply function', () => {
		cy.visit('127.0.0.1:5500/index.html');
		cy.get('#input1').type('1');
		cy.get('#input2').type('2');
		cy.get('#multiplyButton').click();
		cy.get('#output').should('have.value', '2');
	});
});

describe('Test division calculation', () => {
	it('test division function', () => {
		cy.visit('127.0.0.1:5500/index.html');
		cy.get('#input1').type('1');
		cy.get('#input2').type('2');
		cy.get('#divideButton').click();
		cy.get('#output').should('have.value', '0.5');
	});
});
