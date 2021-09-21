beforeEach(() => {
    cy.visit('https://dev-finance.netlify.app/')
});

describe('Teste de interface', () => {
    it('inserir entradas e saidas, e removê-las', () => {

        //Efetuar entradas com sucesso!

        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();

        //Efetuar saidas com sucesso!

        cy.get('.button.new').click();
        cy.get('#description').type('SAIDA DINHEIRO');
        cy.get('#amount').type(-300);
        cy.get('#date').type('2021-09-21');
        cy.get('button').click();

        //Remover entradas com sucesso!

        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        
        //Remover saidas com sucesso!
        
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        
    });

    

    
});