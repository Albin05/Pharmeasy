import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Auth } from "../../../Redux/Action/Auth";

export const Home = () => {

    const dispatch = useDispatch()
    const auth = useSelector(store => store.auth.login);
    if(sessionStorage.getItem("token")) {
        dispatch(Auth(true))
    }
    console.log('auth',auth)
    return (
        <>
        <div>Home</div>
        </>
    )
}