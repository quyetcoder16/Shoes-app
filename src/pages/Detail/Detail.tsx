import React, { useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductDetailModel, RelatedProduct } from '../../Models/ProductModel'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/configStore'
import { useParams } from 'react-router-dom'
import { getProductDetailApi } from '../../redux/ProductReducer/ProductReducer'

type Props = {}

export default function Detail({ }: Props) {

    const { productDetail } = useSelector((state: RootState) => state.ProductReducer);


    const params = useParams();
    const dispatch: DispatchType = useDispatch();

    const getProductByIdApi = () => {
        const id: string | undefined = params?.id;
        const actionThunk = getProductDetailApi(id as string);
        dispatch(actionThunk);
    }

    useEffect(() => { getProductByIdApi() }, [params?.id]);

    return (
        <div className='container'>
            {/* <h3>Product name</h3> */}
            <div className='row mt-2'>
                <div className='col-4'>
                    <img src={productDetail?.image} alt='...' height={350} width={350}
                        style={{ objectFit: 'cover' }} />
                </div>
                <div className='col-8'>
                    <h3>{productDetail?.name}</h3>
                    <p>{productDetail?.shortDescription}</p>
                </div>
            </div>
            <h3 className='mt-2 text-center'>-Realate Product -</h3>
            <div className='row'>
                {productDetail?.relatedProducts.map((prop: RelatedProduct, index: number) => {
                    return (<div className='col-4' key={index} >
                        <ProductCard prod={prop} />
                    </div>);
                })}


            </div>
        </div>
    )
}