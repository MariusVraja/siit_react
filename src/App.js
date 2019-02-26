import React from "react";
import MainMenu from "./mainMenu";

class App extends React.Component {
  render() {
    return (
      <header>
        <MainMenu site_name="My First React App" />
        <h1>My First React App</h1>
      </header>
    );
  }
}

export default App;
