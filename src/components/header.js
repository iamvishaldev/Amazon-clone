import PropType from 'prop-types'
import { Btn } from "./btn"

export const Header = ({text}) => {

  //call function in btn components
  function onClick() {
    console.log('here is button click')
  }
  return (
    <div className="header">
     <h1>{text}</h1> 
     <Btn color="green" text="add" onClick={onClick}/>
    </div>
  )
}

Header.PropType = {
  text:PropType.string
}
