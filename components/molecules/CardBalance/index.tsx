import styles from './styles.module.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})
const CardBalance = () => {
    return (
        <div className={'relative bg-white overflow-hidden flex items-end justify-end '+styles.wrapperCard}>
            <div className={'rounded-full absolute '+styles.bigCircle}></div>
            <div className={'rounded-full absolute '+styles.smallCircle}></div>
            <div className='text-end pr-4 pb-4'>
                <span>Your Balance</span>
                <h1 className={roboto.className}>$ 200.00</h1>
            </div>
        </div>
    )
}

export default CardBalance;