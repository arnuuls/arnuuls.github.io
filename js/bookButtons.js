//bookButtons.js
	function setIndex() {
		let pages = document.querySelectorAll(".bookPage");
		for (let i = 0; i < pages.length; i++) {
			pages[i].style.zIndex = pages.length - i;
		}
	}

	setIndex();

	function previous() {
		let current = document.querySelector(".current");
		let book = document.querySelector(".book");
		let prevSib = current.previousElementSibling;
		if (prevSib) {
			if (prevSib.classList.contains("firstBookPg")) {
					book.style.transform = "translateX(24.49%)";
			} else {
					current.classList.remove("current", "shadow", "hover-shadow");
					book.style.transform = "translateX(49.49%)";
			}
			prevSib.classList.add("current","hover-shadow", "currentmedia");
			setIndex();
			prevSib.style.transform = "rotateY(0deg)";
			let prevSib2 = prevSib.previousElementSibling;
			if (prevSib2 && prevSib2.classList.contains("bookPage")) {
				prevSib2.style.zIndex = "9998";
			}
		}
	}

	function next() {
		let current = document.querySelector(".current");
		let book = document.querySelector(".book");
		let nextSib = current.nextElementSibling;
		if (nextSib) {
			current.style.transform = "rotateY(180deg)";
			book.style.transform = "translateX(49.49%)";
			if (current.classList.contains("firstBookPg")) {
					current.classList.remove("current", "shadow");
			} else {
					current.classList.remove("current", "shadow", "hover-shadow", "currentmedia");
			}
			setIndex();
			current.style.zIndex = "9998";
			if (nextSib.classList.contains("endBookPg")) {
					nextSib.classList.add("current");
					book.style.transform = "translateX(74.49%)";
			} else {
					nextSib.classList.add("current", "hover-shadow", "currentmedia");
			}
		} 
	}