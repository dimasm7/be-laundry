import Image from "next/image";
import styles from "./styles.module.css"
import { Roboto } from 'next/font/google'
import Link from "next/link";

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})
const CardPreviousOrder = () => {
    return(
        <Link href="/order" className={styles.wrapper}>
            <div className="flex bg-white rounded-md justify-between overflow-hidden">
                <div className="p-3 flex">
                    <Image
                        src='/assets/images/bag.png'
                        width={67}
                        height={73}
                        alt="bag of laundry"
                    />
                    <div className={"flex flex-col justify-between ml-2 "+styles.text}>
                        <span className={roboto.className}>Bag of Laundry</span>
                        <div>
                            <p>Total Order</p>
                            <h4 className={roboto.className}>$ 180.00</h4>
                        </div>
                    </div>
                </div>
                <div className={"h-auto flex flex-col items-center justify-center w-24 "+styles.wrapperInvoice}>
                    <Image
                        src='/assets/images/ic-invoice.png'
                        height={46}
                        width={46}
                        alt="icon invoice"
                    />
                    <span>INVOICE</span>
                </div>
            </div>
        </Link>
    )
}

export default CardPreviousOrder;