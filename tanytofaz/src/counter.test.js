import { describe, expect, it } from "vitest";
import  setupRotAndContent from "./setupRoot";

describe ("Tela counter", ()=>{
    it("Deve ter um h1", ()=>{
        const app = document.createElement("div");
        console.log(app)
        app.innerHTML = setupRotAndContent();
        const h1 = app.querySelector("h1");
        expect(h1.textContent).toBe("Hello Vite!");
    })
})