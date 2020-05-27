import React from 'react';
import {Button} from 'reactstrap';
import './post-add-form.css';

const PostAddForm = () => {
   return ( 
      <form className="bottom-panel d-flex">
         <input
            type="text"
            placeholder="О чем Вы думаете сейчас"
            className = "form-control new-post-label"
         />
         <Button color="secondary">Добавить пост</Button >
         

      </form>
   )
}
export default PostAddForm;