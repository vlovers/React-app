import React, {Component} from 'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import './app.css'


export default class App extends Component {
   constructor(props){
      super(props);
      this.state = {
         data: [{
               label: 'Going to learn React',
               important: false,
               id: 'asfaf'
            },
            {
               label: 'That is so good',
               important: true,
               id: 'fghyny'
            },
            {
               label: 'I need a break...',
               important: false,
               id: 'yj7j6ty'
            }
         ]
      };
      this.deleteItem = this.deleteItem.bind(this);
      this.addItem = this.addItem.bind(this);


      
   }

   deleteItem(id) {
      this.setState(({data}) => {
         const index = data.findIndex(elem => elem.id === id);
         
         const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

         // более понятный вариант
         // const before = data.slice(0, index);
         // const after = data.slice(index + 1);
         // const newArr = [...before, ...after];

         return {
            data: newArr
         }

         // State нельзя менять на прямую!!!
         // data.slice(index, 1);
         // return{
         //    data: data
         // }
         
      });
   }  
   
   addItem(body){

      const newItem = {
         label: body,
         important: false,
         id: nextId('jv')
      }
      this.setState(({data}) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
         
      });
      
      
   }

   render() {
      const {data} = this.state;
      
      return(
         <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
               <SearchPanel/>
               <PostStatusFilter />
            </div>
         <PostList 
            posts={data}
            onDelete={this.deleteItem}/>
         <PostAddForm 
         onAdd={this.addItem}/>
         </div>
      )
   }
}

