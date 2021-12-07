const INITIAL_STATE = {
    editar: false,  
    listaDePessoas: [],
    initialValues: {
    nome: '',
    email: '',
    dataDeNascimento: '',
    cpf: '',
    idPessoa: 1  
  }
}

const pessoaReducer = (state = INITIAL_STATE, action) => {
  if (action === 'READ_PESSOA') {
    return {
      ...state,
      listaDePessoas: action.listaDePessoas
    }
  }
  
  if (action === 'UPDATE_PESSOA') {
    return {
      ...state,
      editar: true,
      initialValues: action.initialValues
    }
  }

  return state;
}

export default pessoaReducer;