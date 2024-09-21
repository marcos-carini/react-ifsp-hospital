import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './Medico.css'

import { FaUserDoctor } from "react-icons/fa6";


export default function Medico(){

    const [listaExames, setListaExames] = useState([
        {
            id: 1,
            titulo: 'Exame de Sangue',
            descricao: 'Exame de rotina para verificar níveis de glicose e colesterol.',
            nomePaciente: 'Ana Silva',
            dataHora: '21/09/2024 10:30'
        },
        {
            id: 2,
            titulo: 'Raio-X',
            descricao: 'Raio-X do tórax para investigar possíveis problemas respiratórios.',
            nomePaciente: 'João Oliveira',
            dataHora: '21/09/2024 14:15'
        },
        {
            id: 3,
            titulo: 'Ultrassonografia Abdominal',
            descricao: 'Exame de imagem para investigar dor abdominal.',
            nomePaciente: 'Maria Souza',
            dataHora: '22/09/2024 09:00'
        },
        {
            id: 4,
            titulo: 'Eletrocardiograma',
            descricao: 'Exame para verificar a saúde do coração e ritmo cardíaco.',
            nomePaciente: 'Carlos Mendes',
            dataHora: '22/09/2024 11:45'
        },
        {
            id: 5,
            titulo: 'Tomografia Computadorizada',
            descricao: 'Exame de imagem detalhada do cérebro após suspeita de concussão.',
            nomePaciente: 'Bruna Ferreira',
            dataHora: '22/09/2024 16:00'
        }
    ]);

    const finalizarConsulta = (id) => {
        const novaLista = listaExames.filter(exame => exame.id !== id);
        setListaExames(novaLista);
    };
    


    return (
        <div>
            <Header nomePagina='Medico' descricaoPagina='Seja bem vindo'/>
            <main style={{maxWidth: 800, margin: 'auto', marginBottom: 120}}>
                <section>
                <div style={{backgroundColor: '#DDEDE9', borderRadius: 20, padding: 20, margin: '20px 0px 20px 0px'}}>
                    <div>
                        <h2 style={{textAlign: 'center', color: '#2e5668', marginTop: 0}}>Sua lista de Exames</h2>
                    </div>
                    <div id='listaExames' className='exameContainer'>
                        {listaExames.length > 0 ? (
                            listaExames.map(exame => (
                                <div key={exame.id} className='exameBox'>
                                    <div className='exameTitulo'><FaUserDoctor /> {exame.titulo}</div>
                                    <div className='exameDescricao'>{exame.descricao}</div>
                                    <div className='examePaciente'>Paciente: {exame.nomePaciente}</div>
                                    <div className='exameDataHora'>Data/Hora: {exame.dataHora}</div>
                                    <div style={{marginTop: 10}}>
                                        <button 
                                            className='botaoFinalizar'
                                            onClick={() => finalizarConsulta(exame.id)}
                                        >
                                            Finalizar Consulta
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{textAlign: 'center', color: '#2e5668'}}>Não há exames pendentes.</p>
                        )}
                    </div>
                </div>
                </section>
            </main>
            <Footer/> 
        </div>
    )
}