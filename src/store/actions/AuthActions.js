import api from '../../api';

export const handleLogin = async(values, dispatch) => {
  const {data} = await api.post('/auth', values);
  if (data) {
    localStorage.setItem('token', data);
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
      loading: false
    }
    dispatch(logado);
  } else {
    alert('Erro no login, tente novamente!');
  }
}

export const handleLogout = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    localStorage.removeItem('token');
    const logout = {
      type: 'SET_LOGOUT',
      token: '',
      auth: false,
      loading: true
    } 
    dispatch(logout)
  }
}
