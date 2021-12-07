import api from '../../api'

export const readUser = async (dispatch) => {
  const token = localStorage.getItem('token');
  const { data } = await api.get('/pessoa', {headers: {authorization:token}});
  const pessoa = {
    type: 'READ_PESSOA', 
    listaDePessoas: data
  }
}

export const createUser = async (values, dispatch) => {
  const token = localStorage.getItem('token')
  await api.post('/pessoa', values, {headers: {authorization:token}} );
  readUser(dispatch)
}

export const updateForm = async (pessoa, dispatch, formik) =>{
    const dadosForm = ({
      type: 'UPDATE_PESSOA',
      editar: true, 
      initialValues: {
        nome: pessoa.nome,
        email: pessoa.email,
        dataDeNascimento: pessoa.dataDeNascimento,
        cpf: pessoa.cpf,
        idPessoa: pessoa.idPessoa
      }
    })
  dispatch(updateForm)
  formik.setValues(dadosForm.initialValues)
}

export const updateUser = async (values, dispatch) => {
  const token = localStorage.getItem('token');
  await api.put(`/pessoa/${values.id}`, values, {headers: {authorization:token}});
 readUser(dispatch);
}

export const deleteUser = async (idPessoa, dispatch) => {
  const token = localStorage.getItem('token');
  await api.delete(`/pessoa/${idPessoa}`, {headers: {authorization:token}});
  readUser(dispatch);
}