import { useState } from "react"
import { read } from "./utils"

const logIn = ({setter}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    await signUp(username, password, setter)
  }

return (
  <div>
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit ={submitHandler}>
        <label>Username:
          <input onChange = {(event) => setUsername(event.target.value)}/>
        </label>
        <br></br>
        <label>Password:
          <input onChange = {(event) => setPassword(event.target.value)}/>
        </label>
        <br></br>
        <button type="submit">Click here to SignIn or LogUp!</button>
    </form>
  </div>
)

}

export default logIn;