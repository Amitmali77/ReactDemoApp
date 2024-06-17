import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {fetchProduct} from '../store/reducers/product/productThunk'

const ProductsDummyCards = () => {
    const dispatch = useDispatch()
    const productsList = useSelector((state)=> (state?.product.productList))
    const [products, setProducts] = useState({});
    console.log('*',productsList)
    // console.log('products', products)
    
    useEffect(()=>{
       dispatch(fetchProduct())
    },[])
  

    return (
        <div className='container-fluid'>
            <header >
                <h1><span className='bi bi-cart4'></span> Shopping Site</h1>
            </header>

            <section >
               <main className=' d-flex flex-wrap overflow-auto' style={{height:'600px'}}>
                   {console.log("productList",productsList)}
                    {
                        productsList && productsList.products &&
                        productsList.products.map((product) =>
                            <div key={product.id} className='card p-3 m-4 w-25'>
                                <img src={product.images} className='card-img-top' height='150' />
                                <div className='card-header' style={{ height: '160px' }}>
                                    <h2 style={{ fontSize: '15px' }}>{product.title}</h2>
                                </div>
                                <div className='card-body'>
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className='bi bi-star-fill text-success'></span>
                                            {product.rating.rate}<span>[{product.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>

                            </div>
                        )
                    }
                </main>
            </section>
        </div>

    )
}

export default ProductsDummyCards
