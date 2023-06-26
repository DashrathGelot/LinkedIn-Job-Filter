const fun = () => {
	const elements = document.getElementsByClassName("job-card-list__footer-wrapper");

	[...elements].forEach(elm => {
		const promoted = elm.getElementsByClassName("t-12 t-normal t-black--light job-card-container__footer-item");
		if (promoted.length > 0) {
			elm.parentElement.style.display = "none";
		}
	});
}


setTimeout(() => {
    fun();
}, 2000);