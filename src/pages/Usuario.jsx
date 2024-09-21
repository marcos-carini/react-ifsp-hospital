import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrScheduleNew } from "react-icons/gr";
import './Usuario.css'
import Notificacao from "../components/Notificacao";

export default function Usuario(){
    const [marcarExame, setMarcarExame] = useState(false);
    return (
        <div>
            <Header nomePagina='Usuario' descricaoPagina='Seja bem vindo'/>
            <main style={{maxWidth: 800, margin: 'auto', marginBottom: 120}}>
                {
                   marcarExame ? 
                    <section>
                        <div style={{backgroundColor: '#DDEDE9', borderRadius: 20, padding: 20, margin: '20px 0px 20px 0px'}}>
                            <div>
                                <h2 style={{textAlign: 'center', color: '#2e5668'}}>Marcar Nova Consulta</h2>
                            </div>
                            <section style={{marginTop: 10, display: 'flex', flexDirection: 'column', gap: 10, margin: '0px 50px'}}>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                    <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe seu nome</label>
                                    <input type='text' placeholder='Nome...' className='inputStyle'/>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                    <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe seu RG</label>
                                    <input type='text' placeholder='RG...' className='inputStyle' maxLength={9}/>
                                </div>

                                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                    <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe seu CPF</label>
                                    <input type='text' placeholder='CPF...' className='inputStyle' maxLength={11}/>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                    <label style={{color: '#2e5668', fontWeight: 'bold'}}>Selecione o Doutor</label>
                                    <select name="doctors" id="doctors" className="inputStyle">
                                        <option value="gustavo">Gustavo (Dermatologista)</option>
                                        <option value="joao">João Pedro (Oftalmologista)</option>
                                        <option value="kaio">Kaio (Pediatra)</option>
                                        <option value="leoncio">Leoncio (Urologista)</option>
                                        <option value="vitor">João Vitor (Ortopedista)</option>
                                    </select>
                                </div>
                                <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
                                    <label style={{color: '#2e5668', fontWeight: 'bold'}}>Informe a Data</label>
                                    <input type='date' className='inputStyle'/>
                                </div>

                            </section>
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: 30, gap: 30}}>
                                <button type='button' className='botaoLogin' onClick={() => setMarcarExame(!marcarExame)}>
                                    Marcar Consulta
                                </button>

                                <button type='button' className='botaoLogin' style={{backgroundColor: '#f7f7f7', color: '#333'}}
                                onClick={() => setMarcarExame(!marcarExame)}>
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </section> 

                   :

                    <section style={{marginTop: 30}}>
                        <div style={{backgroundColor: '#F7F7F7', borderRadius: 20, padding: 20}}>
                            <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                                <IoNotificationsOutline size={50} color="#2E5668"/>
                                <p style={{fontWeight: '500', color: '#2E5668', fontSize: 20}}>Suas Notificações</p>
                            </div>
                            <div id="listaNotificacoes" style={{display: 'flex', flexDirection: 'column', gap: 15}}>
                                <Notificacao titulo="Consulta Cancelada" descricao="Sua consulta foi cancelada"/>
                                <Notificacao descricao="Sua consulta foi marcada com sucesso"/>
                                <Notificacao titulo="Consulta adiada" descricao="Sua consulta foi adiada"/>
                                <Notificacao titulo="Exame pronto" descricao="O resultado do seu exame está pronto"/>
                            </div>
                        </div>

                        <div style={{backgroundColor: '#F7F7F7', borderRadius: 20, padding: 20, marginTop: 50}}>
                            <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
                                <GrScheduleNew size={50} color="#2E5668"/>
                                <p style={{fontWeight: '500', color: '#2E5668', fontSize: 20}}>Marcar Consultas</p>
                            </div>
                            <div>
                                <button type='button' className='botaoConsulta' onClick={() => setMarcarExame(!marcarExame)}>
                                    Nova Consulta
                                </button>
                            </div>
                        </div>
                   </section>
                }
            </main>
            <Footer/> 
        </div>
    )
}