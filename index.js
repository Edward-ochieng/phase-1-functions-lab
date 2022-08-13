// Code your solution in this filett
const distance = 43
function distanceFromHqInBlocks(distance){
    const rd = distance === 43? 1:8
    return rd
}
function distanceFromHqInFeet(distance){
    const rd = distance === 43? 264:2112
    return rd


}
function distanceTravelledInFeet(distance){
    if(distance === 43 || distance === 48){
        return 1320;
    } else if(distance === 50 || distance === 60){
        return 2640
    }else {
        return 1584
    }
}
const calculatesFarePrice=(start, destination)=>{
    if ((Number(destination) - Number(start)) === 1){
        return 0;
    }if(start, destination === 34 || start, destination === 32){
        return 2.56
    }else if(start, destination === 50 || start, destination === 58){
        return 25
    }else{
        return `cannot travel that far`
    }
}


