import './index.scss'
import logo from "./assets/img/logo.png"
import cart from "./assets/img/cart.png"
import user from "./assets/img/user.png"
import plus from "./assets/img/plus.svg"
import sneakers1 from "./assets/sneakers/1.jpg"
import sneakers2 from "./assets/sneakers/2.jpg"
import sneakers3 from "./assets/sneakers/3.jpg"
import sneakers4 from "./assets/sneakers/4.jpg"
import sneakers5 from "./assets/sneakers/5.jpg"


function App() {
  return (
    <div className="wrapper">


      <header>
        <div className="headerLeft">
          <img className="imgLogo" alt="imgLogo" src={logo} />
          <div className="headerInfo">
            <h3>React-Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li><img src={cart} alt="cart" /><span>1205 руб.</span></li>
          <li><img width={20} height={20} src={user} alt="user" /></li>
        </ul>
      </header>


      <div className="content">
        <h1 id="content-title">Все кроссовки</h1>




        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} alt="Sneakers" src={sneakers1} />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card_Bottom">

              <div>
                <p className="card_Bottom-price">ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <div>
                <button className="card_Bottom-button">
                  <img width={11} height={11} src={plus} alt="add item" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} alt="Sneakers" src={sneakers2} />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card_Bottom">

              <div>
                <p className="card_Bottom-price">ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <div>
                <button className="card_Bottom-button">
                  <img width={11} height={11} src={plus} alt="add item" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} alt="Sneakers" src={sneakers3} />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card_Bottom">

              <div>
                <p className="card_Bottom-price">ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <div>
                <button className="card_Bottom-button">
                  <img width={11} height={11} src={plus} alt="add item" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} alt="Sneakers" src={sneakers4} />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card_Bottom">

              <div>
                <p className="card_Bottom-price">ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <div>
                <button className="card_Bottom-button">
                  <img width={11} height={11} src={plus} alt="add item" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} alt="Sneakers" src={sneakers5} />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="card_Bottom">

              <div>
                <p className="card_Bottom-price">ЦЕНА:</p>
                <b>12 999 руб.</b>
              </div>
              <div>
                <button className="card_Bottom-button">
                  <img width={11} height={11} src={plus} alt="add item" />
                </button>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default App;
