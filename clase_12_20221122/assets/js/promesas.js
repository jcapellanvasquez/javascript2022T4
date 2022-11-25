import { runResolveAsync } from "./modules/asincrono.js"

  const btn = document.querySelector("#btn-promesa")

  btn.addEventListener("click", () => {
      runResolveAsync()
  })