import React, { useContext } from 'react'
import BreadCrum from '../Components/BreadCrums.jsx/BreadCrum';
import {useParams} from "react-router-dom"
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import all_product from '../Components/Assets/all_product';

export default function Product() {
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay  product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
      
    </div>
  )
}
