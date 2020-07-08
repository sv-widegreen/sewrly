import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
	margin: 0;
	border: 0;
}

:root {
--copper-gradient: linear-gradient(to bottom, #fdb66f, #e16044 29%, #8b2d38);

--copper-dark: #8c2d38;
--copper-medium: #DE5E44;
--copper-light: #FEB66F;
--copper-ultralight: #FFFBF6;

--teal-dark: #0B3A3A;
--teal-medium: #205F59;
--teal-light: #3C9181;
--teal-ultralight: #84C0B7;

--font-franklin: 'Libre Franklin', sans-serif;
--font-oxygen: 'Oxygen', sans-serif;
}

body {
  position: relative;
  font-family: var(--font-franklin);
  width: 375px;
  background: var(--copper-gradient);
  margin: 0;
  height: 100vh;
}`
