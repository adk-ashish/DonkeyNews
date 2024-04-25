import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize='21' country='us' apikey='f4579648168d48a9bcc25e8147c5e7be' category='sports'/>
      </div>
    )
  }
}
