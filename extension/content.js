console.log("WE ARE INSIDE YOUTUBE")
let timer;

timer = setInterval(() => {
    if(location.href.includes('youtube.com/shorts')){
        location.href = "https://namastedev.com/learn"
    } 
} , 3000)

  