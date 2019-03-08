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

// var singleNumber = function(nums) {
//     var dict = {}
//     for (var i=0; i<nums.length; i++) {
//         if (dict[nums[i]] == null) {
//             dict[nums[i]] = 1;
//         } else {
//             dict[nums[i]]++;
//         }
//     }
//     for (var i in dict) {
//         if (dict[i] == 1) {
//             return i;
//         }
//     }
//     return null;
// };
// console.log(singleNumber([2,2,1]))
// console.log(singleNumber([4,1,2,1,2]))

// var singleNumber = function(nums) {
//     nums.sort();
//     for (var i=0; i<nums.length; i += 2) {
//         if (nums[i] != nums[i+1]) {
//             return nums[i];
//         }
//     }
// };
// console.log(singleNumber([2,2,1]))
// console.log(singleNumber([4,1,2,1,2]))

// var fizzBuzz = function(n) {
//     for (var i=1; i<=n; i++) {
//         if (i % 15 == 0) {
//             console.log("FizzBuzz");
//         }
//         else if (i % 3 == 0) {
//             console.log("Fizz");
//         }
//         else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// };
// fizzBuzz(15);

// var moveZeroes = function(nums) {
// 	let start = 0;
// 	for(let i = 0; i < nums.length; i++){
// 		if(nums[i] !== 0){
// 			nums[start] = nums[i];
//             start++;
// 		}
// 	}
// 	while(start < nums.length){
// 		nums[start] = 0;
// 		start++;
//     }
//     return nums;
// };
// console.log(moveZeroes([0,1,0,3,12]));

// var moveZeroes = function(nums) {
// 	let counter = 0;
// 	for(let i = 0; i < nums.length-counter; i++){
// 		if(nums[i] === 0){
// 			nums.splice(i,1);
// 			nums.push(0);
// 			counter++
//             i--;
// 		}
// 	}
//     return nums;
// };
// console.log(moveZeroes([0,1,0,3,12]));

// var moveZeroes = function(nums) {
// 	let start = 0;
// 		for (let i = 0; i < nums.length; i++) {
// 		  let num = nums[i];
		  
// 		  if (num !== 0) {
// 			nums[start] = num;
// 			start++;
// 		  }
// 		}
// 		for (let j = start; j < nums.length; j++) {
// 		  nums[j] = 0;
// 		}
//     return nums;
// };
// console.log(moveZeroes([0,1,0,3,12]));

// // using set instead of dictionary for dict2
// var uniqueMorseRepresentations = function(words) {
// 	let dict = {};
// 	let letters = "abcdefghijklmnopqrstuvwxyz";
// 	let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
// 	for (var i=0; i<morse.length; i++) {
// 		dict[letters[i]] = morse[i];
// 	}
// 	let dict2 = new Set();
// 	for (var j=0; j<words.length; j++) {
// 		let result = "";
// 		for (var i=0; i<words[j].length; i++) {
// 			result += dict[words[j][i]];
// 		}
// 		dict2.add(result)
// 	}
// 	return dict2.size;
// };
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

// // using indexOf instead of creating dict
// var uniqueMorseRepresentations = function(words) {
// 	let letters = "abcdefghijklmnopqrstuvwxyz";
// 	let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
// 	let dict2 = new Set();
// 	for (var j=0; j<words.length; j++) {
// 		let result = "";
// 		for (var i=0; i<words[j].length; i++) {
// 			result += morse[letters.indexOf(words[j][i])];
// 		}
// 		dict2.add(result)
// 	}
// 	return dict2.size;
// };
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

// var sortArrayByParity = function(A) {
// 	let counter=0;
//     for (let i=0; i<A.length-counter; i++) {
// 		if (A[i] % 2 != 0) {
// 			A.push(A[i]);
// 			A.splice(i,1)
// 			counter++
// 			i--
// 		}
// 	}
// 	return A;
// };
// console.log(sortArrayByParity([3,1,2,4]));

// var sortArrayByParity = function(A) {
//     let even = A.filter(i => i % 2 === 0);
//     let odd = A.filter(i => i % 2 === 1);
//     return even.concat(odd);
// };
// console.log(sortArrayByParity([3,1,2,4]));

// var sortArrayByParity = function(A) {
// 	let even = [];
//     let odd = [];
    
//     for(let i = 0; i < A.length; i++){
//         if(A[i] % 2 === 0){
//             even.push(A[i])
//         } else {
//             odd.push(A[i])
//         }
//     }
// 	return even.concat(odd)
// }
// console.log(sortArrayByParity([3,1,2,4]));

// // max depth of binary tree
// var maxDepth = function(root) {
//     if (root === null) {
// 		return 0;
// 	}
// 	return Math.max(maxDepth(root.left), maxDepth(root.right)) +1;
// };
