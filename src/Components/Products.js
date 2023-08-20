import React, { useEffect } from 'react'
import { add } from '../Store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../Store/productSlice'
import { Status } from '../Store/productSlice'
import {ClockLoader} from 'react-spinners'
const Products = () => {

    // const [buttonName,setButtonName] = useState('Add')

    const btnName = "Add Item"

    // const baseUrl = 'https://fakestoreapi.com/products'

    // const [products, setProducts] = useState([])

    const dispatch = useDispatch();

    //const products = useSelector((item) => item.product)    //this product is having two state {data ,status}
    // 'data : products' rename data as product
    const {data:products,status} = useSelector((state) => state.product)

    useEffect(() => {
        //using reducer
        dispatch(fetchProduct())


        //without reducer
        // const fetchData = async () => {
        //     const res = await fetch(baseUrl)
        //     const data = await res.json()
        //     setProducts(data)
        //     console.log(data);
        // }
        // fetchData()

    }, [dispatch])

    if(status === Status.LOADING )  {
        return <div className='loader'><ClockLoader color='green' /> </div>
    }
    
    if(status === Status.ERROR){
        return <div className='loader'><h4>Something Went Wrong</h4> </div>
    }
    

    const handleAdd = (product) => {
        dispatch(add(product))
    }
    
 

    return (

        <div className='productsWrapper'>
            {
              
                products.map((product) => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button
                            onClick={()=> handleAdd(product)}
                            className='btn'>{btnName}</button>
                    </div>
                ))
            }
        </div>

    )
}

export default Products
