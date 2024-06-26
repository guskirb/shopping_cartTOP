import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Shipping from "../Navigation/Shipping";
import Footer from "../Navigation/Footer";

function Home({ handleSearch, search, cart, handleSetCart }) {
  return (
    <>
      <Navigation
        handleSearch={handleSearch}
        search={search}
        cart={cart}
        handleSetCart={handleSetCart}
      />
      <Shipping />
      <div className={styles.homeContainer}>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <Link to="/products" state="iphone">
              <h1 className={styles.bannerHeader}>The iPhone</h1>
              <p>New Camera. New Design.</p>
              <button className={styles.bannerButton}>Buy Now</button>
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <Link to="products/type=laptop">
            <div className={styles.laptop}>
              <h2>Shop Laptops</h2>
            </div>
          </Link>
          <Link to="products/type=mobile">
            <div className={styles.phone}>
              <h2>Shop Phones</h2>
            </div>
          </Link>
          <Link to="products/type=audio">
            <div className={styles.headphone}>
              <h2>Shop Audio</h2>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
