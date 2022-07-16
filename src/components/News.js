import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  capitalize(word) {
    let temp = word.split("");
    temp[0] = temp[0].toUpperCase();
    return temp.join("");
  }
  async update() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(25);
    let parsedData = await data.json();
    this.props.setProgress(75);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: this.state.page + 1,
    });
    this.props.setProgress(100);
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }

  async componentDidMount() {
    this.update();
  }

  // handlePrevClick = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.update();
  // };
  // handleNextClick = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.update();
  // };

  fetchMoreData = async () => {
    // this.setState({
    //   page: this.state.page + 1,
    // });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "40px" }}>
          NewsMonkey - Top <strong>{this.capitalize(this.props.category)}</strong> Headlines
        </h1>
        {/* {this.state.loading && <Spinner></Spinner>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.articles.length === this.state.totalResults && <Spinner />}
        >
          <div className="container">
            <div className="row">

              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      publishedDate={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    ></NewsItem>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
