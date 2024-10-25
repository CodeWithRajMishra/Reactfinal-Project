import { useContext } from "react";
import { myloginContext } from "./LoginContext";
const UnAuthApp=()=>{
    const {user, logout}= useContext(myloginContext);
    return(
        <>
          <h1> Welcome : {user.name} !</h1>
          <button onClick={()=>{logout()}}>Logout</button>
        </>
    )
}
export default UnAuthApp;