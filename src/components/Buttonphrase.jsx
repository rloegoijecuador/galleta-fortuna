
import getRandomFroArr from '../services/getRandomFrom'
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const Buttonphrase = ({ setphraseRandom ,setBgApp}) => {
    
    const handlechangephrase =() => {
         const quote = getRandomFroArr(phrases)
        setphraseRandom(quote)
        setBgApp(getRandomFroArr(bgArr))
    }


  return (
    <button className='app__btn' onClick={handlechangephrase}>ver otro</button>
  )
}

export default Buttonphrase