import React from "react";

class MainMenu extends React.Component {
  render() {
    return (
      <nav>
        <h1>{this.props.site_name}</h1>
        <ul>
          <li>
            <a href="https://google.com">Menu Item 1</a>
          </li>
          <li>
            <a href="#">Menu Item 2</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainMenu;
