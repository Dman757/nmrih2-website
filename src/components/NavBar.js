import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import '../App.css'

class NavBar extends Component {
  render () {
    const { pathname } = this.props.location
    return (
      <div className="navBar">
        <NavLink
          exact
          to="/"
          activeClassName="navSelect"
          className="navItem"
        >
        Home
        </NavLink>
        <NavLink
          to="/about-us"
          activeClassName="navSelect"
          className="navItem"
        >
        About Us
        </NavLink>
      </div>
      // <Menu pointing>
      //   <Menu.Item
      //     as={Link}
      //     to='/'
      //     active={pathname === '/'}
      //     name='home'
      //   />
      //   <Menu.Item
      //     as={Link}
      //     to='/what'
      //     active={pathname === '/what'}
      //     name='what'
      //   />
      //   <Menu.Item
      //     as={Link}
      //     to='/shithouse'
      //     active={pathname === '/shithouse'}
      //     name='SHITHOUSE'
      //   />
      // </Menu>
    )
  }
}
export default NavBar
