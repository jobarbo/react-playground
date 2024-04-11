import "./styles/App.css";
import Header from "./Header";
import Grid from "./Grid";

let name = "Art project proposal for Kodadot";
let description =
	"Each row represent a possible project. Click on an image to see a high resolution version of the output. Please note: Row 5 is animated. I can provide an animated version if needed.";

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
