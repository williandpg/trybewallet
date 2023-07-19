// Coloque aqui suas actions
export const EMAIL_USER = 'EMAIL_USER';

export const emailUser = (email: string) => ({
  type: EMAIL_USER,
  payload: email,
});
