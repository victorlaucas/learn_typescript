class Invoice {
  total: number;

  constructor(total: number) {
    this.total = total;
  }

  printTotal() {
    console.log(this.total);
  }

  // printLater(time: number) {
  //   setTimeout(function() {
  //     console.log(this.total)
  //   }, time);
  // }

// By using a fat arrow instead of 'function' you have access to this at it's properly scoped. 
  printLater(time: number) {
    setTimeout(() => {
      console.log(this.total)
    }, time);
  }
}

var invoice = new Invoice(400);
invoice.printTotal();
invoice.printLater(1000);