import { Box, Grid, Skeleton, Toolbar, Typography } from '@mui/material'
import Card from '../components/Card'
import Select from '../components/Select'
import useProduct from '../Hooks/useProduct'
import type { SelectList } from '../types/select'

interface Props {
  searchQuery: string
  urlPath: string
}

const Main = ({ urlPath, searchQuery }: Props) => {
  const {
    sort,
    order,
    filter,
    products,
    isLike,
    setFilter,
    setLiked,
    error,
    loading,
  } = useProduct(urlPath, searchQuery)

  const handleFilterChange = async (val: SelectList, filterBy: string) => {
    setFilter({ ...filter, [filterBy]: val })
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 7 }}>
      <Toolbar />
      <Typography variant="h1">Products</Typography>

      <Box sx={{ my: 3, display: 'flex' }}>
        <Select
          placeHolder={filter.sort.name}
          values={sort}
          changeFilter={(val) => handleFilterChange(val, 'sort')}
        />
        <Select
          placeHolder={filter.order.name}
          values={order}
          changeFilter={(val) => handleFilterChange(val, 'order')}
        />
      </Box>
      <Grid container spacing={4}>
        {loading &&
          Array(6)
            .fill(5)
            .map((_, index) => (
              <Grid size={4} key={index}>
                <Skeleton variant="rounded" width={345} height={355} />
              </Grid>
            ))}
        {error && (
          <Typography color="text.danger" component={'p'}>
            {error}
          </Typography>
        )}

        {products.length > 0 ? (
          products.map((product) => (
            <Grid size={4} key={product.id}>
              <Card
                product={product}
                liked={isLike}
                changeLike={() => setLiked(!isLike)}
              />
            </Grid>
          ))
        ) : (
          <Typography variant="h3"> No product found...</Typography>
        )}
      </Grid>
    </Box>
  )
}

export default Main
