import React from 'react';
import './Login.scss';
import foto1 from './Captura.PNG'
import facebook from './facebook.png'
import { NavLink } from 'react-router-dom';
import { notification } from 'antd';
import { login } from '../../../redux/action';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();//props.history
    const conectar = (event) => {
        event.preventDefault();
        const user = {
            email: event.target.email.value,
            password: event.target.password.value,
        }
        login(user)
            .then(() => {//como subscribe en angular
                notification.success({ message: 'Usuario conectado éxito' });
                history.push('/Muro')//this.router.navigate(['/login]) en angular
            })
            .catch(err => {
                notification.error({message:'Usuario o contraseña incorrectos'})
                setTimeout(()=>{
                    history.push('./login');
                      console.error(err)}
                )
                })

                
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <img src={foto1} alt="foto" />
                </div>
                <div className="col-xs-12">
                    <div class="right-colum text-center">
                        <p className="Facetime"> FACETIME</p>
                        <p class="info">Registrate para ver fotos y videos de tus amigos </p>
                        <button type="submit" class="btn btn-primary btn-block"><img src={facebook} /> Iniciar sesion con Facebook </button>
                        <p class="or">O</p>
                        <form onSubmit={conectar}>
                            <div class="form-group">
                                <input type="text" name="email"class="form-control"
                                    placeholder="Nombre de usuario o correo electronico" />
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" class="form-control"
                                    placeholder="Contraseña" />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Iniciar Sesion</button>
                            <p class="terms"> Al registrarte, aceptas nuestras, <b>Condiciones</b>. Obtén mas información sobre cómo recopilamos,
                            usamos y compartimos tu información en la <b>Política de datos</b>, asi como
                            el uso que hacemos de las cookies y tecnologias similares en nuestra <b>Política de cookies</b> </p>
                            <div>
                                <div class="right-column-login  text-center">
                                    <p>¿No estas registrado?  <NavLink to="/register"><a>Registrate</a></NavLink></p>
                                </div>

                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;