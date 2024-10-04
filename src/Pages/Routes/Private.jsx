import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();
    if(user){
        return children;
    }
    return <Navigate to={"/sign-in"} state={{from:location}} replace />
};

export default Private;