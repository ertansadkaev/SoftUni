import {html} from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const dashboardTemp = (data)=> html `
<h2>Fruits</h2>
${data.length > 0 ?
    html `
    <section id="dashboard">
    ${data.map(item => fruitCard(item))}
    </section>` : 
    html `<h2>No fruit info yet.</h2>`
    
}
`;

const fruitCard = (item) => html `
<div class="fruit">
    <img src="${item.imageUrl}" alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href="/details/${item._id}">More Info</a>
`;

export async function showDashboard(ctx) {
    const data = await dataService.getAllFruits();
    ctx.render(dashboardTemp(data));
}