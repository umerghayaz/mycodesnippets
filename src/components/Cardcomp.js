import React,{useState,useEffect} from 'react'
import { Card } from 'antd';
const { Meta } = Card;
function Cardcomp() {
    const [productData, setProductData] = useState(null);

    const fetchUserData = () => {
      fetch("https://dummyjson.com/products")
        .then(response => {
          return response.json()
        //   console.log(response,'users')

        })
        .then(data => {
            setProductData(data)
          console.log(productData,'users')

        })
    }
    useEffect(() => {
        fetchUserData()
      }, [])
  return (
    <div>
 {productData && (
        <Card>
          <Meta title={productData.title} description={productData.description} />
          <img src={productData.image} alt={productData.title} style={{ width: '100%' }} />
          <p>Price: {productData.price}</p>
        </Card>
      )}
    </div>
  )
}

export default Cardcomp

