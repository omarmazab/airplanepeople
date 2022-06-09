function loadTimeline () {
	fetch("snippets/timeline-snippet.html")
	.then(res=>res.text())
	.then((txt) => {
		document.querySelector("#main-content").innerHTML = txt;
	});
} 