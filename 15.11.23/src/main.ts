import './style.css'

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const inputName = document.getElementById("inputName");
const inputAge = document.getElementById("inputAge");
const gender = document.getElementById("gender");
const list = document.querySelector(".listochek") as HTMLElement;

addBtn.addEventListener('click', () => {
  list.innerHTML += `
  <div class="wrapper">
    <div class="title">${inputName.value}</div>
    <div class="title">${inputAge.value}</div>
    <div class="title">${gender.value}</div>
    <input class="checkboxes" type="checkbox">
  </div>
  `;
  inputName.value = '';
  inputAge.value = '';
  gender.value = '?';
  console.log()
})

removeBtn?.addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const checkedCheckboxes = Array.from(checkboxes).filter(function(checkbox) {
    return checkbox.checked;
});
  checkedCheckboxes.forEach((checkbox) => {
    const parentElement = checkbox.parentNode
    parentElement?.parentNode?.removeChild(parentElement)
    
  })
  console.log(checkedCheckboxes)
})





// removeBtn.addEventListener('click', () => {

// })

// 1, 7, 4, 3, 6
// function sort(arr:number []){
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j] ) {
        
//         return arr[i]; 
//       }

//     }
    
    
//   }
// }












///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 20.11.2023: ///////////////////////////////////////////////////////////////////////////////////////////////

// let isRegistered = true;

// const afkWindow = window.addEventListener("click", () => {
//     let promise = new Promise((resolve, reject) => {
  
//       setTimeout(() => {
//         resolve(modalWindow.append());
//       }, 20000);
// })

// const modalWindow = new Component //представим что тут компонент с 2 кнопками (const btnYes и btnNo)



// const btnYes = new Button()
// const btnNo = new Button()

// btnYes.addEventListener("click", () => {
//   return isRegistered = true;
// });

// btnNo.addEventListener("click", () => {
//   return isRegistered = false;
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////