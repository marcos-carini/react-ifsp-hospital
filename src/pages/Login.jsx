import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../App.css';
import { useState, useEffect } from "react";
import axios from 'axios';


function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // Faz a requisição para buscar os usuários
        axios.get('http://localhost:3001/usuarios')
            .then(response => {
                console.log('Resposta:');
                
                console.log(response);
                
                setUsuarios(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os usuários:', error);
            });
    }, []);



    const navigate = useNavigate();

    const handleRedirectUser = () => {

        if (email == '') {
            alert('Preencha o campo Email'); 
            return    
        } 

        if (senha == '') {
            alert('Preencha o campo Senha');  
            return   
        }

        const usuario = usuarios.find(user => user.email === email && user.senha === senha);

        if (usuario) {
            switch (usuario.tipo) {
                case '1':
                    navigate('/usuario');
                    break;
                case '2':
                    navigate('/medico');
                    break;
                case '3':
                    navigate('/adm');
                    break;
                default:
                    alert('Tipo de usuário inválido');
            }
        } else {
            alert('Email ou senha incorretos');
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSenhaChange = (event) => {
        setSenha(event.target.value)
    }

    return (
        <div>
            <Header nomePagina='Hospital IFSP'/>
            <main style={{maxWidth: 600, margin: 'auto', marginBottom: 120}}>
                <div style={{backgroundColor: '#DDEDE9', borderRadius: 20, padding: 20, margin: '20px 0px 20px 0px'}}>
                    <div>
                        <h2 style={{textAlign: 'center', color: '#2e5668'}}>Faça o Login</h2>
                    </div>
                    <section style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10, margin: '0px 50px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                            <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe o Email</label>
                            <input type='email' placeholder='exemplo@exemplo.com' className='inputStyle' value={email} onChange={handleEmailChange}/>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                            <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe a Senha</label>
                            <input type='password' className='inputStyle' value={senha} onChange={handleSenhaChange}/>
                        </div>
                    </section>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                        <button type='button' className='botaoLogin' onClick={handleRedirectUser}>
                            Entrar
                        </button>
                    </div>
                </div>
            </main>
            <Footer/> 
        </div>
    );
}

export default Login;