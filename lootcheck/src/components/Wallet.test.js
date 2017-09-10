import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
  });

  it('creates an input to deposit into or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user types into the wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet.find('.input-wallet')
        .simulate('change', { target: { value: userBalance }});
    });

    it('updates the local wallet balance in `state` and converts it to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe('and the user wants to make a deposit', () => {
      beforeEach(() => wallet.find('.btn-deposit').simulate('click'));

      it('dispatches the `deposit()` it receives from props with the local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe('and the user wants to make a withdrawal', () => {
      beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));

      it('dispatches the `withdraw()` it receives from props with the local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});