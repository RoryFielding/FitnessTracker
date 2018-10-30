import React, { Component } from 'react';
import fire from './config/Fire';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleCChange.bind(this)
        this.state = {
            email: '',
            password: '',
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    
        }).catch((error) => {
          console.log(error);
        });
      }

      handleChange(e) {
          this.setState({
              [e.target.name]: e.target.value
          });
      }
}