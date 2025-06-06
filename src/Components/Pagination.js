import React from 'react';

const Pagination = ({ prev, next, onPrevious, onNext }) => {
	const handlePrevious = () => {
		onPrevious();
	};
	const handleNext = () => {
		console.log('Next:' + next);
		onNext();
	};
	return (
		<nav>
			<ul className="pagination justify-content-center">
				{prev ? (
					<li className="page-item">
						<button className="page-link" onClick={handlePrevious}>
							Previous
						</button>
					</li>
				) : null}
				{next ? (
					<li className="page-item">
						<button className="page-link" onClick={handleNext}>
							Next
						</button>
					</li>
				) : null}
			</ul>
		</nav>
	);
};

export default Pagination;
