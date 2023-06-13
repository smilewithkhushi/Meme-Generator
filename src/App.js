import logo from './logo.svg';
import './App.css';

function getMemeImage() {
  fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(res => {
      const memes = res.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const randomMeme = memes[randomIndex];
      const memeImg = document.querySelector('.meme-img');
      memeImg.src = randomMeme.url;
    })
}

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <img src="images/memelogo.png" className="app-logo" alt="logo" />
        <h1>MEME GENERATOR</h1>
      </div>
      <center>
        <div className="app-body">

          <input type="text" placeholder="Top Text" className='input-meme' />
          <input type="text" placeholder="Bottom Text" className='input-meme' />
          <br />
          <button className="btn-meme" onClick={getMemeImage}>GENERATE </button>
          <br />
          <img src="images/meme.jpg" className="meme-img" alt="meme appears here" />
        </div>
      </center>

    </div>

  );
}

export default App;
