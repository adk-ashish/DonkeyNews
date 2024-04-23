import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Donkey News</h2>
        <div className="row">
          <div className="col-md-4">
          <NewsItem title="Mytitle" description="myDescription" imageUrl="https://i.cbc.ca/1.7179497.1713559032!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/russia-ukraine-war-washington.jpg"/>
          </div>
          <div className="col-md-4">
          <NewsItem title="Mytitle" description="myDescription"/>
          </div>
          <div className="col-md-4">
          <NewsItem title="Mytitle" description="myDescription"/>
          </div>
        </div>
        
        
      </div>
      
    )
  }
}

export default News