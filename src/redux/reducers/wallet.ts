// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';

type Wallet = {
  currency: string[];
  expenses: [];
  edit: boolean;
  id: number;
};

const INITIAL_STATE: Wallet = {
  currency: [],
  expenses: [],
  edit: false,
  id: 0,
};

const wallet = (state: Wallet = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default wallet;
