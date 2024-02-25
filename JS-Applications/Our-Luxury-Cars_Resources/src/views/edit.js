import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";

const editTemp = (item) => html `
<section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" @submit=${submitHandler}>
              <input type="text" name="model" id="model" placeholder="Model" value=${item.model}/>
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
                value=${item.imageUrl}
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
                value=${item.price}
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
                value=${item.weight}
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
                value=${item.speed}
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              >${item.about}</textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

let context = null;
export async function showEdit(ctx) {
    context = ctx;
    const id = ctx.params.id;
    const data = await dataService.getSingleCar(id);
    ctx.render(editTemp(data));
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {model, imageUrl, price, weight, speed, about} = Object.fromEntries(formData);
    if (!model || !imageUrl || !price || !weight || !speed || !about){
        return window.alert("Error");
    }

    const id = context.params.id;
    await dataService.updateCar(id, {model, imageUrl, price, weight, speed, about});
    context.goTo(`/details/${id}`);
}