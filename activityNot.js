// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let count = 0;
    for (let i = d; i < expenditure.length; i++) {
        let med = calMedian(expenditure, d, i - d);
        let value = expenditure[i];
        if (checkNotify(med, value)) {
            count++;
        }
    }
    return count;

}

function checkNotify(median, value) {
    return (value >= median * 2) ? true : false;
}

function calMedian(expenditure, d, currentInd) {
    let sum = 0;
    for (let i = currentInd; i < currentInd + d; i++) {
        sum += expenditure[i];
    }

    return sum / d;
}

const expenditure = [2, 3, 4, 2, 3, 6, 8, 4, 5];
const d = 5;
activityNotifications(expenditure, d);