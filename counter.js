/*
Create a class CallCounter that tracks the number of calls a client has
made within the last 3 seconds. Your class should contain one method,
ping(int t) that receives the current timestamp (in milliseconds) of a
new call being made and returns the number of calls made within the last
3 seconds.
Note: you may assume that the time associated with each subsequent call
to ping is strictly increasing.
Ex: Given the following calls to ping...
ping(1), return 1 (1 call within the last 3 seconds)
ping(300), return 2 (2 calls within the last 3 seconds)
ping(3000), return 3 (3 calls within the last 3 seconds)
ping(3002), return 3 (3 calls within the last 3 seconds)
ping(7000), return 1 (1 call within the last 3 seconds)
*/

Call = {
  pings:[],
  ping:function(time){
    this.pings.push(time)
    
    const last3Pings = [time]
    this.pings.forEach((el, index)=>{
    
      if(index<2){
        if (time-el<=3000) {
          last3Pings.push(el)
        }
      }
    })
    
    return `${last3Pings.length} pings made in the last 3 sec.`
  }
}

// driver code
Call.ping(1)
Call.ping(300)
Call.ping(301)
Call.ping(302)
Call.ping(303)
//driver code
console.log(Call.ping(30004));
console.log(Call.pings);

