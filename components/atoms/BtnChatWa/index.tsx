import Image from "next/image"
import styles from "./styles.module.css"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

const BtnChatWa = () => {
    return(
        <div className={"flex justify-center items-center rounded-2xl "+styles.wrapper}>
            <Image 
                src="/assets/images/ic-chat.png"
                width={34}
                height={34}
                alt="icon chat wa"
            />
            <span className={"ml-3 "+roboto.className}>WHATSAPP US</span>
        </div>
    )
}

export default BtnChatWa