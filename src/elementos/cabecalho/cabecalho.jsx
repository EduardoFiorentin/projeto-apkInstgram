import '../../assets/css/cabecalho.css'
import '../../assets/css/imagens.css'
import '../../App.css';


export default function Cabecalho() {
    return (
        <section className="cabecalho">
            <div className="cabecalho__titulo">
                <h2 className='cabecalho__titulo-texto'>
                    Instagram
                </h2>
            </div>
            <div className="cabecalho__titulo-icones">
                <img 
                src={require('../../assets/icones/mais.png')}
                className="icone"
                />
                <img 
                src={require('../../assets/icones/curtir.png')}
                className="icone"
                />
                <img 
                src={require('../../assets/icones/compartilhar.png')}
                className="icone"
                />
            </div>
        </section>
    )
}