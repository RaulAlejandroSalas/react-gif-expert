import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue]=useState('')
  const onInputChange = ({target}) =>{
      setInputValue(target.value)
  }

  const onSummit = (event)=>{
    event.preventDefault()
    if(inputValue.trim()<=1)  return
    setInputValue('')
    onNewCategory(inputValue.trim())
  }

  return(
      <>
          <form onSubmit={onSummit}>
              <input
                  type="text"
                  placeholder="Search Gif"
                  value={inputValue}
                  onChange={onInputChange}
              />
          </form>
      </>
  )
}