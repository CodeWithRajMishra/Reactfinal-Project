import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { myloginContext } from "./LoginContext";
const App=()=>{
  const {user}= useContext(myloginContext);

  return(
    <>
      <h1> Welcome To Login Syatem!</h1>
      {user.auth?<UnAuthApp/>:<AuthApp/>}

    </>
  )

}

export default App;