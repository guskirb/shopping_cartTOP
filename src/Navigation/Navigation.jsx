import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navigation.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navigation({ handleSearch, search, cart, handleSetCart }) {
  const navigate = useNavigate();
  const [cartAmount, setCartAmount] = useState(0);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      navigate("/products", { state: search });
    }
  }

  useEffect(() => {
    let amount = 0;

    cart.forEach((item) => (amount += item.amount));

    setCartAmount(amount);
  }, [cart]);

  return (
    <>
      <div className={styles.navBar}>
        <Link to="/" className={styles.header}>
          <div className={styles.logo}></div>
          <h1>TechStore</h1>
        </Link>
        <div className={styles.searchBar}>
          <input
            type="text"
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          ></input>
          <Link to="/products" state={search}>
            <button className={styles.searchButton}></button>
          </Link>
        </div>
        <Link to="/products" state="">
          <button className={styles.navButton}>Shop All</button>
        </Link>
        <a href="https://github.com/guskirb">
          <button className={styles.navButton}>About</button>
        </a>
        <Link to="/cart">
          <div className={styles.shoppingCart}></div>
          {cartAmount !== 0 && (
            <div className={styles.cartNum}>{cartAmount}</div>
          )}
        </Link>
      </div>
    </>
  );
}

Navigation.propTypes = {
  search: PropTypes.string,
};

export default Navigation;
