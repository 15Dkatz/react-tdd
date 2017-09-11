import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
  constructor() {
    super();

    this.state = { balance: undefined };
  }

  updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10) })

  deposit = () => this.props.deposit(this.state.balance)

  withdraw = () => this.props.withdraw(this.state.balance)

  render() {
    return (
      <div>
        <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
        <br />
        <input className='input-wallet' onChange={this.updateBalance} />
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
      </div>
    )
  }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(Wallet);