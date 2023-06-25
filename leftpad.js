
function leftPad(str, length, ch) {
    let len = length - str.length + 1;
    return Array(len).join(ch) + str
}


function leftPad2(str, length, ch) {
    let len = length - str.length
    total = ''
    while (true) {
        if (len % 2 == 1) {
            total += ch
        }
        if (len == 1) {
            return total + str
        }
        ch += ch
        len = parseInt(len / 2)
    }

}
console.log(
    leftPad('hello', 10, '0'),
    leftPad2('hello', 10, '0')
)
