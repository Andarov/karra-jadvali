const elForm = document.querySelector ("form");
const elInput = document.querySelector (".input");
const elContentResult = document.querySelector (".content__result-wrapper");

elForm.addEventListener ("submit", function(evt) {
    evt.preventDefault();
    const number = elInput.value;
    elContentResult.innerHTML = " ";
    if (number) {  
        for (let i = 1; i <= 10; i++) {
            const result = (number * i);
            elContentResult.innerHTML += `
            <div class="wrapper">
            <span>${number}</span>
            <span>*</span>
            <span>${i}</span>
            <span>=</span>
            <span>${result}</span>
            </div>
            `;
        }
    }
});