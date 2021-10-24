import { defaultTheme } from "@styles/theme"
import "styled-components"

export type Theme = typeof defaultTheme

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
