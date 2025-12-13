import {
  AppBar,
  Box,
  FormControlLabel,
  IconButton,
  Toolbar,
} from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import Switch from '../components/Switch'
import Search from '../components/Search'
import Logo from '../assets/logo.webp'
import { useState, type FormEvent } from 'react'

interface Props {
  changeSearchQuery: (val: string) => void
  changeUrlPath: (path: string) => void
}
const NavBar = ({ changeSearchQuery, changeUrlPath }: Props) => {
  const { mode, setMode } = useColorScheme()
  const [search, setSearch] = useState('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    changeUrlPath(`search`)
    changeSearchQuery(search)
  }
  return (
    <AppBar
      position="absolute"
      enableColorOnDark
      elevation={0}
      sx={{
        boxShadow: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: (theme) => theme.palette.text.primary,
        bgcolor: (theme) => theme.palette.background.default,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <img src={Logo} style={{ width: '70px', height: '70px' }} />
        </IconButton>
        <Box width={'100%'} px={2}>
          <form onSubmit={handleSubmit}>
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </Box>

        <Box sx={{}}>
          <FormControlLabel
            control={
              <Switch
                sx={{ m: 1 }}
                checked={mode === 'dark' ? true : false}
                onChange={(e) => setMode(e.target.checked ? 'dark' : 'light')}
              />
            }
            sx={{ textWrap: 'nowrap' }}
            label="Dark Mode"
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
