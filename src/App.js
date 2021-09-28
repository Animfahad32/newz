import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';


function App() {
  const [news, setNews] = useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=820adaf1f6e2494e983c3dbf005f05a8')
    .then(res=>res.json())
    .then(data=>setNews(data.articles))
  },[])
  
  return (
    <div className="App">
     { news.length === 0 ?
     <Spinner animation="grow" />
     :
        <Row xs={1} md={4} className="g-4">
        {
          news.map(nw => <News
          news={nw}
          
          ></News>)
        }
      </Row>
     }



    
    </div>
   
  );
}

export default App;
