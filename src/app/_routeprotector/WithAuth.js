import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'; 

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const isLoggedIn = useSelector(state => state.session.user); 

    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/auth'); 
      }
    }, [isLoggedIn, router]);

    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
