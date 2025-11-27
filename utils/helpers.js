
// this works (2 functions)
function format_date(date){

return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
    date
    ).getFullYear()}`;
}

function format_plural(word, amount){
    if (amount !== 1){
        return `${word}s`;
    }else {
        return word;
    }
}
module.exports = { format_date, format_plural }

// this also works (2 functions)
// module.exports = {
//     format_date: date => {
//         return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
//         date
//         ).getFullYear()}`;
//     },
//     format_plural: (word, amount) => {      
//         if (amount !== 1){
//         return `${word}s`;
//     }else {
//         return word;
//     }
    
// }
// }   