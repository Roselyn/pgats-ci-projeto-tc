/// <reference types="cypress"/>

import cadastro  from '../pages/cadastro';
import menu      from '../pages/menu';
import login     from '../pages/login';
import { faker } from '@faker-js/faker';

describe('Trabalho de Conclusão Automação Web PGATS', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com');
    });
    it('Test Case 1: Register User', () => {
        menu.irParaLoginCadastro();
        cadastro.
            preencherFormulario().
            verificarSeCadastroFoiConclido();
        cy.screenshot()
    });
    it('Test Case 2: Login User with correct email and password', () => {
        menu.irParaLoginCadastro();
        login.entrar('tester-1723066176776@mail.com', '12345');
        // assert - verificacao da saída do teste / comportamento esperado
        cy.get('i.fa-user').parent().should('contain', 'TesterRNV QA');
    });
    it('Test Case 3: Login User with incorrect email and password', () => {
        menu.irParaLoginCadastro();
        login.entrar('tester-bla@mail.com','54321bla');
        // assert - verificacao da saída do teste / comportamento esperado
        cy.get('.login-form > form > p').should('contain', 'Your email or password is incorrect!')
    });
    it('Test Case 4: Logout User', () => {
        menu.irParaLoginCadastro();
        login.entrar('tester-1723066176776@mail.com','12345');
        // assert - verificacao da saída do teste / comportamento esperado - login
        cy.get('i.fa-user').parent().should('contain', 'TesterRNV QA');
        // act - acao principal do teste
        cy.contains('Logout').click();
        // assert - verificacao da saída do teste / comportamento esperado - logout
        cy.url().should('contain', 'login')
        cy.get('h2').contains("Login to your account").should("be.visible");
    });
    /*
    it('Test Case 5: Register User with existing email', () => {
        menu.irParaLoginCadastro();
        // assert - verificacao da saída do teste / comportamento esperado - Signup
        cy.get('.signup-form h2').contains("New User Signup!").should("be.visible");
        cadastro.entrarNomeEmail('TesterRNV QA','tester-1723066176776@mail.com');
        // assert
        cy.get(`.signup-form form p`)
          .should('be.visible')
          .and('contain', 'Email Address already exist!')
    });
    it('Test Case 6: Contact Us Form', () => {
        menu.irParaContato();
        //assert contact
        cy.get(`div .contact-form h2`)
        .should('be.visible')
        .and('have.text', 'Get In Touch')
        //arrange
        cy.get('[data-qa="name"]').type(`Tester`)
        cy.get('[data-qa="email"]').type(`tester-qa@mail.com`)
        cy.get('[data-qa="subject"]').type(`Test Automation`)
        cy.get('[data-qa="message"]').type(`Learning Test Automation`)
        cy.fixture('example.json').as('arquivo_alias')
        cy.get('input[name="upload_file"]').selectFile('@arquivo_alias')
        // act
        cy.get('[data-qa="submit-button"]').click()
        // assert 
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
    });
    it('Test Case 8: Verify All Products and product detail page', () => {
        menu.irParaProducts();
        //assert products
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')
        //arrange e act
        cy.get('.single-products')
        .should('be.visible')
        .and('have.length.at.least', 1)
        .first()   // seleciona primeiro
        .parent()  // para ficar iluminado o "View Product"
        .contains('View Product')  //ilumina o botão  fica no foco
        .click()
        //assert
        cy.get('.product-information > h2').should('be.visible')  //nome
        //category,availability, condition, brand
        cy.get('.product-information p').should('be.visible').and('have.length', 4) 
        cy.get('.product-information span span').should('be.visible') //preço
    });
    it('Test Case 9: Search Product', () => {
        menu.irParaProducts();
        //assert products
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')
        //arrange
        cy.get('input#search_product').type('Tshirt')
        //act
        cy.get('button#submit_search').click()
        //assert
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
            .first() //ilumina o primeiro
    });
    it('Test Case 10: Verify Subscription in home page', () => {
        //arrange
        cy.get('input#susbscribe_email')
            .scrollIntoView()  //rolar até chegar na página
            .type('tester-qa@mail.com')
        //act
        cy.get('button#subscribe').click()
        //assert
        cy.contains('You have been successfully subscribed!').should('be.visible')
    });
    it('Test Case 15: Place Order: Register before Checkout', () => {
        menu.irParaLoginCadastro();
        cadastro.preencherFormulario()
                .verificarSeCadastroFoiConclido();
        cy.contains("Add to cart").click()
        cy.contains("View Cart").click()
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
        cy.get('.heading').first().should('have.text', 'Address Details')
        cy.get('.heading').last().should('have.text', 'Review Your Order')
        cy.get('.form-control').type('123 45678-9012')
        cy.get('.btn-default.check_out').click()
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]').type(5)
        cy.get('[data-qa="expiry-year"]').type(3000)
        cy.get('[data-qa="pay-button"]').click()
        //cy.contains('Your order has been placed successfully!')
        cy.get('[data-qa="order-placed"]').should('be.visible')
        cy.get('[href *="delete"]').click()
        cy.get('b').should('contain', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()
        //cy.screenshot()
    });
    */
});