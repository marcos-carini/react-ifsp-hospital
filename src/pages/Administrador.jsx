import { useState, useEffect} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

export default function Administrador(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [crm, setCrm] = useState('');
    const [tipo, setTipo] = useState(1);

    const limparFormulario = () => {
        setNome('');
        setEmail('');
        setSenha('');
        setRg('');
        setCpf('');
        setCep('');
        setBairro('');
        setRua('');
        setCrm('');
        setTipo(1);
    }

    const cadastrarNovoUsuario = async () => {
        // Validar os campos obrigatórios
        if (!nome || !email || !senha || !rg || !cpf || !cep || !bairro || !rua || !tipo) {
            alert("Por favor, preencha todos os campos obrigatórios!");
            return;
        }
    
        // Construir o objeto do usuário
        const novoUsuario = {
            nome,
            email,
            senha,
            rg,
            cpf,
            cep,
            bairro,
            rua,
            crm: tipo == 2 ? crm : null, // CRM somente para médicos
            tipo,
            foto: null // Inicialmente null
        };
    
        try {
            // Enviar os dados para o backend
            const response = await axios.post("http://localhost:3001/usuarios", novoUsuario);
    
            if (response.status === 201) {
                alert("Usuário cadastrado com sucesso!");
                limparFormulario();
            } else {
                alert("Erro ao cadastrar o usuário!");
            }
        } catch (error) {
            alert("Erro na comunicação com o servidor!");
            console.error(error);
        }
    };

    useEffect(() => {
        const buscarEndereco = async () => {
            if (cep.length === 8) {
                try {
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    if (!response.data.erro) {
                        setBairro(response.data.bairro || '');
                        setRua(response.data.logradouro || '');
                    } else {
                        alert('CEP não encontrado!');
                        setBairro('');
                        setRua('');
                    }
                } catch (error) {
                    alert('Erro ao buscar o CEP.');
                    setBairro('');
                    setRua('');
                }
            }
        };

        buscarEndereco();
    }, [cep]);

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
                                <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe seu CEP</label>
                                <input type='text' placeholder='CEP...' className='inputStyle' maxLength={8}
                                 value={cep} onChange={(event) => setCep(event.target.value)}/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between', gap: 5}}>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                    <label style={{color: '#2e5668', fontWeight: 'bold'}}>Bairro</label>
                                    <input type='text' placeholder='Bairro...' className='inputStyle' maxLength={40}
                                    value={bairro} onChange={(event) => setBairro(event.target.value)} />
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                    <label style={{color: '#2e5668', fontWeight: 'bold'}}>Rua</label>
                                    <input type='text' placeholder='Rua...' className='inputStyle' maxLength={40}
                                    value={rua} onChange={(event) => setRua(event.target.value)}/>
                                </div>
                                
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