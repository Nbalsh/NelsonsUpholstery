import React, { Component } from 'react';
import './Body.css';
import Gallery from '../Gallery/Gallery';

import { Route, Link } from 'react-router-dom'

class Body extends Component {
  render() {
    return (
        <div className='-body'>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/suppliers' component={Topics}/>
        </div>
    );
  }
}
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)
const Suppliers = () => (
  <div>
    <h2>Suppliers</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


export default Body;



