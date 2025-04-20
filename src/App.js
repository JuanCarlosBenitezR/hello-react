import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Characters from './Components/Characters';
import Pagination from './Components/Pagination';
function App() {
	const [characters, setcharacters] = useState([]);
	const [info, setinfo] = useState({});
	const firstUrl = 'https://rickandmortyapi.com/api/character';
	const fetchCharacters = (url) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setcharacters(data.results);
				setinfo(data.info);
			})
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		fetchCharacters(firstUrl);
	}, []);

	return (
		<>
			<Navbar brand={'Rick and morty app'}></Navbar>;
			<div className="container mt-5">
				<Pagination prev={info.prev} next={info.next} />
				<Characters characters={characters}></Characters>
				<Pagination></Pagination>
			</div>
			;
		</>
	);
}

export default App;
