import moment from "moment";

const CardPessoa = (pessoa, deleteUser, updateUser) => {
  return (
    <div>
      <div>
        <p><strong>Nome:</strong>{pessoa.nome}</p>
        <p><strong>E-mail:</strong>{pessoa.email}</p>
        <p><strong>Data de Nascimento</strong>{moment(pessoa.dataDeNascimento).format('DD/MM/YYYY')}</p>
        <p><strong>CPF:</strong>{pessoa.cpf}</p>
      </div>
      <div>
        <button onClick={()=> updateUser(pessoa)}>Editar</button>        
        <button onClick={()=> deleteUser(pessoa.idPessoa)}>Deletar </button>
      </div>
    </div>
  )
}

export default CardPessoa;