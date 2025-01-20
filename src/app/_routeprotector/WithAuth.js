import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.session.user);
    const [loading, setLoading] = useState(true);  // Add a loading state

    useEffect(() => {
      if (isLoggedIn !== undefined) {
        setLoading(false); 
      }
    }, [isLoggedIn]);

    useEffect(() => {
      if (!loading && !isLoggedIn) {
        router.push('/auth'); 
      }
    }, [loading, isLoggedIn, router]);

    if (loading) {
      return <div>Loading.......</div>; 
    }

    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
