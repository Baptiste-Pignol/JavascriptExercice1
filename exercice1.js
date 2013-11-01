// old adder, with one argument
function oldAdder(l, r){
  return function(v){
    return l(v) + r(v);
  }
}

// mult
function mult(v){
  return function(e){
    return v*e;
  }
}

// sub
function sub(v){
  return function(e){
    return v-e;
  }
}

// adder with with a variable number of arguments.
function adder(/*arguments...*/) {
	var arg = Array.prototype.slice.call(arguments); // transform the object in Array

	return function(v){
		var res = 0;
		arg.forEach(function(value) {res += value(v);});
		return res;
	}
}




// test:
console.log(adder(mult(2), mult(4))(2));		// 12
console.log(sub(0)(0)); 				//  0
console.log(sub(2)(1)); 				//  1
console.log(sub(2)(2)); 				//  0
console.log(sub(2)(4)); 				// -2
console.log(adder()(0));				//  0
console.log(adder()(1)); 				//  0
console.log(adder(mult(2))(1)); 			//  2
console.log(adder(mult(2), mult(2))(1)); 		//  4
console.log(adder(mult(2), mult(2), mult(2))(1)); 	//  6
console.log(adder(mult(2), sub(2), mult(2))(1)); 	//  5
