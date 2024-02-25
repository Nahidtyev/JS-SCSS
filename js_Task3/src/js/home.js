const NewProduct = document.querySelector(".new_product");
const BaseUrl = "http://localhost:3004";
const Input_data= document.querySelector("#search");
const Search_Product= document.querySelector("#searching");

Input_data.addEventListener('keyup',(e)=>{
  value = e.target.value;
  axios.get(`${BaseUrl}/product?id=${value}`).then((response)=>{
    console.log(response);
    response.data.filter((product) =>{
      var input_value = product.id.includes(value);
      Search_Product.innerHTML += `
      <div class="col-xl-3 g-3">
      <div id="block">
          <div class="card_heading">
              <div></div>
              <div class="head_icons ">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-scale-balanced"></i>
              </div>
          </div>
          <img src="${product.image}" alt="">
          <div class="lower">
              <div class="info">
                  <button>TOP SATIŞ</button>
                  <button>YENİLİK</button>
                  <button>STOKTA VAR</button>
              </div>
              <ul>
                 <li>${input_value}</li>
              </ul>
              <p>${product.description}</p>
          <div class="stars">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <span>0 rəy</span>
          </div>
          <h4>${product.price}$</h4>
          <i id="delete" class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>`;
      const DeleteProduct = document.querySelectorAll("#delete");

      for (let i = 0; i < DeleteProduct.length; i++) {
        const deleteBtn = DeleteProduct[i];
        deleteBtn.addEventListener("click", (event) => {
          event.preventDefault();
          console.log(product.id);
          fetch(`${BaseUrl}/product/${product.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }).then((response) => {
            if (response.status === 200) {
              return swal.fire({
                icon: "success",
                title: "Success",
                text: "Product Deleted ",
              });
            }
          });
        });
      }
    })
  })
})

fetch(`${BaseUrl}/product`, NewProduct)
  .then((res) => res.json())
  .then((response) => {
    response.map((product, index) => {
        NewProduct.innerHTML += `
        <div class="col-xl-3 g-3">
        <div id="block">
            <div class="card_heading">
                <div></div>
                <div class="head_icons ">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-scale-balanced"></i>
                </div>
            </div>
            <img src="${product.image}" alt="">
            <div class="lower">
                <div class="info">
                    <button>TOP SATIŞ</button>
                    <button>YENİLİK</button>
                    <button>STOKTA VAR</button>
                </div>
                <ul>
                   <li>${product.id}</li>
                </ul>
                <p>${product.description}</p>
            <div class="stars">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <span>0 rəy</span>
            </div>
            <h4>${product.price}$</h4>
            <i id="delete" class="fa-solid fa-trash"></i>
            </div>
        </div>
    </div>
      `;

      const DeleteProduct = document.querySelectorAll("#delete");

      for (let i = 0; i < DeleteProduct.length; i++) {
        const deleteBtn = DeleteProduct[i];
        deleteBtn.addEventListener("click", (event) => {
          event.preventDefault();
          console.log(product.id);
          fetch(`${BaseUrl}/product/${product.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }).then((response) => {
            if (response.status === 200) {
              return swal.fire({
                icon: "success",
                title: "Success",
                text: "Product Deleted ",
              });
            }
          });
        });
      }
    });
});

const ImageUrl = document.querySelector("#image");
const Price = document.querySelector("#price");
const Description = document.querySelector("#description");
const ApplyBtn = document.querySelector("#apply");

ApplyBtn&&ApplyBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const NewProduct = {
    id: self.crypto.randomUUID(),
    image: ImageUrl.value,
    description: Description.value,
    price: Price.value
  };

  fetch(`${BaseUrl}/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(NewProduct),
  })
  .then((response) => {
    if (response.status === 201) {
      return swal.fire({
        icon: "success",
        title: "Success",
        text: "Product Applied",
      });
    }
  })
  .catch((error) => {
    throw error;
  })
  .finally(() => {
    ImageUrl.value = "";
    Price.value = "";
    Description.value = "";
  });
});

const toggleButton = document.getElementById('toggleButton');
const myForm = document.getElementById('myForm');

toggleButton.addEventListener('click', function() {
    if (myForm.style.display === 'block') {
        myForm.style.display = 'none';
    } else {
        myForm.style.display = 'block';
    }
});

///////////////////////////////////////////
//               SeCTION II              //
///////////////////////////////////////////

const NewCard = document.querySelector(".new_card");

fetch(`${BaseUrl}/card`, NewCard)
  .then((res) => res.json())
  .then((response) => {
    response.map((card, index) => {
      NewCard.innerHTML += `
        <div class="col-xl-4">
          <div class="last_row">
              <img src="${card.image2}" alt="">
              <div class="foot">
                  <div class="card_foot">
                      <button>#Məsləhətlər</button>
                      <span>18.08.2021 14:09:24</span>
                  </div>
                  <p>${card.card_description}</p>
                  <i id="delete" class="fa-solid fa-trash"></i>
        ]     </div>
           </div>
         </div>
      `;

      const DeleteCard = document.querySelectorAll("#delete");

      for (let i = 0; i < DeleteCard.length; i++) {
        const deleteBtn = DeleteCard[i];
        deleteBtn.addEventListener("click", (event) => {
          event.preventDefault();
          console.log(card.id);
          fetch(`${BaseUrl}/card/${card.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }).then((response) => {
            if (response.status === 200) {
              return swal.fire({
                icon: "success",
                title: "Success",
                text: "Card Deleted ",
              });
            }
          });
        });
      }
    });
});

const SecondImageUrl = document.querySelector("#image2");
const CardDescription = document.querySelector("#card_description");
const Submitting = document.querySelector("#submitting");

Submitting&&Submitting.addEventListener("click", (event) => {
  event.preventDefault();
  const NewCard = {
    id: self.crypto.randomUUID(),
    image2: SecondImageUrl.value,
    card_description: CardDescription.value
  };

  fetch(`${BaseUrl}/card`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(NewCard),
  })
  .then((response) => {
    if (response.status === 201) {
      return swal.fire({
        icon: "success",
        title: "Success",
        text: "User Applied",
      });
    }
  })
  .catch((error) => {
    throw error;
  })
  .finally(() => {
    SecondImageUrl.value = "";
    CardDescription.value = "";
  });
});

const Appear = document.getElementById('appear');
const CardForm = document.getElementById('card_form');

Appear.addEventListener('click', function() {
    if (CardForm.style.display === 'block') {
        CardForm.style.display = 'none';
    } else {
        CardForm.style.display = 'block';
    }
});


