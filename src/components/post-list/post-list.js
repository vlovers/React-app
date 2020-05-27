import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';



const PostList = ({posts}) => {
   const elements = posts.map((item) => {
      if ( typeof item === 'object' && isEmpty(item) ){ 
         const {id, ...itemProps} = item;
         return (
            <li key={id} className="list-group-item">
               <PostListItem {...itemProps}/>

               {/* Тоже самое что и <PostListItem {...item}/> но стандарт es9 */}
               {/* < PostListItem label = {item.label} important = {item.important}/> */}
            </li>
            )
        } 
   })

   function isEmpty(obj) {
      for (let key in obj) {
         return true;
      }
      return false;
   }
   
   return (
      <ListGroup className="app-list">
         {elements}
      </ListGroup>
   )
}

export default PostList;