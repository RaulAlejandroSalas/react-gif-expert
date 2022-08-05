import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Test in <GifGrid/>', () => {
    const category = 'naruto'
    test('Should display the loading and initial category ', () => {
        
        //Initialize useFetchGifs hook
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true //for loading text
        })
        
        render(<GifGrid category={category}/>)
        //screen.debug()
        expect(screen.getByText('Loading ...'))
        expect(screen.getByText( category ))
     })

     test('should display images items when loaded using useFetchGifs', () => { 
        
        const gifs= [
            {
                id:'1',
                title: 'Saitama',
                url: 'htpps://saitama.com/saitama.jpg'
            },
            {
                id:'2',
                title: 'Naruto',
                url: 'htpps://naruto-web.com/naruto.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        })
        
        render(<GifGrid category={category}/>)    
        
        expect(screen.getAllByRole('img').length).toBe(2)
        //screen.debug()
      })

})