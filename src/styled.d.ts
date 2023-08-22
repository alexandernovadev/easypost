import { themeLight } from './themes/themeLight';
import 'styled-components';

declare module 'styled-components' {
  type Theme = typeof themeLight;
  export interface DefaultTheme extends Theme {}
}