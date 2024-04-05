import "./styles/App.css";
import Header from "./Header";
import Grid from "./Grid";

let name = "VOIDWARDEN (BETA) by JBarbeau.art";
let description =
	"VOIDWARDEN is a generative project that uses particle physics to create unique, abstract art. Each piece is a snapshot of a moment in time, a glimpse into the void. The project is in beta and will feature more variations and options in the future.";

function App() {
	return (
		<>
			<Header />
			<div className='app'>
				<div className='app__intro'>
					<h1 className='app__title'>{name}</h1>
					<p className='app__text'>{description}</p>
				</div>
				<Grid />
			</div>
		</>
	);
}

export default App;
