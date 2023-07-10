import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {

    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/login');
    }

    const isAuth = isUserLoggedIn();
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href='http://localhost:3000' className='navbar-brand'>
                        Todo Application
                    </a>
                </div>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>

                        {
                            isAuth &&  
                            <li className='nav-item'>
                            <NavLink to="/todos" className="nav-link" style={{color:"white"}}>Lista de Tareas</NavLink>
                        </li>
                        }
                       
                    </ul>

                </div>
                <ul className='navbar-nav'>

                        {

                            !isAuth &&     
                             <li className='nav-item'>
                            <NavLink to="/register" className="nav-link" style={{color:"white"}}>Registrar</NavLink>
                        </li>
                        }
                        {
                            !isAuth &&
                            <li className='nav-item'>
                            <NavLink to="/login" className="nav-link" style={{color:"white"}}>Login</NavLink>
                        </li>

                    
                        }
                        {
                            isAuth &&
                            <li className='nav-item'>
                            <NavLink to="/login" className="nav-link" style={{color:"white"}} onClick={handleLogout}>Logout</NavLink>
                        </li>
                        
                    
                        }
                   </ul>

                        

            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent