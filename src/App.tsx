import { Provider, useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@/theme'
import { useThemeMode } from '@/hooks'
import { store } from '@/store'
import { ThemeMode } from './types'
import ThemeModeSwitch from './components/ThemeModeSwitch'

function App() {
  const themeMode: ThemeMode = useThemeMode()
  const theme = createTheme(themeMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <div className="App">
          <ThemeModeSwitch />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
