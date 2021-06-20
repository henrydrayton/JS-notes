import React from "react"

const Comment = (props) => {
    return (
        <div className= "comment">
        <a href="/" className="avatar">
            <img alt="avatar" src="https://i.pravatar.cc/48" />
        </a>
        <div className="content">
            <a href= "/" className="author" >{props.author}</a>
            <p className="date">11/12 6:00pm</p>
            <p className="text">This is cool!</p>
        </div>
      </div>
    )
}

export default Comment 