import {html} from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const dashboardTemp = (data)=> html `
<h3 class="heading">Our Cars</h3>
${data.length > 0 ?
    html `
    <section id="dashboard">
    ${data.map(item => carCard(item))}
    </section>` : 
    html `<h3 class="nothing">Nothing to see yet</h3>`
    
}
`;

const carCard = (item) => html `
<div class="car">
            <img src="${item.imageUrl}" />
            <h3 class="model">${item.model}</h3>
            <div class="specs">
              <p class="price">${item.price}</p>
              <p class="weight">${item.weight}</p>
              <p class="top-speed">${item.speed}</p>
            </div>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
          </div>
`;

export async function showDashboard(ctx) {
    const data = await dataService.getAllCars();
    ctx.render(dashboardTemp(data));
}