import { ThemeMode } from "@/types"
import { useAppSelector } from '@/store'


export const useThemeMode = () : ThemeMode => {  
   return useAppSelector((state) => state?.theme?.colorScheme)
}
