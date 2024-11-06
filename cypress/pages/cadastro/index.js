class Cadastro {
    preencherFormulario() {
        const timestamp = new Date().getTime()
        const signUpName = 'TesterRNV QA'
        Cypress.env('signUpName',signUpName);

        cy.get('[data-qa="signup-name"]').type(signUpName)
        cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@mail.com`)
        cy.contains('button', 'Signup').click()
        cy.get('input[type=radio]').check('Mrs')
        cy.get('input[type=radio]').eq(1).check() // 0, 1, 2
        cy.get('[type=password]').type('12345', { log: false })
        cy.get('[data-qa="days"]').select('24')
        cy.get('[data-qa="months"]').select('September')
        cy.get('[data-qa="years"]').select('1985')
        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()
        cy.get('[data-qa="first_name"]').type('R')
        cy.get('[data-qa="last_name"]').type('VN')
        cy.get('[data-qa="company"]').type('CloudeC')
        cy.get('[data-qa="address"]').type('rua R, n 1')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('Califórnia')
        cy.get('[data-qa="city"]').type('Los Angeles')
        cy.get('[data-qa="zipcode"]').type('90001')
        cy.get('[data-qa="mobile_number"]').type('111 222 333')
        cy.get('[data-qa="create-account"]').click()

        cy.url().should('includes', 'account_created')
        // -> https://automationexercise.com/account_created

        cy.get('[data-qa="account-created"]').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()
        return this
    }
    entrarNomeEmail(nome, email){
        cy.get('[data-qa="signup-name"]').type(nome)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()
        return this
       }
    verificarSeCadastroFoiConclido(){
        cy.get('i.fa-user').parent().should('contain', Cypress.env('signUpName'))
        return this                          //fluent pages objects
    }
};

export default new Cadastro();