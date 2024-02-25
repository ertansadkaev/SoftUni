import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const searchTemp = (data, isResult) => html `
<section id="search">

        <div class="form">
          <h2>Search</h2>
          <form class="search-form" @submit=${submitHandler}>
            <input
              type="text"
              name="search"
              id="search-input"
            />
            <button class="button-list">Search</button>
          </form>
        </div>
        ${isResult && result(data)}
    </section>
`;
let result = (items) => html `
        <h4>Results:</h4>
        <div class="search-result">
        ${items.length === 0 ? 
            html `<p class="no-result">No result.</p>`:
            items.map(item => fruitCardTemp(item)) 
        }
        </div>
`;

const fruitCardTemp = (item) => html `
<div class="fruit">
        <img src="${item.imageUrl}" alt="example1" />
        <h3 class="title">${item.name}</h3>
        <p class="description">${item.description}</p>
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