import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title = 'Nothing to show', description, imageUrl, newsUrl, publishedDate, author, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{ left: '90%', zIndex: 1 }}>{source}</span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"
            }
            className="card-img-top"
            alt="..."
            style={{ objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By <strong>{!author ? "Unknown" : author}</strong> on {new Date(publishedDate).toGMTString()}</small></p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
