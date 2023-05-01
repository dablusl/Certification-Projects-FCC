let regex = /^(1|(\(\d{3}\))|(\d{3}))(\s|\-|)((\(\d{3}\))|(\d{3})|)(\s|\-|)(\d{3})(\s|\-|)\d{4}$/;



console.log(regex.test("555-555-5555"))
console.log(regex.test("(555)555-5555"))
console.log(regex.test("(555) 555-5555"))
console.log(regex.test("555 555 5555"))
console.log(regex.test("5555555555"))
console.log(regex.test("1 555 555 5555"))