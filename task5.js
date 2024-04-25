// Write a function to determine if a squirrel party was successful or not (Full task details in README.md)


//Main Function
function cigarParty(cigars, isWeekend){
    if (isWeekend && cigars >= 40){
        return true
    }else if (!(isWeekend) && ( cigars >= 40 && cigars <= 60)){
        return true
    }else{
        return false
    }
}


// TestCases 0utput = [false, true, true]
console.log(cigarParty(30, false) )
console.log(cigarParty(50, false) )
console.log(cigarParty(70, true) )