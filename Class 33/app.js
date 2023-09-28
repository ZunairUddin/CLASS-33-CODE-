var cards = document.getElementById("cards");

var data = [
  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: "Rs 12,500",
    location: "DHA, Karachi",
    time: "1 week ago",
    imgUrl:
      "https://st2.depositphotos.com/14819964/42113/i/600/depositphotos_421135132-stock-photo-women-shopping-mall.jpg",
  },

  {
    title: "iPhone SE 2022 Starlight Back in Hand",
    price: "Rs 232,500",
    location: "Gulshan, Karachi",
    time: "3 weeks ago",
    imgUrl:
      "https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?p=1",
  },

  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: "Rs 12,500",
    location: "DHA, Karachi",
    time: "1 week ago",
    imgUrl:
      "https://media.wired.com/photos/631bb97dd884b4dcc94164e3/3:2/w_2400,h_1600,c_limit/How-to-Choose-a-Laptop-Gear-GettyImages-1235728903.jpg",
  },

  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: "Rs 12,500",
    location: "DHA, Karachi",
    time: "1 week ago",
    imgUrl:
      "https://www.cnet.com/a/img/resize/468ea42b69875136295b704ea9b0ed459612de62/hub/2022/04/27/b796792b-5b34-4405-83eb-efc66371ee06/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=675&width=1200",
  },

  {
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: "Rs 12,500",
    location: "DHA, Karachi",
    time: "1 week ago",
    imgUrl:
      "https://www.digitaltrends.com/wp-content/uploads/2022/08/iPhone-SE-2022-Starlight-Back-in-Hand.jpg?p=1",
  },
];

function renderCards() {
  cards.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i]);
    cards.innerHTML += `
   <div class="card">
          <div>
            <img
              class="card-image"
              src="${data[i].imgUrl}"
              alt="Shopping bags"
            />
          </div>
          <div>
            <p class="ml-5 txt-align-left">
            ${data[i].price}
              <span class="float-right mr-5"
                ><i class="fa-regular fa-heart"></i
              ></span>
            </p>
          </div>
          <div class="pd-5 txt-align-left">
            <h3>${data[i].title}</h3>
          </div>
          <div>
            <p class="pd-5 card-location txt-align-left">
              <i class="fa-solid fa-location-dot"></i> ${data[i].location}
            </p>
          </div>
          <div>
            <p class="pd-5 card-time txt-align-left">
              <i class="fa-regular fa-clock"></i> ${data[i].time}
            </p>
          </div>
          <div class="pd-5">
            <button class="cart-btn" onclick="addToCart(${i})">
              Add to Cart <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
   `;
  }
}

renderCards();





var arr = []


window.addToCart = function(index){
    var cartData = data[index]
    arr.push(cartData)
    
    localStorage.setItem('classData',JSON.stringify(arr))
    // console.log(arr);

}


function getLocalItems(){
    var data = JSON.parse(localStorage.getItem('classData'))
    console.log(data);
}
getLocalItems()
// JSON.parse()




