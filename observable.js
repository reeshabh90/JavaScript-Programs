// Creation
const observable = new Observable(observer => {
    for (let i = 0; i < 3; i++) {
        observer.next(i);
    }
});
// Usage
observable.subscribe(value => console.log(value));