import React, { Component, Fragment } from 'react';
import './App.css';
import { API_KEY } from '../constants/API';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import ArticleList from '../components/ArticleList';
// import SideDrawer from '../components/SideDrawer';
import MenuAppBar from '../components/MenuAppBar';
import Sources from '../components/Sources';

class App extends Component {
  state = {
    searchfield: '',
    news: [],
    topheadlines: [],
    sources: [],
  }

  componentDidMount() {
    this.getNewsCategory();
    this.getSource();
  }


  onSearchChange = (event) => {
    event.preventDefault();

    this.setState({ searchfield: event.target.value});
    console.log(this.state.searchfield)
  }

  getNews = (event) => {
    event.preventDefault();
    this.setState({news: []});
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

  getSource = () => {
    axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
      .then(response => {
          const fetchedSources = [];
          //console.log(response.data.articles);
          
          response.data.sources.map(source => fetchedSources.push(source));
          this.setState({sources: fetchedSources});
          
          console.log('[STATE SOURCES]:',this.state.sources);
    })
    .catch(error => {
        console.log(error);
    }); 
  }

  getNewsCategory = () => {
    axios.get(`https://newsapi.org/v2/sources?apiKey=${API_KEY}`)
      .then(response => {
        const entertainmentSources = [],
              generalSources = [],
              sportsSources = [],
              technologySources = [];

        //console.log(response.data.articles);
        response.data.sources.forEach(source => {
            if (source.category === 'general') generalSources.push(source);
            else if (source.category === 'entertainment') entertainmentSources.push(source);
            else if (source.category === 'sports') sportsSources.push(source);
            else if (source.category === 'technology') technologySources.push(source);
        });        
        
        this.setState({
          entertainment: entertainmentSources,
          general: generalSources,
          sports: sportsSources,
          technology: technologySources
        });
    })
    .catch(error => {
        console.log(error);
    }); 
  }

  render() {
    console.log(this.state)
    return (
      <Fragment> 
        <MenuAppBar />

        <Switch>
          <Route exact path="/" render={() => {
                  return <ArticleList 
                            news={this.state.news} 
                            onSearchChange={this.onSearchChange}
                            getNews={this.getNews} />
                  }} 
                /> 
          <Route exact path="/news-sources" render={() => {
                  return <Sources 
                            sources={this.state.sources} />
                  }} 
                /> 
          {/* <Route path="/:news_source" component={ HeadLines } /> */}

        </Switch>
      </Fragment>
    );
  }
}

export default App;
