const elInput = document.querySelector (".input");
const elContentResult = document.querySelector (".content__result-wrapper");

elInput.addEventListener ("keyup", function(evt) {
    console.log(evt);
    for (let i = 1; i <= 10; i++) {
        const result = (evt.key * i);
        if (evt.key == "Backspace") {
            elContentResult.innerHTML = " "
        }else {
            if (i === 1) {
                elContentResult.innerHTML = `
                <div class="wrapper">
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
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
                    <span>${evt.key}</span>
                    <span>*</span>
                    <span>${i}</span>
                    <span>=</span>
                    <span>${result}</span>
                </div>
                `
            }
        }
    }
})














// 72.Karra hosil qilish
// let counter = 7
// for (let i = 1; i <= 10; i++) {
//     let result = (counter*i)
//     console.log(result);
// }