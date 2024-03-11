import { useSelector } from "react-redux" //hook para acceder al estado de la store


export default function Header(){

    const user = useSelector((state)=>state.user) //.user es el nombre que le ponemos al slice en userSlice.js, el state llega al componente App gracias al provider y la prop storage
    console.log(user)

    return(
        <header>
            <h1>Ejemplo basico Redux con redux-toolkit y react-redux</h1>
            <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.userName}</li>
                <li>Email: {user.email}</li>
            </ul>
        </header>
    )
}