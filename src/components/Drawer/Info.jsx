import { Link } from "react-router-dom"
import s from "./Drawer.module.scss"
import leftArrow from "../../assets/img/arrow_left.svg"

const Info = ({ imgWidth, imgHeight, title, description, onClose, image }) => {
    return <div className={s.infoBlock}>
        <img alt="info" src={image} width={imgWidth} height={imgHeight} />
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to="/"><button onClick={onClose}><img alt="Arrow" src={leftArrow} className={s.arrow} />Вернуться к покупкам</button></Link>
    </div>
}
export default Info