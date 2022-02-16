import '../../assets/css/corpo.css'
import '../../assets/css/imagens.css'
import '../../App.css';



export default function Corpo(props) {
    
    
    return (
        <>
        <section className="stories__cards">
            <div className='stories__card'>
                <img src={require('../../assets/imagens/foto pequena.png')} alt="" className="stories__card-foto"/>
                <p className="stories__card-nome">Nome</p>
            </div>
            <div className='stories__card'>
                <img src={require('../../assets/imagens/foto pequena.png')} alt="" className="stories__card-foto"/>
                <p className="stories__card-nome">Nome</p>
            </div>
            <div className='stories__card'>
                <img src={require('../../assets/imagens/foto pequena.png')} alt="" className="stories__card-foto"/>
                <p className="stories__card-nome">Nome</p>
            </div>
            <div className='stories__card'>
                <img src={require('../../assets/imagens/foto pequena.png')} alt="" className="stories__card-foto"/>
                <p className="stories__card-nome">Nome</p>
            </div>
            <div className='stories__card'>
                <img src={require('../../assets/imagens/foto pequena.png')} alt="" className="stories__card-foto"/>
                <p className="stories__card-nome">Nome</p>
            </div>
            <div className='stories__card'>
                <img src={require('../../assets/imagens/foto pequena.png')} alt="" className="stories__card-foto"/>
                <p className="stories__card-nome">Nome</p>
            </div>
            <div className='stories__card'>
                <img src={require('../../assets/imagens/foto pequena.png')} alt="" className="stories__card-foto"/>
                <p className="stories__card-nome">Nome</p>
            </div>
            <div className='stories__card'>
                <img src={require('../../assets/imagens/foto pequena.png')} alt="" className="stories__card-foto"/>
                <p className="stories__card-nome">Nome</p>
            </div>
        </section>
        
        <section className='corpo'>
            {
                props.publicacoes.map((element, index) => {
                    return (
                        <div className='corpo__card' key={index}>
                            <div className="corpo__card-cabecalho">
                                <div className='corpo__card-perfil'>
                                    <img className="corpo__card-foto-corpo" src={require("../../assets/imagens/foto pequena.png")}/>
                                    <div className="corpo__card-info">
                                        <p><span className="destaque"> {element.nome} </span></p>
                                        <p>{element.local}</p>
                                    </div>
                                </div>
                            </div>
                            <div Corpo="corpo__card-foto">
                                <img src={require('../../assets/imagens/foto.png')} className="corpo__card-imagem"/>
                            </div>
                            <div Corpo="corpo__card-icones" id='corpo__card-icones'>
                                <span className='corpo__card-icones-blocoA'>
                                    <img src={require('../../assets/icones/curtir.png')} className="icone"/>
                                    <img src={require('../../assets/icones/comentar.png')} className="icone icone-menor"/>
                                    <img src={require('../../assets/icones/compartilhar.png')} className="icone"/>
                                </span>
                                <span className='corpo__card-icones-blocoB'>
                                    <img src={require('../../assets/icones/salvar.png')} className="icone"/>
                                </span>
                            </div>
                            <div className="corpo__card-comentarios">
                                <p className='corpo__card-comentarios-mensagem'>Curtido por <span className='destaque'>{element.pCurtir}</span> e <span className='destaque'>outras pessoas</span></p>
                            </div>
                            <div className="corpo__card-descrissao">
                                <p><span className='destaque'>{element.nome} </span> {element.descrissao}</p>
                            </div>
                            <div className="corpo__card-comentarios">
                                <p>Ver todos os <span className="destaque"> {element.Comentarios.length} </span>comentarios</p>
                                <div className="corpo__card-comentario">
                                    <p className='corpo__card-comentario-texto'><span className="destaque">{element.Comentarios[0][0]}</span> {element.Comentarios[0][1]}</p>
                                </div>
                            </div>
                            <div className="corpo__card-comentar">
                            <img className="corpo__card-foto-corpo card__foto--pequena" src={require("../../assets/imagens/foto pequena.png")}/>
                                <input type="text" name="" id="" className="corpo__card-comentar-input" placeholder='Escreva um comentario...'/>
                            </div>
                            <div className="card__corpo-tempo-publicacao">
                                <p className='card__corpo-tempo-publicacao-tempo'>Há <span className="tempo-de-publicacao">x</span> dias</p>
                            </div>
                        </div>
                    )
                })
            }
            {/* <div className='corpo__card'>
                <div className="corpo__card-cabecalho">
                <div className='corpo__card-perfil'>
                    <img className="corpo__card-foto-corpo" src={require("../../assets/imagens/foto pequena.png")}/>
                    <div className="corpo__card-info">
                        <p>Nome</p>
                        <p>local</p>
                    </div>
                </div>
                </div>
                <div Corpo="corpo__card-foto">
                    <img src={require('../../assets/imagens/foto.png')} className="corpo__card-imagem"/>
                </div>
                <div Corpo="corpo__card-icones" id='corpo__card-icones'>
                    <span className='corpo__card-icones-blocoA'>
                        <img src={require('../../assets/icones/curtir.png')} className="icone"/>
                        <img src={require('../../assets/icones/comentar.png')} className="icone icone-menor"/>
                        <img src={require('../../assets/icones/compartilhar.png')} className="icone"/>
                    </span>
                    <span className='corpo__card-icones-blocoB'>
                        <img src={require('../../assets/icones/salvar.png')} className="icone"/>
                    </span>
                </div>
                <div className="corpo__card-comentarios">
                    <p className='corpo__card-comentarios-mensagem'>Curtido por <span className='destaque'>nome</span> e <span className='destaque'>outras pessoas</span></p>
                </div>
                <div className="corpo__card-descrissao">
                    <p><span className='destaque'>Nome criador </span> descrissao lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="corpo__card-comentarios">
                    <p>Ver todos os <span className="destaque"> X </span>comentarios</p>
                    <div className="corpo__card-comentario">
                        <p className='corpo__card-comentario-texto'><span className="destaque">Nome</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="corpo__card-comentar">
                <img className="corpo__card-foto-corpo card__foto--pequena" src={require("../../assets/imagens/foto pequena.png")}/>
                    <input type="text" name="" id="" className="corpo__card-comentar-input" placeholder='Escreva um comentario...'/>
                </div>
                <div className="card__corpo-tempo-publicacao">
                    <p className='card__corpo-tempo-publicacao-tempo'>Há <span className="tempo-de-publicacao">x</span> dias</p>
                </div>
            </div> */}
        </section>
        </>
    )
}
