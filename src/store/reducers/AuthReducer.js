const INITIAL_STATE = {
  auth: {
    token: '',
    auth: false,
    loading: true
  }
}

function authReducer(state = INITIAL_STATE, action) {
  if (action.type === 'SET_LOGIN') {
    return {
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading
      }
    }
  }

  if (action.type === 'SET_LOGOUT') {
    return {
      auth: {
        token: action.token,
        auth: action.auth,
        loading: action.loading
      }
    }
  }

  const INITIAL_STATE = {
    pessoa: {
      nome: '',
      email: '',
      dataDeNascimento: '',
      cpf: ''
    }
  }

  function pessoaReducer(state = INITIAL_STATE, action) {
    if (action.type === 'ADD_PESSOA') {
      
    }
  }
  return state
}

export default authReducer;