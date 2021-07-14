import './index.scss'

import plus from "./assets/img/plus.svg"
import search from "./assets/img/search.svg"
import heart_liked from "./assets/img/heart_liked.svg"
import heart_unliked from "./assets/img/heart_unliked.svg"

import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'


function App() {
  return (
    <div className="wrapper">

      <Drawer />



      <Header />


      <div className="content">

        <div className="search-wrapper">
          <div>
            <h1 id="content-title">Все кроссовки</h1>
          </div>
          <div className="search-block">
            <img alt="Search" src={search} />
            <input placeholder="Поиск..." />
          </div>
        </div>



        <div className="sneakers">
          <Card />
        </div>




      </div>
    </div >
  );
}

export default App;
