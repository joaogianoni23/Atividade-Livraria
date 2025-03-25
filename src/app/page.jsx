import styles from "./livraria.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Principal from "./components/principal";
import Destaques from "./components/destaques";
import Categorias from "./components/categorias";
import Lancamentos from "./components/lancamentos";
import Email from "./components/e-mail";
import Shopping from "./components/shopping";

export default function Home() {

  // Função para renderizar estrelas com base na avaliação
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className={styles.star}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className={styles.starHalf}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className={styles.starEmpty}>
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={styles.bookstoreContainer}>
      <Header />

      {/* HERO BANNER */}
      <Principal />

      {/* FEATURED BOOKS SECTION */}
      <Destaques />

      {/* CATEGORIES SECTION */}
      <Categorias />

      {/* NEW RELEASES SECTION */}
      <Lancamentos />

      {/* SUBSCRIPTION SECTION */}
      <Email />

      {/* SHOPPING CART */}
      <Shopping />

      {/* FOOTER */}
      <Footer />
      
      {/* OVERLAY */}
      <div className={styles.overlay}></div>

      {/* SCROLL TO TOP BUTTON */}
      <button className={styles.scrollTop}>↑</button>
    </div>
  );
}