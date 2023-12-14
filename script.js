//your JS code here. If required.
let boxes= document.querySelectorAll(".square");
// console.log(boxes);

boxes.forEach(box=>{
	box.addEventListener("mouseenter", while_entering);
	box.addEventListener("mouseleave", while_leaving);
});

function while_entering(event) {
	// console.log(event.target);
	boxes.forEach(box=>{
		if(box.id!==event.target.id){
			box.classList.add("active");
		}
	})
	// console.log("hovering");
}

function while_leaving() {
	boxes.forEach(box=>{
		if(box.classList.contains("active")){
			box.classList.remove("active");
		}
	})
	
}
