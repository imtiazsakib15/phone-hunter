const loadPhone = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await response.json();
  const phones = data.data;
  displayPhones(phones);
};

const cardContainer = document.getElementById("card-container");

const displayPhones = (phones) => {
  phones.forEach((phone) => {
    const cardDiv = document.createElement("div");
    const {} = phone;
    console.log(phone);

    const phoneCard = `
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>

      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <a href="#"
          class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Add
          to cart</a>
      </div>
    </div>
  </div>
    `;

    cardDiv.innerHTML = phoneCard;
    cardContainer.appendChild(cardDiv);
  });
};

loadPhone();
