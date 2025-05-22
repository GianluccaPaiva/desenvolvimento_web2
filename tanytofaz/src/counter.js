import { proximo } from "./proximo"

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => 
  setCounter(proximo(counter)))
  setCounter(proximo(counter))
}
