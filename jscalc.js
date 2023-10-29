

function tokenize(str) {

    let tokens = []

    const reg = new RegExp('[0-9]|[+*\/-]|[)(]')

    for (let i = 0; i < str.length; i++) {

        if (reg.test(str[i])) tokens.push(str[i])

    }
    
    return tokens
}

function sum() {

    let first = mul()

    while (position < tokens.length) {

        let operator = tokens[position]

        if (operator != "+" && operator != "-") {
            break
        }

        position++

        let secound = mul()

        operator === "+" ? first += secound : first -= secound
    }
    return first
}

function mul() {

    let first = skobki()

    while (position < tokens.length) {

        let operator = tokens[position]

        if (operator != "*" && operator != "/") {
            break
        }

        position++

        let secound = skobki()

        operator === "*" ? first *= secound : first /= secound

    }
    return first
}

function skobki() {

    let element = (tokens[position])

    let result = 0

    if (element === "(") {

        position++

        result = sum()

        let closingBracket = ""

        if (position < tokens.length) {
            closingBracket = tokens[position]
        } 
        
        if (closingBracket === ")") {

            position++

            return parseFloat(result)
        }

    }
    position++    
    return parseFloat(element)
}


let str = "1+1*8-9/3-(1+1*8)"
let tokens = tokenize(str)
let position = 0
console.log(sum())

