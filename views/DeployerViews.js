import React from 'react';
import DonateViews from './DonateViews';

const exports = {...DonateViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      // this "className" is how class Deployer chooses this wrapper instead of the other
      <div className="Deployer">
        <h2>Deployer (Alice)</h2>
        {content}
      </div>
    );
  }
}

exports.SetAmount = class extends React.Component {
  render() {
    const {parent, defaultGoal, standardUnit} = this.props;
    const goal = (this.state || {}).goal || defaultGoal;
    const fundraiser1= (this.state || {}).fundraiser1 || 1;
    const fundraiser2= (this.state || {}).fundraiser2 || 1;
    const fundraiser3= (this.state || {}).fundraiser3 || 1;
    return (
      <div>
        <p>Goal:</p>
        <input type='number' placeholder={defaultGoal} onChange={(e) => this.setState({goal: e.currentTarget.value})}/> 
        {standardUnit}
        <br></br>
        <button
          onClick={() => parent.setGoal(goal, fundraiser1, fundraiser2, fundraiser3)}
        >Set donation goal</button>
      </div>
    );
  }
}


exports.Deploy = class extends React.Component {
  render() {
    const {parent, goal, standardUnit, fundraiser1, fundraiser2, fundraiser3} = this.props;
    return (
      <div>
        Goal (pay to deploy): <strong>{goal}</strong> {standardUnit}
        <br />
        <button
          onClick={() => parent.deploy()}
        >Deploy</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipborad(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipborad(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

exports.DoneeAgreement = class extends React.Component {
  render() {
    const {parent, accepted} = this.props;
    return (
      <div>
        <button
          onClick={() => parent.doAgreement('ACCEPTED')}
        >Accept</button>
        <button
          onClick={() => parent.doAgreement('DECLINED')}
        >Decline</button>
      </div>
    );
  }
}

export default exports;
