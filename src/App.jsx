import { ThemeProvider } from "styled-components";
import Tutorial from "./components/Tutorial";
import { GlobalStyle } from "./components/styles/Global.styles";

function App() {
	const theme = {
		dark: {
			wrapper: "#262626",
			card: "#1e1e1e",
			h1: "#fff",
		},
		light: {
			wrapper: "#f0f2f5",
			card: "#fff",
			h1: "#111",
		},
	};

	return (
		<div className="app">
			<ThemeProvider theme={theme.light}>
				<GlobalStyle />
				<Tutorial />
			</ThemeProvider>
		</div>
	);
}

export default App;
