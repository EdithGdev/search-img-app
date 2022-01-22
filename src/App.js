import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';

function App() {


  //console log something from the api

  const [search, setSearch] = useState('');


  const [picture, setPicture] = useState([]);

  let picLinkArr = [];

  useEffect( ()=>{
    axios.get('https://api.unsplash.com/photos/?client_id=fbX6kPZqCWeWLLa8OabqNn8NWf0veFe1pr9KrlWdHqY').then((response) => {
      setPicture(response.data)
    })
  }, []
  )

  // console.log(picture[0].links.download)
  // console.log(picture)
  picture.map((pic) => picLinkArr.push(pic.links.download) )
  console.log(picLinkArr)
  let filteredImages = picLinkArr.filter(picture => picture.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <input type='text'
      onChange={(e) => setSearch(e.target.value)}
      />
    <div className='images'>
      {filteredImages.map((displayImg) => <img src={displayImg} style={{width: 200}}/>)}
    </div>
    </div>
  );
}

export default App;
