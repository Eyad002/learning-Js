function showDetails(...data) {
    let a, b, c;
    for (let i = 0; i < data.length; i++){
        typeof data[i] === "string"
            ? a = data[i]
            : typeof data[i] === "number"
                ? b = data[i]
                : true === data[i]
                    ? c = "" : c = "Not ";
    }
    console.log(`Hello ${a}, Your Age Is ${b}, You Are ${c}Avilable For Hire`)
}
showDetails("Eyad", false,23);
