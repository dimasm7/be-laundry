import Slider from 'react-slick'
import ImageProduct from '../ImageProduct';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "./styles.module.css"
import { useEffect, useState } from 'react';

const settings = {
    infinite: false,
    slidesToShow: 1.8,
    slidesToScroll: 1,
}

const SlickProduct = () => {
    const [products, setProducts] = useState<any>([]);
    
    useEffect(() => {
        fetch("https://belaundry-api.sebaris.link/platform/product",{
            headers: {
                token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoxLCJpYXQiOjE2OTEyMjM4NDN9.Vdtbk-IDZ7ldPhFveVdi7NQWSlbG7JP-rH40PtT1_kc`,
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setProducts(data?.response);
        })
        .catch((err) => {
            return console.error(err);
        });
    }, []);
    return(
        <Slider {...settings}>
            {
                products.map((product:any, key:number) => (
                    <div key={key} className={"pr-3 "+styles.wrapper}>
                        <ImageProduct image={product.image} width={176} height={100} title={product.name} desc={product.description} url='/product' />
                    </div>
                ))
            }
        </Slider>
    )
}


export default SlickProduct;