import React from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css';


const PostStatusFilter = () => {
   return(
      <div className="btn-group">
         <Button color="info">Все</Button>
         <Button color="secondary" outline>Понравилось</Button>
      </div>
   )
}
export default PostStatusFilter;
