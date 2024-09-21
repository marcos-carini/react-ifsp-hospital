
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function OldApp() {

  const [lista, setLista] = useState([
    { nome: 'João', telefone: '123456789', dataNascimento: '2000-01-01' },
    { nome: 'Carlos', telefone: '987654321', dataNascimento: '1995-05-15' },
    { nome: 'Rodrigo', telefone: '456789123', dataNascimento: '1988-10-20' }
  ]);
  const [novoContato, setNovoContato] = useState('');
  const [telefoneContato, setTelefoneContato] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [exibirAviso, setExibirAviso] = useState(false);

  const handleChange = (event) => {
    setNovoContato(event.target.value);
  }

  const handleChangeTelefone = (event) => {
    setTelefoneContato(event.target.value);
  }

  const handleChangeDataNascimento = (event) => {
    setDataNascimento(event.target.value);
  }

  const adicionarContato = () => {
    if (novoContato.trim() !== '' || telefoneContato.trim() !== '' || dataNascimento.trim() !== '') {
      setExibirAviso(false);
      setLista([...lista, 
        {
          nome: novoContato,
          telefone: telefoneContato,
          dataNascimento: dataNascimento
        }
      ]);
      setNovoContato('');
      setTelefoneContato('');
      setDataNascimento('')
    } else{
      setExibirAviso(true);
    }
  }
  return (
    <div>
      <Header nomePagina='Login'/>
      <main style={{maxWidth: 800, margin: 'auto', marginBottom: 120}}>
        <section>
          <div>
            <h3 style={{textAlign: 'center'}}>Adicionar um novo contato:</h3>
          </div>
          <div style={{marginTop: 30, display: 'flex', flexDirection: 'column', rowGap: 10}}>
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent:'space-between', padding: 10}}>
              <div className='form-group'>
                <label style={{marginRight: 10}}>Nome:</label>
                <input value={novoContato} onChange={handleChange} type='text' placeholder='Novo Contato...' 
                  style={{padding: '10px 10px', borderRadius: 8, border: '2px solid #e8e8e8'}}/>
              </div>
              <div className='form-group'>
                <label style={{marginRight: 10}}>Telefone:</label>
                <input value={telefoneContato} onChange={handleChangeTelefone} type='text' placeholder='Informe o Telefone...' 
                  style={{padding: '10px 10px', borderRadius: 8, border: '2px solid #e8e8e8'}}/>
              </div>
              <div className='form-group'>
                <label style={{marginRight: 10}}>Data Nasc:</label>
                <input value={dataNascimento} onChange={handleChangeDataNascimento} type='date' placeholder='Data de Nascimento...' 
                  style={{padding: '10px 10px', borderRadius: 8, border: '2px solid #e8e8e8'}}/>
              </div>
              
            </div>

          
            
            <button onClick={adicionarContato} className='btnAdicionarContato'>
              Adicionar Contato
            </button>
            
          </div>
          <div style={{textAlign: 'center'}}>
            {exibirAviso  && 
            <p style={{fontSize: 12, color: 'red'}}>Não é possivel adicionar um contato em branco</p>
            }
          </div>

          <div style={{maxWidth: 800, margin: 'auto'}}>
            <div style={{marginTop: 30}}>
              <h3 style={{textAlign: 'center'}}>Lista de Contatos:</h3>
              <hr style={{widht: 1, color: '#fff'}}></hr>
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                {lista.map((contato, index) => (
                    <div key={index} className='caixaContato' style={{padding: '10px', background: '#ededed', borderRadius: 10}}>
                      <p><strong>Nome:</strong> {contato.nome}</p>
                      <p><strong>Telefone:</strong> {contato.telefone}</p>
                      <p><strong>Data de Nascimento:</strong> {contato.dataNascimento}</p>
                    </div>
                ))}
            </div>
          </div>
          
        </section>
      </main>
      <Footer/> 
    </div>
  );
}

export default OldApp;
