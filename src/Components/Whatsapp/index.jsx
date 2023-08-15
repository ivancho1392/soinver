import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const Whatsapp = () => {
  return (
    <div className={styles.container}>
      <div className="mb-4">
        <Link className={styles.btnWhatsapp} href="http://wa.me/50763168396">
          <Image
            className={styles.btnWhatsappImage}
            src="/logos/logo-whatsapp.svg"
            alt="Contact with Whatsapp"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
};


/* "fixed bottom-12 left-4 p-3 rounded-lg cursor-pointer" style={{ zIndex: 100 }}*/