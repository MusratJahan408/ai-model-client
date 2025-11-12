import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate } from 'react-router';

const PrivateRout = ({children}) => {
    const { user, loading } = use(AuthContext);
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user) {
      return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
    }
    return children;
};

export default PrivateRout;