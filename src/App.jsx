import './index.scss'
import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'
export const AppContext = createContext([])

function App() {

  const [items, setItmes] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    (async () => {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/cart"),
          axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/favorites"),
          axios.get("https://60f2d6c76d44f300177887b8.mockapi.io/items")
        ])
        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItmes(itemsResponse.data)
      }
      catch (error) {
        alert("Ошибка при заросе данных")
      }
    })()
  }, [])



  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find(item => item.itemId === obj.itemId)) {
        const elem = cartItems.find(item => item.itemId === obj.itemId)
        onRemoveItem(elem.id)
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
      if (favorites.find(item => item.itemId === obj.itemId)) {
        const elem = favorites.find(item => item.itemId === obj.itemId)
        onRemoveFavorite(elem.id)
      } else {
        const res = await axios.post("https://60f2d6c76d44f300177887b8.mockapi.io/favorites", obj)
        setFavorites(prev => [...prev, res.data])
      }
    }
    catch (error) {
      alert("Не удалось добавить в фавориты")
    }
  }
  const onRemoveFavorite = (id) => {
    axios.delete(`https://60f2d6c76d44f300177887b8.mockapi.io/favorites/${id}`);
    setFavorites(prev => prev.filter(item => item.id !== id))
  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (itemId) => {
    return cartItems.some(obj => obj.itemId === itemId)
  }
  const isItemFavorite = (itemId) => {
    return favorites.some(obj => obj.itemId === itemId)
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, isItemFavorite }}>
      <div className="wrapper">
        <Header onClickCart={() => { setCartOpened(true) }} />
        <Drawer
          onClose={() => { setCartOpened(false) }}
          items={cartItems}
          onRemove={(id) => onRemoveItem(id)}
          setCartItems={setCartItems} opened={cartOpened}
        />

        <Switch>

          <Route
            path="/favorites"
            render={() => <Favorites
              onFavorite={onAddToFavorites}
              onPlus={onAddToCart}
              isLoading={isLoading} />}
          />

          <Route
            path="/orders"
            render={() => <Orders onFavorite={onAddToFavorites}
              onPlus={onAddToCart} />}
          />

          <Route
            exact path="/"
            render={() => <Home searchValue={searchValue}
              items={items} onAddToFavorites={onAddToFavorites}
              onAddToCart={onAddToCart}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              cartItems={cartItems}
              isLoading={isLoading} />}
          />

        </Switch>
      </div >
    </AppContext.Provider>
  );
}
export default App;