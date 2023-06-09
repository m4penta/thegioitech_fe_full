import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { authAction } from '../../redux/authSlice';
import { cartAction } from '../../redux/cartSlice';

const UserInfo = ({ data }) => {
  const { email, firstName, lastName, image, role } = data;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    if (window.confirm('Bạn có chắc!')) {
      dispatch(cartAction.destroyCart());
      dispatch(authAction.deleteUser());
      history.push('/login');
    }
  };

  return (
    <div
      className='container'
      style={{
        padding: '2rem 1.4rem',
        backgroundColor: '#fff',
        margin: '1rem auto',
        borderRadius: '1.2rem',
      }}
    >
      <h4>Thông tin user</h4>
      <p>
        <img src={image} alt='avatar' />
      </p>
      <p>Email: {email}</p>
      <p>Tên: {firstName + lastName}</p>
      <p>Phân quyền: {role === 1 ? 'admin' : 'user'}</p>
      <button onClick={handleLogoutClick}>Đăng xuất</button>
    </div>
  );
};

export default UserInfo;
