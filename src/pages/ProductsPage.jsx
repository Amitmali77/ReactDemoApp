import React,{useState,useEffect} from 'react'

const ProductsPage = () => 
 {
   const [products, setProducts] = useState([]); 
   const [formData, setFormData] = useState({title:'',price:'',description:'',image:''})
   
   useEffect(()=>{
        fetchData()
   },[])

   const fetchData = async () =>{
    try{
       const response = await fetch('https://fakestoreapi.com/products');
       const jsonData = await response.json();
       console.log('jsonData',jsonData)
       setProducts(jsonData);
    }catch(error){
        console.error('Error Fetching Data',error)
    }
  }  

  const handleInputChange = (e) => {
       setFormData({
         ...formData,
         [e.target.name] : e.target.value
       })
  }

  const handleCreate = async() =>{
    try{
        const resposne = await fetch('https://fakestoreapi.com/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        });
        const newProduct = await resposne.json();
        setProducts([...products,newProduct]);
    }catch(error){
        console.error('Error creating product:',error)
    }
  }

  const handleUpdate = async (id) => {
      try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const updatedProduct = await response.json();
      setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDelete = async(id) =>{
    try{
        await fetch(`https://fakestoreapi.com/products/${id}`,{
            method: 'DELETE'
        });
        setProducts(products.filter(product=>product.id !== id))
    }catch(error){
        console.error('Error deleting product:',error)
    }

  }

  return (
    <div>
        <h2>CRUD operations with FakeStore API</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleCreate();
        }}>
            <input type='text' name='title' placeholder='Title' onChange={handleInputChange}/>
            <input type='text' name='price' placeholder='Price' onChange={handleInputChange}/>
            <input type='text' name='description' placeholder='Description' onChange={handleInputChange}/>
            <input type='text' name='image' placeholder='Image URL' onChange={handleInputChange}/>
            <button>Create</button>
        </form>
         
        <table className='my-table' style={{width:'100%',marginTop:'30px',border:'1px solid black'}}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image URL</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=>{
                       return<tr>
                           <td style={{width:'350px'}}>{product.title}</td>
                           <td style={{width:'100px'}}>{product.price}</td>
                           <td style={{width:'350px'}}>{product.description}</td>
                           <td>
                              <img src={product.image} width='250px' height='150px'/>
                           </td>
                           <td style={{width:'130px'}}>
                           <button onClick={()=>handleUpdate(product.id)}><i class="bi bi-pencil"></i></button>
                           <button onClick={()=>handleDelete(product.id)}><i class="bi bi-trash"></i></button>
                           </td>
                       </tr>
                    })
                }
            </tbody>
        </table> 
      
    </div>
  )
}

export default ProductsPage
