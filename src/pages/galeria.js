import Layout from "../Components/Layout";
import styles from "../styles/galeria.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Galeria() {
  return (
    <Layout>
      <h1 className={styles.galeria}>PH La Maison By Fendi Casa</h1>

      <Carousel className={styles.carousel} showThumbs={false}>
        <div className={styles.videoContainer}>
          <video controls className={styles.video}>
            <source
              src="https://soinverjip.s3.amazonaws.com/videos/LaMaison.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div className={styles.videoContainer}>
          <video controls className={styles.video}>
            <source
              src="https://soinverjip.s3.amazonaws.com/videos/VIDEO+L1+ANDROID.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/fotos/20230808_131655.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/fotos/20230808_134318.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/maison/maison1.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/maison/maison2.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/maison/maison3.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/maison/maison4.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/maison/maison5.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/maison/maison6.jpg"
            alt="LogoSoinver"
          />
        </div>
      </Carousel>

      <h1 className={styles.description}>
        Para este proyecto SOINVER suministró servicios como subcontratista de
        instalación y ajuste de siete (7) elevadores de alta velocidad para la
        multinacional ELEVADORES OTIS. 62 Pisos. Ciudad de Panamá.
      </h1>

      <h1 className={styles.galeria}>PH Upper East Tower</h1>

      <Carousel className={styles.carousel} showThumbs={false}>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/upper/Upper+1.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/upper/Upper+2.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/upper/Upper+3.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/upper/Upper+4.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/upper/Upper+5.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/upper/Upper+6.jpg"
            alt="LogoSoinver"
          />
        </div>
      </Carousel>

      <h1 className={styles.description}>
        Para este proyecto SOINVER suministró servicios como subcontratista de
        instalación y ajuste de cinco (5) elevadores de alta velocidad para la
        multinacional ELEVADORES OTIS. 42 Pisos. Ciudad de Panamá.
      </h1>

      <h1 className={styles.galeria}>PH City Gardens</h1>

      <Carousel className={styles.carousel} showThumbs={false}>
        <div className={styles.videoContainer}>
          <video controls className={styles.video}>
            <source
              src="https://soinverjip.s3.amazonaws.com/videos/20230706_101601.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/citygardens/City+Gardens+1.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/citygardens/City+Gardens+2.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/citygardens/City+Gardens+3.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/citygardens/City+Gardens+4.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/citygardens/City+Gardens+5.jpg"
            alt="LogoSoinver"
          />
        </div>
      </Carousel>

      <h1 className={styles.description}>
        Para este proyecto SOINVER suministró servicios como subcontratista de
        instalación y ajuste de cinco (5) elevadores de media velocidad para la
        multinacional ELEVADORES OTIS. 42 Pisos. Ciudad de Panamá.
      </h1>

      <h1 className={styles.galeria}>Metro de Panamá</h1>

      <Carousel className={styles.carousel} showThumbs={false}>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro1.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro2.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro3.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro4.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro5.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro6.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro7.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro8.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/metrol2/metro9.jpg"
            alt="LogoSoinver"
          />
        </div>
      </Carousel>

      <h1 className={styles.description}>
        Para este proyecto SOINVER suministró servicios como subcontratista de
        instalación y ajuste de elevadores y escaleras electricas a lo largo de
        todas las estaciones de la Linea 2 del metro de Panamá para ELEVADORES
        OTIS. Ciudad de Panamá.
      </h1>

      <h1 className={styles.galeria}>Ágora Convention Center</h1>

      <Carousel className={styles.carousel} showThumbs={false}>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/agora/Agora3.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/agora/Agora1.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/agora/Agora2.jpg"
            alt="LogoSoinver"
          />
        </div>
        <div>
          <img
            src="https://soinverjip.s3.amazonaws.com/agora/Agora4.jpg"
            alt="LogoSoinver"
          />
        </div>
      </Carousel>

      <h1 className={styles.description}>
        Para este proyecto SOINVER suministró servicios como subcontratista de
        instalación y ajuste de doce (12) escaleras electricas para ELEVADORES
        OTIS. Bogotá Colombia.
      </h1>
    </Layout>
  );
}
