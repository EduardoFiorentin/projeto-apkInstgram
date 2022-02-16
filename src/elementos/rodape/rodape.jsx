import '../../assets/css/rodape.css'
import '../../assets/css/imagens.css'
import '../../App.css';


export default function Rodape () {
    return (
        <section className='rodape'>
            <img 
                src={require('../../assets/icones/casa.png')}
                className="icone icone-rodape"
            />
            <img 
                src={require('../../assets/icones/procurar.png')}
                className="icone icone-rodape"
            />
            <img 
                src={require('../../assets/icones/video.png')}
                className="icone icone-rodape"
            />
            <img 
                src={require('../../assets/icones/bolsa.png')}
                className="icone icone-rodape"
            />
            <img 
                src={require('../../assets//imagens/foto pequena.png')}
                className="icone icone-rodape icone-rodape-foto"
            />
        </section>
    )

}