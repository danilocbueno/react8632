import { Tweet } from './components/Tweet/Tweet.jsx'
import ReactDOM from 'react-dom'

const tweetsArea = document.querySelector('.tweetsArea')

const listaTweets = [
    Tweet({
        conteudo: 'oi',
        nomeCompletoUsuario: 'Danilo Bueno',
        nomeUsuario: 'danilocbueno',
        qtLikes: 2
    }),
    Tweet({
        conteudo: 'tchau',
        nomeCompletoUsuario: 'Fabiane Bueno',
        nomeUsuario: 'fabueno',
        qtLikes: 1
    })
]

ReactDOM.render(listaTweets, tweetsArea)