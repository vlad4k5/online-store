import './index.scss'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'



export const AppContext = createContext([])


function App() {

  const [items, setItmes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }
  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);
      const cartResponse = await axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/cart")
      const favoritesResponse = await axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/favorites")
      const itemsResponse = await axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/items")

      setIsLoading(false)
      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItmes(itemsResponse.data)
    }
    fetchData()
  }, [])



  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const res = await axios.post("https://60f2d6c76d44f300177887b8.mockapi.io/cart", obj)
        setCartItems(prev => [...prev, res.data])
      }
    }
    catch (error) {
      alert("Не удалось добавить в корзину")
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id))
  }



  const onAddToFavorites = async (obj) => {
    try {
      console.log(obj)
      if (favorites.find(item => item.id === obj.id)) {
        axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/favorites/${obj.id}`)
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
      } else {
        const res = await axios.post("https://60f2d6c76d44f300177887b8.mockapi.io/favorites", obj)
        setFavorites(prev => [...prev, res.data])
      }
    }
    catch (error) {
      alert("Не удалось добавить в фавориты")
    }
  }






  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }



  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded }}>
      <div className="wrapper">

        {cartOpened && <Drawer onClose={() => { setCartOpened(false) }} items={cartItems} onRemove={(id) => onRemoveItem(id)} setCartItems={setCartItems} />}
        <Header onClickCart={() => { setCartOpened(true) }} />

        <Switch>
          <Route path="/test" render={() => <div>Hello world</div>} />
          <Route path="/favorites" render={() => <Favorites onFavorite={onAddToFavorites} />} />
          <Route exact path="/" render={() => <Home searchValue={searchValue} items={items} onAddToFavorites={onAddToFavorites} onAddToCart={onAddToCart} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput} cartItems={cartItems} isLoading={isLoading} />} />
        </Switch>
      </div >
    </AppContext.Provider>
  );
}

export default App;