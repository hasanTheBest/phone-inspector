const apiRes = {
  status: true,
  data: [
    {
      brand: "Apple ",
      phone_name: "iPhone 13 mini",
      slug: "apple_iphone_13_mini-11104",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 13 Pro",
      slug: "apple_iphone_13_pro-11102",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 13 Pro Max",
      slug: "apple_iphone_13_pro_max-11089",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 13",
      slug: "apple_iphone_13-11103",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 12 Pro Max",
      slug: "apple_iphone_12_pro_max-10237",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 12 Pro",
      slug: "apple_iphone_12_pro-10508",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 12",
      slug: "apple_iphone_12-10509",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 12 mini",
      slug: "apple_iphone_12_mini-10510",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone SE (2020)",
      slug: "apple_iphone_se_(2020)-10170",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 11 Pro Max",
      slug: "apple_iphone_11_pro_max-9846",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 11 Pro",
      slug: "apple_iphone_11_pro-9847",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone 11",
      slug: "apple_iphone_11-9848",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone XS Max",
      slug: "apple_iphone_xs_max-9319",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone XR",
      slug: "apple_iphone_xr-9320",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
    },
    {
      brand: "Apple ",
      phone_name: "iPhone XS",
      slug: "apple_iphone_xs-9318",
      image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
    },
  ],
};
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

// Display Phones
const displayPhones = (phones, node) => {
  // const display = getDOMValue();
  // console.log(phones);

  const phoneItems = phones.map(({ brand, phone_name, slug, image }) => {
    return `
    <div class="col phone">
      <div class="card">
        <div class="card-body">
        <img src="${image}" class="mb-4" alt="${phone_name}">
            <h6 class="text-secondary mb-0">${brand}</h6>
            <h5 class="card-title text-primary mb-3">${phone_name}</h5>
            <button slug="${slug}" class="btn btn-success inspect-button">Inspect</button>
          </div>
        </div>
      </div>
    `;
  });

  node.innerHTML = `<h2 class="col-md-12 pt-5 text-center">Phones</h2>${phoneItems.join(
    ""
  )}`;
};

// Load phones
const loadPhones = async (slug, term = "phones?search=") => {
  try {
    const response = await fetch(URL + term + slug.toLowerCase());
    const data = await response.json();

    // Display Phones
    if (data.status) {
      displayPhones(data.data);
    }
  } catch (err) {
    console.log(err.message);
  }
};

// Add submit event listener to form
document.querySelector(".search-form").addEventListener("submit", (e) => {
  // prevent default submit
  e.preventDefault();
  e.stopImmediatePropagation();

  // search input
  const inputSearch = getDOMValue(".phone-search-input", "value");

  // load data
  // loadPhones(inputSearch);
  displayPhones(apiRes.data, document.querySelector(".phones-display"));
});
