export default function Header({nomePagina, descricaoPagina}) {
    return (
        <header style={{padding: 15, textAlign: 'center', color: 'white', background: '#2e5668'}}>
            <h1>{nomePagina}</h1>
            <p>{descricaoPagina}</p>
        </header>
    );  
  }