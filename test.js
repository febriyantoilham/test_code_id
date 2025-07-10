function generator(angka) {
    let result = angka;
    for (let i = 0; i < angka.toString().length; i++) {
        result += parseInt(angka.toString()[i])
    }

    return result;
}

function searchSelfNumbers(n) {
    const notSelfNumber = [];
    let total = 0;
    for (let i = 1; i <= n; i++) {
        const result = generator(i);
        if (result <= n) {
            notSelfNumber.push(result)
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!notSelfNumber.some((a) => a == i)) {
            total += i;
        }
    }

    console.log(total);
}


searchSelfNumbers(5000);