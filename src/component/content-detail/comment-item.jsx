import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { axiosClient } from "../../access/api/axios-client";
import { getUserDecode } from "../../redux/authSlice";

export const CommentItem = (props) => {
  const { _id, user, updatedAt, content, product, replyComment, onRefesh } =
    props;
  const [replyActive, setReplyActive] = useState(false);
  const replyRef = useRef(null);
  const [error, setError] = useState("");
  const userInfo = useSelector(getUserDecode);

  const handleReplyClick = () => {
    setReplyActive(!replyActive);
  };

  const handleReplySubmit = async () => {
    if (replyRef.current.value.length < 5) {
      setError(true);
      return;
    }
    setError(false);
    const replyComment = {
      content: replyRef.current.value,
      user: userInfo._id,
      product: product._id,
    };
    try {
      await axiosClient.post("/comment/reply?id=" + _id, replyComment);
      replyRef.current.value = "";
      setReplyActive(false);
      onRefesh();
    } catch (error) {
      console.log(
        "🚀 ~ file: comment-item.jsx ~ line 30 ~ handleReplySubmit ~ error",
        error
      );
    }
  };

  return (
    <div key={_id} className="comment-list-item">
      <div className="comment-item-media">
        <img
          src={"https://hoanghamobile.com/Content/web/img/no-avt.png"}
          alt="No avatar"
          className="rounded-circle comment-item-img"
        />
      </div>
      <div className="comment-item-content">
        <div className="comment-item-detail">
          <div className="comment-detail-heading">
            <p className="comment-detail-heading-text">
              {user.firstName + " " + user.lastName}
            </p>
            <time className="comment-detail-time">
              {moment(updatedAt).fromNow()}
            </time>
          </div>
          <p className="comment-detail-text">{content}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={handleReplyClick}
        className="comment-action"
      >
        <FontAwesomeIcon icon={faReply} />
      </button>
      <div className="reply-comment-list">
        {replyComment?.map(({ content, _id, user }) => (
          <div key={_id} className="comment-list-item reply-comment-item">
            <div className="comment-item-media media">
              <img
                src={user.image}
                alt=""
                className="rounded-circle comment-item-img"
              />
            </div>

            <div className="comment-item-detail reply-comment-content">
              <div className="comment-detail-heading">
                <p className="comment-detail-heading-text">
                  {user.firstName + " " + user.lastName}
                  {user.role === "admin" ? (
                    <span className="comment-manager">Quản trị viên</span>
                  ) : null}
                </p>
                <time className="comment-detail-time">
                  {moment(updatedAt).fromNow()}
                </time>
              </div>
              <p className="comment-detail-text content-main">{content}</p>
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="comment-reply-input"
        ref={replyRef}
        placeholder="Nhập tối thiểu 5 ký tự."
        style={{ display: replyActive ? "block" : "none" }}
      />
      <button
        type="button"
        onClick={handleReplySubmit}
        className="comment-reply-btn"
        style={{ display: replyActive ? "block" : "none" }}
      >
        Gửi
      </button>
      {error && (
        <span className="reply-error">Vui lòng điền tối thiểu 5 ký tự!</span>
      )}
    </div>
  );
};
