// get value
const getDOMValue = (selector, method = "innerHTML") => {
  return document.querySelector(selector)[method];
};

// set value
const setDOMValue = (selector, content, method = "innerHTML") => {
  document.querySelector(selector)[method] = content;
};

// Add submit event listener to form
document.querySelector(".search-form").addEventListener("submit", (e) => {
  // prevent default submit
  e.preventDefault();

  // search input
  const inputSearch = getDOMValue(".phone-input-search", "value");
  console.log("input", inputSearch);
});
