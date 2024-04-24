import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsURL } = this.props;
    return (
      <div className="card mx-3 my-2" style={{ width: "18rem" }}>
        <img src={imageUrl}  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,30)}...</h5>
          <p className="card-text">{ description===null || description.length==0 ? " ": description.slice(0,70)}...</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
