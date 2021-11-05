const main_el=document.querySelector("main");

const data=[
{
	image: "images/bicycle.jpg",
	text: "bicycle image"
},

{
	image: "images/bitcoin.jpg",
	text: "bitcoin image"
},

{
	image: "images/coffee.jpg",
	text: "coffee image"
},

{
	image: "images/cyclestand.jpg",
	text: "cyclestand image"
},

{
	image: "images/helmet.jpg",
	text: "helmet image"
},

{
	image: "images/leaf.jpg",
	text: "leaf image"
},

{
	image: "images/saturnbuilding.jpg",
	text: "saturnbuilding image"
},

{
	image: "images/stairs.jpg",
	text: "cyclestand image"
}


];

data.forEach(createBox);
function createBox(item){

	const { image, text}=item; //destructuring
	// or const image=item.image;
	// const text=item.text;

	const box=document.createElement("div");
	box.classList.add("box");
	box.innerHTML=`
	  <img src="${image}" alt="${text}" />
        <p>${text}</p>

	`;

	main_el.appendChild(box);
}

