function Palindrome() {
  // The queue is the reverse of the stack - this program then compares the end
  // of each array
  var stack = [];
  this.pushCharacter = function(ch) {
    stack.push(ch);
  };
  var queue = [];
  this.enqueueCharacter = function(ch) {
    queue.unshift(ch);
  };
  this.popCharacter = function() {
    return stack.pop();
  };
  this.dequeueCharacter = function() {
    return queue.pop();
  };
}

s = "yes";
var len = s.length;
var p = new Palindrome();
for (var i = 0; i < len; i++) {
  p.pushCharacter(s.charAt(i));
}


for (var i = 0; i < len; i++) {
  p.enqueueCharacter(s.charAt(i));
}
var f=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len;i++){
      console.log(p.popCharacter());
        if(p.popCharacter()!=p.dequeueCharacter()){
            f=false;
        }
    }
    //finally print whether string s is palindrome or not

    if(f)
        console.log("The word, "+s+", is a palindrome.");
    else
        console.log("The word, "+s+", is not a palindrome.");
