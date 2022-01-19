import { useState } from "react"

const App = () => {
  const [userState, setUserState] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = ({ target: { name, value} }) => {
    setUserState({ ... userState, [name]: value})
  }
  const handleFormSubmit = () => {

  }

  return (
    <>
      <form>
        <p>
          <label htmlFor="name"></label>
          <input 
          type="text" 
          name="name" 
          id="name"
          />
        </p>
        <p>
          <label htmlFor="email"></label>
          <input type="text" name="email" id="email" />
        </p>
        <p>
          <label htmlFor="password"></label>
          <input type="text" name="password" id="password" />
        </p>
      </form>
    </>
  )
}

export default App
