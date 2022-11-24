
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const url = 'https://www.google.com'

Given('I open', ()=>{
    cy.visit(url)
})
