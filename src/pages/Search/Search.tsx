import React, { useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, RootState } from '../../redux/configStore';
import { getProductSearchAPI } from '../../redux/ProductReducer/ProductReducer';
import { ProductSearchModel } from '../../Models/ProductModel';
type Props = {}

export default function Search({ }: Props) {

    interface SearchModel {
        keyword: string
    }

    const dispatch: DispatchType = useDispatch();

    const { arrProductSearch } = useSelector((state: RootState) => state.ProductReducer);

    // console.log(arrProductSearch);

    const formSearchFormik = useFormik<SearchModel>({
        initialValues: {
            keyword: ''
        },
        validationSchema: yup.object().shape({
            // keyword: yup.string().required('email cannot be blank!').email('email is invalid'),
            // password: yup.string().min(3, 'password must be at least 3 characters')
        }),
        onSubmit: (values) => {
            // // console.log(1234);
            // console.log(values);
            dispatch(getProductSearchAPI(values.keyword));

        }
    })

    return (
        <div className='search-component my-5'>
            <form onSubmit={formSearchFormik.handleSubmit} className='search-input container mt-4'>
                <p>Search</p>
                <div className='row'>
                    <input name='keyword' onChange={formSearchFormik.handleChange}
                        onBlur={formSearchFormik.handleBlur} className='form-control col-6' placeholder='product name ...' />
                    <button type='submit' className='btn'>SEARCH</button>
                </div>
            </form>
            <div className='search-result mt-5'>
                <div className='linear-gradient'>
                    <h1 className='text-white'>Search result</h1>
                </div>
                <div className='row container m-4'>
                    {arrProductSearch?.map((prod: ProductSearchModel, index: number) => {
                        return (<div className='col-4 mt-4' key={index} >
                            <ProductCard prod={prod} />
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}