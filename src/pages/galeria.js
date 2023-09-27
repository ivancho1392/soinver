import Layout from "../Components/Layout";
import styles from "../styles/galeria.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Galeria() {
  return (
    <Layout>
      <h1 className={styles.galeria}>La Maison</h1>

      <Carousel className={styles.carousel} showThumbs={false}>
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
      </Carousel>

      <h1 className={styles.galeria}>City Gardens</h1>

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
      </Carousel>
    </Layout>
  );
}
