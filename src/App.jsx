import './index.scss'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Drawer from './components/Drawer'
import { useEffect, useState } from 'react'
import axios from 'axios'






function App() {

  const [items, setItmes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);



  // const toggleCart = () => {
  //   setCartOpened(!cartOpened)
  //   console.log(cartOpened)
  // }


  useEffect(() => {
    axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/items")
      .then(res => {
        console.log(res)
        setItmes(res.data)
      })
  }, [])



  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])

  }

  return (
    <div className="wrapper">

      {cartOpened && <Drawer onClose={() => { setCartOpened(false) }} items={cartItems} />}
      <Header onClickCart={() => { setCartOpened(true) }} />


      <div className="content">

        <div className="search-wrapper">
          <div>
            <h1 id="content-title">Все кроссовки</h1>
          </div>
          <div className="search-block">
            <img alt="Search" src="/img/search.svg" />
            <input placeholder="Поиск..." />
          </div>
        </div>



        <div className="sneakers">
          {items.map(i =>
            <Card
              title={i.title}
              price={i.price}
              imgUrl={i.imgUrl}
              id={i.id}
              onFavorite={() => { console.log("Товар добавлен в избранное") }}
              onPlus={(obj) => onAddToCart(i)}
            />)}
        </div>




      </div>
    </div >
  );
}

export default App;
