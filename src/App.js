import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15;
  apiKey = "f48f1687d1354c869a18d9ca97632302";

  state = {
    progress: 5,
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress,
    })
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"></News>}>

          </Route>
          <Route exact path="business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"></News>}>

          </Route>
          <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"></News>}>

          </Route>
          <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"></News>}>

          </Route>
          <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"></News>}>

          </Route>
          <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"></News>}>

          </Route>
          <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"></News>}>

          </Route>
          <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"></News>}>

          </Route>
        </Routes>
      </div>
    );
  }
}
