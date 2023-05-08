import './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dp from './dp.jpg'
import { Link } from 'react-router-dom';
import Comment from '../comments/Comment';
import React, { useState } from 'react';

const Post = ({ post }) => {

  const [commentOpen, setCommentOpen] = useState(false)

  const liked = false;

  return (
    <div className='post'>
      <div className="container">
        <div className="user">
          <div className="userinfo">
            <img src={dp} alt="dp" />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: 'inherit' }}>
                <span className='name'>{post.name}</span>
              </Link>
              <span className='date'>1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
          </div>
        </div>
        {commentOpen && <Comment />}
      </div>
    </div>
  )
}

export default Post
