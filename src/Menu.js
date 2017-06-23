import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

import './resources/font-awesome/icons/regular/css/external-min.css';

class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      menus: [
        {id: 1, url: "/posts", title: "Posts", icon: "pen-alt"}
      ]
    }
    this.loadMenus();
  }

  render() {
    return(
      <div>
          {this.renderMenus()}
          {this.props.logout}
      </div>
    );
  }

  renderMenus() {
    return this.state.menus.map((item) => {
      let iconClassName = `far far-${item.icon}`;
      return (
          <MenuItem
            key={item.id}
            containerElement={<Link to={item.url} />}
            primaryText={<span><i className={iconClassName} style={{ marginRight: 10 }}/>{item.title}</span>}
            onTouchTap={this.props.onMenuTap}
          />
      )
    });
  }

  async loadMenus() {
    let response = await fetch('http://localhost:8080/menus/bylevel/0');
    let menus = await response.json();
    this.setState({ menus });
  }
}

export default Menu;
