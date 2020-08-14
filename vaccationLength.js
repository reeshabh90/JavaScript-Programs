
// Given boolean array of days at work, [T, F, T, T, F, F, F, T] and pto (number of PTOs one can take) - where boolean T means paid holiday and F means you can take a PTO. Find the maximum length of vacation an employee can take.

//int findMaxVacationLength(year = [F, T, F, T, F, T, F, ], pto = 2) should return 5 because if we take PTO on indices year[2] and year[4], then we can get the maximum length vacation (consecutive T's).

const year = [false, true, false, true, false, true]
const pto = 2;

getVaccationLength(year, pto);

function getVaccationLength(year, pto) {
    let vaccationCount = 0;
    let count = 0;
    let left = 0;
    // i -> right
    for(let i =0; i< year.length; i++) {
        let cur = year[i];
        if(!cur) {
            count++;    
        }
        
        while(count > pto) {
            if(!year[left]) {
                count--;
                left++;
            }
        }
        vaccationCount = Math.max(vaccationCount, i - left +1)
        
    }
    
    return vaccationCount;

}
