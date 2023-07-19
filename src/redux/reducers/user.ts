// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_USER } from '../actions';

type User = {
  email: string;
};
const INITIAL_STATE: User = {
  email: '',
};

const user = (state = INITIAL_STATE, action: { type: string, payload: string }) => {
  switch (action.type) {
    case EMAIL_USER:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default user;
