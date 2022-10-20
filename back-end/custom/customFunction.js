//function that capitalize first letter and lowercase the rest of the letter
const capitalizeString = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


module.exports = { capitalizeString }