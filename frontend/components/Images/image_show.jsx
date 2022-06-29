import React from 'react';
import { Link } from 'react-router-dom';
import ErrorPage from '../404/404_page';
import { formatDateTime, formatDate, formatTime } from '../../util/date_util';

class ImageShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    // this.props.fetchImage();
    this.props.fetchUsers().then(() => this.props.fetchImage())
    // this.getAuthor();
  }

  editable() {
    return this.props.image.uploaderId === this.props.currentUserId ? (
      <Link to={`/images/${this.props.image.id}/edit`}>
        <svg 
          width="24" 
          height="24" 
          xmlns="http://www.w3.org/2000/svg" 
          fillRule="evenodd" 
          clipRule="evenodd"
        >
          <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z"/>
        </svg>
      </Link>
    ):(
      <div></div>
    )
  }

  userProfilePic() {
    return this.props.users[this.props.image.uploaderId]['profilepic'] ? (
      <img className="circular" src={this.props.users[this.props.image.uploaderId]['profilepic']}/>
    ) : (
      <img src={window.userIcon}/>
    )
  }

  render() {
    // debugger
    // const uploaderId = this.props.image.uploaderId

    if (!this.props.image) return <ErrorPage />
    // console.log(this.props.image.createdAt)
    // console.log(formatDate(this.props.image.createdAt))
    // console.log(this.props.image.uploaderId);
    // console.log(this.props.users)
    // console.log(this.props.users[this.props.image.uploaderId])
    // console.log(this.props.users[this.props.image.uploaderId]['username'])

    return (
      <div className="image-show-container">
        <div className="block-space"></div>
        <div className="image-container">
          <div className="user-profile-arrow">
            <Link to="/">
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1zm-1.5-7.506-4.751 4.507 4.751 4.507v-3.008h10.022v-2.998h-10.022z" fillRule="nonzero"/></svg>
            </Link>
          </div>
          <img className="show-image" src={this.props.image.imageUrl}/>
        </div>

        <div className="outer-info-comment-container">
          <div className="inner-info-comment-container">
            <div className="image-info-container">
              <div className="icons">
                <div className="svg-icon">
                  <div className="is">
                    <svg 
                      width="24" 
                      height="24" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fillRule="evenodd" 
                      clipRule="evenodd"
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/>
                    </svg>
                  </div>
                </div>
                <div className="svg-icon">
                  <div className="is">
                    <svg
                      width="24"
                      height="24"
                      clipRule="evenodd" 
                      fillRule="evenodd" 
                      strokeLinejoin="round" 
                      strokeMiterlimit="2" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m20 20h-15.25c-.414 0-.75.336-.75.75s.336.75.75.75h15.75c.53 0 1-.47 1-1v-15.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75zm-1-17c0-.478-.379-1-1-1h-15c-.62 0-1 .519-1 1v15c0 .621.52 1 1 1h15c.478 0 1-.379 1-1zm-15.5.5h14v14h-14zm6.25 6.25h-3c-.414 0-.75.336-.75.75s.336.75.75.75h3v3c0 .414.336.75.75.75s.75-.336.75-.75v-3h3c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3v-3c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fillRule="nonzero"/>
                    </svg>
                  </div>
                </div>
                <div className="svg-icon">
                  <div className="is">
                    <svg 
                      width="24" 
                      height="24" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fillRule="evenodd" 
                      clipRule="evenodd"
                    >
                      <path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/>
                    </svg>
                  </div>
                </div>
                <div className="svg-icon">
                  {this.editable()}
                </div>
              </div>
              <div className="image-show-uploader-info-container">
                {this.userProfilePic()}
                <div className="image-show-information-container">
                <h2 className="image-show-title">{this.props.image.title}</h2>
                <p className="image-show-author-info-container">
                  <span className="image-show-author-info-text">by</span>
                  <Link to={`/users/${this.props.image.uploaderId}`}>
                    <span className="image-show-author-first-name">{this.props.users[this.props.image.uploaderId]['firstName']}</span>
                    <span className="image-show-author-last-name">{this.props.users[this.props.image.uploaderId]['lastName']}</span>
                  </Link>
                  <svg height="16" viewBox="0 0 1792 1792" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>
                </p>
                </div>
              </div>
              <div className="image-uploaded-date-container">
                <span className="image-show-uploaded-date-info-text">Uploaded:</span>
                <span className="image-show-uploaded-date-info">{formatDate(this.props.image.createdAt)}</span>
              </div>
              <p className="image-show-description">{this.props.image.description}</p>
              <div className="image-show-popularity-container">
                <div className="image-show-popularity-pulse"></div>
                <div className="image-show-popularity-impressions"></div>
                <div className="image-show-popularity-popular"></div>
              </div>
              {/* likes */}
              {/* categories */}
            </div>
            <div className="image-comment-container">
              test
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageShow;