import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Footer, Header } from '../component';
import UserInfo from '../component/user-info';
import { getUserDecode } from '../redux/authSlice';

const UserInfoPage = () => {
  const userInfo = useSelector(getUserDecode);
  const history = useHistory();

  if (userInfo === null) {
    history.push('/login');
    return null;
  }

  return (
    <>
      <Header />
      <main className='userinfo-wrap'>
        <UserInfo data={userInfo} />
      </main>
      <Footer />
    </>
  );
};

export default UserInfoPage;
