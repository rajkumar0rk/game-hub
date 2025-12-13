import { useEffect, useState } from 'react'
import productService from '../Services/productService'
import type { Category } from '../types/product'

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    let cancel: () => void
    const fetchData = async () => {
      const { data, cancel: cancelCategory } =
        await productService.getAll('/categories')
      cancel = cancelCategory
      setCategories(data)
    }
    fetchData()
    return () => cancel?.()
  }, [])

  return { categories, setCategories }
}

export default useCategories
