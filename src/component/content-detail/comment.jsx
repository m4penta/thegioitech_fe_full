import { faPaperPlane, faReply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserDecode } from '../../redux/authSlice';
import { query } from '../../access';
import { axiosClient } from '../../access/api/axios-client';
import { CommentItem } from './comment-item';

export const Comment = (props) => {
  const { productId, name } = props;
  const [comment, setComment] = useState([]);
  const [update, setUpdate] = useState({ value: 1 });
  const userInfo = useSelector(getUserDecode);
  const commentRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const comment = {
      content: commentRef.current.value,
      user: userInfo._id,
      product: productId,
    };
    console.log(
      '🚀 ~ file: comment.jsx ~ line 22 ~ handleFormSubmit ~ comment',
      comment
    );
    try {
      await axiosClient.post('/comment/add', comment);
      setUpdate((state) => ({ value: state.value + 1 }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    setUpdate((state) => ({ value: state.value + 1 }));
  };

  useEffect(() => {
    let isCancelling = false;
    (async () => {
      try {
        const {
          data: { productComment },
        } = await query().comment.getListByProductId(productId);
        if (isCancelling === false) {
          setComment(productComment);
        }
      } catch (error) {}
    })();

    return () => {
      isCancelling = true;
    };
  }, [productId, update.value]);

  return (
    <section className='comment-wrap'>
      <div className='comment'>
        <div className='comment-heading'>
          <h5 className='comment-heading-text'>Bình luận về {name}</h5>
        </div>
        <form className='comment-form' onSubmit={handleFormSubmit}>
          <div className='form-field-bottom'>
            <textarea
              placeholder='Nội dung. Tối thiểu 15 ký tự'
              required
              minLength='15'
              className='comment-form-area'
              ref={commentRef}
            ></textarea>
          </div>
          <div className='comment-form-action'>
            <div className='comment-form-action-text'>
              <p>* Để gửi bình luận, bạn cần nhập tối thiểu 15 ký tự.</p>
              {userInfo === null && (
                <p style={{ color: '#fd475a' }}>
                  * Bạn cần đăng nhập để bình luận!
                </p>
              )}
            </div>
            <button
              type={userInfo === null ? 'button' : 'submit'}
              className='btn comment-form-action-btn'
              style={{ cursor: userInfo === null ? 'no-drop' : 'pointer' }}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Gửi bình luận</span>
            </button>
          </div>
        </form>
        <div className='comment-list'>
          {comment.length > 0 ? (
            comment.map((item) => (
              <CommentItem key={item._id} {...item} onRefesh={handleRefresh} />
            ))
          ) : (
            <p style={{ textAlign: 'center' }}>Chưa có bình luận!</p>
          )}
        </div>
      </div>
    </section>
  );
};
