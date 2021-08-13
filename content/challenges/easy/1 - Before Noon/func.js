// Check if the time is before noon
// time is in military time 0-24
module.exports = (hour) => {
    if(hour < 1200){
        console.log(`${hour} is before noon.`);
    }else{
        console.log(`${hour} is afternoon.`);
    }
}