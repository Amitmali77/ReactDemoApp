import React,{useState,useEffect} from 'react'

const ProductsPageCards = () => 
 {
   const[products, setProducts] = useState([]); 
   const[categories, setCategories] = useState([]);
   
   const LoadCategories = async () =>{
    try{
       const response = await fetch('https://fakestoreapi.com/products/categories');
       const jsonData = await response.json();
       jsonData.unshift('All')
       console.log('jsonData',jsonData)
       setCategories(jsonData);
    }catch(error){
        console.error('Error Fetching Data',error)
    }
  }

   const LoadProducts = async () =>{
    try{
       const response = await fetch('https://fakestoreapi.com/products');
       const jsonData = await response.json();
       console.log('jsonData',jsonData)
       setProducts(jsonData);
    }catch(error){
        console.error('Error Fetching Data',error)
    }
  }  

  useEffect(()=>{
    LoadProducts();
    LoadCategories()
  },[])


 

//   const handleUpdate = async (id) => {
//       try {
//       const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       const updatedProduct = await response.json();
//       setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
//     } catch (error) {
//       console.error('Error updating product:', error);
//     }
//   };

//   const handleDelete = async(id) =>{
//     try{
//         await fetch(`https://fakestoreapi.com/products/${id}`,{
//             method: 'DELETE'
//         });
//         setProducts(products.filter(product=>product.id !== id))
//     }catch(error){
//         console.error('Error deleting product:',error)
//     }

//   }

  return (
    <div className='container-fluid'>
       <header >
           <h1><span className='bi bi-cart4'></span> Shopping Site</h1>
       </header>

       <section className='row mt-3'>
          <nav className='col-3'>
             <div style={{marginTop:'20px'}}>
                <label>Select a Category</label>
                <div style={{marginTop:'10px'}}>
                    <select className='form-select'>
                        {
                            categories.map(category=>
                                <option key={category}>{category.toUpperCase()}</option>
                            )
                        }
                    </select>
                </div>
             </div>
          </nav>

          <main className='col-9 d-flex flex-wrap overflow-auto' style={{height:'600px'}}>
          {
                products.map((product)=>
                    <div key={product.id} className='card p-3 m-4 w-25'>
                        <img src={product.image} className='card-img-top' height='150'/>
                        <div className='card-header' style={{height:'160px'}}>
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

export default ProductsPageCards
