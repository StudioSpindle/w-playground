// eslint-disable-next-line import/prefer-default-export
export const createApiHeaders = (): Headers => {
  const h = new Headers();

  h.append('Content-Type', 'application/json');
  h.append('Accept', 'application/json');

  const session = {
    token: localStorage.getItem('token')
  };

  if (session.token) {
    h.append('Authorization', `Bearer ${session.token}`);
  }

  return h;
};
