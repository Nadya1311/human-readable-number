module.exports = function toReadable (number) {
    let a = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
    }
      
    let b= {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
        0: 'twenty'
    }
      
    let c = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let n = String(number)

    switch(true){
        case(0 <= n && n <= 10):{
            return a[n];
        }
        case(11 <= n && n <= 20):{
            return b[n[1]];
        }
        case(21 <= n && n <= 99):{
            return `${c[n[0]]} ${a[n[1]]}`
        }
        case(n[1] == 0 && n[2] == 0):{
            return `${a[n[0]]} hundred `
        }
        case(n[2] == 0 && n.length == 3 ):{
            return `${a[n[0]]} hundred ${c[n[1]]}`
        }
        case(n[0] + 0 + 0 < n && n <= n[0] + 0 + 9):{
            return `${a[n[0]]} hundred ${a[n[2]]}`
        }
        case(n[0] + 1 + 1 <= n && n < n[0] + 2 + 0):{
            return `${a[n[0]]} hundred ${b[n[2]]}`
        }
        case(n[0] + 2 + 0 < n && n <= n[0] + 9 + 9):{
            return `${a[n[0]]} hundred ${c[n[1]]} ${a[n[2]]}`
        }
    }
      
}
