import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"

describe('Test in <GifGrid/>', () => {
    const category = 'naruto'
    test('', () => {
        render(<GifGrid category={category}/>)
        //screen.debug()
        expect(screen.getByText('Loading ...'))
        expect(screen.getByText( category ))
     })

})