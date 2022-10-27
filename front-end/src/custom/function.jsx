
const convertBase64ToImage = (image) =>{
    return `data:image/png;base64,${image}`
}

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

const numberToCurrency = (number) =>{

    let dollarUSLocale = Intl.NumberFormat('en-US');

    return dollarUSLocale.format(number)
}

const convertDateToIsoString = (date) =>{
    return new Date(date).toISOString().slice(0, 10)
}

export { 
    convertBase64ToImage,
    dataURLtoFile,
    numberToCurrency,
    convertDateToIsoString
}