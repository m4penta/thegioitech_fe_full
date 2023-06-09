import { discountPrice } from '../../util';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../redux/cartSlice';

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, option, color, discount, product_image, quantity } = product;
  console.log('rerender');
  return (
    <div className='cart-items'>
      <div className='item '>
        <div className='img'>
          <img src={product_image[0].location} alt={name} />
          <p className='title'>{name}</p>
          <p className='price'>
            <strong>
              {discountPrice(option[0].price * quantity, discount)}
            </strong>
            <strike>{discountPrice(option[0].price * quantity)}</strike>
          </p>
          <div className='number'>
            <label>Số lượng</label>
            <div className='control'>
              <button onClick={() => dispatch(cartAction.subQuantity(product))}>
                -
              </button>
              <span
                style={{
                  display: 'inline-block',
                  border: '1px solid gray',
                  padding: '0 4px',
                }}
              >
                {product.quantity}
              </span>
              <button onClick={() => dispatch(cartAction.addQuantity(product))}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className='info'>
          <div className='edit'>
            <a
              href='#3'
              className='red'
              onClick={() => dispatch(cartAction.deleteCart(product))}
            >
              x
            </a>
          </div>
          <div className='promote'>
            <div className='offer-items' id='of_OPPA95B'></div>
          </div>
          <div className='options'>
            <div className='option'>
              <strong>Phiên bản</strong>
              <label>
                <i className='icon-checked' />
                <span>{option[0].value}</span>
              </label>
            </div>
            <div className='option'>
              <strong>Màu sắc</strong>
              <label>
                <i className='icon-checked' />
                <span>{color[0].name}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
