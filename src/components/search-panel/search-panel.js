import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
   return (
      <div>
         <input 
            type="text"
            className="form-control search-input"
            placeholder="Поиск по записям"
         />
      </div>
   )
} 

export default SearchPanel;
