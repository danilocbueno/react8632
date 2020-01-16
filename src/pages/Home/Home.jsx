import React, { useState } from 'react'
import { Tweet, Cabecalho, NavMenu, Dashboard, Widget, TrendsArea, Form } from '../../components/index.js'

import * as TweetsService from '../../model/services/TweetsService.js'

const dadosTweetsFake = [{
    conteudo: 'oi',
    nomeCompletoUsuario: 'Danilo Bueno',
    nomeUsuario: 'danilocbueno',
    qtLikes: 2,
    id:100
},
{
    conteudo: 'tchau',
    nomeCompletoUsuario: 'Fabiane Bueno',
    nomeUsuario: 'fabueno',
    qtLikes: 1,
    id: 200
}]

export function Home() {
    
    const [ listaDadosTweet, setNovoDadosTweet ] = useState(dadosTweetsFake)

    /* FOI REMOVIDO PARA O FORM SOZINHO!

    function onChangeTextarea(evento) {
        const textoTweet = evento.target.value
        setTextoTweetNovo(textoTweet)
    }

    function onSubmitNovoTweet(evento) {
        evento.preventDefault()

        //primeira opção de pegar o valor do elemento via DOM do React
        //console.log(evento.target.elements.novoTweet.value)

        //segunda ideia: em vez de pegar o tamanho e utilizar no onChangeTextArea, pega o texto e guarda no estado

        const novoTweet = {
            conteudo: textoTweetNovo,
            nomeCompletoUsuario: 'Fabiane Bueno',
            nomeUsuario: 'fabueno',
            qtLikes: 1,
            id: textoTweetNovo
        }

        /* funciona a adição na lista, porém não vai ser renderizado novamente o componente porque o "render" do componente não vai ser chamado, ele so chama quando se utiliza o set
        listaDadosTweet.unshift(novoTweet)
        setNovoDadosTweet(listaDadosTweet) 

        setNovoDadosTweet([novoTweet, ...listaDadosTweet]) //tem que criar uma lista nova porque se não o react não consegue trabalhar bem

        /* FOI REMOVIDO PARA O FORM SOZINHO! */
        
    function adicionaTweet(novoTweet) {
        setNovoDadosTweet( [novoTweet, ...listaDadosTweet ])
    }
   
    /*se chamar sem o Hook ele fica infinito */
    TweetsService.carrega()
        .then(listaServidor => {
            setNovoDadosTweet([...listaServidor, ...listaDadosTweet])
        })

    return (
        <div>
            <Cabecalho>
            <NavMenu> </NavMenu>
            </Cabecalho>

            <div className="container">
                <Dashboard>
                    <Widget>
                        <Form adicionaTweet={adicionaTweet}/>
                    </Widget>
                    <Widget>
                        <TrendsArea></TrendsArea>
                    </Widget>
                </Dashboard>

                <Dashboard posicao="centro">
                    <Widget>
                        <div className="tweetsArea">
                            { listaDadosTweet.map(infoTweet =>  
                                <Tweet {...infoTweet} key={infoTweet.id}>
                                    {infoTweet.conteudo}
                                </Tweet> 
                            )}
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </div>
    )
}