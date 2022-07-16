const elForm = document.querySelector ("form");
const elInput = document.querySelector (".input");
const elContentResult = document.querySelector (".content__result-wrapper");

elForm.addEventListener ("submit", function(evt) {
    evt.preventDefault();
    const number = elInput.value;

    for (let i = 1; i <= 10; i++) {
        const result = (number * i);
        if (number == "Backspace") {
            elContentResult.innerHTML = " "
        }else {
            if (i === 1) {
                elContentResult.innerHTML = `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 2) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 3) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 4) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 5) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 6) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 7) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 8) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 9) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
            if (i === 10) {
                elContentResult.innerHTML += `
                <div class="wrapper">
                    <span>${number}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
        }
    }
});