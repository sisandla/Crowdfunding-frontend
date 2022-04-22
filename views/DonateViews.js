import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.DeployerAgreement = class extends React.Component {
  render() {
    const {parent, accepted} = this.props;
    return (
      <div>
        <button
          onClick={() => parent.playHand('ACCEPTED')}
        >Accept</button>
        <button
          onClick={() => parent.playHand('DECLINED')}
        >Decline</button>
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
        Thank you for playing. The outcome of this game was:
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