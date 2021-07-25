import { Link } from "react-router-dom"
import s from "./Drawer.module.scss"

const Info = ({ imgWidth, imgHeight, title, description, onClose, image }) => {
    return <div className={s.infoBlock}>
        <img alt="info" src={image} width={imgWidth} height={imgHeight} />
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to="/"><button onClick={onClose}><img alt="Arrow" src="img/arrow_left.svg" className={s.arrow} />Вернуться к покупкам</button></Link>
    </div>
}
export default Info