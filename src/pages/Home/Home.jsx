import React from 'react'

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
                                <span className="novoTweet__status">0/140</span>
                                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                            </div>
                            <button type="submit" className="novoTweet__envia">Tweetar</button>
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