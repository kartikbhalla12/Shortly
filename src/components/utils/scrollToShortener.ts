const scrollToShortener = () => {
	let urlShortener = document.getElementById('urlShortener');
	if (urlShortener) {
		window.scrollTo({
			top: urlShortener.offsetTop - 150,
			left: urlShortener.scrollLeft,
		});
	}
};

export default scrollToShortener;
