import React, { Component } from 'react'
import { render } from 'react-dom';
import PropTypes from 'prop-types';


const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`
  const request = new XMLHttpRequest()
  request.open('GET', api)
  request.onload = () => (request.status == 200) ?
    resolves(JSON.parse(request.response).results) :
    reject(Error(request.statusText))
  request.onerror = (err) => rejects(err)
  request.send()
})

const Member = ({ email, picture, name, location }) => {
  return (
    <div className="member">
      <img src={picture.thumbnail} style={{ width: '100px' }} alt="" /> 
      <h1>{name.first} {name.last}</h1>
      <p><a href={'mailto:' + email}>{email}</a></p>
      <p>{location.city}, {location.state}</p>
    </div>
  )
};

class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      loading: false,
      error: null,
    }
  }

  componentWillMount() {
    this.setState({loading: true})
    getFakeMembers(this.props.count).then(
        members => {
            this.setState({members, loading: false})
            console.log(this.state)
        },
        error => {
            this.setState({error, loading: false})
        }
    )
  }

  render() {
    const { members, loading, error } = this.state;
    return (
      <div className="member-list">
        {(loading) ?
          <span>Loading Members</span> :
          (members.length) ?
            members.map((user, i) =>
              <Member key={i} {...user} />
          ) :
          <span>0 members loaded...</span>
        }
        {(error) ? <p>Error Loading Members: error</p> : ''}
      </div>
    )
  }
}

render(
  <MemberList count={500}/>,
  document.querySelector('#react-app')
)






