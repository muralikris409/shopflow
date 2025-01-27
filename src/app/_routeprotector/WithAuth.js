import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isLoggedIn = useSelector((state) => state.session.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Check if isLoggedIn is defined and set loading to false
      if (isLoggedIn !== undefined) {
        setLoading(false);
      }
    }, [isLoggedIn]);

    useEffect(() => {
      // Only navigate if loading is complete and user is not logged in
      if (!loading) {
        if (!isLoggedIn) {
          router.push('/auth');
        }
      }
    }, [loading, isLoggedIn, router]);

    // Show loading state while checking authentication
    if (loading) {
      return <div>Loading.......</div>;
    }

    // Render the wrapped component if the user is logged in
    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;