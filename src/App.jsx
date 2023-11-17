import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import Phrase from './components/Phrase'
import Buttonphrase from './components/Buttonphrase'
import getRandomFroArr from './services/getRandomFrom'



function App() {
  

  const quote = getRandomFroArr(phrases)

  const [phraseRandom, setphraseRandom] = useState(quote)
  const [ bgApp ,setBgApp] = useState(getRandomFroArr(bgArr))
  
  const objStyle = {
    backgroundImage:` url('../public/IMAGEN5.jpg')`
  }
 
  
  return (
    <div style={objStyle} className='app'>
      <h1 className='app__title'>galleta de la fortuna</h1>
      <article className='app__card'>
      <Phrase
      phraseRandom={phraseRandom}
      />
      <Buttonphrase
      setphraseRandom={setphraseRandom}
      setBgApp={setBgApp}
      />

      </article>
      
    </div>
    
  )
}

export default App
