class Invoice {
  companyProfile: string;

  constructor(public name, public city, public state) {
    this.companyProfile = name + ", " + city + ", " + state;
  }
}

var googleInvoice = new Invoice('Google', 'Mountain View', 'Utah');
var yahooInvoice = new Invoice("Yahoo", 'SF', 'Cali');

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);