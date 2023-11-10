import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = ({isAuthorized,redirectPath='/login'}) => {


    if(!isAuthorized){
        return <Navigate to={redirectPath} replace />
    }

    return <Outlet/>
}

export default PrivateRoute
