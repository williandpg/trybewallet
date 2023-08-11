import React from 'react';
import { useSelector } from 'react-redux';
import { WalletState } from '../types';

function Header() {
  const root = useSelector((state: any) => state);
  const { expenses } = useSelector((state:WalletState) => state.wallet);
  const sumTotal = () => {
    let total = 0;
    expenses.forEach((expense:any) => {
      const result = expense.value * expense.exchangeRates[expense.currency].ask;
      total += result;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <h1 data-testid="email-field">{root.user.email}</h1>
      <h1 data-testid="total-field">{sumTotal()}</h1>
      <h1 data-testid="header-currency-field">Câmbio utilizado: BRL</h1>
    </div>
  );
}

export default Header;
