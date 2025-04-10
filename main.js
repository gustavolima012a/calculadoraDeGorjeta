let bill = 0
let tipPercent = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue(){
    bill = document.querySelector("#bill").valueAsNumber

    console.log(bill)
}

function receiveNumberOfPeopleValue(){
    NumberOfPeople = document.querySelector("#people").ValueAsNumber
}

function receiveTipPercentageValue(value){
    tipPercentege = value/100

        buttonSelected = document.querySelector('#button-${value}')
        buttonSelected.classList.add("button-selected")
}