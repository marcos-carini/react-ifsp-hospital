export default function Footer() {
    return (
        <footer style={footerStyle}>
        <p>{new Date().getFullYear()} Hospital IFSP. Todos os direitos reservados</p>
        </footer>
    );
}

const footerStyle = {
    backgroundColor: '#2e5668',
    color: 'white',
    textAlign: 'center',
    padding: '1em 0',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
};
  