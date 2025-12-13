import { createTheme, ThemeProvider } from '@mui/material/styles'
import NavBar from './Layouts/NavBar'
import GLtheme from './theme'
import { Box, CssBaseline } from '@mui/material'
import SideBar from './Layouts/SideBar'
import Main from './Layouts/Main'
import { useState } from 'react'

function App() {
  const theme = createTheme(GLtheme)
  const [urlPath, setUrlPath] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <ThemeProvider theme={theme} defaultMode="dark">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavBar
          changeSearchQuery={(query) => setSearchQuery(query)}
          changeUrlPath={(path) => setUrlPath(path)}
        />
        <SideBar changeUrlPath={(path) => setUrlPath(path)} />
        <Main searchQuery={searchQuery} urlPath={urlPath} />
      </Box>
    </ThemeProvider>
  )
}

export default App
