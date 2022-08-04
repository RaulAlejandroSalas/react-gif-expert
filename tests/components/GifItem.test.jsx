const { render, screen } = require("@testing-library/react")
const { GitItem } = require("../../src/components/GitItem")

describe('Test in <GifItem.jsx/>', () => {
    const expectedTitle = 'Naruto'
    const expectedUrl   = 'https://naruto.com/naturo1.jpg'
    
    test('should match with the Snapshot', () => { 
        const {container} = render(<GitItem title={expectedTitle} url={expectedUrl}/>)
        expect(container).toMatchSnapshot()
     })

    test('should show the image with URL and ALT properties', () => {
        render(<GitItem title={expectedTitle} url={expectedUrl}/>)
        //screen.debug()
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(expectedUrl)
        expect(alt).toBe(expectedTitle)
     })

    test('should show the Component Text', () =>{
        render(<GitItem title={expectedTitle} url={expectedUrl}/>)
        expect(screen.getByText(expectedTitle)).toBeTruthy()
    })

 })