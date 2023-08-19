function billboard(name, price = 30) {
    let p = 0;
    for (let i=0; i<name.length; i++) {
        p = p + price;
    }
    return p
}