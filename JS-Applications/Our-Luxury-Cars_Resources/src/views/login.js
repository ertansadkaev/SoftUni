import { html } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../userService.js";

const loginTemp = ()=> html `
<!-- Login Page (Only for Guest users) -->
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${loginHandler}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;
let context = null;
export function showLogin(ctx) {
    context = ctx;
    context.render(loginTemp());
    
}

export async function loginHandler(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const {email, password} = Object.fromEntries(formData);

    if (!email || !password){
        return window.alert("Error");
    }
    try {
      await userService.login(email, password);
    } catch (error) {
      return window.alert("Error");
    }

    await userService.login(email, password);
    context.updateNav();
    context.goTo("/");
}