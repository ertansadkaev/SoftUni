import { html } from "../../node_modules/lit-html/lit-html.js";

const homeTemp = () => html `
<section id="hero">
<h1>
  Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
</h1>
</section>
    `;

export function showHome(ctx) {
    ctx.render(homeTemp());
}

