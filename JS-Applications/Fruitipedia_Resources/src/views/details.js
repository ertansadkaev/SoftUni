import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item, isOwner) => html `
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${item.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${item.nutrition}</p>
              </div>

               <!--Edit and Delete are only for creator-->

               ${isOwner ? html `<div id="action-buttons">
                    <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                    <a @click=${delFru} href="#" id="delete-btn">Delete</a>
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
    const data = await dataService.getSingleFruit(id);
    const isOwner = userHelper.getUserID() === data._ownerId
    ctx.render(detailsTemp(data, isOwner));
}

async function delFru(e){
  e.preventDefault();
  const id = context.params.id;
  await dataService.delFruit(id)
  context.goTo("/dashboard");
}