let timer;

timer = setInterval(() => {
    if(location.href.includes('youtube.com/shorts')){
        location.href = "https://namastedev.com/learn"
    } else if(!location.href.includes('youtube')) {
        console.log("I dont know what you are doing")
        clearInterval(timer)
    }


    
} , 3000)

  