import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/configStore';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProductApi, ProductModel } from '../../redux/ProductReducer/ProductReducer';

type Props = {}

export default function Home({ }: Props) {

    const dispatch: DispatchType = useDispatch();
    const { arrProduct } = useSelector((state: RootState) => state.ProductReducer);

    useEffect(() => {
        const actionAsync = getProductApi();
        dispatch(actionAsync);
    }, [])

    return (
        <div className='container'>
            <h3>Product Future</h3>
            <div className='row mb-2'>
                {arrProduct.map((prod: ProductModel, index: number) => {
                    return (<div className='col-4 mt-4'>
                        <ProductCard prod={prod} />
                    </div>)
                })}
            </div>
        </div>
    )
}