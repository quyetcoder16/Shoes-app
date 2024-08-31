import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/configStore';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductModel } from '../../redux/ProductReducer/ProductReducer';

type Props = {}

export default function Home({ }: Props) {

    const { arrProduct } = useSelector((state: RootState) => state.ProductReducer);

    return (
        <div className='container'>
            <h3>Product Future</h3>
            <div className='row mb-2'>
                {arrProduct.map((prod: ProductModel, index: number) => {
                    return (<div className='col-4'>
                        <ProductCard prod={prod} />
                    </div>)
                })}
            </div>
        </div>
    )
}