import './index.scss'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'






function App() {

  const [items, setItmes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }


  useEffect(() => {
    axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/items")
      .then(res => {
        setItmes(res.data)
      })
    axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/cart")
      .then(res => {
        setCartItems(res.data)
      })
    axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/favorites")
      .then(res => {
        setFavorites(res.data)
      })
  }, [])



  const onAddToCart = (obj) => {
    axios.post("https://60f2d6c76d44f300177887b8.mockapi.io/cart", obj)
      .then(res => {
        setCartItems(prev => [...prev, res.data])
      });
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(i => i.id !== id))
  }




  const onAddToFavorites = (obj) => {
    if (favorites.find(i => i.id === obj.id)) {
      axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/favorites/${obj.id}`)
      // .then(res => {
      //   setFavorites(prev => prev.filter(prev != res.data))
      // })
      setFavorites(prev => prev.filter(i => i.id !== obj.id))
    } else {
      axios.post("https://60f2d6c76d44f300177887b8.mockapi.io/favorites", obj)
        .then(res => {
          console.log(res.data)
          setFavorites(prev => [...prev, res.data])
        });
    }
  }
  console.log(favorites)




  return (
    <div className="wrapper">

      {cartOpened && <Drawer onClose={() => { setCartOpened(false) }} items={cartItems} onRemove={(id) => onRemoveItem(id)} />}
      <Header onClickCart={() => { setCartOpened(true) }} />

      <Switch>
        <Route path="/test" render={() => <div>Hello world</div>} />
        <Route path="/favorites" render={() => <Favorites items={favorites} onFavorite={onAddToFavorites} />} />
        <Route exact path="/" render={() => <Home searchValue={searchValue} items={items} onAddToFavorites={onAddToFavorites} onAddToCart={onAddToCart} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} />} />
      </Switch>

    </div >
  );
}

export default App;
