const { render, screen, fireEvent } = require("@testing-library/react")
const { AddCategory } = require("../../src/components/AddCategory")

describe('Test in <AddCategory/>', () => {
    test('should change of Value into TextInput', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>)

        //Getting Html Input
        const input = screen.getByRole('textbox')
        //Dispatch Event
        fireEvent.input( input, { target: { value: 'naruto' }} )    
        //screen.debug() 
        expect( input.value ).toBe('naruto')   
    })

    test('should call OnNewCategory, if the imput has a value', () => { 
        const inputValue = 'naruto'
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole('textbox')
        const form  = screen.getByRole('form')
        //Dispatch Event
        fireEvent.input( input, { target: { value: inputValue }} )    
    
        fireEvent.submit( form )
    
        //screen.debug()
        expect( input.value ).toBe('')
    })
 })