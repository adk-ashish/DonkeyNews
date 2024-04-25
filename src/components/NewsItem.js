import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div className="card mx-3 my-2" style={{}}> 
        <img src={!imageUrl?"https://i.cbc.ca/1.7179497.1713559032!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/russia-ukraine-war-washington.jpg":imageUrl}  className="card-img-top" alt="..." /> 
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{ description===null || description.length==0 ? " ": description}</p>   
          <a href={newsUrl} target="_blank" className="btn btn-primary">
            Read More...
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
