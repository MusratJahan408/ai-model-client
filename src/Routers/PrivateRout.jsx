import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import { Navigate } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';

const PrivateRout = ({children}) => {
    const { user, loading } = use(AuthContext);
    if (loading) {
      return <LoadingSpinner></LoadingSpinner>;
    }
  
    if (!user) {
      return <Navigate state={location?.pathname} to="/auth/login"></Navigate>;
    }
    return children;
};

export default PrivateRout;