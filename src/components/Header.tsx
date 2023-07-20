import React from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const root = useSelector((state: any) => state);

  return (
    <div>
      <h1 data-testid="email-field">{root.user.email}</h1>
      <h1 data-testid="total-field">
        Despesa total:
        {' '}

        {`${0}`}
      </h1>
      <h1 data-testid="header-currency-field">Câmbio utilizado: BRL</h1>
    </div>
  );
}

export default Header;
