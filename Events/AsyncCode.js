function fact (n) {

    // Base case 
    if ( n == 0 || n == 1){
        return n;
    }

    return  fact(n-1) + fact(n-2);

}

let fact1 = fact(7);
console.log(fact1)
