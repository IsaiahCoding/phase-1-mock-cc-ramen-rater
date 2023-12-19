const url = "http://localhost:3000/ramens/"

fetch("http://localhost:3000/ramens/")
  .then((res) => res.json())
  .then((data) => renderRamen(data))
//   .then((data) => console.log(data));


// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the 
// image for each of the ramen using an img tag inside the #ramen-menu div.

function renderRamen(ramenArray) {
    const ramenImage = document.querySelector('#ramen-menu');
    // console.log(ramenImage);

    ramenArray.forEach((ramenBowl) => {
    //   console.log(ramenBowl.ramenImage); 
      const ramenImgTag = document.createElement("img");
      ramenImgTag.src = ramenBowl.ramenImage;
      ramenImage.append(ramenImgTag);
    });

    const ramenForm = document.querySelector('form');
    ramenForm.addEventListener('submit', (e) => handleNewRamen(e));

function handleNewRamen(e) {
    e.preventDefault();
    console.log(e.target["new comment"].value)

    // let newRamen = {
    //     name : e.target.name.value,
    //     restaurant : e.target.restaurant.value,
    //     image : e.target.image.value,
    //     rating : e.target.rating.value
    //     comment : e.target.comment.value
    // }
    
}


}
    












