import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import styled from 'styled-components';
import FollowingCard from './components/FollowingCard';

const ListDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #282c34;
`

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      following: []
     };
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/Eloy2`)
    .then(res => {
      console.log("res", res.data);
      this.setState({ user: res.data});
    })
    .catch(err => console.log("error axios component mount", err));

    axios
    .get(`https://api.github.com/users/Eloy2/followers`)
    .then(res => {
      console.log("2nd res", res.data);
      this.setState({following: res.data})
      console.log("following state",this.state.following);
    })
    .catch(err => console.log("error 2nd axios component mount", err));
  }

  render() {
    return (
      <div>
        <ListDiv>
          <Card user={this.state.user}/>
          <FollowingCard following={this.state.following}/>
        </ListDiv>
      </div>
    )
  }

}

export default App;
