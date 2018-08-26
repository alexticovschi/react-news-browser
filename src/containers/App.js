import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import { API_KEY } from '../constants/API';

import axios from 'axios';


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
    // const keywords = this.state.keywords;
    // const topHeadlines = `https://newsapi.org/v2/top-headlines?country=uk&apiKey=${API_KEY}`;
    // const topic = `${PROXY}https://newsapi.org/v2/everything?q=${this.state.keywords}&apiKey=${API_KEY}`;
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
      <div className="App">
        <SearchBox 
          searchChange={this.onSearchChange} 
          getNews={this.getNews}
          />
        
      </div>
    );
  }
}

export default App;
