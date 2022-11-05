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


// return superscript element
    /*
        1 21 31-> st
        2 22 -> nd
        3 23 -> rd
        4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 24 25 26 27 28 29 30-> th

    */
const dateSuperscript = (date) =>{
    if((date >= 4 && date <= 20) || (date >= 24 && date <= 30)){
        return <sup>th</sup>
    }else if(date === 1 || date === 21){
        return <sup>st</sup>
    }else if(date === 2 || date === 22){
        return <sup>nd</sup>
    }else if(date === 3 || date === 23){
        return <sup>rd</sup>
    }
}



//convert number months to months word (03 -> March)
const convertMonths = (months) =>{

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]; 

    return monthNames[months]
}



export { 
    convertBase64ToImage,
    dataURLtoFile,
    numberToCurrency,
    convertDateToIsoString,
    dateSuperscript,
    convertMonths
}