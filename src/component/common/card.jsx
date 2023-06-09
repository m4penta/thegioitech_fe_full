import { Link, useHistory } from 'react-router-dom';
import { discountPrice, formatCurrency } from '../../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const Card = (props) => {
  const { data, loading } = props;
  // eslint-disable-next-line no-unused-vars
  const { slug, _id, product_image, name, option, discount } = data;
  const history = useHistory();
  const cardUrl = `/product/${_id}`;

  const handleAddToCard = () => {};
  const handleBuyNow = () => {
    history.push('/card');
  };

  return (
    <article className='card'>
      {loading && <span>Loading ...</span>}
      {!loading && data && (
        <>
          {discount && <span className='card-label'>Giảm {discount}%</span>}
          <div className='card-heading'>
            <Link to={cardUrl} className='card-heading-link'>
              <img
                src={product_image[0].location}
                alt={name}
                className='card-heading-image'
              />
            </Link>
          </div>
          <div className='card-content'>
            <h5 className='card-content-heading'>
              <Link to={cardUrl} className='card-content-heading-link'>
                {name}
              </Link>
            </h5>
            <div className='card-content-price-box'>
              <span className='card-content-price price-left'>
                {option ? discountPrice(option[0].price, discount) : 0}
              </span>
              <span className='card-content-price price-right'>
                {option ? formatCurrency(option[0].price) : 0}
              </span>
            </div>
            <div className='card-content-action-box'>
              <Link
                className='btn card-content-action-buy'
                style={{
                  display: 'block',
                  textAlign: 'center',
                  lineHeight: '30px',
                  backgroundColor: '#fafafa',
                }}
                to={cardUrl}
              >
                Xem chi tiết
              </Link>
              {/* <button
                onClick={handleAddToCard}
                type='button'
                className='btn card-content-action-add'
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button> */}
            </div>
          </div>
        </>
      )}
    </article>
  );
};
