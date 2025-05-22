import { expect, test } from "vitest";
import { proximo } from "./proximo";

test("proximo(0) retorna 1", ()=>{
    expect(proximo(0)).toBe(1);
});

test("proximo(1) retorna 3", ()=>{
    expect(proximo(1)).toBe(3);
});