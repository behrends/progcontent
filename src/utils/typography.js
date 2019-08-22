import Typography from 'typography';
import theme from 'typography-theme-fairy-gates';

theme.bodyFontFamily = ['Source Sans Pro', 'sans-serif'];
const typography = new Typography(theme);

export const { scale, rhythm, options } = typography;
export default typography;
