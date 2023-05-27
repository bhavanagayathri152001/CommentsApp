import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, deleteButton, toggledLikeButton} = props
  const {
    name,
    date,
    comment,
    initialBackGroundColor,
    id,
    isLiked,
  } = commentDetails
  const initial = name[0]
  const time = formatDistanceToNow(date)

  const isLikedComment = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedClassName = isLiked ? 'liked-class-name' : ''

  const isLikedText = isLiked ? 'Liked' : 'Like'

  const onClickDeleteBtn = () => {
    deleteButton(id)
  }

  const onClickLikeBtn = () => {
    toggledLikeButton(id)
  }

  return (
    <>
      <li>
        <div className="comment-details-container">
          <div className={`initial-container ${initialBackGroundColor}`}>
            {initial}
          </div>
          <div className="name-comment-container">
            <div className="name-time-container">
              <p className="person-name">{name}</p>
              <p className="time-text">{time} ago</p>
            </div>
            <p className="comment-text">{comment}</p>
          </div>
        </div>
        <div className="like-delete-container">
          <div className="like-image-container">
            <img src={isLikedComment} alt="like" className="like-image" />
            <button
              type="button"
              className={`like-btn ${likedClassName}`}
              onClick={onClickLikeBtn}
            >
              {isLikedText}
            </button>
          </div>
          <button
            type="button"
            className="delete-btn"
            onClick={onClickDeleteBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
      <hr />
    </>
  )
}
export default CommentItem
