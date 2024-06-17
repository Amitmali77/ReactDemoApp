import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {fetchCart} from '../store/reducers/cart/cartThunk'

const CartItems = () => 
 {
    const dispatch = useDispatch()
    const cartList = useSelector((state)=> (state?.cart?.cartList)) 
    console.log('cartitems',cartList)
    const [products, setProducts] = useState({}); 
//    const cartItems = products.carts;
//    if (cartItems && cartItems.length > 0) {
//     const firstCartItem = cartItems[0];
//     console.log('firstitems',firstCartItem)
//    }
   
//    useEffect(()=>{
//         fetchData()
//    },[])

    useEffect(()=>{
        dispatch(fetchCart())
    },[])

//    const fetchData = async () =>{
//     try{
//        const response = await fetch('https://dummyjson.com/carts');
//        const jsonData = await response.json();
//        console.log('jsonData',jsonData)
//        setProducts(jsonData);
//     }catch(error){
//         console.error('Error Fetching Data',error)
//     }
//   }  


  return (
    <div>
        <h1><span className='bi bi-cart4'></span>Cart Items</h1> 
        <table className='my-table' style={{width:'1200px',marginTop:'30px',border:'1px solid black'}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Image URL</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartList &&
                    cartList.carts &&
                    cartList.carts.length > 0 &&
                    cartList.carts[0].products.map((product) => (
                       <tr>
                           <td >{product.id}</td>
                           <td >{product.title}</td>
                           <td>{product.price}</td>
                           <td >{product.quantity}</td>
                           <td >{product.total}</td>
                           <td>
                              <img src={product.thumbnail} width='250px' height='150px'/>
                           </td>
                           <td style={{width:'130px'}}>
                           <button onClick={()=>handleUpdate(product.id)}><i class="bi bi-pencil"></i></button>
                           <button onClick={()=>handleDelete(product.id)}><i class="bi bi-trash"></i></button>
                           </td>
                       </tr>
                    ))
                }
            </tbody>
        </table> 
      
    </div>
  )
}

export default CartItems
