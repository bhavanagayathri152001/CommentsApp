import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentDetails: [], nameInput: '', commentInput: ''}

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const randomNumber = Math.ceil(Math.random() * 6)
    const initialBackGroundColor =
      initialContainerBackgroundClassNames[randomNumber]

    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      initialBackGroundColor,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentDetails: [...prevState.commentDetails, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeCommentInput = event => {
    this.setState({commentInput: event.target.value})
  }

  deleteButton = commentId => {
    const {commentDetails} = this.state
    this.setState({
      commentDetails: commentDetails.filter(
        eachComment => eachComment.id !== commentId,
      ),
    })
  }

  toggledLikeButton = id => {
    this.setState(prevState => ({
      commentDetails: prevState.commentDetails.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentDetails, nameInput, commentInput} = this.state
    const commentsCount = commentDetails.length
    return (
      <div className="bg-container">
        <div>
          <h1 className="comments-heading">Comments</h1>
          <div className="comments-top-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comment-image"
              />
            </div>
            <div className="comments-input-container">
              <p className="description">
                Say something about 4.0 Technologies
              </p>
              <form onSubmit={this.onAddComment}>
                <input
                  type="text"
                  className="input-text"
                  placeholder="Your Name"
                  onChange={this.onChangeNameInput}
                  value={nameInput}
                />
                <br />
                <textarea
                  rows="7"
                  cols="35"
                  className="text-area"
                  placeholder="Your Comment"
                  onChange={this.onChangeCommentInput}
                  value={commentInput}
                />
                <br />
                <button type="submit" className="add-comment-button">
                  Add Comment
                </button>
              </form>
            </div>
          </div>
          <hr />
          <div className="comment-count-container">
            <button type="button" className="comments-count-btn">
              {commentsCount}
            </button>
            <p className="comment-text">Comments</p>
          </div>
          <ul className="ul-container">
            {commentDetails.map(eachCommentDetails => (
              <CommentItem
                commentDetails={eachCommentDetails}
                toggledLikeButton={this.toggledLikeButton}
                deleteButton={this.deleteButton}
                key={eachCommentDetails.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
