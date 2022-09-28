import React from 'react';
import './singlepost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
       <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
       </div>
       <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
       <div className="singlePostEdit">
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
       </h1>
       <div className="singlePostInfo">
        <span className="singlePostAuthor">Author : <b>Sannasi</b></span>
        <span className="singlePostDate">Date : 1 hur ago</span>
       </div>
       <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quasi nobis. Libero accusantium quidem reprehenderit harum quae alias optio ipsum, accusamus quas inventore dolor repudiandae ab corporis quibusdam minus exercitationem?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quasi nobis. Libero accusantium quidem reprehenderit harum quae alias optio ipsum, accusamus quas inventore dolor repudiandae ab corporis quibusdam minus exercitationem?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quasi nobis. Libero accusantium quidem reprehenderit harum quae alias optio ipsum, accusamus quas inventore dolor repudiandae ab corporis quibusdam minus exercitationem?
       </p>
    </div>
  )
}
