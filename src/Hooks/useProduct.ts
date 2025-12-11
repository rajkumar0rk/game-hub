import { useEffect, useState } from "react"
import type {  Product } from "../types/product"
import productService from "../Services/productService"
import type { SelectList } from "../types/select"
 const sort :SelectList[]= [{
    name: "Title",
    slug:"title"
  },
  {
    name: "Category",
    slug: "category"
  },
  {
    name: "Rating",
    slug: "rating"
  },
  {
    name: "Price",
    slug:"price"
  },
  {
    name: "Discount Percentage" ,
    slug:"discountPercentage"
  }

  ]
   const order :SelectList[]= [
    {
       name: "Ascending" ,
    slug:"asc"
    },
    {
       name: "Descending" ,
    slug:"desc"
    }

   ]
const useProduct = (url:string) => {

  const [filter, setFilter] = useState({
    order: {
      name:"Order By",
    slug:""
    },
    sort: {
      name:"Sort By",
    slug:""
    }
  })
  const [products, setProducts] = useState<Product[]>([])
  const [isLike, setLiked] = useState<boolean>(false)
  useEffect(() => {
    let cancel:{productCancel:()=>void};
    const fetchProduct = async () => {

       const q= `?sortBy=${filter.sort.slug}&order=${filter.order.slug}`
      const { data:getProduct, cancel: productCancel } = await productService.getAll(url,q)
      setProducts(getProduct.products)
      cancel = {productCancel}
    }
    fetchProduct()

    return () => {cancel?.productCancel()}
  }, [url,filter])


  return { sort, order, filter, products, isLike, setFilter, setLiked,setProducts }
}

export default useProduct;
