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

// var repeatedNTimes = function(A) {
// 	var dict = {};
//     for (var i=0; i<A.length; i++) {
// 		if (dict[A[i]]) {
// 			return A[i];
// 		} else {
// 			dict[A[i]] = true;
// 		}
// 	}
// };
// console.log(repeatedNTimes([1,2,3,3]));
// console.log(repeatedNTimes([2,1,2,5,3,2]));
// console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));

// // delete node from linked list
// var deleteNode = function(node) {
// 	node.val = node.next.val;
// 	node.next = node.next.next;
// };

// var romanToInt = function(s) {
// 	let sum = 0;
// 	let big = 0;
// 	const dict = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	};
//     for (let i=s.length-1; i>=0; i--) {
// 		let num = dict[s[i]];
// 		if (num >= big) {
// 			sum += num;
// 			big = num;
// 		} else {
// 			sum -= num
// 		}
// 	}
// 	return sum;
// };
// console.log(romanToInt("III"));
// console.log(romanToInt("IV"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));

// var romanToInt = function(s) {
// 	let sum = 0;
// 	const dict = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	};
//     for (let i=0; i<s.length; i++) {
// 		if (dict[s[i]] < dict[s[i+1]]) {
// 			sum += (dict[s[i+1]] - dict[s[i]]);
// 			i++
// 		} else {
// 			sum += dict[s[i]];
// 		}
// 	}
// 	return sum;
// };
// console.log(romanToInt("III"));
// console.log(romanToInt("IV"));
// console.log(romanToInt("IX"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));

// var majorityElement = function(nums) {
// 	const dict = {};
// 	for (let i=0; i<nums.length; i++) {
// 		if (dict[nums[i]]) {
// 			dict[nums[i]]++;
// 		} else {
// 			dict[nums[i]] = 1;
// 		}
// 		if (dict[nums[i]] > (nums.length/2)) {
// 			return nums[i];
// 		}
// 	}
// };
// console.log(majorityElement([2,2,1,1,1,2,2]))

// var majorityElement = function (nums) {
//     let major = nums[0];
//     let count = 1;
//     for (let i=1; i<nums.length; i++) {
//         if (major === nums[i]) {
//             count++;
//         } else {
//             count--;
//         }
//         if (count === 0) {
//             major = nums[i];
//             count = 1;
//         }
//     }
//     return major;
// }

// var getSum = function(a, b) {
// 	while (b !== 0) {
//         let carry = a & b;
//         a = a ^ b;
//         b = carry << 1;
//     }
//     return a;
// };
// console.log(getSum(1,2))

// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
// 		return false;
// 	}
// 	const dict = {};
// 	for (let i=0; i<s.length; i++) {
// 		if (dict[s[i]]) {
// 			dict[s[i]]++;
// 		} else {
// 			dict[s[i]] = 1;
// 		}
// 	}
// 	for (let i=0; i<s.length; i++) {
// 		if (!dict[t[i]] || dict[t[i]] < 0) {
// 			return false;
// 		} else {
// 			dict[t[i]]--;
// 		}	}
// 	return true;
// };
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"))

// var isAnagram = function(s, t) {
//     if (s.length !== t.length) return false;
//     let counters = new Array(26).fill(0);
    
//     for (let i = 0; i < s.length; i++) {
//        counters[s.charCodeAt(i) - 97]++;
//        counters[t.charCodeAt(i) - 97]--;
//     }
//     for (let i = 0; i < counters.length; i++) {
//        if (counters[i]) return false;
// 	}
//     return true;
// }
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("asdfrat", "asdfcar"))

// // buy and sell stock 1
// var maxProfit = function(prices) {
// 	let max = 0;
//     for (let i=0; i<prices.length; i++) {
// 		for (let j=i+1; j<prices.length; j++) {
// 			let profit = prices[j] - prices[i];
// 			if ( profit > max) {
// 				max = profit;
// 			}
// 		}
// 	}
// 	return max;
// };
// console.log(maxProfit([7,1,5,3,6,4]));

// var maxProfit = function(prices) {
// 	let max = 0;
//     let min = Infinity;
    
//     for(let i = 0; i < prices.length; i++){
//         if(prices[i] < min)
//             min = prices[i];
//         else if(prices[i] - min > max){
//             max = prices[i] - min;
//         }
//     }
//     return max;
// };
// console.log(maxProfit([7,1,5,3,6,4]));

// // buy and sell stock 2
// var maxProfit = function(prices) {
// 	let total = 0;    
//     for(let i = 0; i < prices.length-1; i++){
//         if(prices[i+1] > prices[i]) {
//         	total += prices[i+1] - prices[i];
// 		}
//     }
//     return total;
// };
// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([1,2,3,4,5]));
// console.log(maxProfit([7,6,4,3,1]));

// // excel sheet column
// var titleToNumber = function(s) {
// 	const dict={
// 		A:1,
// 		B:2,
// 		C:3,
// 		D:4,
// 		E:5,
// 		F:6,
// 		G:7,
// 		H:8,
// 		I:9,
// 		J:10,
// 		K:11,
// 		L:12,
// 		M:13,
// 		N:14,
// 		O:15,
// 		P:16,
// 		Q:17,
// 		R:18,
// 		S:19,
// 		T:20,
// 		U:21,
// 		V:22,
// 		W:23,
// 		X:24,
// 		Y:25,
// 		Z:26
// 	}
// 	let result = 0;
//     for (let i=0; i<s.length; i++) {
// 		result = result*26 + dict[s[i]];
// 	}
// 	return result;
// };
// console.log(titleToNumber('A'));
// console.log(titleToNumber('AB'));
// console.log(titleToNumber('ZY'));

// var titleToNumber = function(s) {
//     let result = 0;
//     for (let i = 0; i < s.length; i++) {
//         result = (result * 26) + s[i].charCodeAt(0) - 64;
//     }
//     return result;
// };
// console.log(titleToNumber('A'));
// console.log(titleToNumber('AB'));
// console.log(titleToNumber('ZY'));

// var containsDuplicate = function(nums) {
// 	const dict = {};
//     for (let i=0; i<nums.length; i++) {
// 		if (dict[nums[i]]) {
// 			return true;
// 		} else {
// 			dict[nums[i]] = 1;
// 		}
// 	}
// 	return false;
// };
// console.log(containsDuplicate([1,2,3,1]));

// var containsDuplicate = function(nums) {
// 	let dict = new Set(nums);
//     return dict.size !== nums.length;
// };
// console.log(containsDuplicate([1,2,3,1]));

// var firstUniqChar = function(s) {
// 	const dict ={};
//     for (var i=0; i<s.length; i++) {
// 		if (dict[s[i]]) {
// 			dict[s[i]]++;
// 		} else {
// 			dict[s[i]] = 1;
// 		}
// 	}
// 	for (var j=0; j<s.length; j++) {
// 		if (dict[s[j]] === 1) {
// 			return j;
// 		}
// 	}
// 	return -1;
// };
// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));

// var firstUniqChar = function(s) {
// 	for(var i=0; i<s.length; i++){
// 		if(s.indexOf(s[i]) === s.lastIndexOf(s[i]))
// 			return i;
// 	}
// 	return -1;
// }
// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));

// var missingNumber = function(nums) {
// 	let sum = 0;
// 	let eSum = nums.length;
//     for (let i=0; i<nums.length; i++) {
// 		sum += nums[i];
// 		eSum += i;
// 	}
// 	return eSum - sum;
// };
// console.log(missingNumber([3,0,1]));
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// // intersection of 2 arrays 2
// var intersect = function(nums1, nums2) {
// 	const dict={};
// 	let result = [];
// 	for (var i=0; i<nums1.length; i++) {
// 		if (dict[nums1[i]]) {
// 			dict[nums1[i]]++;
// 		} else {
// 			dict[nums1[i]] = 1
// 		}
// 	}
// 	for (var j=0; j<nums2.length; j++) {
// 		if (dict[nums2[j]] > 0) {
// 			result.push(nums2[j]);
// 			dict[nums2[j]]--;
// 		}
// 	}
// 	return result;
// };
// console.log(intersect([1,2,2,1], [2,2]));
// console.log(intersect([4,9,5], [9,4,9,8,4]))

// var removeDuplicates = function(nums) {
//     for (var i=0; i<nums.length; i++) {
// 		if (nums[i] === nums[i+1]) {
// 			nums.splice(i,1)
// 			i--;
// 		}
// 	}
// 	return nums.length;
// };
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// var removeDuplicates = function(nums) {
//     if(nums.length === 0) {
// 		return 0;
// 	}
//     let i = 0;
//     for(let j = 1; j < nums.length; j++) {
//         if(nums[i] !== nums[j]){
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1; 
// };

// // rotate array
// var rotate = function(nums, k) {
//     for (let i=0; i<k; i++) {
// 		nums.unshift(nums.pop());
// 	}
// 	return nums;
// };
// console.log(rotate([1,2,3,4,5,6,7], 3));

// // pascalls triangle
// var generate = function(numRows) {
// 	if (numRows === 0) {
// 		return [];
// 	}
// 	const result =[[1]];
//     for (let i=1; i<numRows; i++) {
// 		result[i] =[];
// 		for (let j=0; j<i+1; j++) {
// 			result[i][j] = (result[i-1][j] || 0) + (result[i-1][j-1] || 0);
// 		}
// 	}
// 	return result;
// };
// console.log(generate(5))

// var generate = function(numRows) {
//     if (numRows === 0) {
// 		return [];
// 	}
//     let triangle = [[1]];
//     for (let i = 1; i < numRows; i++) {
// 		let newRow = [1];
// 		let prevRow = triangle[i-1];
//         for(let j=1; j<i; j++) {
//             newRow.push(prevRow[j - 1] + prevRow[j]);
//         }
//         newRow.push(1);
//         triangle.push(newRow);
//     }
//     return triangle;
// };
// console.log(generate(5))

// var isHappy = function(n) {
// 	function split (num) {
// 		let str = num.toString().split("");
// 		let total = 0;
// 		for (let i=0; i<str.length; i++) {
// 			let number = parseInt(str[i]);
// 			total += number*number;
// 		}
// 		return total;
// 	}
	
// 	const dict = {};
// 	let current = split(n)

// 	while (current !== 1) {
// 		if (current in dict) {
// 			return false
// 		} else {
// 			dict[current] = 1;
// 			current = split(current)
// 		}
// 	}
// 	return true;
// };

// console.log(isHappy(7));

// var isHappy = function(n) {
// 	while (n > 6) {
// 	  let next = 0;
// 	  while (n) {
// 		next += (n % 10) * (n % 10);
// 		n = ~~(n / 10);
// 	  }
// 	  n = next;
// 	}
// 	return n == 1;
// };

// var climbStairs = function(n) {
//     if (n <=3) {
// 		return n;
// 	}
// 	let arr = [1,2,3];
// 	for (var i=3; i<n; i++) {
// 		arr[i] = arr[i-1] + arr[i-2];
// 	}
// 	return arr[n-1];
// };
// console.log(climbStairs(2))

var climbStairs = function(n) {
	let current = 1;
	let next = 1;
    while (n > 0) {
		current = (next += current) - current;
		n--;
	}
    return current;
};
console.log(climbStairs(2))

// 91. Decode Ways
// 62. Unique Paths
// 509. Fibonacci Number
