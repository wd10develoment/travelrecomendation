const container = document.getElementById("mainpageC3");
const reset = document.getElementById("reset");
const search = document.getElementById("search");

search;
const search_fild = document.getElementById("fname");

function getdata() {
  fetch("travel_recommendation_api.json")
    .then((response) => response.json()) // Parse JSON
    .then((data) => {
      let countries = data.countries;
      let temples = data.temples;
      let beaches = data.beaches;
      let innerhtml = "halo";
      console.log(search_fild.value);
      if ("countries".toLowerCase().includes(search_fild.value.toLowerCase())) {
        innerhtml = "";
        countries.forEach((element) => {
          element.cities.forEach((element) => {
            innerhtml =
              innerhtml +
              `<div class="box"><img src=${element.imageUrl} alt=${element.name} class="displaw" ><h2 class="displaw" >${element.name}<h2/><h3 class="displaw" >${element.description}<h3/></div>`;
          });
        });
      } else if (
        "temples".toLowerCase().includes(search_fild.value.toLowerCase())
      ) {
        innerhtml = "";
        temples.forEach((element) => {
          innerhtml =
            innerhtml +
            `<div class="box"><img src=${element.imageUrl} alt=${element.name} class="displaw" ><h2 class="displaw" >${element.name}<h2/><h3 class="displaw" >${element.description}<h3/></div>`;
        });
      } else if (
        "beaches".toLowerCase().includes(search_fild.value.toLowerCase())
      ) {
        innerhtml = "";
        beaches.forEach((element) => {
          innerhtml =
            innerhtml +
            `<div class="box"><img src=${element.imageUrl} alt=${element.name} class="displaw" ><h2 class="displaw" >${element.name}<h2/><h3 class="displaw" >${element.description}<h3/></div>`;
        });
      } else {
        console.log(innerhtml);
      }
      container.innerHTML = innerhtml;
    }) // Work with JSON data
    .catch((error) => console.error("Error fetching JSON:", error));
}

function resetdata() {
  container.innerHTML = "";
}

search.addEventListener("click", getdata);
reset.addEventListener("click", resetdata);
