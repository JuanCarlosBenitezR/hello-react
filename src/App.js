import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Characters from './Components/Characters';
function App() {
	const [characters, setcharacters] = useState([]);
	const firstUrl = 'https://rickandmortyapi.com/api/character';
	const fetchCharacters = (url) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setcharacters(data.results))
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		fetchCharacters(firstUrl);
	}, []);

	return (
		<>
			<Navbar brand={'Rick and morty app'}></Navbar>;
			<div className="container mt-5">
				<Characters characters={characters}></Characters>
			</div>
			;
		</>
	);
}

export default App;
