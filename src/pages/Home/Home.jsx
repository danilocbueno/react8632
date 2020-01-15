import React, { useState } from 'react'

import { Tweet, Cabecalho, NavMenu, Dashboard, Widget, TrendsArea } from '../../components/index.js'

export function Home() {

    const infoTweet1 = {
        conteudo: 'oi',
        nomeCompletoUsuario: 'Danilo Bueno',
        nomeUsuario: 'danilocbueno',
        qtLikes: 2
    }
    
    const infoTweet2 = {
        conteudo: 'tchau',
        nomeCompletoUsuario: 'Fabiane Bueno',
        nomeUsuario: 'fabueno',
        qtLikes: 1
    }
    
    const listaTweets = [
        <Tweet 
            nomeCompletoUsuario={infoTweet1.nomeCompletoUsuario}
            nomeUsuario={infoTweet1.nomeUsuario}
            qtLikes={infoTweet1.qtLikes}
            key="1">
                {infoTweet1.conteudo}
        </Tweet>,
    
        <Tweet {...infoTweet2} key="2">{infoTweet2.conteudo}</Tweet>,

        React.createElement(
            Tweet,
            {...infoTweet1, key:3},
            ["alo, alo"]
        )
    ]

    const [ valorTamanhoTweetNovo, setTamanhoTweetNovo ] = useState(0)

    function onChangeTextarea(evento) {
        console.log(evento)
        const novoTamanho = evento.target.value.length
        setTamanhoTweetNovo(novoTamanho)
    }

    function onSubmitForm(evento) {
        evento.preventDefault()
        console.log(evento)
        console.log(evento.target.value)
    }

    const isInvalid = valorTamanhoTweetNovo > 140

    const novoTweetStatusClass = isInvalid ? "novoTweet__status novoTweet__status--invalido" : "novoTweet__status"

    return (
        <div>
            <Cabecalho>
            <NavMenu> </NavMenu>
            </Cabecalho>

            <div className="container">
                <Dashboard>
                    <Widget>
                        <form className="novoTweet">
                            <div className="novoTweet__editorArea">
                                <span className={ novoTweetStatusClass }>{ valorTamanhoTweetNovo }/140</span>
                                <textarea onChange={ onChangeTextarea } className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                            </div>
                            <button disabled={ isInvalid } type="submit" className="novoTweet__envia" onClick={onSubmitForm}>Tweetar</button>
                        </form>
                    </Widget>
                    <Widget>
                        <TrendsArea></TrendsArea>
                    </Widget>
                </Dashboard>

                <Dashboard posicao="centro">
                    <Widget>
                        <div className="tweetsArea">
                            { listaTweets }
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </div>
    )
}