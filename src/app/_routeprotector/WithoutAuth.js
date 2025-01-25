"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const withoutAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.session.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        setLoading(false);
      };

      checkAuth();
    }, []);

    useEffect(() => {
      if (!loading && isLoggedIn) {
        router.back();
      }
    }, [loading, isLoggedIn, router]);

    if (loading) {
      return <div>Loading.......</div>;
    }

    return isLoggedIn ? null : <WrappedComponent {...props} />;
  };
};

export default withoutAuth;
