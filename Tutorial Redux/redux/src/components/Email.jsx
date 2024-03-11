import { useSelector } from "react-redux"

import { useDispatch } from "react-redux"

import { changeEmail } from "../redux/userSlice"


export default function Email(){

    const email = useSelector((state)=>{return state.user.email}) //variante con el return
    const dispatch = useDispatch()


    const handdleNewEmail= (e) => {
        const newMail = e.target.value
        dispatch(changeEmail(newMail))
    }

    return(
        <input type="email" value={email} placeholder="Email"
         onChange={(e)=>handdleNewEmail(e)}/>
    )
}