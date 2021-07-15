import './index.scss'


import Card from './components/Card/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'


function App() {
  const data = [
    { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imgUrl: "/img/sneakers/1.jpg" },
    { title: "Мужские Кроссовки Nike Air Max 270", price: 15599, imgUrl: "/img/sneakers/2.jpg" },
    { title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, imgUrl: "/img/sneakers/3.jpg" },
    { title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imgUrl: "/img/sneakers/4.jpg" },
    { title: "Мужские Кроссовки Under Armour Curry 8", price: 15199, imgUrl: "/img/sneakers/5.jpg" },
    { title: "Мужские Кроссовки Nike Kyrie 7", price: 11299, imgUrl: "/img/sneakers/6.jpg" },
    { title: "Мужские Кроссовки Jordan Air Jordan 11", price: 10799, imgUrl: "/img/sneakers/7.jpg" },
    { title: "Мужские Кроссовки Nike LeBron XVIII", price: 16499, imgUrl: "/img/sneakers/8.jpg" },
    { title: "Мужские Кроссовки Nike Lebron XVIII Low", price: 13999, imgUrl: "/img/sneakers/9.jpg" },
    { title: "Мужские Кроссовки Nike Lebron XVIII Low", price: 8499, imgUrl: "/img/sneakers/10.jpg" },
    { title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imgUrl: "/img/sneakers/11.jpg" },
    { title: "Мужские Кроссовки Nike Kyrie Flytrap IV", price: 11299, imgUrl: "/img/sneakers/12.jpg" },
  ]

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
            <img alt="Search" src="/img/search.svg" />
            <input placeholder="Поиск..." />
          </div>
        </div>



        <div className="sneakers">
          {data.map(obj => <Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />)}
        </div>




      </div>
    </div >
  );
}

export default App;
