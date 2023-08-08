import Image from "next/image";
import styles from "./styles.module.css"
import { Roboto } from 'next/font/google'
import Link from "next/link";

interface Product {
    image: string,
    width: number,
    height: number|string,
    title: string,
    desc: string,
    url?: string,
}
const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

const ImageProduct = ({image, width, height, title, desc, url=''}:Product) => {
    return(
        <Link href={url} className={"relative overflow-hidden rounded-xl "+styles.wrapper}>
            <Image
                src={image}
                width={width}
                height={height}
                alt={title}
            />
            <div className={"absolute w-full p-3 rounded-b-xl "+styles.wrapperText}>
                <h1 className={roboto.className}>{title}</h1>
                <p>{desc}</p>
            </div>
        </Link>
    )
}

export default ImageProduct;