import { useSelector } from 'react-redux';
import { selectAuth } from '@/store/auth/authSelector';

const useAuth = () => {
  const { user } = useSelector(selectAuth);

  return {
    isAuth: !!user,
    user,
  };
};

export default useAuth;
