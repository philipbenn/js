import { getText } from "../p2/p2"

export function initP3(){
    const sharedText = getText();
    document.querySelector("#text").innerText = sharedText;
  }
  