describe('kintai', () => {
    beforeEach(() => {
        cy.visit('https://s2.kingtime.jp/independent/recorder/personal/')
    })
    it('displays two todo items by default', () => {
        cy.get('#id').type(Cypress.env('login_id'))
        cy.get('#password').type(Cypress.env('login_password'))
        cy.get('.btn-control-message').click()

        const dt = new Date();
        if (dt.getHours() === 9) {
            // 出勤
            cy.contains('出勤').click()
        } else if (dt.getHours() === 12) {
            // 休始
            cy.contains('休始').click()
        } else if (dt.getHours() === 13) {
            // 休終
            cy.contains('休終').click()
        } else if (dt.getHours() === 18) {
            // 退勤
            cy.contains('退勤').click()
        }
    })
})