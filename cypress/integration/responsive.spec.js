describe('viewPort', () => {

    beforeEach(() => {
        cy.visit('https://dev-finance.netlify.app/')
    });
    it('smartphone / tablets', () => {
        
        ///iphone 6
        cy.viewport(375, 667)
        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();
        cy.wait(500)
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        cy.wait(2000)

        
        ///iphone X
        cy.viewport(375, 812)
        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();
        cy.wait(500)
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        cy.wait(2000)


        ///ipad
        cy.viewport(768, 1024)
        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();
        cy.wait(500)
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        cy.wait(2000)

        ///ipad pro
        cy.viewport(1024, 1366)
        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();
        cy.wait(500)
        cy.get('[data-index="0"] > :nth-child(4) > img').click();

        
    });

    it('Notebooks', () => {

        //hd
        cy.viewport(1366, 728)
        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();
        cy.wait(500)
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        cy.wait(2000)

        //fullhd
        cy.viewport(1920, 1080)
        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();
        cy.wait(500)
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        cy.wait(2000)
        
    });

    it('High Definition', () => {
        
        //hd
        cy.viewport(1280, 720)
        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();
        cy.wait(500)
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        cy.wait(2000)
        
        //full hd
        cy.viewport(1980, 1080)
        cy.get('.button.new').click();
        cy.get('#description').type('ENTRADA DINHEIRO');
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-09-20');
        cy.get('button').click();
        cy.wait(500)
        cy.get('[data-index="0"] > :nth-child(4) > img').click();
        cy.wait(2000)
        
    });
    
});