// convert base64 image into actual image
const convertBase64ToImage = (image) =>{
    return `data:image/png;base64,${image}`
}

// convert base64 file into file object
const  dataURLtoFile = (dataurl, filename) =>{
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}

// convert any number to currency format example -> 5000 to 5,000
const numberToCurrency = (number) =>{

    let dollarUSLocale = Intl.NumberFormat('en-US');

    return dollarUSLocale.format(number)
}

// convert date into ISOString
const convertDateToIsoString = (date) =>{
    return new Date(date).toISOString().slice(0, 10)
}

export { 
    convertBase64ToImage,
    dataURLtoFile,
    numberToCurrency,
    convertDateToIsoString
}