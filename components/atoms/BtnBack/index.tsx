import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"

const BtnBack = () => {
    return (
        <Link href="/" className={styles.wrapper}>
            <Image
                src="/assets/images/ic-back.png"
                width={59}
                height={59}
                alt="Icon Back"
            />
        </Link>
    )
}

export default BtnBack