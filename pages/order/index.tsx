import { BtnBack, BtnChatWa } from "@/components/atoms"
import { Roboto } from 'next/font/google'
import styles from './styles.module.css'
import { ListOrder } from "@/components"

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

const Order = () => {
    return (
        <div className="relative pt-32">
            <div className="absolute top-9 left-2">
                <BtnBack/>
            </div>

            <div className={"px-9 "+styles.content}>
                <div className={"flex justify-center p-4 rounded-t-xl "+styles.header}>
                    <h1 className={roboto.className}>ORDER SUMMARY</h1>
                </div>
                <div className={styles.body}>
                    <div className="p-4">
                        <span className="float-right">ORDER #21340</span>
                        <h4 className={"text-black mt-12 "+roboto.className}>John Doe</h4>
                        <p>123 Pasir Ris,</p>
                        <p>13810, Singapore</p>
                    </div>
                    <div className={"px-4 "+styles.list}>
                        <ListOrder/>
                    </div>
                    <div className={"px-4 "+styles.list}>
                        <ListOrder/>
                    </div>
                    <div className={"px-4 "+styles.list}>
                        <ListOrder/>
                    </div>
                </div>
                <div className={"p-4 rounded-b-xl flex justify-between flex-wrap mb-9 "+styles.footer}>
                    <h2 className={roboto.className}>TOTAL ORDER</h2>
                    <h2 className={roboto.className}>$ 204.00</h2>
                </div>
                <BtnChatWa />
            </div>
        </div>
    )
}

export default Order