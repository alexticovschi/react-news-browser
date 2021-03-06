import React, { Component, Fragment } from "react";
import axios from "axios";
import Article from "../components/Article";
import {Animated} from "react-animated-css";

class HeadLines extends Component {
  state = {
    headlines: [],
    sourceName: ""
  };

  componentDidMount() {
    this.getHeadlines(this.props.match.params.news_source);
  }

  getHeadlines = id => {
    const API_KEY = "c2efb8780907417c84d9027561b67407";
    const url = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=${API_KEY}`;

    axios
      .get(url)
      .then(response => {
        const fetchedHeadLines = [];

        response.data.articles.map(source => fetchedHeadLines.push(source));
        this.setState({ headlines: fetchedHeadLines });

        let name = "";
        this.state.headlines.forEach((article, i) => {
          if (article.source.id === this.props.match.params.news_source) {
            name = article.source.name;
            this.setState({ sourceName: name + " Top Headlines" });
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Fragment>
        <div className="headlines">
          <h1 style={{marginTop:"0px"}}>.</h1>

          <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
            <h2 className="source-name tc">{this.state.sourceName}</h2>
          </Animated>
          
          {this.state.headlines.map((article, i) => (
            <div key={i}>
              <section className="mw8 center avenir">
                <div className="tc">
                  <Article                    
                    id={article.id}
                    img={article.urlToImage}
                    articleTitle={article.title}
                    description={article.description}
                    publishedAt={article.publishedAt}
                    sourceName={article.source.name}
                    articleUrl={article.url}
                    articlePublisher={article.publisher}
                  />
                </div>
              </section>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default HeadLines;