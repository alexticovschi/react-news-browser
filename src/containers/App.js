import React, { Component, Fragment } from 'react';
import './App.css';
import { API_KEY } from '../constants/API';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import ArticleList from '../components/ArticleList';
// import SideDrawer from '../components/SideDrawer';
import MenuAppBar from '../components/MenuAppBar';
import Sources from '../components/Sources';
import NewsCategories from '../components/NewsCategories';
import LoadMoreBtn from '../components/LoadMoreBtn';
import Footer from '../components/Footer';
import Headlines from './Headlines';
import ScrollUpButton from "react-scroll-up-button"; 

class App extends Component {
  state = {
    searchfield: '',
    news: [],
    topheadlines: [],
    sources: [],
    displayLoadMoreBtn: false,
    page: 2
  }

  componentDidMount() {
    this.getNewsCategory();
    this.getSource();
    this.getTopHeadlines();
  }


  onSearchChange = (event) => {
    event.preventDefault();

    this.setState({ searchfield: event.target.value});
    console.log(this.state.searchfield)
  }

  getNews = () => {
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

  
            this.setState({displayLoadMoreBtn: true});
            
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

  getTopHeadlines = () => {
    const topHeadlines = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    axios.get(topHeadlines)
        .then(response => {
            const fetchedNews = [];
            console.log(response.data.articles);
          
            response.data.articles.map(article => fetchedNews.push(article));
            this.setState({topheadlines: fetchedNews});            
            console.log('[STATE TOPHEADLINES]:',this.state.topheadlines);
    })
    .catch(error => {
        console.log(error);
    });   
  }

  loadMore = () => {
    
    // const resp = await fetch(
    // `https://newsapi.org/v2/everything?q=${this.state.searchfield}&apiKey=${API_KEY}&page=${this.state.page}`
    // );
    const topic = `https://newsapi.org/v2/everything?q=${this.state.searchfield}&apiKey=${API_KEY}&page=${this.state.page}`;

    axios.get(topic)
        .then(response => {
            const fetchedNews = [];
            console.log(response.data.articles);
            
            response.data.articles.map(article => fetchedNews.push(article));
            let count = this.state.page + 1;
            this.setState({ page: count });

            const new_list = [...this.state.news, ...fetchedNews];
            this.setState({news: new_list});

  
            // this.setState({loading: false});
            
            console.log('[STATE NEWS]:',this.state.news);
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
                      topHeadlines={this.state.topheadlines}
                      news={this.state.news} 
                      onSearchChange={this.onSearchChange}
                      getNews={this.getNews} 
                      loadMore={this.loadMore} 
                      displayLoadMoreBtn={this.state.displayLoadMoreBtn} />
            }} 
          /> 
          <Route exact path="/news-sources" render={() => {
            return <Sources 
                      sources={this.state.sources} />
            }} 
          /> 

          <Route exact path="/entertainment" render={() => {
            return <NewsCategories 
                      sources={this.state.entertainment} />
            }} 
          /> 

          <Route exact path="/general" render={() => {
            return <NewsCategories 
                      sources={this.state.general} />
            }} 
          />

          <Route exact path="/sports" render={() => {
            return <NewsCategories 
                      sources={this.state.sports} />
            }} 
          />  

          <Route exact path="/technology" render={() => {
            return <NewsCategories 
                      sources={this.state.technology} />
            }} 
          />  

          <Route path="/:news_source" component={ Headlines } />

          <LoadMoreBtn loadMore={this.loadMore}/>
          
        </Switch>

        <ScrollUpButton ContainerClassName="scroll-up-button"/>
        
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
