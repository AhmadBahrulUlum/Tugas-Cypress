/// <reference types="cypress" />

describe('Form input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline form', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Ahmad Bahrul Ulum').should('have.value', 'Ahmad Bahrul Ulum');
        cy.get('[placeholder="Email"][type="text"]').type('bahrulahmad836@gmail.com').should('have.value', 'bahrulahmad836@gmail.com');
        cy.get('.custom-checkbox').first().click()
    });

    it('Fill Using the Grid', () => {
        cy.get('#inputEmail1').type('bahrulahmad836@gmail.com').should('have.value', 'bahrulahmad836@gmail.com');
        cy.get('#inputPassword2').type('123456').should('have.value', '123456');
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    });

    it('Fill Basic form', () => {
        cy.get('#exampleInputEmail1').type('bahrulahmad836@gmail.com').should('have.value', 'bahrulahmad836@gmail.com');
        cy.get('#exampleInputPassword1').type('123456').should('have.value', '123456');
        cy.get('.custom-checkbox').eq(1).click()
    });

    it('Fill Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Ahmad Bahrul Ulum').should('have.value', 'Ahmad Bahrul Ulum');
        cy.get('[placeholder="Subject"]').type('Asalamualaikum').should('have.value', 'Asalamualaikum');
        cy.get('textarea[placeholder="Message"]').type('You gonna catch a cold from the ice inside your soul').should('have.value', 'You gonna catch a cold from the ice inside your soul');
    });

    it('Fill Horizontal form', () => {
        cy.get('#inputEmail3').type('bahrulahmad836@gmail.com').should('have.value', 'bahrulahmad836@gmail.com');
        cy.get('#inputPassword3').type('123456').should('have.value', '123456');
        cy.get('.custom-checkbox').last().click()
    });

    it('Fill Block form', () => {
        cy.get('#inputFirstName').type('Ahmad').should('have.value', 'Ahmad');
        cy.get('#inputLastName').type('Bahrul').should('have.value', 'Bahrul');
        cy.get('#inputEmail').type('bahrulahmad836@gmail.com').should('have.value', 'bahrulahmad836@gmail.com');
        cy.get('#inputWebsite').type('www.ahhmad.com').should('have.value', 'www.ahhmad.com');
    });
})