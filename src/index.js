import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/app';

class WhoAmI extends Component {
   constructor(props) {
      super(props);
      this.state = {
         years: 26
      }
      this.nextYear = this.nextYear.bind(this); 
   }
   nextYear() {
      // this.state.years++ Неправельно!!!
      this.setState(state => ({
         years: ++state.years
      })) //Правильно
   }
   render() {
      const {name, surname, link} = this.props; 
      const{years} = this.state;
      return (
      <>
         <button onClick={this.nextYear}>++</button>
         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
         <a href={link}>My profile</a>
      </>
      )
   }
}

const All = () => {
  return(
      <>
         <WhoAmI name="Jhone" surname="Smith" link="facebook.com"/>
         <WhoAmI name="Misha" surname="Kogyt" link="facebook.com"/>
      </>
  )
}

ReactDOM.render(<All /> , document.getElementById('root'));

