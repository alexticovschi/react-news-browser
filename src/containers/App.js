import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import { API_KEY } from '../constants/API';

import axios from 'axios';
import ArticleList from '../components/ArticleList';

class App extends Component {
  state = {
    news: [],
    searchfield: ''
  }

  onSearchChange = (event) => {
    event.preventDefault();

    this.setState({ searchfield: event.target.value});
    console.log(this.state.searchfield)
  }

  getNews = (event) => {
    event.preventDefault();
    this.setState({news: []});
    // this.setState({loading: true});
    // const keywords = this.state.searchfield;
    // const topHeadlines = `https://newsapi.org/v2/top-headlines?country=uk&apiKey=${API_KEY}`;
    // const topic = `${PROXY}https://newsapi.org/v2/everything?q=${this.state.searchfield}&apiKey=${API_KEY}`;
    const topic = `https://newsapi.org/v2/everything?q=${this.state.searchfield}&apiKey=${API_KEY}`;

    axios.get(topic)
        .then(response => {
            const fetchedNews = [];
            console.log(response.data.articles);
            
            response.data.articles.map(article => fetchedNews.push(article));
            this.setState({news: fetchedNews});

  
            // this.setState({loading: false});
            
            console.log('[STATE NEWS]:',this.state.news);
    })
    .catch(error => {
        console.log(error);
    });
  }

  render() {
    return (
    <section className="mw9 center avenir">
      <h2 className="baskerville fw1 ph3 ph0-l">News</h2>
      <div className="tc">

        <SearchBox 
          searchChange={this.onSearchChange} 
          getNews={this.getNews}
          />

        <ArticleList news={this.state.news} />

      </div>
    </section>
    
    );
  }
}

export default App;
