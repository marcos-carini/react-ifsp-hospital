import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Administrador(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [crm, setCrm] = useState('');
    const [tipo, setTipo] = useState(1);

    const limparFormulario = () => {
        setNome('');
        setEmail('');
        setSenha('');
        setRg('');
        setCpf('');
        setCrm('');
        setTipo(1);
    }

    const cadastrarNovoUsuario = () => {

    }

    return (
        <div>
            <Header nomePagina='Administrador' descricaoPagina='Cadastre novos usuários'/>
            <main style={{maxWidth: 600, margin: 'auto', marginBottom: 120}}>
                <section>
                    <div style={{backgroundColor: '#DDEDE9', borderRadius: 20, padding: 20, margin: '20px 0px 20px 0px'}}>
                        <div>
                            <h2 style={{textAlign: 'center', color: '#2e5668'}}>Cadastrar</h2>
                        </div>
                        <section style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10, margin: '0px 50px'}}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe o Nome</label>
                                <input type='text' placeholder='Nome...' className='inputStyle' value={nome} onChange={(event) => setNome(event.target.value)}/>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe o Email</label>
                                <input type='email' placeholder='exemplo@exemplo.com...' className='inputStyle'
                                 value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe a Senha</label>
                                <input type='password' className='inputStyle'
                                 value={senha} onChange={(event) => setSenha(event.target.value)}/>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe seu RG</label>
                                <input type='text' placeholder='RG...' className='inputStyle' maxLength={9}
                                 value={rg} onChange={(event) => setRg(event.target.value)}/>
                            </div>

                            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe seu CPF</label>
                                <input type='text' placeholder='CPF...' className='inputStyle' maxLength={11}
                                 value={cpf} onChange={(event) => setCpf(event.target.value)}/>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                <label style={{color: '#2e5668', fontWeight: 'bold'}}>Selecione o Tipo do Usuário</label>
                                <select name="doctors" id="doctors" className="inputStyle" 
                                value={tipo} onChange={(event) => setTipo(event.target.value)}>
                                    <option value={1}>Usuário</option>
                                    <option value={2}>Médico</option>
                                    <option value={3}>Administrador</option>
                                </select>
                            </div>


                            {tipo == 2 &&
                            <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe o CRM do Médico</label>
                                <input type='text' className='inputStyle'
                                value={crm} onChange={(event) => setCrm(event.target.value)}/>
                            </div>
                            }

                        </section>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 30, gap: 30}}>
                            <button type='button' className='botaoLogin' onClick={cadastrarNovoUsuario}>
                                Cadastrar Usuario/Médico
                            </button>

                            <button type='button' className='botaoLogin' style={{backgroundColor: '#f7f7f7', color: '#333'}}
                            onClick={limparFormulario}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </section> 
            </main>
            <Footer/> 
        </div>
    )
}