import React, { Component } from 'react';
import './App.css';
import { API_KEY } from '../constants/API';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import ArticleList from '../components/ArticleList';
// import SideDrawer from '../components/SideDrawer';
import MenuAppBar from '../components/MenuAppBar';
import TestComponent from '../components/TestComponent';

class App extends Component {
  state = {
    news: [],
    topheadlines: [],
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
      <div> 
        
        <MenuAppBar style={{ position:'relative', display: 'block'}}/>

        <Switch>
          <Route exact path="/" render={() => {
                  return <ArticleList 
                            news={this.state.news} 
                            onSearchChange={this.onSearchChange}
                            getNews={this.getNews} />
                  }} 
                /> 
          <Route exact path="/headlines" render={() => {
                  return <TestComponent />
                  }} 
                /> 
        </Switch>

      </div>

      
    );
  }
}

export default App;
