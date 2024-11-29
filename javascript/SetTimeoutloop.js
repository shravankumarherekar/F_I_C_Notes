function callnumber(num){
    setTimeout(function () {
        console.log(`${num}`);
        if(num<10){
            callnumber(num +1);
        }
    }, 1000);
}

callnumber(1);