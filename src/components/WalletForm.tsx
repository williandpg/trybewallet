import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Expenses, WalletState, ReduxState } from '../types';
import { addExpense, findCurrency } from '../redux/actions';

type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;

function WalletForm() {
  const dispatch:Dispatch = useDispatch();
  useEffect(() => {
    dispatch(findCurrency());
  }, [dispatch]);
  const { currencies } = useSelector((state:WalletState) => state.wallet);
  const [inputValue, setInputValue] = useState('');
  const [inputCurrency, setInputCurrency] = useState('USD');
  const [inputPayment, setInputPayment] = useState('Dinheiro');
  const [inputCategory, setInputCategory] = useState('Alimentação');
  const [inputDescription, setInputDescription] = useState('');
  const [inputId, setInputId] = useState(0);
  const formClear = () => {
    setInputValue('');
    setInputDescription('');
  };
  const handlerSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    const expenses:Expenses = {
      id: inputId,
      value: inputValue,
      currency: inputCurrency,
      method: inputPayment,
      tag: inputCategory,
      description: inputDescription,
      exchangeRates: {},
    };
    setInputId((e) => e + 1);
    dispatch(addExpense(expenses));
    formClear();
  };

  return (
    <form onSubmit={ handlerSubmit }>
      <label htmlFor="value">
        Valor da Despesa
        <input
          type="number"
          data-testid="value-input"
          value={ inputValue }
          onChange={ (event) => {
            setInputValue(event.target.value);
          } }
        />
      </label>
      <label htmlFor="currency">
        Moeda da Despesa
        <select
          data-testid="currency-input"
          onChange={ (event) => setInputCurrency(event.target.value) }
          value={ inputCurrency }
        >
          { currencies.length > 0
            && currencies.map((currency:any, index:number) => {
              return (
                <option
                  value={ currency }
                  key={ index }
                >
                  { currency }
                </option>
              );
            })}
        </select>
      </label>
      <label htmlFor="payment">
        Método de pagamento
        <select
          data-testid="method-input"
          value={ inputPayment }
          onChange={ (event) => {
            setInputPayment(event.target.value);
          } }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="category">
        Categoria da Despesa
        <select
          data-testid="tag-input"
          value={ inputCategory }
          onChange={ (event) => {
            setInputCategory(event.target.value);
          } }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
      <label htmlFor="description">
        Descrição da Despesa
        <input
          type="text"
          data-testid="description-input"
          value={ inputDescription }
          onChange={ (event) => {
            setInputDescription(event.target.value);
          } }
        />
      </label>
      <button type="submit" data-testid="btn-submit-test">Adicionar Despesa</button>
    </form>
  );
}

export default WalletForm;
