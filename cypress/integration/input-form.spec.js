describe('Input form', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('focuses input on load', () => {
    

    cy.focused()
      .should('have.class', 'new-todo')
  })

  it('accepts input', () => {
    const typedText = 'Buy Milk'
    cy.get('.new-todo')
      .type(typedText)
      .should('have.value', typedText)
  })

  context('Form Submission', () => {
    it.only('Adds a new todo on submit', () => {
      const itemText = 'Buy eggs'
      cy.server()
      cy.route('POST', 'api/todos', {
        name: 'blah',
        id: 1,
        isComplete: false,
      })
      cy.get('.new-todo')
        .type(itemText)
        .type('{enter}')
      cy.get('todo-list li')
        .should('have.length', 1)
        .and('contain', itemText)
    })

  })
})