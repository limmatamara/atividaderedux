import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { handleLogout } from '../store/actions/AuthActions';
import styles from './Menu.module.css'



const Menu = ({ auth, dispatch }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li><Link to='/' >Inicio</Link></li>
        <li><Link to='/login' >Login</Link></li>
        {auth.auth ?
          <>
            <li><Link to='/pessoa' >Pessoas</Link></li>
            <li><button onClick={() => handleLogout(dispatch, navigate)}>Sair</button></li>
          </>
          : null}
      </ul>
    </nav>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Menu);
