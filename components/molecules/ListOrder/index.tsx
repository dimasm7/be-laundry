import Image from "next/image"
import styles from "./styles.module.css"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

const ListOrder = () => {
    return(
        <div className="p-3 flex">
            <Image
                src='/assets/images/bag.png'
                width={46}
                height={50}
                alt="bag of laundry"
            />
            <div className={"ml-2 "+styles.text}>
                <span>Bag of Laundry</span>
                <p>Qty:2</p>
            </div>
            <div className={"flex flex-col justify-center items-center ml-auto "+styles.amount}>
                <span>Total</span>
                <h5 className={roboto.className}>$ 180.00</h5>
            </div>
        </div>
    )
}

export default ListOrder