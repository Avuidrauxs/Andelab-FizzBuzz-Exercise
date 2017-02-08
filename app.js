module.exports = {


	fizzBuzz : function(num){

				//check if it's not divisible by either 3 or 5
				  if ((num / 3) % 1 !== 0 && (num / 5) % 1 !== 0) 
				  {
				    return num;
				  }
				  //check if it is divisible by 5
				  else if((num / 3) % 1 !== 0)
				  {
				    return "Buzz";
				  }
				  //Check if it is divisible by 3
				  else if((num / 5) % 1 !== 0)
				  {
				    return "Fizz";
				  }
				  //Check if the number is zero
				  else if(num === 0)
				  {
				  	return "Undefined";
				  }
				  else
				  {
				    return "FizzBuzz";
				  }

	}




};