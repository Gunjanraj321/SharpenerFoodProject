import { Fragment } from "react";
import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals On Wheel</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="A Delicious Food pic!"/>
        </div>
    </Fragment>
}

export default Header;