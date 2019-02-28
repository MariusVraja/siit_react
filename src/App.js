import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainMenu from "./shared/mainMenu";
import { PostList, PostDetails } from "./views/posts";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainMenu site_name="My First React App" />
          
          <Route exact path="/" component={ () => <h2>Homepage</h2>} />
          <Route path="/posts" component={ PostList } />
          <Route path="/postdetails" component={ PostDetails } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
