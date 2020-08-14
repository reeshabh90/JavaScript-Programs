function saveThePrisoner(noOfPrisoner, noOfSweets, seatNo) {
    // const noOfPrisonerInOneGo = noOfPrisoner - seatNo + 1;
    // if(noOfPrisonerInOneGo >= noOfSweets) {
    //     return seatNo + noOfSweets - 1;
    // }
    // if (noOfPrisonerInOneGo < noOfSweets) {
    //     return saveThePrisoner(noOfPrisoner, noOfSweets - noOfPrisonerInOneGo, 1);
    // }

    const a = noOfSweets + seatNo - 1;
    if (a > noOfPrisoner) {
        if (a % noOfPrisoner== 0) {
            return noOfPrisoner;
        }
        return a % noOfPrisoner;
    }

    return a;
}

console.log(saveThePrisoner(3, 394274638, 3))