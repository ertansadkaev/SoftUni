import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const searchTemp = (data, isResult) => html `
<section id="search">
<div class="form">
  <h4>Search</h4>
  <form class="search-form" @submit=${submitHandler}>
    <input type="text" name="search" id="search-input" />
    <button class="button-list">Search</button>
  </form>
</div>
        ${isResult && result(data)}
    </section>
`;
let result = (items) => html `
        <div class="search-result">
        ${items.length === 0 ? 
            html `<h2 class="no-avaliable">No result.</h2>`:
            items.map(item => fruitCardTemp(item)) 
        }
        </div>
`;

const fruitCardTemp = (item) => html `
<div class="car">
              <img src="${item.imageUrl}" alt="example1"/>
              <h3 class="model">${item.model}</h3>
              <a class="details-btn" href="/details/${item._id}">More Info</a>
            </div>
`;

let context = null;
export function showSearch(ctx) {
    context = ctx;
    searchManager();
}

function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {search} = Object.fromEntries(formData);
    if (!search) {
        return window.alert("Error");
    }

searchManager(search);
}

async function searchManager(query) {
    if(query){
        const data = await dataService.search(query);
        return context.render(searchTemp(data, true))
    }
    context.render(searchTemp());
}