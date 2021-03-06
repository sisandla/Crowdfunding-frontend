import React from 'react';
import DonateViews from './DonateViews';

const exports = {...DonateViews};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Attacher">
        <h2>Attacher (Bob)</h2>
        {content}
      </div>
    );
  }
}

exports.Attach = class extends React.Component {
  render() {
    const {parent} = this.props;
    const {ctcInfoStr} = this.state || {};
    return (
      <div>
        Please paste the contract info to attach to:
        <br />
        <textarea spellcheck="false"
          className='ContractInfo'
          onChange={(e) => this.setState({ctcInfoStr: e.currentTarget.value})}
          placeholder='{}'
        />
        <br />
        <button
          disabled={!ctcInfoStr}
          onClick={() => parent.attach(ctcInfoStr)}
        >Attach</button>
      </div>
    );
  }
}

exports.Attaching = class extends React.Component {
  render() {
    return (
      <div>
        Attaching, please wait...
      </div>
    );
  }
}

exports.AcceptTerms = class extends React.Component {
  render() {
    const {goal, standardUnit, parent} = this.props;
    const {disabled} = this.state || {};
    return (
      <div>
        The requested donation amount by the Donee is:
        <br /> Goal: {goal} {standardUnit}
        <br />
        <button
          disabled={disabled}
          onClick={() => {
            this.setState({disabled: true});
            parent.termsAccepted();
          }}
        >Accept goal</button>
      </div>
    );
  }
}

exports.Verification = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Alice did a good job with this checkpoint!!!
        <br />
      </div>
    );
  }
}

exports.Gratification = class extends React.Component {
  render() {
    const {y, parent} = this.props;
      return (
        <div>
          Alice will receive the money! Thanks for handing over the bag 
        </div>
      );
  }    
}

export default exports;
