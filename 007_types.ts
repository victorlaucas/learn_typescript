// Boolean 
let paidAccount : boolean = true;

// Number 
let age : number = 33;
var taxRate : number = 7.5;

// String 
var fulName : string = "Victor Laucas";

// Array 
var ages : number[] = [33, 26, 11];

// Tuple 
// Have to be working with a collection of data where you already know how many elements are going to be in the array 
let player : [number, string]; 
player = [3, 'Corerra'];

// Enum 
// Ability to set different stages and then call them as methods 
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any 
// Can be very error prone. Only used when you don't really have any more options. 
var apiData : any[] = [123, "Victor", false];

// Void 
// Void isn't used with variables, used specifically with functions
// Anytime a method performing an action, but not returning a value 
function printOut(msg: string) : void {
  alert(msg);
}