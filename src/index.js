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
        ramenImgTag.src = ramenBowl.image;
        ramenImage.append(ramenImgTag);

        ramenImgTag.addEventListener('click', (e) => handleClick(e))
        function handleClick(e) {
            console.log(ramenBowl)

            const nameLocation = document.querySelector('.name')
            const imgLocation = document.querySelector('.detail-image')
            const restLocation = document.querySelector('.restaurant')
            const ratingLocation = document.querySelector('#rating-display')
            const commentLocation = document.querySelector('#comment-display')

            nameLocation.textContent = ramenBowl.name
            imgLocation.src = ramenBowl.image
            restLocation.textContent = ramenBowl.restaurant
            ratingLocation.textContent = ramenBowl.rating
            commentLocation.textContent = ramenBowl.comment



        }



    });
}



const ramenForm = document.querySelector('#new-ramen');
ramenForm.addEventListener('submit', (e)=> handleAddNewRamen(e))
function handleAddNewRamen(e){
    e.preventDefault()

    // console.log(e.target.name)
    const newRamen = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target['new-comment'].value
    }


}





























