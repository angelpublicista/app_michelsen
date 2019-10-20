import React, {Component} from 'react';

class Header extends Component {
    render(){
      return (
          <header className="app-header">
            <h2 id="nameSection">{this.props.name}</h2>

            <div className="navbar">
              <img src={this.props.avatar} className="avatar-profile"></img>
              <span className="item-header">{this.props.user}</span>
            </div>
          </header>
      );
    }
  }
  
  export default Header;