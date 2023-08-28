const loadPhone = async (brand, isShowAll) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${brand}`
  );
  const data = await response.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};

const cardContainer = document.getElementById("card-container");

const displayPhones = (phones, isShowAll) => {
  cardContainer.innerHTML = "";
  const showAllBtn = document.getElementById("show-all-btn");

  if (phones.length > 12 && !isShowAll) {
    phones = phones.slice(0, 12);
    showAllBtn.classList.remove("hidden");
  } else showAllBtn.classList.add("hidden");

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
      <div class="px-5 pb-5 text-center space-y-3">
          <h4 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            ${phone_name}
          </h4>
          <p>There are many variations of passages of available, but the majority have suffered</p>

          <h4 class="text-2xl font-bold text-gray-900 dark:text-white">$599</h4>
          <button onclick="handleShowDetails(${phone})"
            class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Show Details</button>
      </div>
    `;

    cardDiv.innerHTML = phoneCard;
    cardContainer.appendChild(cardDiv);
  });
  // Hide loading spinner
  toggleLoadingSpinner(false);
};

const handleSearch = (isShowAll) => {
  // Show loading spinner
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");

  const brand = searchField.value;
  loadPhone(brand, isShowAll);
  // searchField.value = "";
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  isLoading
    ? loadingSpinner.classList.remove("hidden")
    : loadingSpinner.classList.add("hidden");
};

const handleShowAll = (isShowAll) => {
  handleSearch(true);
};

const handleShowDetails = (phone) => {
  console.log(phone);
};

loadPhone("iphone");
