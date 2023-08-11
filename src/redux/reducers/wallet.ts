// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';

type Wallet = {
  currencies: string[];
  expenses: [];
  edit: boolean;
  id: number;
};

const INITIAL_STATE: Wallet = {
  currencies: [],
  expenses: [],
  edit: false,
  id: 0,
};

const wallet = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'SUCCESSFUL_REQUEST':
      return {
        ...state,
        currencies: action.payload,
      };
    case 'SAVE_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

export default wallet;
