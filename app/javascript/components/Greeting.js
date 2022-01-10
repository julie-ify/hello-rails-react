import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

function getMessages() {
  console.log('getMessages() Action!!');
  return (dispatch) => {
    dispatch({ type: GET_MESSAGES_REQUEST });
    return fetch(`v1/messages.json`)
      .then((response) => response.json())
      .then((json) => dispatch(getMessagesSuccess(json)))
      .catch((error) => console.log(error));
  };
}

export function getMessagesSuccess(json) {
  return {
    type: GET_MESSAGES_SUCCESS,
    json,
  };
}

class Greeting extends React.Component {
  render() {
    const { greetings } = this.props;
    const messagesList = greetings.map((greet, index) => {
      return <li key={index}> {greet.greeting} </li>;
    });
    return (
      <div className='container'>
        Greeting: {this.props.greeting}
        <br />
        <button onClick={() => this.props.getMessages()}>Get greeting</button>
        <br />
        <ul>{messagesList}</ul>
      </div>
    );
  }
}

const structuredSelctor = createStructuredSelector({
  greetings: (state) => state.greetings,
});

const mapDispatchToProps = { getMessages };

Greeting.propTypes = {
  greeting: PropTypes.string,
};
export default connect(structuredSelctor, mapDispatchToProps)(Greeting);
