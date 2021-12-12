import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: '1d6f02fe7dd7d2bf8a65',
      clientSecret: '856efb72e0c43af28a6a9f50fba55544a57a9564 ',
      count: 5,
      sort: 'created: asc',
      repos: []
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default ProfileGithub;