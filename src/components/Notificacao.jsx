export default function Notificacao({titulo='Consulta Marcada', descricao='Consulta Marcada'}){
    return (
        <div className="caixaNotificacao">
            <h4 style={{color: '#2e5668', margin: 0}}>{titulo}</h4>
            <p style={{margin: 0}}>{descricao}</p>
        </div>
    )
}