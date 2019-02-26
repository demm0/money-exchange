// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
let makeExch = {};
let mE = 
['H', 
 'Q', 
 'D', 
 'N', 
 'P'];
let k;
let m = [50,25,10,5,1];
let usl=true;
let l=0;
if (currency<=0) k='{}';
if (currency>=10000) k='{error: "You are rich, my friend! We don'+"'"+'t have so much coins for exchange"}';
if ((currency>0) && (currency<10000)){
	let i=0;
	while (usl==true){
	if (Math.trunc(currency/m[i])>0) {
	 currency=currency-m[i];
	 l++;
	makeExch[mE[i]] = l;}
	 else {if (currency%m[i]>0) {i++;	l=0;}
			else usl=false;}
	}
	k=makeExch;
	}
return (JSON.stringify(k));	
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
