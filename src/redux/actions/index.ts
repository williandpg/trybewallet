// Coloque aqui suas actions
import React from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Expenses, ReduxState } from '../../types';

type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

export const EMAIL_USER = 'EMAIL_USER';
export const emailUser = (email: string) => ({
  type: EMAIL_USER,
  payload: email,
});
export const initialRequest = () => ({
  type: 'INITIAL_REQUEST',
});
export const successfulRequest = (currencies: string[]) => ({
  type: 'SUCCESSFUL_REQUEST',
  payload: currencies,
});

export const findCurrency = () => {
  return async (dispatch: Dispatch) => {
    dispatch(initialRequest());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      const currency = Object.keys(data);
      dispatch(successfulRequest(currency));
    } catch (error: any) {
      console.log(error);
    }
  };
};
export const saveExpense = (element: Expenses) => ({
  type: 'SAVE_EXPENSE',
  payload: element,
});

export const addExpense = (expense: Expenses) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      dispatch(saveExpense({ ...expense, exchangeRates: data }));
    } catch (error) {
      console.log(error);
    }
  };
};
