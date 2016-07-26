function sortLibrary() {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
    console.log(library)
    for(var i = 1; i < library.length;i++){
        var temp = library[i],j;
        for(j = i - 1;j >= 0 && library[j]['libraryID'] > temp['libraryID'];--j){
            library[j + 1] = library[j];
        }
        library[j + 1] = temp;
    }
    console.log(library)
} 

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();


var findSecondLargeNumber = function(items){
    var fLargeNum = 0,sLargeNum = 0;
    for(var i = 0;i<items.length;i++){
        if(fLargeNum < items[i]){
            sLargeNum = fLargeNum;
            fLargeNum = items[i]
        }else if(sLargeNum < items[i]){
            sLargeNum = items[i]
        }
    }
    return sLargeNum;
}

console.log('findSecondLargeNumber(['+799, -85, 8, -1, 6, 4, 3, -2, -15, 0, 207, 75, 785, 122, 17+'])              ',findSecondLargeNumber([799, -85, 8, -1, 6, 4, 3, -2, -15, 0, 207, 75, 785, 122, 17]));


var processData = function(amouts,prices){
    prices = prices.sort(function(a,b){return a-b});
    console.log(prices)
    var count = 0,sum = 0 ;
    for(var i = 0; i < prices.length; i++){
        sum += prices[i];
        if(sum < amouts[1]){
            count++;
        }else{
            break;
        }
    }
    console.log('count        ',count);
}

processData([7,50],[1,12,5,111,200,1000,10]);

var FindtheDuplicateNumber = function(items){
    var result = [];
    items = items.sort(function(a,b){return a - b;});
    for(var i = 0;i < items.length - 1;i++){
        if(items[i] === items[i + 1]){
            result.indexOf(items[i]) === -1 ? result.push(items[i]) : false;
        }
    }

    return result;
}


var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];

console.log('FindtheDuplicateNumber('+arr+')       ',FindtheDuplicateNumber(arr))

var FirstMissingPositive = function(items){
    items = items.sort(function(a,b){return a - b;});
    if(items.length === 0 || items[items.length - 1] <= 0){
        return 1;
    }
    var k = 1;
    for(var i = 0;i < items.length;i++){
        if(items[i] > k){
            return k;
        }
        k = items[i] < k ? k : k + 1;
    }
    return items[items.length - 1] + 1;
}

console.log('FirstMissingPositive('+[3,4,-1,1]+')       ',FirstMissingPositive([3,4,-1,1]));


var singleNumber = function(items){
    items = items.sort(function(a,b){return a - b;})
    for(var i = 0;i < items.length; i = i + 2){
        if(items[i] !== items[i + 1]){
            return items[i]
        }
    }
    return items[items.length - 1];
}

console.log('singleNumber('+[5,5,9,9,2,2,4,7,7,5]+')         '+singleNumber([5,5,9,9,2,2,4,7,7,5]))

var moveZeroes = function(items){
    var i = 0,j = 0;
    for(;i < items.length;i++){
        if(items[i] !== 0){
            var temp = items[i];
            items[i] = items[j];
            items[j] = temp;
            j++;
        }
    }
    return items;
}

console.log('moveZeroes('+[1, 0, 2, 1, 0, 3, 0, 0, 5]+')         ',moveZeroes([1, 0, 2, 1, 0, 3, 0, 0, 5]))

var productExceptSelf = function(items){
    if(items.length < 3){
        return items.reverse();
    }
    var p = [1],q = [],result = [];
    q[items.length - 1] = 1;
    for(var i = 0,n = items.length - 1; i < n;i++){
        p[i + 1] = p[i] * items[i];
        q[n - i - 1] = q[n - i] * items[n - i];
    }
    for(var i = 0;i < items.length;i++){
        result[i] = p[i] * q[i];
    }
    return result;
}

console.log('productExceptSelf(['+1,2,3,4+'])         ',productExceptSelf([1,2,3,4]));


var maxProduct = function(items){
    var max = [items[0]],min = [items[0]],result = items[0];
    for(var i = 1; i < items.length;i++){
        if(items[i] > 0){
            max[i] = Math.max(items[i],max[i - 1] * items[i]);
            min[i] = Math.max(items[i],min[i - 1] * items[i]);
        }else{
            max[i] = Math.max(items[i],min[i - 1] * items[i]);
            min[i] = Math.max(items[i],max[i - 1] * items[i]);
        }
        result = Math.max(result,max[i]);
    }

    return result;
}

console.log('maxProduct(['+6, -3, -10, 0, 2+'])          ',maxProduct([6, -3, -10, 0, 2]))

var maxSubArray = function(items){
    var sum = items[0],maxSum = items[0];
    for(var i = 1;i < items.length;i++){
        if(sum > 0){
            sum += items[i]
        }else{
            sum = items[i]
        }
        maxSum = Math.max(maxSum,sum);
    }
    return maxSum;
}

console.log('maxSubArray([−2,1,−3,4,−1,2,1,−5,4])            ',maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

var majorityElement = function(items){
    var hasNum = {},result = [];
    for(var i = 0;i < items.length;i++){
        if(result.indexOf(items[i]) > -1){
            continue;
        }else if(!hasNum[items[i]]){
            hasNum[items[i]] = 1;
        }else{
            hasNum[items[i]] += 1;
        }
        if(hasNum[items[i]] > Math.floor(items.length/3)){
            result.push(items[i])
        }
    }
    return result;
}

console.log('majorityElement(['+1,2,3,3,3,3,5,6+'])           ',majorityElement([1,2,3,3,3,5,5,6]));

var summaryRanges = function(items){
    var result = [],start = items[0],end;
    for(var i = 0;i < items.length;i++){
        if(i + 1 !== items.length && items[i + 1] - items[i] !== 1){
            end = items[i] + '';
            if(start == end){
                result.push(start)
            }else{
                result.push(start + '->' + end)
            }
            start = items[i + 1]+''
        }else if(i + 1 === items.length){
            end = items[i] + '';
            if(start == end){
                result.push(start)
            }else{
                result.push(start + '->' + end)
            }
        }
    }
    return result;
}
console.log('summaryRanges(['+0,1,2,4,5,7+'])           ',summaryRanges([0,1,2,4,5,7]))

var containsDuplicate = function(items){
    items = items.slice().sort(function(a,b){return a - b;})
    for(var i = 0;i < items.length;i++){
        if(items[i] === items[i + 1]){
            return true;
        }
    }
    return false;
}

console.log('containsDuplicate(['+5,7,8,4,24,14,9+'])            ',containsDuplicate([5,7,8,4,14,24,9]))

var minSubArrayLen = function(k,items){
    var start = 0,end = 0,result = items.length,runningSum = 0;
    while(start < items.length){
        if(runningSum < k && end < items.length){
            runningSum += items[end];
            end++; 
        }else if(runningSum >= k){
            result = Math.min(result,end - start);
            runningSum -= items[start];
            start++;
        }else{
            break;
        }
    }
    return result;
}

console.log('minSubArrayLen(7,['+2,3,1,2,4,3+'])              '+minSubArrayLen(7, [2,3,1,2,4,3]))

var findPeakElement = function(items){
    if(items.length === 1){
        return 0;
    }else if(items.length === 2){
        return items[0] > items[1] ? 0 : 1;
    }else{
        var i = 1;
        for(;i < items.length - 1;i++){
            if(items[i] > Math.max(items[i + 1],items[i - 1])){
                return i;
            }
        }
    }
    return items[0] > items[i] ? 0 : i;
}

console.log('findPeakElement(['+1, 2, 3, 1+'])           ',findPeakElement([1, 2, 3, 1]))

var findMin = function(items){
    var min = items[0];
    for(var i = 1;i < items.length;i++){
        if(items[i] < min){
            min = items[i];
        }
    }
    return min
}

console.log('findMin(['+4,5,6,7,0,1,2+'])          '+findMin([4,5,6,7,0,1,2]))

var maxProfit = function(prices){
    var max = 0,min = Infinity,diff = 0;
    for(var i = 0;i< prices.length;i++){
        if(min > prices[i]){
            min = prices[i];
        }
        diff = prices[i] - min;
        if(diff > max){
            max = diff;
        }
    }

    return max;
}

console.log('maxProfit(['+7, 1, 5, 3, 6, 4+'])              ',maxProfit([7, 1, 5, 3, 6, 4]))

var bubbleSort = function(items){
    for(var i = 0;i < items.length - 1;i++){
        for(var j = i + 1;j < items.length;j++){
            if(items[i] > items[j]){
                var temp = items[i];
                items[i] = items[j];
                items[j] = temp;
            }
        }
    }
    return items;
}
// O(N^2) complexity
console.log('bubbleSort([34, 23, 12, 45, 9, 1, 24])      ',bubbleSort([34, 23, 12, 45, 9, 1, 24]));

var selectionSort = function(items){
    for(var i = 0;i < items.length - 1;i++){
        var min = i;
        for(var j = i + 1; j < items.length;j++){
            if(items[min] > items[j]){
                min = j;
            }
        }
        if(min !== i){
            var temp = items[i];
            items[i] = items[min];
            items[min] = temp;
        }
    }
    return items;
}

// O(N^2) complexity
console.log('selectionSort([34, 23, 12, 45, 9, 1, 24])      ',selectionSort([34, 23, 12, 45, 9, 1, 24]));

var insertionSort = function(items){
    for(var i = 1;i < items.length;i++){
        var temp = items[i],j = i - 1;
        for(;j >= 0 && (items[j] > temp);j--){
            items[j + 1] = items[j];
        }
        items[j + 1] = temp;
    }
    return items;
}
console.log('insertionSort([34, 23, 12, 45, 9, 1, 24])      ',insertionSort([34, 23, 12, 45, 9, 1, 24]));


var LoveLetterMystery = function(items){
    for(var i = 0;i < items.length;i++){
          var strArr = items[i].split(''),l = strArr.length,newCode = 0,count = 0;
          var end = Math.floor(l/2);
          for(var j = 0;j <= end;j++){
            while(strArr[j] < strArr[l - j - 1]){
                newCode = strArr[l - j -1].charCodeAt(0) - 1;
                strArr[l - j -1] = String.fromCharCode(newCode);
                count++;
            }
            while(strArr[j] > strArr[l - j - 1]){
                newCode = strArr[j].charCodeAt(0) - 1;
                strArr[j] = String.fromCharCode(newCode);
                count++;
            }
          }
          console.log(strArr.join('')+' --------> '+count);
    }
}

LoveLetterMystery(['abc','abcba','abcd','cba']);

var caeserCipher = function(input,offest){
    var output = '',chCode = 0,newCode = 0;
    for(var i = 0;i < input.length;i++){
        chCode = input.charCodeAt(i);
        if(chCode > 96 && chCode < 123){
            newCode = chCode + offest;
            while(newCode > 122){
                newCode -= 26;
            }
        }else if(chCode > 65 && chCode < 91){
            newCode = chCode + offest;
            while(newCode > 90){
                newCode -= 26;
            }
        }else{
            newCode = chCode;
        }
        output += String.fromCharCode(newCode);
    }
    console.log(output);
}

caeserCipher('middle-Outz',2);
/*
str = "zaZA";
console.log(str.charCodeAt(0));//122
console.log(str.charCodeAt(1));//97
console.log(str.charCodeAt(2));//90
console.log(str.charCodeAt(3));//65
*/

var myMap = function(items,callback){
    var result = [];
    for(var index in items){
        result.push(callback(items[index]));
    }
    return result;
}

var some_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myMap(some_array, function(x) {return x + 1;})); //increments array element by 1.
console.log(myMap(some_array, function(x) {return x * 2;})); //doubles each array element.
console.log(myMap(some_array, function(x) {return x * x;})); //squares each array element.
//using modern methods:
console.log(myMap(some_array, (x) => x + 1));  //increments array element by 1.
console.log(myMap(some_array, (x) => x * 2 ));  //doubles each array element.
console.log(myMap(some_array, (x) => x * x ));  //squares each array element.

var some_array = [4, 5, 6, 7, 8, 9];
var myFilter = function(items,callback){
    var result = [];
    for(var index in items){
        var item = callback(items[index]);
        if(item == true){
            result.push(items[index]);
        }
    }
    return result;
}
console.log(myFilter(some_array, (x) => (x % 2 == 0) ? true : false ));

var cavityMap = function(items){
    for(var i = 1;i < items.length - 1;i++){
        var item = items[i];
        for(var j = 1;j < item.length - 1;j++){
            var current =  items[i][j];
            var top = items[i - 1][j];
            var bottom = items[i + 1][j];
            var right = items[i][j + 1];
            var left = items[i - 1][j];
        if(top < current && bottom < current && left < current && right < current){
            items[i][j] = 'X';
        }
        }
    }
    for (var p = 0; p < items.length; p++) {
    var output = "";
    for (var q = 0; q < items.length; q++ ) {
      output += items[p][q];
    }
    console.log(output);
  }
}

cavityMap([[1,1,1,2],[1,9,1,2],[1,8,9,2],[1,2,3,4]]);

var chocolateFeast = function(items){
    for(var i = 0;i < items.length;i++){
        var n = parseInt(items[i][0]);// amount to use
        var c = parseInt(items[i][1]);// cost per choc.
        var m = parseInt(items[i][2]);// no. of wrappers for each extra choc.
        var n_chocs = Math.floor(n/c);// Number of chocs. initially and no. of wrappers
        if(m > n_chocs){
            var n_ext = 0;// no extra chocs.
        }else{
            n_ext = Math.floor(n_chocs/m);
            if(n_chocs % m >= 0){
                var temp = n_ext,temp2 = n_chocs;
                do{
                    var temp3 = Math.floor((temp + temp2 % m)/m);
                    n_ext += temp3;
                    temp2 = temp;
                    temp = temp3;
                }while(temp > 1)
            }
        }
        var output = n_chocs + n_ext;
        console.log(output);
    }
}

chocolateFeast([[10,2,5],[12,4,4],[6,2,2]]);
console.log('-----------------------')
var cutTheSticks = function(items){
    items = items.sort(function(a,b){return a - b;})
    var len = items.length;
    console.log(len);
    while(len > 1){
        if(items[0] === items[1]){
            len--
            items.shift();
        }else{
            len--
            items.shift();
            console.log(len);
        }
    }
}

cutTheSticks([5,4,4,2,2,8]);

var diagDiff = function(matrix){
    var pdSum = 0,sdSum = 0;
    for(var i = 0;i < matrix.length;i++){
        pdSum += matrix[i][i];
        sdSum += matrix[i][matrix.length - i - 1];
    }
    return Math.abs(pdSum - sdSum);
}

console.log('diagDiff([[11, 2, 4],[4, 5, 6],[10, 8, -12]])        ',diagDiff([[11, 2, 4],[4, 5, 6],[10, 8, -12]]));

var denaryToBinary = function(decimalNum){
    var result = [];
    while(decimalNum > 0){
        result.unshift(decimalNum % 2);
        decimalNum = Math.floor(decimalNum/2);
    }
    return result.join('');
}

console.log('denaryToBinary(4)        ',denaryToBinary(4));


var findPairs = function(items,k){
    var count = 0;
    for(var i = 0;i < items.length - 1;i++){
        for(var j = i + 1;j < items.length;j++){
            if((items[i] + items[j]) % k === 0){
                count++;
            }
        }
    }
    console.log('count      ',count);
}

findPairs([1,3,2,6,1,2], 3);


var findDigits = function(digits){
    var count = 0;
    for(var i = 0;i < digits.length;i++){
        var d = digits[i].split('');
        for(var j = 0; j < d.length;j++){
            if(digits[i] % d[j] === 0){
                count++;
            }
        }
        console.log(digits[i]+' ----> '+count);
        count = 0;
    }
}   

findDigits(['12','1012']);

var primeCheck = function(num){
    if(num <= 1){
        return false;
    }else if(num === 2){
        return true;
    }else{
        var limit = Math.floor(Math.sqrt(num));
        for(var i = 2;i <= limit;i++){
            if(num % i === 0){
                return false;
            }
        }
    }
    return true;
}

console.log('primeCheck                 ',primeCheck(16))


var funnyStrings = function(inputs){
    for(var i = 0; i < inputs.length;i++){
        var input = inputs[i];
        var l = Math.floor(input.length/2);
        for(var j = 0;j <= l;j++){
            if(Math.abs(input.charCodeAt(j) - input.charCodeAt(j + 1)) !== Math.abs(input.charCodeAt(l - j) - input.charCodeAt(l - j + 1))){
                console.log("Not Funny");
                break;
            }else{
                console.log("Funny");
                break;
            }
        }
    }
}
funnyStrings(['acxz','bcxz']);

var getDay = function(date){
    var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(date);
    if(parseInt(d) != -1){
        var dayNum = d.getDay();
        console.log(dayArr[dayNum])
    }
}

getDay('10/11/2009');

var gcd = function(x,y){
    if(x === 0 || y === 0){
        return x + y;
    }
    return gcd(y, x % y);
}
console.log('gcd(2154, 458)     ',gcd(2154,458));


var libraryFines = function(startDate,endDate){
    var actual = startDate.split(' ');
    var expected = endDate.split(' ');
    var aDay = parseInt(actual[0],10),eDay = parseInt(expected[0],10),
        aMonth = parseInt(actual[1],10),eMonth = parseInt(expected[1],10),
        aYear = parseInt(actual[2],10),eYear = parseInt(expected[2],10),fine = 0;
    if(eYear > aYear){
        fine = 10000;
    }else if(eMonth > aMonth){
        fine = 500 * (eMonth - aMonth);
    }else if(eDay > aDay){
        fine = 15 * (eDay - aDay);
    }else{
        fine = 0;
    }

    console.log('fine      ',fine)
}

libraryFines('6 6 2015','9 6 2015');

var nonDivisibleSubsets = function(items,k){
    var maxSize = 0;
    for(var i = 0;i < items.length - 1;i++){
        for(var j = i + 1;j < items.length;j++){
            if((items[i] + items[j]) % k != 0){
                maxSize++;
            }
        }
    }
    console.log('maxSize            ',maxSize)
}
nonDivisibleSubsets([1,7,2,4],3);


var reverseOrder = function(items,callback){
    var result = [];
    for(var i = items.length - 1;i >= 0;i--){
        result.push(callback(items[i]));
    }
    return result;
}

console.log(reverseOrder([1,2,4,5],function(x){return x;}));

var sherlockAndSquare = function(matrix){
    for(var i = 0;i < matrix.length;i++){
        var s1 = Math.sqrt(matrix[i][0]);
        var s2 = Math.sqrt(matrix[i][1]);
        var count = Math.floor(s2) - Math.floor(s1);
        if(s1 % 1 === 0){
            count++;
        }
        console.log(count)
    }
}

sherlockAndSquare([[3,9],[17,24]]);

var Node = function($element){
    this.next = null;
    this.data = $element;
}
var LinkedList = function(){
    this.head = null;
}

LinkedList.prototype = {
    add : function($element){
        if(!$element){
            throw new Error('Invalid data!');
        }else if(!this.head){
            this.head = new Node($element);
        }else{
            var currNode = this.head;
            while(currNode.next){
                currNode = currNode.next;
            }
            currNode.next = new Node($element); 
        }
    },
    remove : function($element){
        if(!$element){
            throw new Error('Invalid data!');
        }else if(this.head.data === $element){
            this.head = this.head.next;
        }else{
            var currNode = this.head,prevNode = null;
            while(currNode){
                if(currNode.data == $element){
                    prevNode.next = currNode.next;
                    return; 
                }
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
    },
    removeAt : function($position){
        if(!$position){
            throw new Error('Invalid Position!');
        }else if($position === 1){
            this.head = this.head.next;
        }else{
            var currNode = this.head,prevNode = null;
            while($position > 1 && currNode){
                prevNode = currNode;
                currNode = currNode.next;
                $position--;
            }
            if($position == 1){
                prevNode.next = currNode.next;
            }else{
                throw new Error('Invalid Position!');
            }

        }
    },
    reverse : function(){
        if(!this.head){
            throw new Error('Empty LinkedList!')
        }else if(this.head.next){
            var p1 = this.head,p2 = null,p3 = null;
            while(p1){
                p2 = p1.next;
                p1.next = p3;
                p3 = p1;
                p1 = p2;
            }
            this.head = p3;
        }
    },
    isPalindrome : function(){
        if(!this.head){
            throw new Error('Empty LinkedList!');
        }else if(this.head.next){
            var temp = JSON.stringify(this); // Serialize L1, remember this can be an expensive operation
            var L2 = JSON.parse(temp); // Deserialize L1, remember this can be an expensive operation
            this.reverse.call(L2);
            var head1 = this.head;
            var head2 = L2.head;
            while(head1){
                if(head1.data !== head2.data){
                    return false;
                }
                head1 = head1.next;
                head2 = head2.next;
            }

        }
        return true;
    },
    getLen : function(head){
        var len = 0;
        while(head){
            head = head.next;
            len++;
        }
        return len;
    },
    getIntersectionNode : function(headA,headB){
        var lenA = this.getLen(headA);
        var lenB = this.getLen(headB);
        while(lenA > lenB){
            headA = headA.next;
            lenA--;
        }
        while(lenA < lenB){
            headB = headB.next;
            lenB--;
        }
        while(headA && headB){
            if(headA.data === headB.data){
                return headA.data;
            }
            headA = headA.next;
            headB = headB.next;
        }
        return null;
    }
}

var linkedList = new LinkedList(),linkedList2 = new LinkedList();
linkedList.add('1')
linkedList.add('2')
linkedList.add('8')
linkedList.add('4')
linkedList.add('5')


linkedList2.add('9')
linkedList2.add('14')
linkedList2.add('7')
linkedList2.add('24')
linkedList2.add('6')
linkedList2.add('4')
linkedList2.add('12')


console.log(linkedList.getIntersectionNode(linkedList.head,linkedList2.head))
console.log(linkedList)