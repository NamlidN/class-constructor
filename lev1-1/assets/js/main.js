


const Ball = function(ballType) {
    if (ballType === undefined) {
       this.ballType = "regular";
    }else{
        this.ballType = 'super';

    }
    
  };
let ball1 = new Ball();
let ball2 = new Ball("super");

 console.log(ball1.ballType);	//=> "regular"
 console.log(ball2.ballType);	//=> "super"