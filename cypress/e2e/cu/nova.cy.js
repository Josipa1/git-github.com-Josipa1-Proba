
import { Given, When, Then, Else } from '@badeball/cypress-cucumber-preprocessor'

const url = 'https://www.google.com'

Given('I open', ()=>{
    cy.visit(url).wait(100).expect('https://www.google.com')
})

When('I close'

)
