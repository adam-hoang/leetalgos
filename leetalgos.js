// var twoSum = function (nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null;
// };
// nums = [2, 7, 11, 15];
// target = 9;
// console.log(twoSum(nums, target));

// var twoSum = function (nums, target) {
//     const dict = {};
//     for (let i = 0; i < nums.length; i++) {
//         const another = target - nums[i];

//         if (another in dict) {
//             return [dict[another], i];
//         }

//         dict[nums[i]] = i;
//     }
//     return null;
// };
// nums = [2, 7, 11, 15];
// target = 9;
// console.log(twoSum(nums, target));

// var reverse = function(x) {
//     var sign = Math.sign(x);
//     var reversed = parseInt(x.toString().split('').reverse().join(''));
//     if (reversed > Math.pow(2,31) -1) {
//         return 0;
//     }
//     return reversed*sign;
// };

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));

// var reverse = function(x) {
//     var reversed = 0;
//     var max_range = Math.pow(2, 31) -1;
//     var min_range = Math.pow(-2, 31);
//     while (x !== 0) {
//         reversed = reversed * 10 + x % 10;
//         x = parseInt((x/10));
//     }
//     if (reversed > max_range || reversed < min_range){
//         return 0;
//     }    
//     return reversed;
// };

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));


// NON_DECREASING ARRAY
// var checkPossibility = function(nums) {
//     var errors=0;
//     for (var i=0; i<nums.length-1; i++) {
//         if (nums[i] > nums[i+1]) {
//             if (nums[i-1] > nums[i+1] && nums[i] > nums[i+2]) {
//             errors++;
//             }
//             errors++;
//         }
        
//         if (errors > 1) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(checkPossibility([4,2,3]));
// console.log(checkPossibility([4,2,1]));

// var numJewelsInStones = function(J, S) {
//     var count = 0;
//     for (var i=0; i<S.length; i++) {
//         if (J.includes(S[i])) {
//             count++
//         }
//     }
//     return count;
// };

// console.log(numJewelsInStones("aA", "aAAbbbb"))
// console.log(numJewelsInStones("z", "ZZ"))

// var numJewelsInStones = function(J, S) {
//     var count = 0;
//     for (var i=0; i<S.length; i++) {
//         for (var j=0; j<J.length; j++) {
//             if (S[i] == J[j]) {
//                 count++
//             }
//         }
//     }
//     return count;
// };

// console.log(numJewelsInStones("aA", "aAAbbbb"))
// console.log(numJewelsInStones("z", "ZZ"))

// var toLowerCase = function(str) {
//     str = str.toLowerCase();
//     return str;
// };

// console.log(toLowerCase("Hello"));

// var numUniqueEmails = function(emails) {
//     var arr = [];
//     for(var email of emails){
//         var domain = email.substring(email.indexOf("@"), email.length);
//         var trimPlus = email.slice(0, email.indexOf("+"));
//         var removeDot = trimPlus.replace(/\./g, "")
//         var trimmed = removeDot.concat(domain);
//         if(!arr.includes(trimmed)){
//             arr.push(trimmed);
//         }
//     }
//     return arr.length;
// };

// console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))

// // Reverse a linked list
// var reverseList = function(head) {
//     var prev = null;
//     while (head) {
//         var next = head.next;
//         head.next = prev;
//         prev = head;
//         head = next;
//     }
//     return prev;
// };

// var sortedSquares = function(A) {
//     for (var i=0; i<A.length; i++) {
//         A[i] *= A[i];
//     }
//     A.sort(function(a, b){return a-b});
//     return A;
// };
// console.log(sortedSquares([-4,-1,0,3,10]))

// var reverseString = function(s) {
//     return s.reverse();
// };
// console.log(reverseString(["h","e","l","l","o"]));

// var reverseString = function(s) {
//     for (var i=0, j=s.length-1; i<j; i++, j--) {
//         temp = s[i];
//         s[i] = s[j];
//         s[j] = temp;
//     }
//     return s;
// };
// console.log(reverseString(["h","e","l","l","o"]));
