import styles from "./styles.module.css"

const CardService = ({service, description, icon}) => {
    return (
        <div className={styles.service}>
            <div className={styles.serviceTittle} >
                {service}
            </div>
            <div className={styles.sectionBody}>
                <p className={styles.serviceBody} dangerouslySetInnerHTML={{ __html: description }}>
                </p>
                <div className={styles.serviceIcon}> {icon} </div>
            </div>
        </div>
    )
}

export default CardService;