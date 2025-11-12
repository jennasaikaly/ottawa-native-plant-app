// module.exports = {
//   format_date: date => {
//     return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
//       date
//     ).getFullYear()}`;
//   }
// }


// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

let date = new Date('2020-03-20 16:12:03')

function format_date(){

return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
}

module.exports = format_date;


