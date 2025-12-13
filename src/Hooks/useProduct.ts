import { useEffect, useState } from 'react'
import type { Product } from '../types/product'
import productService from '../Services/productService'
import type { SelectList } from '../types/select'
import type { AxiosError } from 'axios'
const sort: SelectList[] = [
  {
    name: 'Title',
    slug: 'title',
  },
  {
    name: 'Category',
    slug: 'category',
  },
  {
    name: 'Rating',
    slug: 'rating',
  },
  {
    name: 'Price',
    slug: 'price',
  },
  {
    name: 'Discount Percentage',
    slug: 'discountPercentage',
  },
]
const order: SelectList[] = [
  {
    name: 'Ascending',
    slug: 'asc',
  },
  {
    name: 'Descending',
    slug: 'desc',
  },
]
const useProduct = (urlPath: string, searchQuery: string) => {
  const [filter, setFilter] = useState({
    order: {
      name: 'Order By',
      slug: '',
    },
    sort: {
      name: 'Sort By',
      slug: '',
    },
  })
  const [products, setProducts] = useState<Product[]>([])
  const [isLike, setLiked] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState('')
  useEffect(() => {
    let cancel: { productCancel: () => void }
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const { data: getProduct, cancel: productCancel } =
          await productService.getAll(urlPath, {
            sortBy: filter.sort.slug,
            order: filter.order.slug,
            q: searchQuery,
          })
        setProducts(getProduct.products)
        cancel = { productCancel }
        setLoading(false)
      } catch (error) {
        console.log('error on fetchProduct', error)
        setError((error as AxiosError).message)
        setLoading(false)
      }
    }
    fetchProduct()

    return () => {
      cancel?.productCancel()
    }
  }, [urlPath, filter, searchQuery])

  return {
    sort,
    order,
    filter,
    products,
    isLike,
    setFilter,
    setLiked,
    setProducts,
    loading,
    error,
  }
}

export default useProduct
