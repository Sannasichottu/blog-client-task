import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/1619779/pexels-photo-1619779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor, sit amet.
            </span>
            <hr />
            <span className="postDate">1 hur ago</span>
        </div>
        <p className='postDesc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, placeat natus sit velit porro, a dolore nulla nisi deserunt voluptates quaerat consectetur deleniti corrupti totam architecto. Error nostrum nobis inventore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, placeat natus sit velit porro, a dolore nulla nisi deserunt voluptates quaerat consectetur deleniti corrupti totam architecto. Error nostrum nobis inventore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, placeat natus sit velit porro, a dolore nulla nisi deserunt voluptates quaerat consectetur deleniti corrupti totam architecto. Error nostrum nobis inventore.</p>
    </div>
  )
}
