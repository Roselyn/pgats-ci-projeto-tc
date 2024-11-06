class Menu {
    irParaProducts() {
        cy.contains(`Products`).click();
        return this
    }
    irParaLoginCadastro() {
        cy.contains(`Signup`).click()
        return this
    }
    irParaContato() {
        cy.contains(`Contact us`).click()
        return this
    }
}

export default new Menu;