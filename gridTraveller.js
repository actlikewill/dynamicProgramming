const gridTraveller = (m,n) => {
    if (m === 0 || n === 0) {
        return 0;
    }
    if (m=== 1 && n === 1) {
        return 1;
    }   
    return gridTraveller(m-1,n) + gridTraveller(m,n-1);

}

console.log(gridTraveller(2,2));
console.log(gridTraveller(3,3));
console.log(gridTraveller(4,4));
console.log(gridTraveller(5,5));
console.log(gridTraveller(10,6));