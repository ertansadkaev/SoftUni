import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item, isOwner) => html `
<section id="details">
<div id="details-wrapper">
<img id="details-img" src="${item.imageUrl}" alt="example1" />
<p id="details-title">${item.model}</p>
<div id="info-wrapper">
  <div id="details-description">
    <p class="price">${item.price}</p>
    <p class="weight">${item.weight}</p>
    <p class="top-speed">${item.speed}</p>
    <p id="car-description">${item.about}</p>
  </div>
               <!--Edit and Delete are only for creator-->

               ${isOwner ? html `<div id="action-buttons">
                    <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                    <a @click=${delCar} href="#" id="delete-btn">Delete</a>
               </div>` : ""
                }

            </div>
        </div>
      </section>
`;

let context = null;
export async function showDetails(ctx) {
  context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleCar(id);
    const isOwner = userHelper.getUserID() === data._ownerId
    ctx.render(detailsTemp(data, isOwner));
}

async function delCar(e){
  e.preventDefault();
  const userConfirm = confirm("Are you sure?")
  if (!userConfirm){
    return
  } else {
    const id = context.params.id;
    await dataService.delCar(id)
    context.goTo("/dashboard");
  }
}