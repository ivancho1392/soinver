import styles from "./styles.module.css"

const CardServiceRight = ({service, description, icon, textAlign}) => {
    return (
        <div className={styles.service}>
            <div className={styles.serviceTittle} >
                {service}
            </div>
            <div className={`${styles.sectionBody} ${textAlign === "justify" ? styles.justifyText : ""}`}>
                <div className={styles.serviceIcon}> {icon} </div>
                <p className={styles.serviceBody} dangerouslySetInnerHTML={{ __html: description }}>
                </p>
            </div>
        </div>
    )
}

export default CardServiceRight;