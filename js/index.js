// URL
const URL = "https://openapi.programming-hero.com/api/";

// get value
const getDOMValue = (selector, method = "innerHTML") => {
  return document.querySelector(selector)[method];
};

// set value
const setDOMValue = (selector, content, method = "innerHTML") => {
  document.querySelector(selector)[method] = content;
};

// show main features
const ShowFeatures = (features, title) => {
  let html = `<div class="col">
              <div class="card">
              <h4 class="card-title text-center my-3">${title}</h4>
                <div class="card-body">
                  <ul class="list-group list-group-flush">`;
  for (f in features) {
    html += `<li class="list-group-item"><b class="text-capitalize">${f}</b>: ${
      Array.isArray(features[f]) ? features[f].join(", ") : features[f]
    }</li>`;
  }
  html += `
                  </ul>
              </div>
            </div>
          </div>
`;
  return html;
};

// Display Phones
const displayPhones = (phones, node, err = false) => {
  if (err === true) {
    node.innerHTML = phones;
    return;
  }

  if (Array.isArray(phones)) {
    const phoneItems = phones
      .slice(0, 20)
      .map(({ brand, phone_name, slug, image }) => {
        return `
    <div class="col phone">
      <div class="card">
        <div class="card-body">
        <img src="${image}" class="mb-4" alt="${phone_name}">
            <h6 class="text-secondary mb-0">${brand}</h6>
            <h5 class="card-title text-primary mb-3">${phone_name}</h5>
            <button onclick="loadPhones(
              '${slug}', 'phone/'
            )" class="btn btn-success inspect-button">Inspect</button>
          </div>
        </div>
      </div>
    `;
      });
    node.innerHTML = `<h2 class="col-12 col-md-12 pt-5 text-center">Phones</h2>${phoneItems.join(
      ""
    )}`;
  } else {
    const { mainFeatures, name, brand, image, others } = phones;

    const phoneCard = `
      <div class="col-12 col-md-12">
          <h2 class="text-center my-5">Phone Details</h2>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
            <img src="${image}" class="mb-4" alt="${name}">
                <h6 class="text-secondary mb-0 text-uppercase">${brand}</h6>
                <h5 class="card-title text-primary mb-0 text-capitalized">${name}</h5>
                <small class="card-title text-secondary mb-3 text-capitalized">${
                  phones?.releaseDate
                }</small>
              </div>
            </div>
          </div>
        </div>

        ${ShowFeatures(mainFeatures, "Main Features")}
        ${ShowFeatures(others, "Other Features")}
              
    `;
    node.innerHTML = phoneCard;
  }
};

// Load phones
const loadPhones = async (slug, term = "phones?search=") => {
  // show error
  const node =
    term === "phones?search="
      ? document.querySelector(".phones-display")
      : document.querySelector(".phone-details");

  try {
    const response = await fetch(URL + term + slug.toLowerCase());
    const data = await response.json();

    // Display Phones

    if (data.status) {
      displayPhones(data.data, node);
    } else {
      displayPhones(
        "<h1 class='col-md-12 text-center text-danger py-5 px-3'>Not Found</h1>",
        node,
        true
      );
    }
  } catch (err) {
    displayPhones(
      `<h1 class='col-md-12 text-center text-danger py-5 px-3'>${err.message}</h1>`,
      node,
      true
    );
  }
};

// Add submit event listener to form
document.querySelector(".search-form").addEventListener("submit", (e) => {
  // prevent default submit
  e.preventDefault();

  // search input
  const inputSearch = getDOMValue(".phone-search-input", "value");

  // load data
  loadPhones(inputSearch);

  setDOMValue(".phone-details", "");
  setDOMValue(".phones-display", "");
});
