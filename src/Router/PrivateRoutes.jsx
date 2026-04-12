import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
      const { loading,user } = useContext(AuthContext);
      const location = useLocation();
      console.log(location);
      if(loading){
        return <p>Loading...</p>
      }
      if(user){
       return children
      }
    return <Navigate state={location ?.pathname} to={'/auth'}></Navigate>
};

export default PrivateRoutes;