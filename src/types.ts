export type Wallet = {
  currencies: string[];
  expenses: [];
  edit: boolean;
  id: number;
};

export type UserTypes = {
  user: {
    email: string;
  }
};

export type Expenses = {
  id: number,
  value: any,
  description: string,
  currency: string,
  method: string,
  tag: string
  exchangeRates: {
    [key: string]: {
      name: string,
      ask: any,
    }
  }
};

export type WalletState = {
  wallet: {
    currencies: string[];
    expenses: Expenses[];
  }
};

export type ReduxState = {
  isFetching: boolean,
  currencies: string
};
