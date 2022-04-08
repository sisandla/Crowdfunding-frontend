import React from 'react';

const exports = {};

// Donate views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, acceptable, hand} = this.props;
    console.log(parent);
    console.log(acceptable);
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!acceptable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!acceptable}
          onClick={() => parent.playHand('ACCEPT')}
        >Accept Funds</button>
        <br />
        <button
          disabled={!acceptable}
          onClick={() => parent.playHand('DECLINE')}
        >Decline Funds</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for participating. The outcome are:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;