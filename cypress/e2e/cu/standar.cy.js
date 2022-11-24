
import { Given, When, Then, Else } from '@badeball/cypress-cucumber-preprocessor'

const url1 = 'https://www.google.com'

Given('I open', ()=>{
    cy.visit(url1)
})
