import { Provider, useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@/theme'
import { useThemeMode } from '@/hooks'
import { store } from '@/store'
import { ThemeMode } from './types'
import ThemeModeSwitch from './components/ThemeModeSwitch'
import LoginPage from './pages/Auth/Login'
import { QueryClient, QueryClientProvider } from 'react-query'
import { queryClientConfig } from '@/utils'

const queryClient = new QueryClient(queryClientConfig)

function App() {
  const themeMode: ThemeMode = useThemeMode()
  const theme = createTheme(themeMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <ThemeModeSwitch />
            <LoginPage />
          </div>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider >
  )
}

export default App
