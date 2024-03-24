import "./style.css"

const inputFrom = document.getElementById('inputFrom') as HTMLInputElement;
const inputTo= document.getElementById('inputTo') as HTMLInputElement;
const firstSelect = document.getElementById('firstSelect') as HTMLSelectElement;
const secondSelect = document.getElementById('secondSelect') as HTMLSelectElement;
const apply = document.getElementById('apply') as HTMLButtonElement;

apply.addEventListener('click', () => {
  let fromValue = inputFrom.valueAsNumber;

  console.log("[uncorverted]", fromValue)

  function intoValue(mult:number) {
    let result = fromValue*mult
    return result.toString();
  }

  if(firstSelect.value === '₴'){
    switch (secondSelect.value) {
      case '$':
      inputTo.value = intoValue(0.03)
      console.log("[converted:]",inputTo.value)
        break;

      case '€':
      inputTo.value = intoValue(0.025)
      console.log("[converted:]",inputTo.value)
        break;

      case '₴':
      inputTo.value = intoValue(1)
      console.log("[converted:]",inputTo.value)
        break;

      default:
        break;
    }
  }

  if(firstSelect.value === '$'){
    switch (secondSelect.value) {
      case '$':
      inputTo.value = intoValue(1)
      console.log("[converted:]",inputTo.value)
        break;

      case '€':
      inputTo.value = intoValue(0.9)
      console.log("[converted:]",inputTo.value)
        break;

      case '₴':
      inputTo.value = intoValue(36)
      console.log("[converted:]",inputTo.value)
        break;

      default:
        break;
    }
  }

  if(firstSelect.value === '€'){
    switch (secondSelect.value) {
      case '$':
      inputTo.value = intoValue(1.09)
      console.log("[converted:]",inputTo.value)
        break;

      case '€':
      inputTo.value = intoValue(1)
      console.log("[converted:]",inputTo.value)
        break;

      case '₴':
      inputTo.value = intoValue(40)
      console.log("[converted:]",inputTo.value)
        break;

      default:
        break;
    }
  }

})









