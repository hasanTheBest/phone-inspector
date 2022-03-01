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

const apiResPhone = {
  status: true,
  data: {
    mainFeatures: {
      storage: "128GB/256GB/1TB storage, no card slot",
      displaySize: "6.7 inches, 109.8 cm2 (~87.4% screen-to-body ratio)",
      chipSet: "Apple A15 Bionic (5 nm)",
      memory: "128GB 6GB RAM, 256GB 6GB RAM, 512GB 6GB RAM, 1TB 6GB RAM",
      sensors: [
        "Face ID",
        "accelerometer",
        "gyro",
        "proximity",
        "compass",
        "barometer",
      ],
    },
    slug: "apple_iphone_13_pro_max-11089",
    name: "iPhone 13 Pro Max",
    releaseDate: "Released 2021, September 24",
    brand: "Apple",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
    others: {
      WLAN: "Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot",
      Bluetooth: "5.0, A2DP, LE",
      GPS: "Yes, with A-GPS, GLONASS, GALILEO, BDS, QZSS",
      NFC: "Yes",
      Radio: "No",
      USB: "Lightning, USB 2.0",
    },
  },
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

// show main features
// const features = () => {
//   const html = ""

// }

// Display Phones
const displayPhones = (phones, node) => {
  // const display = getDOMValue();
  // console.log(phones);
  if (Array.isArray(phones)) {
    const phoneItems = phones.map(({ brand, phone_name, slug, image }) => {
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
    node.innerHTML = `<h2 class="col-md-12 pt-5 text-center">Phones</h2>${phoneItems.join(
      ""
    )}`;
  } else {
    const features = Object.entries(phones);
    const { mainFeatures, name, brand, image, others } = phones;
    const { storage, displaySize, chipSet, memory } = mainFeatures;

    const phoneCard = `
      <div class="col col-md-12">
          Phone Details
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
            <img src="${image}" class="mb-4" alt="${name}">
                <h6 class="text-secondary mb-0">${brand}</h6>
                <h5 class="card-title text-primary mb-0">${phone_name}</h5>
                <small class="card-title text-primary mb-3">${phones?.releaseDate}</small>
              </div>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Storage: ${storage}</li>
                <li class="list-group-item">Display Size: ${displaySize}</li>
                <li class="list-group-item">Chip Set: ${chipSet}</li>
                <li class="list-group-item">Memory: ${memory}</li>
              </ul>
            </div>
          </div>
        </div>

    `;
    // console.log(features);
    // node.innerHTML = `<h2 class="col-md-12 pt-5 text-center">Phones</h2>${phoneItems.join(
    //   ""
    // )}`;
  }
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

  // search input
  const inputSearch = getDOMValue(".phone-search-input", "value");

  // load data
  // loadPhones(inputSearch);
  // displayPhones(
  //   apiRes.data.slice(0, 20),
  //   document.querySelector(".phones-display")
  // );
  displayPhones(apiResPhone.data, document.querySelector(".phone-details"));
});
