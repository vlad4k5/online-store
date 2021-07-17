import './index.scss'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import { useEffect, useState } from 'react'
import axios from 'axios'






function App() {

  const [items, setItmes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }


  // const toggleCart = () => {
  //   setCartOpened(!cartOpened)
  //   console.log(cartOpened)
  // }


  useEffect(() => {
    axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/items")
      .then(res => {
        setItmes(res.data)
      })
    axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/cart")
      .then(res => {
        setCartItems(res.data)
      })
  }, [])



  const onAddToCart = (obj) => {
    console.log(obj)
    axios.post("https://60f2d6c76d44f300177887b8.mockapi.io/cart", obj)
      .then(res => {
        console.log(res)
        setCartItems(prev => [...prev, res.data])
      });
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(i => i.id !== id))
  }



  return (
    <div className="wrapper">

      {cartOpened && <Drawer onClose={() => { setCartOpened(false) }} items={cartItems} onRemove={(id) => onRemoveItem(id)} />}
      <Header onClickCart={() => { setCartOpened(true) }} />


      <div className="content">



        <div className="search-wrapper">
          <div>
            <h1 id="content-title">{searchValue ? `Поиск по "${searchValue}":` : "Все кроссовки"}</h1>
          </div>
          <div className="search-block">
            <img alt="Search" src="/img/search.svg" />
            {searchValue && <img alt="Delete" src="/img/btn_remove.svg" className="clearSearch" onClick={() => setSearchValue("")} />}
            <input placeholder="Поиск..." onChange={onChangeSearchInput} value={searchValue} />
          </div>
        </div>



        <div className="sneakers">
          {items.filter(i => i.title.toLowerCase().includes(searchValue.toLowerCase())).map(i =>
            <Card
              title={i.title}
              price={i.price}
              imgUrl={i.imgUrl}
              key={i.id}
              onFavorite={() => { console.log("Товар добавлен в избранное") }}
              onPlus={() => onAddToCart(i)}
            />)}
        </div>


      </div>
    </div >
  );
}

export default App;
