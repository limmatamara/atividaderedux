import { useEffect } from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { moment } from "moment";
import styles from '../styles/Pessoa.module.css'
import { createUser, readUser, updateUser, deleteUser, updateForm  } from "../store/actions/PessoasActions";

const Pessoa = ( { listaDePessoas, editar, initialValues, auth, dispatch}) => {
  useEffect( () => {        
    readUser(dispatch) 
  }, []);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      createUser(values, dispatch);
    },
  });

  return (
    <div className={styles.containerPessoa}>
      <h1>Cadastrar Usuário</h1>
      <form onSubmit={formik.handleSubmit}>
            <div className={styles.input}>
              <label htmlFor="nome">Nome:</label>
              <input id="nome" name="nome" type="text" placeholder="Digite o nome" onChange={formik.handleChange} value={formik.values.nome} />
            </div>

            <div className={styles.input}>
              <label htmlFor="email">E-mail:</label>
              <input id="email" name="email" type="email" placeholder="Digite o email" onChange={formik.handleChange} value={formik.values.email} />
            </div>

            <div className={styles.input}>
              <label htmlFor="dataDeNascimento">Data de Nascimento:</label>
              <input id="dataDeNascimento" name="dataDeNascimento" type="date" placeholder="Digite a data de nascimento" onChange={formik.handleChange} value={formik.values.dataDeNascimento}
              />
            </div>

            <div className={styles.input}>
              <label htmlFor="cpf">CPF:</label>
              <input id="cpf" name="cpf" type="text" placeholder="Digite o CPF" onChange={formik.handleChange} value={formik.values.cpf} />
            </div>
            
            
            <div>
            {!editar && <button type="submit">Cadastrar</button>}
            {editar && <button type="button" onClick={()=> updateUser(formik.values, dispatch)}>Salvar</button>}
            </div>
          </form>  
    
          <div>
            { listaDePessoas.map(pessoa =>(
              <div  key={pessoa.idPessoa}> 
                <p>{pessoa.nome}</p>
                <p>{pessoa.email}</p>
                <p>{moment(pessoa.dataNascimento).format("DD/MM/YYYY")}</p>
                <p>{pessoa.cpf}</p>              
                
                <div>
                  <button onClick={() => deleteUser(pessoa.idPessoa, dispatch)}>Deletar</button>
                  
                  <button onClick={() => updateForm(pessoa, dispatch,formik)}>Editar</button>
                </div>
              </div>
            ))}
          </div>
    </div>      
  )
}

const mapStateToProps = state =>({
  listaDePessoas: state.pessoaReducer.listaDePessoas,
  initialValues: state.pessoaReducer.initialValues,
  editar: state.pessoaReducer.editar,
  auth: state.authReducer.auth
})

export default connect(mapStateToProps) (Pessoa);


