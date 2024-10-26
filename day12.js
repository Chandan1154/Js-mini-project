// // switches

// let color = 'red'
// switch (color) {
//     case 'red': console.log(" i'm red ");
//         break;
//     case 'blue': console.log(" i'm blue ");
//         break
//     case 'red': console.log(" i'm yellow ");
//         break
//     default: console.log("nither or nor");
//         break
// }

let dayOfWeek = new Date().getDay();
let day;

switch (dayOfWeek) {
    case 0: console.log("Sun");
        break;
    case 1: console.log("mon");
        break;
    case 2: console.log("wed");
        break;
    case 3: console.log("tus");
        break;
    case 4: console.log("thu");
        break;
    case 5: console.log("fri");
        break;
    case 6: console.log("Sat");
        break;
    default: console.log("invalid");
        break;
}