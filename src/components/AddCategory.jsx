import {useState} from "react";
import PropTypes from 'prop-types'

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
          <form onSubmit={onSummit} aria-label='form'>
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

//The NewCategory is required
AddCategory.propTypes={
    onNewCategory: PropTypes.func.isRequired
}