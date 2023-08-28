const loadPhone = async (brand) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${brand}`
  );
  const data = await response.json();
  const phones = data.data;
  displayPhones(phones);
};

const cardContainer = document.getElementById("card-container");

const displayPhones = (phones) => {
  cardContainer.innerHTML = "";
  phones.forEach((phone) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add(
      "w-max",
      "bg-white",
      "border",
      "border-gray-200",
      "rounded-lg",
      "shadow",
      "dark:bg-gray-800",
      "dark:border-gray-700"
    );
    const { brand, phone_name, slug, image } = phone;

    const phoneCard = `
        <img class="p-8 mx-auto rounded-t-lg" src='${image}' alt="product image" />
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            ${phone_name}
          </h5>
        </a>

          <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
          <a href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Add
            to cart</a>
      </div>
    `;

    cardDiv.innerHTML = phoneCard;
    cardContainer.appendChild(cardDiv);
  });
};

const handleSearch = () => {
  const searchField = document.getElementById("search-field");
  // console.log(searchField);
  const brand = searchField.value;
  console.log(brand);
  loadPhone(brand);
};

// loadPhone("samsung");
