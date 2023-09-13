class Calculate {
    static evaluateResult(unitOne, unitTwo, input) {
        let output;
        if (!unitOne || !unitTwo) {
            return 'Select Units...'
        }
        else if (unitOne === unitTwo) {
            return 1
        }
        else if (unitOne === 'kg') {
            if (unitTwo === 'pound') {
                // 1kg = 2.20462262 pounds
                output = Number.parseFloat(input * 2.20462262).toFixed(1)
                output = output + ' Lbs'
            }
            else {
                // 1kg = 1000grams 
                output = Number.parseFloat(input * 1000).toFixed(0)
                output = output + ' Grams'
            }
            return output
        }
        else if (unitOne === 'pound') {
            if (unitTwo === 'kg') {
                // 1pound = 0.45359237kgs
                output = Number.parseFloat(input * 0.45359237).toFixed(1)
                output = output + ' Kgs'
            }
            else {
                output = Number.parseFloat(input * 453.59237).toFixed(1)
                output = output + ' Grams'
            }
            return output
        }
        else {
            if (unitTwo === 'kg') {
                output = Number.parseFloat(input * 0.001).toFixed(3)
                output = output + ' Kgs'
            }
            else {
                output = Number.parseFloat(input * 0.00220462).toFixed(3)
                output = output + ' Lbs'
            }
            return output
        }
    }
}

class UI {
    static validateInput(input) {
        if (!input) {
            document.querySelector('.input-enter .input-1').style.border = '2px solid red'
        }
        else {
            document.querySelector('.input-enter .input-1').style.border = ''
            const unitOne = selectorOne.value
            const unitTwo = selectorTwo.value
            UI.displayResult(Calculate.evaluateResult(unitOne, unitTwo, input))
        }
    }

    static displayResult(output) {
        result.classList.remove('temp')
        result.textContent = output
    }

    static showUnits(firstSelected, secondSelected, selected = "") {
        if (firstSelected && selected) {
            (Array.from(secondSelectChildren)).forEach((option) => {
                if (option.value === selected) {
                    option.classList.add('hidden')
                }
            })
        }
    }

    static resetSelectors() {
        (Array.from(secondSelectChildren)).forEach((i, index) => {
            secondSelectChildren[index].classList.remove('hidden')
        })
    }
}

// Init DOM elements
const selectorOne = document.querySelector('.input-select .input-1')
const selectorTwo = document.querySelector('.input-select .input-2')

const secondSelectChildren = selectorTwo.children

const convertBtn = document.querySelector('.btn')

const result = document.querySelector('#result')

// EVENTS
selectorOne.addEventListener('change', (e) => {
    UI.resetSelectors()
    UI.showUnits(true, false, e.target.value)
})

selectorTwo.addEventListener('change', (e) => {
    UI.showUnits(false, true, e.target.value)
})
//  convert Btn
convertBtn.addEventListener('click', () => {
    const input = document.querySelector('.input-enter .input-1').value

    UI.validateInput(input)
})