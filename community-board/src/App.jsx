import './App.css'
import Card from './components/Card';
import headphones from './headphones'
import Speaker from './assets/image-removebg-preview.png'

const headphoneData = JSON.parse(headphones);
function App() {

  return (
    <div>
      <div className='header'>
        <img id='Speaker' src={Speaker}></img>
        <h1> Headphones Emporium</h1>
        <img id='Speaker' src={Speaker}></img>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico"></link>
      </div>
        
        <div id="Card-container">
          {headphoneData.map((headProps) => (
            <Card {...headProps} key = {headProps.id}/>
          )
          )}
        </div>
    </div>
  )
}

export default App
