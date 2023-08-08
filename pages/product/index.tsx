import Image from "next/image"
import styles from "./styles.module.css"
import { BtnBack } from "@/components/atoms"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

const Product = () => {
    return (
        <>
            <div className={"relative overflow-hidden rounded-3xl "+styles.wrapper}>
                <Image
                    src='/assets/images/product-2.png'
                    width={500}
                    height={500}
                    alt='product'
                />
                <div className="absolute top-9 left-2">
                    <BtnBack/>
                </div>
                <div className={"absolute "+styles.footerBanner}></div>
            </div>
            <div className={"py-12 px-5 "+styles.content}>
                <span className={styles.category}>Dry Clean</span>
                <h1 className={"mt-4 "+roboto.className}>T-Shirt</h1>
                <h2 className="mb-4">$ 6.00/pc</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit diam, lobortis at auctor eu, tempus eget enim. Etiam ullamcorper risus ac diam pulvinar, a auctor nunc sagittis. In euismod est est, ac pretium sem egestas eget. Nunc mollis rutrum nisl lacinia convallis. Curabitur et arcu eros. Proin eu tellus augue. Vestibulum auctor risus erat, et tempor augue </p>
            </div>
        </>
    )
}

export default Product