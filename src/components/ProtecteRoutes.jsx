
import { Outlet, Navigate } from 'react-router-dom'
import NavScroll from "./NavScroll";
const ProtectedRoutes = () => {
let token=localStorage.getItem("CC_Token");
// console.log("token est " + token)
return(
token!=null ? <><NavScroll/><Outlet/></>: <Navigate to="/login"/>
)
}
export default ProtectedRoutes