document.querySelector('#submitButton').addEventListener('click', atLeastOneOptionChosen)

document.querySelector('#resetButton').addEventListener('click', resetGenerator)

let adjectives = [ "Animalistic", "Brutal", "Destructive", "Haunted"]

let adjectives2 = ["Holiest", "Silent", "Villainous", "Dreadful"]

let nouns = ["Pancake", "Mega Lord", "Nibbler", "Warlock"]

let adj1
let adj2 
let noun

let response3id 
let response3value 

let response4id 
let response4value 

let response5id 
let response5value 

function reportResponses() {

    // reportQuestionOneResponse()
    // reportQuestionTwoResponse()
    reportQuestionThreeResponse()
    reportQuestionFourResponse()
    reportQuestionFiveResponse()

    printNameToDOM()


}


function retrieveAdjective1(response) {

    for(i = 0; i < adjectives.length; i++) {
        if(i === response)
        
        adj1 = adjectives[response]
    }

  
}

function retrieveAdjective2(response) {

    for(i = 0; i < adjectives2.length; i++) {

        if(i === response)

        adj2 = adjectives2[response]
    }
}

function retrieveNouns(response) {

    for(i = 0; i < nouns.length; i++) {

        if(i === response)

        noun = nouns[response]
    }
}

function printNameToDOM() {

    document.querySelector('.h2Results').innerText = `You are the ${adj1}, ${adj2} ${noun}`
}


function reportQuestionOneResponse() {

    let questionOneResponse = document.getElementsByName('q1');

    for(i = 0; i < questionOneResponse.length; i++) {
        if(questionOneResponse[i].checked) {

            console.log(questionOneResponse[i].id)
            console.log(questionOneResponse[i].value)

        }
        
    }
}

function reportQuestionTwoResponse() {

    let questionTwoResponse = document.getElementsByName('q2');

    for(i = 0; i < questionTwoResponse.length; i++) {

    if(questionTwoResponse[i].checked) {

        console.log(questionTwoResponse[i].id)

        }
    }
}

function reportQuestionThreeResponse() {

    let questionThreeResponse = document.getElementsByName('q3');

    for(i = 0; i < questionThreeResponse.length; i++) {

        if(questionThreeResponse[i].checked) {

            console.log(questionThreeResponse[i].id)

            response3id = questionThreeResponse[i].id
            response3value = questionThreeResponse[i].value

            retrieveAdjective1(Number(response3value))

            console.log(response3value)
        }
    }
}

function reportQuestionFourResponse() {

    let questionFourResponse = document.getElementsByName('q4');

    for(i = 0; i < questionFourResponse.length; i++) {

        if(questionFourResponse[i].checked) {

            console.log(questionFourResponse[i].id)

            response4id = questionFourResponse[i].id
            response4value = questionFourResponse[i].value

            retrieveAdjective2(Number(response4value))
        }
    }
}

function reportQuestionFiveResponse() {

    let questionFiveResponse = document.getElementsByName('q5');

    for(i = 0; i < questionFiveResponse.length; i++) {

        if(questionFiveResponse[i].checked) {

            console.log(questionFiveResponse[i].id)

            response5id = questionFiveResponse[i].id
            response5value = questionFiveResponse[i].value

            retrieveNouns(Number(response5value))
        }
    }
}

function resetGenerator() {
    arrayTrue = []
    document.querySelector('.h2Results').innerText = ""
    let q1 = document.getElementsByName('q1');
    let q2 = document.getElementsByName('q2');
    let q3 = document.getElementsByName('q3');
    let q4 = document.getElementsByName('q4');
    let q5 = document.getElementsByName('q5');

    for(i = 0; i < q1.length; i++) {
      q1[i].checked = false;
    }

    for(i = 0; i < q2.length; i++) {
        q2[i].checked = false;
      }
    
    for(i = 0; i < q3.length; i++) {
        q3[i].checked = false;
    }
    for(i = 0; i < q4.length; i++) {
        q4[i].checked = false;
    }

    for(i = 0; i < q5.length; i++) {
        q5[i].checked = false;
      }

    document.querySelector('.h2Results').innerText = ""
}

let arrayTrue = []

function atLeastOneOptionChosen() {

   let option = document.querySelectorAll('.input');


    for(i = 0; i < option.length; i++) {
        
        if(option[i].type === 'radio' && option[i].checked && (option[i].name === 'q1' || option[i].name === 'q2' || option[i].name === 'q3' || option[i].name === 'q4' || option[i].name === 'q5')) {

        arrayTrue.push(option[i])

        } 
    }
        console.log(arrayTrue)
        if(arrayTrue.length === 5) {

            reportResponses()
            arrayTrue = []

        } else {

            arrayTrue = []
            document.querySelector('.h2Results').innerText = "Please answer all the questions!"

            
        }
        
    
}


