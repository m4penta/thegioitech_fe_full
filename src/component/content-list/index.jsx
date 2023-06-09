import qs from 'qs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { query } from '../../access';
import { getQueryString } from '../../util';
import { Card } from '../common/card';
import './content-list.scss';

export const ContentList = (props) => {
  const [contentListData, setContentListData] = useState([]);
  const [filter, setFilter] = useState({});
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  const handleFilter = () => {
    setFilter(getQueryString(window.location));
  };

  useEffect(() => {
    const id = slug.split('-').slice(-1)[0];
    let isCancelling = false;
    (async () => {
      try {
        const { data } = await query().product.getFilter(
          qs.stringify({ category: id, ...filter })
        );
        if (isCancelling === false) {
          setContentListData(data);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
      return () => {
        isCancelling = true;
      };
    })();
  }, [slug, filter]);

  return (
    <section className='container content-list-wrap'>
      <div className='content-list'>
        <div className='content-list-filter'>
          <p className='filter-text'>Lọc danh sách:</p>
          <ul className='filter-list'>
            <li className='filter-item'>
              <p className='filter-item-text'>Sắp xếp</p>
              <ul className='filter-item-detail-list'>
                <li className='filter-item-detail-item'>
                  <Link
                    onClick={handleFilter}
                    to={`/category/${slug}?${qs.stringify({
                      sort: '-view',
                    })}`}
                    className='filter-item-detail-text'
                  >
                    Lượt xem nhiều đến thấp
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='content-list-product'>
          {contentListData?.map((entity) => (
            <Card key={entity._id} data={entity} loading={loading} />
          ))}
          {contentListData.length === 0 && (
            <p className='error-message'>Chưa có sản phẩm</p>
          )}
        </div>
      </div>
    </section>
  );
};
