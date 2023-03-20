import { ChangeEvent } from 'react'
import { useAppDispatch } from '@/store/store'
import { themeActions } from '@/store'
import { useThemeMode } from '@/hooks'
import { ThemeMode } from '@/types'
import { FormControlLabel, Switch } from '@mui/material'

const ThemeModeSwitch = () => {
  const themeMode: ThemeMode = useThemeMode()
  const appDispatch = useAppDispatch()

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    appDispatch(
      themeActions.changeColorScheme(
        themeMode === 'light' ? 'dark' : 'light'
      )
    )
  }

  return (<FormControlLabel
    labelPlacement="end"
    label={themeMode}
    control={
      <Switch
        checked={themeMode === "dark"}
        onChange={handleChange}
      />
    }
  />)
}

export default ThemeModeSwitch
