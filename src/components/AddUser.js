
import { Formik, Field, Form } from 'formik';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { createUser } from '../store/actions/PessoasActions';



const AddUsuario = ({ values}) => {
   return (
      <div>
        <h1>Cadastrar Usuário</h1>
        <Formik
          initialValues={{
            nome: '',
            email: '',
            dataNascimento: '',
            cpf: '',            
          }}

          onSubmit={(values) => {
            createUser(values);
          }}
        >
          <Form>
             <div>
               <label htmlFor="nome">Nome </label>
               <Field id="nome" name="nome" placeholder="Digite o nome do usuário" />
            </div>

            <div>
               <label htmlFor="email">E-mail</label>
               <Field id="email" name="email" placeholder="Digite o e-mail do usuário" />
            </div>

            <div>
               <label htmlFor="cpf">CPF</label>
               <Field id="cpf" name="cpf" placeholder="Digite o CPF do usuário" />
            </div>

            <div>
               <label htmlFor="dataNascimento">Data Nascimento</label>
               <Field id="dataNascimento" name="dataNascimento" placeholder="Digite a data de nascimento do Usuário" />
            </div>
            
            <button type="submit" onClick={console.log('clicou')}>Cadastrar</button>
          </Form>
        </Formik>
      </div>
   )    
}

const mapStateToProps = state => ({
   pessoa: state.pessoaReducer.pessoa
});
 
export default connect(mapStateToProps)(AddUsuario);


