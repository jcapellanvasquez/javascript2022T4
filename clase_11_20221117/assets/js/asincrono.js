import { runAsync, runResolveAsync } from "./modules/asincrono.js";
import { runSyn } from "./modules/sincrono.js";

const btnSync = document.getElementById("btnSyn");
const btnAsync = document.getElementById("btnAsyn");
const btnAsbtnResolveync = document.getElementById("btnResolve");

btnSync.addEventListener("click", () => {
  // alert("Alert");
  runSyn();
});

btnAsync.addEventListener("click", () => {
    // alert("Alert");
    runAsync();
 });

 btnResolve.addEventListener('click', () => {
     runResolveAsync()
 })
  