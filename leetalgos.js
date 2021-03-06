// var twoSum = function (nums, target) {
// 	for (var i = 0; i < nums.length; i++) {
// 		for (var j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] == target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// 	return null;
// };
// nums = [2, 7, 11, 15];
// target = 9;
// console.log(twoSum(nums, target));

// var twoSum = function (nums, target) {
// 	const dict = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		let matching = target - nums[i];
// 		if (matching in dict) {
// 			return [dict[matching], i];
// 		}
// 		dict[nums[i]] = i;
// 	}
// };
// nums = [2, 7, 11, 15];
// target = 9;
// console.log(twoSum(nums, target));

// var reverse = function (x) {
// 	var sign = Math.sign(x);
// 	var reversed = parseInt(x.toString().split('').reverse().join(''));
// 	if (reversed > Math.pow(2, 31) - 1) {
// 		return 0;
// 	}
// 	return reversed * sign;
// };

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));

// var reverse = function (x) {
// 	var reversed = 0;
// 	var max_range = Math.pow(2, 31) - 1;
// 	var min_range = Math.pow(-2, 31);
// 	while (x !== 0) {
// 		reversed = reversed * 10 + x % 10;
// 		x = parseInt((x / 10));
// 	}
// 	if (reversed > max_range || reversed < min_range) {
// 		return 0;
// 	}
// 	return reversed;
// };

// console.log(reverse(123));
// console.log(reverse(-123));
// console.log(reverse(120));


// NON_DECREASING ARRAY
// var checkPossibility = function (nums) {
// 	var errors = 0;
// 	for (var i = 0; i < nums.length - 1; i++) {
// 		if (nums[i] > nums[i + 1]) {
// 			if (nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) {
// 				errors++;
// 			}
// 			errors++;
// 		}

// 		if (errors > 1) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// console.log(checkPossibility([4, 2, 3]));
// console.log(checkPossibility([4, 2, 1]));

// var numJewelsInStones = function (J, S) {
// 	var count = 0;
// 	for (var i = 0; i < S.length; i++) {
// 		if (J.includes(S[i])) {
// 			count++
// 		}
// 	}
// 	return count;
// };

// console.log(numJewelsInStones("aA", "aAAbbbb"))
// console.log(numJewelsInStones("z", "ZZ"))

// var numJewelsInStones = function (J, S) {
// 	var count = 0;
// 	for (var i = 0; i < S.length; i++) {
// 		for (var j = 0; j < J.length; j++) {
// 			if (S[i] == J[j]) {
// 				count++
// 			}
// 		}
// 	}
// 	return count;
// };

// console.log(numJewelsInStones("aA", "aAAbbbb"))
// console.log(numJewelsInStones("z", "ZZ"))

// var toLowerCase = function (str) {
// 	str = str.toLowerCase();
// 	return str;
// };

// console.log(toLowerCase("Hello"));

// var numUniqueEmails = function (emails) {
// 	var arr = [];
// 	for (var email of emails) {
// 		var domain = email.substring(email.indexOf("@"), email.length);
// 		var trimPlus = email.slice(0, email.indexOf("+"));
// 		var removeDot = trimPlus.replace(/\./g, "")
// 		var trimmed = removeDot.concat(domain);
// 		if (!arr.includes(trimmed)) {
// 			arr.push(trimmed);
// 		}
// 	}
// 	return arr.length;
// };

// console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))

// // Reverse a linked list
// var reverseList = function (head) {
// 	var prev = null;
// 	while (head) {
// 		var next = head.next;
// 		head.next = prev;
// 		prev = head;
// 		head = next;
// 	}
// 	return prev;
// };

// var sortedSquares = function (A) {
// 	for (var i = 0; i < A.length; i++) {
// 		A[i] *= A[i];
// 	}
// 	A.sort(function (a, b) { return a - b });
// 	return A;
// };
// console.log(sortedSquares([-4, -1, 0, 3, 10]))

// var reverseString = function (s) {
// 	return s.reverse();
// };
// console.log(reverseString(["h", "e", "l", "l", "o"]));

// var reverseString = function (s) {
// 	for (var i = 0, j = s.length - 1; i < j; i++ , j--) {
// 		temp = s[i];
// 		s[i] = s[j];
// 		s[j] = temp;
// 	}
// 	return s;
// };
// console.log(reverseString(["h", "e", "l", "l", "o"]));

// // 136. Single Number
// // USING DICT
// var singleNumber = function (nums) {
// 	var dict = {}
// 	for (var i = 0; i < nums.length; i++) {
// 		if (dict[nums[i]] == null) {
// 			dict[nums[i]] = 1;
// 		} else {
// 			dict[nums[i]]++;
// 		}
// 	}
// 	for (var i in dict) {
// 		if (dict[i] == 1) {
// 			return i;
// 		}
// 	}
// 	return null;
// };
// console.log(singleNumber([2, 2, 1]))
// console.log(singleNumber([4, 1, 2, 1, 2]))

// // USING SORT
// var singleNumber = function (nums) {
// 	nums.sort();
// 	for (var i = 0; i < nums.length; i += 2) {
// 		if (nums[i] != nums[i + 1]) {
// 			return nums[i];
// 		}
// 	}
// };
// console.log(singleNumber([2, 2, 1]))
// console.log(singleNumber([4, 1, 2, 1, 2]))

// USING XOR
// var singleNumber = function(nums) {
//     let num = nums[0];
//     for (let i = 1, length=nums.length; i<length; i++) {
//         num ^= nums[i];
//     }
//     return num;
// };
// console.log(singleNumber([2, 2, 1]))
// console.log(singleNumber([4, 1, 2, 1, 2]))

// var fizzBuzz = function (n) {
// 	for (var i = 1; i <= n; i++) {
// 		if (i % 15 == 0) {
// 			console.log("FizzBuzz");
// 		}
// 		else if (i % 3 == 0) {
// 			console.log("Fizz");
// 		}
// 		else if (i % 5 == 0) {
// 			console.log("Buzz");
// 		} else {
// 			console.log(i);
// 		}
// 	}
// };
// fizzBuzz(15);

// var moveZeroes = function (nums) {
// 	let start = 0;
//  let length = nums.length;
// 	for (let i = 0; i < length; i++) {
// 		let num = nums[i];
// 		if (num !== 0) {
// 			nums[start] = num;
// 			start++;
// 		}
// 	}
// 	while (start < nums.length) {
// 		nums[start] = 0;
// 		start++;
// 	}
// 	return nums;
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]));

// var moveZeroes = function (nums) {
// 	let start = 0;
//  let length = nums.length;
// 	for (let i = 0; i < length; i++) {
// 		let num = nums[i];
// 		if (num !== 0) {
// 			nums[start] = num;
// 			start++;
// 		}
// 	}
// 	for (let j = start; j < nums.length; j++) {
// 		nums[j] = 0;
// 	}
// 	return nums;
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]));

// var moveZeroes = function (nums) {
// 	let counter = 0;
// 	for (let i = 0; i < nums.length - counter; i++) {
// 		if (nums[i] === 0) {
// 			nums.splice(i, 1);
// 			nums.push(0);
// 			counter++
// 			i--;
// 		}
// 	}
// 	return nums;
// };
// console.log(moveZeroes([0, 1, 0, 3, 12]));

// // using set instead of dictionary for dict2
// var uniqueMorseRepresentations = function (words) {
// 	let dict = {};
// 	let letters = "abcdefghijklmnopqrstuvwxyz";
// 	let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
// 	for (var i = 0; i < morse.length; i++) {
// 		dict[letters[i]] = morse[i];
// 	}
// 	let dict2 = new Set();
// 	for (var j = 0; j < words.length; j++) {
// 		let result = "";
// 		for (var i = 0; i < words[j].length; i++) {
// 			result += dict[words[j][i]];
// 		}
// 		dict2.add(result)
// 	}
// 	return dict2.size;
// };
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

// // using indexOf instead of creating dict
// var uniqueMorseRepresentations = function (words) {
// 	let letters = "abcdefghijklmnopqrstuvwxyz";
// 	let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
// 	let dict2 = new Set();
// 	for (var j = 0; j < words.length; j++) {
// 		let result = "";
// 		for (var i = 0; i < words[j].length; i++) {
// 			result += morse[letters.indexOf(words[j][i])];
// 		}
// 		dict2.add(result)
// 	}
// 	return dict2.size;
// };
// console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

// var sortArrayByParity = function (A) {
// 	let counter = 0;
// 	for (let i = 0; i < A.length - counter; i++) {
// 		if (A[i] % 2 != 0) {
// 			A.push(A[i]);
// 			A.splice(i, 1)
// 			counter++
// 			i--
// 		}
// 	}
// 	return A;
// };
// console.log(sortArrayByParity([3, 1, 2, 4]));

// var sortArrayByParity = function (A) {
// 	let even = A.filter(i => i % 2 === 0);
// 	let odd = A.filter(i => i % 2 === 1);
// 	return even.concat(odd);
// };
// console.log(sortArrayByParity([3, 1, 2, 4]));

// var sortArrayByParity = function (A) {
// 	let even = [];
// 	let odd = [];

// 	for (let i = 0; i < A.length; i++) {
// 		if (A[i] % 2 === 0) {
// 			even.push(A[i])
// 		} else {
// 			odd.push(A[i])
// 		}
// 	}
// 	return even.concat(odd)
// }
// console.log(sortArrayByParity([3, 1, 2, 4]));

// // max depth of binary tree
// var maxDepth = function (root) {
// 	if (root === null) {
// 		return 0;
// 	}
// 	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

// var repeatedNTimes = function (A) {
// 	var dict = {};
// 	for (var i = 0; i < A.length; i++) {
// 		if (dict[A[i]]) {
// 			return A[i];
// 		} else {
// 			dict[A[i]] = true;
// 		}
// 	}
// };
// console.log(repeatedNTimes([1, 2, 3, 3]));
// console.log(repeatedNTimes([2, 1, 2, 5, 3, 2]));
// console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4]));

// // delete node from linked list
// var deleteNode = function (node) {
// 	node.val = node.next.val;
// 	node.next = node.next.next;
// };

// var romanToInt = function (s) {
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
// 	for (let i = s.length - 1; i >= 0; i--) {
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

// var romanToInt = function (s) {
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
// 	for (let i = 0; i < s.length; i++) {
// 		if (dict[s[i]] < dict[s[i + 1]]) {
// 			sum += (dict[s[i + 1]] - dict[s[i]]);
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

// var majorityElement = function (nums) {
// 	const dict = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (dict[nums[i]]) {
// 			dict[nums[i]]++;
// 		} else {
// 			dict[nums[i]] = 1;
// 		}
// 		if (dict[nums[i]] > (nums.length / 2)) {
// 			return nums[i];
// 		}
// 	}
// };
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

// var majorityElement = function (nums) {
// 	let major = nums[0];
// 	let count = 1;
// 	for (let i = 1; i < nums.length; i++) {
// 		if (major === nums[i]) {
// 			count++;
// 		} else {
// 			count--;
// 		}
// 		if (count === 0) {
// 			major = nums[i];
// 			count = 1;
// 		}
// 	}
// 	return major;
// }
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

// var getSum = function (a, b) {
// 	while (b !== 0) {
// 		let carry = a & b;
// 		a = a ^ b;
// 		b = carry << 1;
// 	}
// 	return a;
// };
// console.log(getSum(1, 2))

// var isAnagram = function (s, t) {
// 	if (s.length !== t.length) {
// 		return false;
// 	}
// 	const dict = {};
// 	for (let i = 0; i < s.length; i++) {
// 		if (dict[s[i]]) {
// 			dict[s[i]]++;
// 		} else {
// 			dict[s[i]] = 1;
// 		}
// 	}
// 	for (let i = 0; i < s.length; i++) {
// 		if (!dict[t[i]] || dict[t[i]] < 0) {
// 			return false;
// 		} else {
// 			dict[t[i]]--;
// 		}
// 	}
// 	return true;
// };
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"))

// var isAnagram = function (s, t) {
// 	if (s.length !== t.length) return false;
// 	let counters = new Array(26).fill(0);

// 	for (let i = 0; i < s.length; i++) {
// 		counters[s.charCodeAt(i) - 97]++;
// 		counters[t.charCodeAt(i) - 97]--;
// 	}
// 	for (let i = 0; i < counters.length; i++) {
// 		if (counters[i]) return false;
// 	}
// 	return true;
// }
// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("asdfrat", "asdfcar"))

// // buy and sell stock 1
// var maxProfit = function (prices) {
// 	let max = 0;
// 	for (let i = 0; i < prices.length; i++) {
// 		for (let j = i + 1; j < prices.length; j++) {
// 			let profit = prices[j] - prices[i];
// 			if (profit > max) {
// 				max = profit;
// 			}
// 		}
// 	}
// 	return max;
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// var maxProfit = function (prices) {
// 	let max = 0;
// 	let min = Infinity;

// 	for (let i = 0; i < prices.length; i++) {
// 		if (prices[i] < min)
// 			min = prices[i];
// 		else if (prices[i] - min > max) {
// 			max = prices[i] - min;
// 		}
// 	}
// 	return max;
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// // buy and sell stock 2
// var maxProfit = function (prices) {
// 	let total = 0;
// 	for (let i = 0; i < prices.length - 1; i++) {
// 		if (prices[i + 1] > prices[i]) {
// 			total += prices[i + 1] - prices[i];
// 		}
// 	}
// 	return total;
// };
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([1, 2, 3, 4, 5]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

// // excel sheet column
// var titleToNumber = function (s) {
// 	const dict = {
// 		A: 1,
// 		B: 2,
// 		C: 3,
// 		D: 4,
// 		E: 5,
// 		F: 6,
// 		G: 7,
// 		H: 8,
// 		I: 9,
// 		J: 10,
// 		K: 11,
// 		L: 12,
// 		M: 13,
// 		N: 14,
// 		O: 15,
// 		P: 16,
// 		Q: 17,
// 		R: 18,
// 		S: 19,
// 		T: 20,
// 		U: 21,
// 		V: 22,
// 		W: 23,
// 		X: 24,
// 		Y: 25,
// 		Z: 26
// 	}
// 	let result = 0;
// 	for (let i = 0; i < s.length; i++) {
// 		result = result * 26 + dict[s[i]];
// 	}
// 	return result;
// };
// console.log(titleToNumber('A'));
// console.log(titleToNumber('AB'));
// console.log(titleToNumber('ZY'));

// var titleToNumber = function (s) {
// 	let result = 0;
// 	for (let i = 0; i < s.length; i++) {
// 		result = (result * 26) + s[i].charCodeAt(0) - 64;
// 	}
// 	return result;
// };
// console.log(titleToNumber('A'));
// console.log(titleToNumber('AB'));
// console.log(titleToNumber('ZY'));

// var containsDuplicate = function (nums) {
// 	const dict = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (dict[nums[i]]) {
// 			return true;
// 		} else {
// 			dict[nums[i]] = 1;
// 		}
// 	}
// 	return false;
// };
// console.log(containsDuplicate([1, 2, 3, 1]));

// var containsDuplicate = function (nums) {
// 	let dict = new Set(nums);
// 	return dict.size !== nums.length;
// };
// console.log(containsDuplicate([1, 2, 3, 1]));

// var firstUniqChar = function (s) {
// 	const dict = {};
// 	for (var i = 0; i < s.length; i++) {
// 		if (dict[s[i]]) {
// 			dict[s[i]]++;
// 		} else {
// 			dict[s[i]] = 1;
// 		}
// 	}
// 	for (var j = 0; j < s.length; j++) {
// 		if (dict[s[j]] === 1) {
// 			return j;
// 		}
// 	}
// 	return -1;
// };
// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));

// var firstUniqChar = function (s) {
// 	for (var i = 0; i < s.length; i++) {
// 		if (s.indexOf(s[i]) === s.lastIndexOf(s[i]))
// 			return i;
// 	}
// 	return -1;
// }
// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));

// var missingNumber = function (nums) {
// 	let sum = 0;
// 	let eSum = nums.length;
// 	for (let i = 0; i < nums.length; i++) {
// 		sum += nums[i];
// 		eSum += i;
// 	}
// 	return eSum - sum;
// };
// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// // intersection of 2 arrays 2
// var intersect = function (nums1, nums2) {
// 	const dict = {};
// 	let result = [];
// 	for (var i = 0; i < nums1.length; i++) {
// 		if (dict[nums1[i]]) {
// 			dict[nums1[i]]++;
// 		} else {
// 			dict[nums1[i]] = 1
// 		}
// 	}
// 	for (var j = 0; j < nums2.length; j++) {
// 		if (dict[nums2[j]] > 0) {
// 			result.push(nums2[j]);
// 			dict[nums2[j]]--;
// 		}
// 	}
// 	return result;
// };
// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))

// var removeDuplicates = function (nums) {
// 	for (var i = 0; i < nums.length; i++) {
// 		if (nums[i] === nums[i + 1]) {
// 			nums.splice(i, 1)
// 			i--;
// 		}
// 	}
// 	return nums.length;
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// var removeDuplicates = function (nums) {
// 	if (nums.length === 0) {
// 		return 0;
// 	}
// 	let i = 0;
// 	for (let j = 1; j < nums.length; j++) {
// 		if (nums[i] !== nums[j]) {
// 			i++;
// 			nums[i] = nums[j];
// 		}
// 	}
// 	return i + 1;
// };

// // rotate array
// var rotate = function (nums, k) {
// 	for (let i = 0; i < k; i++) {
// 		nums.unshift(nums.pop());
// 	}
// 	return nums;
// };
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// // pascalls triangle
// var generate = function (numRows) {
// 	if (numRows === 0) {
// 		return [];
// 	}
// 	const result = [[1]];
// 	for (let i = 1; i < numRows; i++) {
// 		result[i] = [];
// 		for (let j = 0; j < i + 1; j++) {
// 			result[i][j] = (result[i - 1][j] || 0) + (result[i - 1][j - 1] || 0);
// 		}
// 	}
// 	return result;
// };
// console.log(generate(5))

// var generate = function (numRows) {
// 	if (numRows === 0) {
// 		return [];
// 	}
// 	let triangle = [[1]];
// 	for (let i = 1; i < numRows; i++) {
// 		let newRow = [1];
// 		let prevRow = triangle[i - 1];
// 		for (let j = 1; j < i; j++) {
// 			newRow.push(prevRow[j - 1] + prevRow[j]);
// 		}
// 		newRow.push(1);
// 		triangle.push(newRow);
// 	}
// 	return triangle;
// };
// console.log(generate(5))

// var isHappy = function (n) {
// 	function split(num) {
// 		let str = num.toString().split("");
// 		let total = 0;
// 		for (let i = 0; i < str.length; i++) {
// 			let number = parseInt(str[i]);
// 			total += number * number;
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

// var isHappy = function (n) {
// 	while (n > 6) {
// 		let next = 0;
// 		while (n) {
// 			next += (n % 10) * (n % 10);
// 			n = ~~(n / 10);
// 		}
// 		n = next;
// 	}
// 	return n == 1;
// };

// // Similar to fibonacci
// var climbStairs = function (n) {
// 	if (n < 3) {
// 		return n;
// 	}
// 	let oneStepBefore = 2;
// 	let twoStepBefore = 1;
// 	let targetStep = 0;
// 	for (var i = 2; i < n; i++) {
// 		targetStep = oneStepBefore + twoStepBefore;
// 		twoStepBefore = oneStepBefore;
// 		oneStepBefore = targetStep;
// 	}
// 	return targetStep;
// };
// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));

// var climbStairs = function (n) {
// 	if (n <= 3) {
// 		return n;
// 	}
// 	let arr = [1, 2, 3];
// 	for (var i = 3; i < n; i++) {
// 		arr[i] = arr[i - 1] + arr[i - 2];
// 	}
// 	return arr[n - 1];
// };
// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));

// var maxSubArray = function (nums) {
// 	let prev = 0;
// 	let max = -Infinity;
// 	for (var i = 0; i < nums.length; i++) {
// 		if (prev > 0) {
// 			prev += nums[i];
// 		} else {
// 			prev = nums[i];
// 		}
// 		if (max < prev) {
// 			max = prev;
// 		}
// 	}
// 	return max;
// };
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// var maxSubArray = function (nums) {
// 	let current = 0;
// 	let max = nums[0];
// 	for (var i = 0; i < nums.length; i++) {
// 		current += nums[i];
// 		if (current < 0 || current < nums[i]) {
// 			current = nums[i];
// 		}
// 		if (current > max) {
// 			max = current;
// 		}
// 	}
// 	return max;
// };
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// var hammingWeight = function (n) {
// 	let count = 0;
// 	let str = n.toString(2);

// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] == "1") {
// 			count++;
// 		}
// 	}
// 	return count;
// };

// console.log(hammingWeight(00000000000000000000000000001011));
// console.log(hammingWeight(00000000000000000000000010000000));
// console.log(hammingWeight(11111111111111111111111111111101));


// var hammingWeight = function (n) {
// 	return n.toString(2).replace(/0/g, '').length
// };
// console.log(hammingWeight(00000000000000000000000000001011));
// console.log(hammingWeight(00000000000000000000000010000000));
// console.log(hammingWeight(11111111111111111111111111111101));

// var isPowerOfThree = function (n) {
// 	while (n > 1) {
// 		n = n / 3;
// 	}
// 	if (n === 1) {
// 		return true;
// 	}
// 	return false;
// };
// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(243));
// console.log(isPowerOfThree(59049));

// var isPowerOfThree = function (n) {
// 	console.log(Math.log10(n))
// 	let res = Math.log10(n) / Math.log10(3);
// 	if (Number.isInteger(res)) {
// 		return true;
// 	}
// 	return false;
// };
// console.log(isPowerOfThree(27));
// console.log(isPowerOfThree(243));
// console.log(isPowerOfThree(59049));

// var plusOne = function (digits) {
// 	for (var i = digits.length - 1; i >= 0; i--) {
// 		digits[i]++;
// 		if (digits[i] > 9) {
// 			digits[i] = 0;
// 			if (i === 0) {
// 				digits.unshift(1)
// 			}
// 		} else {
// 			break;
// 		}
// 	}
// 	return digits;
// };
// console.log(plusOne([1, 2, 3, 4]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// console.log(plusOne([1, 1, 9]));


// var plusOne = function (digits) {
// 	for (let i = digits.length - 1; i >= 0; i--) {
// 		if (digits[i] === 9) {
// 			digits[i] = 0;
// 		}
// 		else {
// 			digits[i]++;
// 			return digits;
// 		}
// 	}
// 	if (digits[0] == 0) {
// 		digits.unshift(1);
// 	}
// 	return digits;
// };
// console.log(plusOne([1, 2, 3, 4]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// console.log(plusOne([9]));

// // doesn't work for big numbers
// var trailingZeroes = function (n) {
// 	if (n === 0 || n === 1) {
// 		return 0;
// 	}
// 	for (let i = n - 1; i >= 1; i--) {
// 		n *= i;
// 	}
// 	let str = n.toString();
// 	let count = 0;
// 	for (let i = str.length - 1; i > 1; i--) {
// 		if (str[i] === "0") {
// 			count++
// 		} else {
// 			break;
// 		}
// 	}
// 	return count;
// };
// console.log(trailingZeroes(3));
// console.log(trailingZeroes(5));
// console.log(trailingZeroes(0));
// console.log(trailingZeroes(7));
// console.log(trailingZeroes(30));

// var trailingZeroes = function (n) {
// 	var x = 5;
// 	var zeros = 0;
// 	var count;
// 	while (x <= n) {
// 		count = n / x >> 0;
// 		if (count > 0) {
// 			zeros += count;
// 		}
// 		x *= 5;
// 	}

// 	return zeros;
// };
// console.log(trailingZeroes(3));
// console.log(trailingZeroes(5));
// console.log(trailingZeroes(0));
// console.log(trailingZeroes(7));
// console.log(trailingZeroes(30));

// var trailingZeroes = function (n) {
// 	if (n < 5) {
// 		return 0;
// 	}
// 	return Math.floor(n / 5) + trailingZeroes(n / 5);
// };
// console.log(trailingZeroes(3));
// console.log(trailingZeroes(5));
// console.log(trailingZeroes(0));
// console.log(trailingZeroes(7));
// console.log(trailingZeroes(30));

// var compareVersion = function (version1, version2) {
// 	let v1Split = version1.split(".");
// 	let v2Split = version2.split(".");
// 	let v1Num = 0;
// 	let v2Num = 0;
// 	let max = Math.max(v1Split.length, v2Split.length)
// 	for (let i = 0; i < max; i++) {
// 		if (v1Split[i] != null) {
// 			v1Num = parseInt(v1Split[i]);
// 		} else {
// 			v1Num = null;
// 		}
// 		if (v2Split[i] != null) {
// 			v2Num = parseInt(v2Split[i]);
// 		} else {
// 			v2Num = null;
// 		}
// 		if (v1Num > v2Num) {
// 			return 1;
// 		}
// 		if (v1Num < v2Num) {
// 			return -1;
// 		}
// 	}
// 	return 0;
// };
// console.log(compareVersion("0.1", "1.1"));
// console.log(compareVersion("1.01", "1"));
// console.log(compareVersion("7.5.2.4", "7.5.3"));
// console.log(compareVersion("1.01", "1.001"));
// console.log(compareVersion("1.0", "1.0.0"));

// // out limit for big strings
// var isValid = function (s) {
// 	const stack = [];
// 	for (var i = 0; i < s.length; i++) {
// 		if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
// 			stack.push(s[i]);
// 		}
// 		else if (s[i] === "]") {
// 			if (stack.pop() !== "[") {
// 				return false
// 			}
// 		}
// 		else if (s[i] === ")") {
// 			if (stack.pop() !== "(") {
// 				return false
// 			}
// 		}
// 		else if (s[i] === "}") {
// 			if (stack.pop() !== "{") {
// 				return false
// 			}
// 		}
// 	}
// 	return stack.length == 0;
// };
// console.log(isValid("()"))
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
// console.log(isValid("{[]}"))

// function isValid(str) {
// 	const stack = [];
// 	for (let char of str) {
// 		if (char === '(') {
// 			stack.push(')');
// 		} else if (char === '[') {
// 			stack.push(']');
// 		} else if (char === '{') {
// 			stack.push('}');
// 		} else if (char !== stack.pop()) {
// 			return false;
// 		}
// 	}
// 	return stack.length === 0;
// };
// console.log(isValid("()"))
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
// console.log(isValid("{[]}"))

// var productExceptSelf = function (nums) {
// 	const arr = [];
// 	let prod = 1;
// 	for (let i = 0; i < nums.length; i++) {
// 		arr[i] = prod;
// 		prod *= nums[i];
//     }
// 	prod = 1;
// 	for (let j = nums.length - 1; j >= 0; j--) {
// 		arr[j] *= prod;
// 		prod *= nums[j];
// 	}
// 	return arr;
// };
// console.log(productExceptSelf([1, 2, 3, 4]))

// var productExceptSelf = function (nums) {
// 	let result = [];
// 	let left = nums[0];
// 	let right = nums[nums.length - 1];

// 	for (let i = 0; i < nums.length; i++) {
// 		result[i] = 1;
// 	}

// 	for (let i = 1; i < nums.length; i++) {
// 		result[i] *= left;
// 		result[nums.length - 1 - i] *= right;

// 		left *= nums[i];
// 		right *= nums[nums.length - 1 - i];
// 	}

// 	return result;
// };
// console.log(productExceptSelf([1, 2, 3, 4]))

// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) {
//         return "";
//     }
//     let prefix = strs[0];
//     for (let i=1; i<strs.length; i++) {
//         for (let j=0; j<prefix.length; j++) {
//             if (strs[i][j] !== prefix[j]) {
//                 prefix = strs[0].slice(0,j)
//                 break;
//             }
//         }
//     }
//     return prefix;
// };
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix([]))
// console.log(longestCommonPrefix(["aa", "a"]))

// // Brute force
// var strStr = function (haystack, needle) {
// 	if (!needle) {
// 		return 0;
// 	}
// 	for (let i = 0; i < haystack.length - needle.length + 1; i++) {
// 		if (haystack.slice(i, i + needle.length) === needle) {
// 			return i;
// 		}
// 	}
// 	return -1;
// };
// console.log(strStr("hello", "ll"));
// console.log(strStr("aaaaa", "bba"));

// var strStr = function (haystack, needle) {
// 	if (needle === '') return 0;
// 	const split = haystack.split(needle);
// 	// if the needle exists it splits the haystack and the length would be > 1
// 	if (split.length > 1) {
// 		return split[0].length;
// 	} else {
// 		return -1;
// 	}
// };
// console.log(strStr("hello", "ll"));
// console.log(strStr("aaaaa", "bba"));

// var mySqrt = function (x) {
// 	return Math.trunc(Math.sqrt(x));
// };
// console.log(mySqrt(8));
// console.log(mySqrt(4));

// var isPalindrome = function (s) {
// 	s = s.replace(/\W/g, '').toLowerCase().split(" ").join("");
// 	for (let i = 0; i < s.length / 2; i++) {
// 		if (s[i] !== s[s.length - i - 1]) {
// 			return false
// 		}
// 	}
// 	return true;
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"))

// var isPalindrome = function (s) {
// 	// takes out spaces
// 	s = s.replace(/\s/g, '');
// 	// takes out everything thats not alphanumeric
// 	s = s.replace(/[^0-9a-z\s]/gi, '');
// 	s = s.toLowerCase();
// 	for (let i = 0; i < s.length / 2; i++) {
// 		if (!(s[i] === s[s.length - 1 - i])) {
// 			return false;
// 		}
// 	}
// 	return true
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"))

// function threeSum(nums) {
// 	nums.sort(function (a, b) {
// 		return a - b
// 	})
// 	var results = []
// 	for (let i = 0; i < nums.length - 2; i++) {
// 		if (i == 0 || nums[i] > nums[i - 1]) {
// 			let left = i + 1
// 			let right = nums.length - 1
// 			while (left < right) {
// 				if (nums[i] + nums[left] + nums[right] == 0) {
// 					results.push([nums[i], nums[left], nums[right]])
// 				}
// 				if (nums[i] + nums[left] + nums[right] < 0) {
// 					let currLeft = left
// 					while (nums[left] == nums[currLeft]) {
// 						left++
// 					}
// 				} else {
// 					let currRight = right
// 					while (nums[right] == nums[currRight]) {
// 						right--
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return results
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// function threeSum(arr) {
//     let results = [];
//     if (arr.length<3) {
//         return results;
//     }
//     arr.sort(function (a, b) {
//         return a-b;
//     });
//     for (let i=0; i<arr.length-2; i++) {
//         if (arr[i] > 0) {
//             return results;
//         }
//         if (i>0 && arr[i] === arr[i-1]) {
//             continue;
//         }
//         for (let left=i+1, right=arr.length-1; left<right;) {
//             if (arr[i] + arr[left] + arr[right] === 0) {
//                 results.push([arr[i], arr[left], arr[right]]);
//                 left++;
//                 right--;
//                 while (left<right && arr[left] === arr[left-1]) {
//                     left++;
//                 }
//                 while (left<right && arr[right] === arr[right+1]) {
//                     right--;
//                 }
//             } else if (arr[i] + arr[left] + arr[right] > 0) {
//                 right--;
//             } else {
//                 left++;
//             }
//           }
//     }
//     return results;
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// function threeSum(arr) {
//     let results = [];
//     if (arr.length < 3) {
//         return results;
//     }
//     arr.sort(function (a, b) {
//         return a - b;
//     });
//     for (let i = 0; i < arr.length - 2; i++) {
//         if (arr[i] > 0) {
//             return results;
//         }
//         if (i > 0 && arr[i] === arr[i - 1]) {
//             continue;
//         }
//         let left = i + 1;
//         let right = arr.length - 1;
//         while (left < right) {
//             if (arr[i] + arr[left] + arr[right] === 0) {
//                 results.push([arr[i], arr[left], arr[right]]);
//                 left++;
//                 right--;
//                 while (left < right && arr[left] === arr[left - 1]) {
//                     left++;
//                 }
//                 while (left < right && arr[right] === arr[right + 1]) {
//                     right--;
//                 }
//             } else if (arr[i] + arr[left] + arr[right] > 0) {
//                 right--;
//             } else {
//                 left++;
//             }
//         }
//     }
//     return results;
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));


// var flipAndInvertImage = function(A) {
//     for (let i=0; i<A.length; i++) {
//         A[i].reverse();
//         for (let j=0; j<A[i].length; j++) {
//             if (A[i][j] === 1) {
//                 A[i][j] = 0;
//             } else {
//                 A[i][j] = 1
//             }
//         }
//     }
//     return A;
// };
// console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));
// console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]));

// // Robot return to origin
// var judgeCircle = function(moves) {
//     let x=0;
//     let y=0;
//     for (let i=0; i<moves.length; i++) {
//         if (moves[i] === "U") {
//             y++;
//         } else if (moves[i] === "D") {
//             y--;
//         } else if (moves[i] === "L") {
//             x--;
//         } else {
//             x++;
//         }
//     }
//     if (x === 0 && y === 0) {
//         return true;
//     }
//     return false;
// };
// console.log(judgeCircle("UD"));

// var diStringMatch = function(S) {
//     let min=0;
//     let max=S.length;
//     let arr = [];
//     for (let i=0; i<S.length+1; i++) {
//         if (S[i] === "I") {
//             arr.push(min);
//             min++;
//         } else {
//             arr.push(max);
//             max--;
//         }
//     }
//     return arr;
// };
// console.log(diStringMatch("IDID"));
// console.log(diStringMatch("III"));
// console.log(diStringMatch("DDI"));

// var peakIndexInMountainArray = function(A) {
//     let peak=0;
//     let idx=0;
//     for (let i=0; i<A.length; i++) {
//         if (A[i] > peak) {
//             peak = A[i];
//             idx = i;
//         }
//     }
//     return idx;
// };
// console.log(peakIndexInMountainArray([0,1,0]));
// console.log(peakIndexInMountainArray([0,2,1,0]));

// var fib = function(N) {
//     if (N<2) {
//         return N;
//     }
//     let arr =[0,1];
//     for (let i=2; i<N+1; i++) {
//         arr[i] = (arr[i-1] + arr[i-2])
//     }
//     return arr[arr.length-1];
// };
// console.log(fib(4));

// var fib = function(N) {
//     if (N<2) {
//         return N;
//     }
//     return (fib(N-1) + fib(N-2));
// };
// console.log(fib(4));

// // 922. Sort Array By Parity II
// NEW ARRAY
// var sortArrayByParityII = function(A) {
//     let odd = 1;
//     let even = 0;
//     const arr=[];
//     for (let i=0; i<A.length; i++) {
//         if (A[i] % 2 === 0) {
//             arr[even] = A[i];
//             even += 2;
//         } else {
//             arr[odd] = A[i];
//             odd += 2;
//         }
//     }
//     return arr;
// };
// console.log(sortArrayByParityII([4,2,5,7]));

// IN PLACE
// var sortArrayByParityII = function (A) {
//     let j = 1;
//     let temp = 0;
//     for (let i=0, len=A.length ; i<len ; i+=2) {
//         if (A[i] % 2 === 1) {
//             while (A[j] % 2 === 1) {
//                 j += 2;
//             }
//             temp = A[i];
//             A[i] = A[j];
//             A[j] = temp;
//         }
//     }
//     return A;
// };
// console.log(sortArrayByParityII([4, 2, 5, 7]));

// var topKFrequent = function(nums, k) {
//     const dict={};
//     for (let i=0; i<nums.length; i++) {
//         if (dict[nums[i]]) {
//             dict[nums[i]]++;
//         } else {
//             dict[nums[i]] = 1;
//         }
//     }
//     const dict2 = Object.keys(dict).sort(function(a,b){return dict[b]-dict[a]}).slice(0,k);
//     const result=[];
//     for (let i=0; i<dict2.length; i++) {
//         result.push(parseInt(dict2[i]))
//     }
//     return result;
// }
// console.log(topKFrequent([5,5,4,1,1,1,2,2,3], 2));

// var reverseOnlyLetters = function(S) {
//     let arr = S.split("");
//     let i = 0;
//     let j = arr.length-1;
//     while (i < j) {
//         if(/^[a-zA-Z]+$/.test(arr[i]) && /^[a-zA-Z]+$/.test(arr[j])) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             i++;
//             j--;
//         } else if (!/^[a-zA-Z]+$/.test(arr[i])) {
//             i++;
//         } else {
//             j--
//         }
//     }
//     let result = arr.join("");
//     return result;
// };
// console.log(reverseOnlyLetters("ab-cd"));
// console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
// console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));

// var findComplement = function(num) {
//     let reverse = num.toString(2).split("")
//     for (let i=0; i<reverse.length; i++) {
//         if (reverse[i] == "1") {
//             reverse[i] = "0";
//         } else {
//             reverse[i] = "1";
//         }
//     }
//     let number = parseInt(reverse.join(""), 2)
//     return number;
// };
// console.log(findComplement(5));

// var findComplement = function(num) {
//     let reverse = num.toString(2);
//     let result = "";
//     for (let i=0; i<reverse.length; i++) {
//         if (reverse[i] == "1") {
//             result += 0;
//         } else {
//             result += 1;
//         }
//     }
//     return parseInt(result,2);
// };
// console.log(findComplement(5));

// var canWinNim = function(n) {
//     return n % 4 !== 0;
// };
// console.log(canWinNim(32));
// console.log(canWinNim(33));

// var findWords = function(words) {
//     let row1 = ["q","w","e","r","t","y","u","i","o","p","Q","W","E","R","T","Y","U","I","O","P"];
//     let row2 = ['a','s','d','f','g','h','j','k','l','A','S','D','F','G','H','J','K','L'];
//     let row3 = ['z','x','c','v','b','n','m','Z','X','C','V','B','N','M'];
//     let result = [];
//     for (let i=0; i<words.length; i++) {
//         let boolean = true
//         let check =[]; 
//         if (row1.includes(words[i][0])) {
//             check = row1;
//         } else if (row2.includes(words[i][0])) {
//             check = row2;
//         } else {
//             check = row3;
//         }
//         for (let j=1; j<words[i].length; j++) {
//             if (!check.includes(words[i][j])) {
//                 boolean = false
//             } 
//         }
//         if (boolean === true) {
//             result.push(words[i]);
//         }
//     }
//     return result;
// };
// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

// var islandPerimeter = function(grid) {
//     let perimeter = 0;
//     for (let i=0; i<grid.length; i++) {
//         for (let j=0; j<grid[i].length; j++) {
//             if (grid[i][j] === 1) {
//                 if (j-1<0 || grid[i][j-1] !== 1) {
//                     perimeter++;
//                 }
//                 if (i-1<0 || grid[i-1][j] !== 1) {
//                     perimeter++;
//                 }
//                 if (j+1>=grid[i].length || grid[i][j+1] !== 1) {
//                     perimeter++;
//                 }
//                 if (i+1>=grid.length || grid[i+1][j] !== 1) {
//                     perimeter++;
//                 }
//             }
//         }
//     }
//     return perimeter;
// };
// console.log(islandPerimeter([
//     [0,1,0,0],
//     [1,1,1,0],
//     [0,1,0,0],
//     [1,1,0,0]
// ]));

// var isToeplitzMatrix = function(matrix) {
//     for (let i=0; i<matrix.length; i++) {
//         for (let j=0; j<matrix[0].length; j++) {
//             if (i+1 < matrix.length && j+1 < matrix[0].length && matrix[i+1][j+1] !== matrix[i][j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };
// console.log(isToeplitzMatrix([
//     [1,2,3,4],
//     [5,1,2,3],
//     [9,5,1,2]
// ]))

// var isToeplitzMatrix = function(matrix) {
//     for (let i=0; i<matrix.length-1; i++) {
//         for (let j=0; j<matrix[0].length-1; j++) {
//             if (matrix[i+1][j+1] !== matrix[i][j]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };
// console.log(isToeplitzMatrix([
//     [1,2,3,4],
//     [5,1,2,3],
//     [9,5,1,2]
// ]))

// // reverse words in string 3
// var reverseWords = function(s) {
//     let res = ""
//     let split = s.split(" ");
//     for (let i=0; i<split.length; i++) {
//         let clean = split[i].split("").reverse().join("");
//         res += " " + clean;
//     }
//     return res.substring(1);
// };
// console.log(reverseWords("Let's take LeetCode contest"))

// var numberOfLines = function(widths, S) {
//     let count = 1;
//     let length = 0;
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"
//     for (let i=0; i<S.length; i++) {
//         let letter = widths[alphabet.indexOf(S[i])];
//         if (length + letter > 100) {
//             count++;
//             length = 0;
//         }
//         length += letter;
//     }
//     return [count, length];
// };
// console.log(numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz"));

// // times out
// var reversePairs = function(nums) {
//     let count = 0;
//     for (let i=0; i<nums.length; i++) {
//         for (let j=0; j<nums.length; j++) {
//             if (i<j && nums[i] > 2*nums[j]) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };
// console.log(reversePairs([1,3,2,3,1]))
// console.log(reversePairs([2,4,3,5,1]))

// // not working
// var reversePairs = function(nums) {
//     function merge(nums, start, mid, end) {
//         let n1 = (mid - start + 1);
//         let n2 = (end - mid);
//         let L = [];
//         let R = [];
//         for (let i=0; i<n1; i++) {
//             L[i] = nums[start + i];
//         }
//         for (let j=0; j<n2; j++) {
//             R[j] = nums[mid + 1 + j];
//         }
//         for (let i=0, j=0, k=start; k<=end; k++) {
//             if (j>=n2 || (i<n1 && L[i] <= R[j])) {
//                 nums[k] = L[i++];
//             } else {
//                 nums[k] = R[j++];
//             }
//         }
//     }
//     function mergeSort(nums, start, end) {
//         if (start >= end) {
//             return 0;
//         }
//         let mid = start + (end - start)/2;
//         let count = mergeSort(nums, start, mid) + mergeSort(nums, mid+1, end);
//         for (let i=start, j=mid+1; i<=mid; i++) {
//             while (j<=end && nums[i]/2.0 > nums[j]) {
//                 j++;
//                 count += j-(mid+1);
//             }
//         }
//         merge(nums, start, mid, end);        
//         return count;
//     }
//     return mergeSort(nums, 0, nums.length-1);
// };
// console.log(reversePairs([1,3,2,3,1]));
// console.log(reversePairs([2,4,3,5,1]))

// var uncommonFromSentences = function(A, B) {
//     let a = A.split(" ");
//     let b = B.split(" ");
//     let dict = {};
//     let res =[];
//     for (let i=0; i<a.length; i++) {
//         if (dict[a[i]]) {
//             dict[a[i]]++
//         } else {
//             dict[a[i]] = 1;
//         }
//     };
//     for (let i=0; i<b.length; i++) {
//         if (dict[b[i]]) {
//             dict[b[i]]++
//         } else {
//             dict[b[i]] = 1;
//         }
//     };
//     for (let key in dict) {
//         if (dict[key] === 1) {
//             res.push(key);
//         }
//     }
//     return res;
// };
// let A = "this apple is sweet";
// let B = "this apple is sour";
// console.log(uncommonFromSentences(A,B));

// var uncommonFromSentences = function(A, B) {
//     let a = (A + ' ' + B).split(" ");
//     let dict = {};
//     let res =[];
//     for (let i=0; i<a.length; i++) {
//         if (dict[a[i]]) {
//             dict[a[i]]++
//         } else {
//             dict[a[i]] = 1;
//         }
//     };
//     for (let key in dict) {
//         if (dict[key] === 1) {
//             res.push(key);
//         }
//     }
//     return res;
// };
// let A = "this apple is sweet";
// let B = "this apple is sour";
// console.log(uncommonFromSentences(A,B));

// var arrayPairSum = function(nums) {
//     let result = 0;
//     nums = nums.sort(function (a,b) {return a-b});
//     console.log(nums)
//     for (let i=0; i<nums.length; i+=2) {
//         result += nums[i]
//     }
//     return result;
// };
// console.log(arrayPairSum([1,4,3,2]));
// console.log(arrayPairSum([6214, -2290, 2833, -7908]));

// var sortColors = function(nums) {
//     let red = 0;
//     let white = 0;
//     let blue = 0;
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i] === 0) {
//             red++;
//         } else if (nums[i] === 1) {
//             white++;
//         } else {
//             blue++;
//         }
//     }
//     for (let i=0; i<red; i++) {
//         nums[i] = 0;
//     }
//     for (let i=red; i<red+white; i++) {
//         nums[i] = 1;
//     }
//     for (let i=red+white; i<red+white+blue; i++) {
//         nums[i] = 2;
//     }
//     return nums;
// };
// console.log(sortColors([2,0,2,1,1,0]));

// var sortColors = function(nums) {
//     let red = 0;
//     let white = 0;
//     let blue = 0;
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i] === 0) {
//             red++;
//         } else if (nums[i] === 1) {
//             white++;
//         } else {
//             blue++;
//         }
//     }
//     for (let i=0; i<nums.length; i++) {
//         while (red > 0) {
//             nums[i] = 0;
//             red--;
//             i++;
//         }
//         while (white > 0) {
//             nums[i] = 1;
//             white--;
//             i++;
//         }
//         while (blue > 0) {
//             nums[i] = 2;
//             blue--;
//             i++;
//         }
//     }
//     return nums;
// };
// console.log(sortColors([2,0,2,1,1,0]));

// var sortColors = function(nums) {
//     let left = 0;
//     let right = nums.length-1;
//     for (let i=0; i<=right; i++) {
//         if (nums[i] === 0) {
//             let temp = nums[i];
//             nums[i] = nums[left];
//             nums[left] = temp;
//             left++;
//         } else if (nums[i] === 2) {
//             let temp = nums[i];
//             nums[i] = nums[right];
//             nums[right] = temp;
//             right--;
//             i--;
//         }
//     }
//     return nums;
// };
// console.log(sortColors([2,0,2,1,1,0]));

// var calPoints = function(ops) {
//     let count = 0;
//     let arr = [];
//     for (let i=0; i<ops.length; i++) {
//         if (parseInt(ops[i])) {
//             arr.push(parseInt(ops[i]));
//         } else if (ops[i] === "C") {
//             arr.pop();
//         } else if (ops[i] === "D") {
//             arr.push(arr[arr.length-1]*2);
//         } else if (ops[i] === "+") {
//             arr.push(arr[arr.length-2] + arr[arr.length-1])
//         }
//     }
//     for (let i=0; i<arr.length; i++) {
//         count += arr[i];
//     }
//     return count;
// };
// console.log(calPoints(["5","2","C","D","+"]));

// var distributeCandies = function(candies) {
//     let dict = {};
//     let count = 0;
//     let split = candies.length/2
//     for (let i=0; i<candies.length; i++) {
//         if (dict[candies[i]]) {
//             dict[candies[i]]++;
//         } else {
//             dict[candies[i]] = 1;
//         }
//     }
//     for (let keys in dict) {
//         count++
//     }
//     if (count < split) {
//         return count;
//     } else {
//         return split;
//     }
// };
// console.log(distributeCandies([1,1,2,2,3,3]));
// console.log(distributeCandies([1,1,2,3]));

// var distributeCandies = function(candies) {
//     let count = new Set(candies).size;
//     let split = candies.length/2;
//     return Math.min(split, count);
// };
// console.log(distributeCandies([1,1,2,2,3,3]));
// console.log(distributeCandies([1,1,2,3]));

// var isPalindrome = function(x) {
//     if (x < 0) {
//         return false;
//     }
//     x = x.toString()
//     for (let i=0; i<x.length; i++) {
//         if (x[i] !== x[x.length-i-1]) {
//             return false;
//         } 
//     }
//     return true;
// };
// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));

// var isPalindrome = function (x) {
//     if (x < 0) {
//         return false;
//     }
//     let number = x;
//     let result = 0;
//     while (number) {
//         result = result*10 + number % 10;
//         number = Math.floor(number / 10);
//     }
//     return result == x;
// };
// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));

// var removeElement = function(nums, val) {
//     let length = 0;
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i] !== val) {
//             nums.splice(i,1);
//             length++;
//         }
//     }
//     return length;
// };

// var searchInsert = function (nums, target) {
//     let i = 0
//     while (nums[i] < target) {
//         i++;
//     }
//     return i;
// };

// var lengthOfLastWord = function(s) {
//     s = s.split(" ");
//     while (s[s.length-1] === "") {
//         s.pop();
//     }
//     return s[s.length-1] ? s[s.length-1].length : 0;
// };
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord(""));
// console.log(lengthOfLastWord("a "));
// console.log(lengthOfLastWord("b   a    "));

// var lengthOfLastWord = function(s) {
//     s = s.trim().split(" ");
//     return s[s.length-1] ? s[s.length-1].length : 0;
// };
// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord(""));
// console.log(lengthOfLastWord("a "));
// console.log(lengthOfLastWord("b   a    "));

// var merge = function(nums1, m, nums2, n) {
//     for (let i=m+n-1; n>0; i--) {
//         if (n<0 || nums1[m-1] > nums2[n-1]) {
//             nums1[i] = nums1[m-1];
//             m--;
//         } else {
//             nums1[i] = nums2[n-1];
//             n--;
//         }
//     }
//     return nums1;
// };
// let nums1 = [1,2,3,0,0,0]
// let m = 3
// let nums2 = [2,5,6]
// let n = 3
// console.log(merge(nums1, m, nums2, n));

// var getRow = function(rowIndex) {
//     let arr =[];
//     for (let i=0; i<rowIndex+1; i++) {
//         arr[i] = [];
//         for (let j=0; j<=i; j++) {
//             if (j === 0 || j === i) {
//                 arr[i].push(1);
//             } else {
//                 arr[i].push(arr[i-1][j-1] + arr[i-1][j])
//             }
//         }
//     }
//     return arr[rowIndex];
// };
// console.log(getRow(3));

// var twoSum = function(numbers, target) {
//     let left = 0;
//     let right = numbers.length-1;
//     while (numbers[left] + numbers[right] !== target) {
//         if (numbers[left] + numbers[right] < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return [left+1, right+1];

// };
// console.log(twoSum([2,7,11,15], 9));

// var rob = function(nums) {
//     let path1 = 0;
//     let path2 = 0;
//     for (let i=0; i<nums.length; i++) {
//         if (i%2 === 0) {
//             path1 = Math.max(path1+nums[i], path2);
//         } else {
//             path2 = Math.max(path1, path2+nums[i]);
//         }
//     }
//     return Math.max(path1, path2);
// };
// console.log(rob([1,2,3,1]));
// console.log(rob([2,7,9,3,1]));

// var countPrimes = function(n) {
//   let arr = [];
//   let count = 0;
//   for (let i=2; i<n; i++) {
//       if (!arr[i]) {
//           arr[i] = 1;
//           count++;
//       }
//       let j=2;
//       while (j*i < n) {
//           arr[i*j] = 1;
//           j++;
//       }
//   }
//   return count;
// };
// console.log(countPrimes(10));

// var isIsomorphic = function(s, t) {
//     if (s === t) {
//         return true;
//     }
//     const dict1 = {};
//     const dict2 = {};
//     for (let i=0; i<s.length; i++) {
//         if (!dict1[s[i]]) {
//             dict1[s[i]] = t[i];
//         }
//         if (!dict2[t[i]]) {
//             dict2[t[i]] = s[i];
//         }
//         if (dict1[s[i]] !== t[i] || dict2[t[i]] !== s[i]) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isIsomorphic("egg", "add"));
// console.log(isIsomorphic("foo", "bar"));
// console.log(isIsomorphic("paper", "title"));

// var containsNearbyDuplicate = function(nums, k) {
//     for (let i=0; i<nums.length; i++) {
//         for (let j=0; j<nums.length; j++) {
//             if (i !== j && nums[i] === nums[j]) {
//                 if (Math.abs(i-j) <= k) {
//                     return true;
//                 }
//             }
//         }
//     }
//     return false;
// };
// console.log(containsNearbyDuplicate([1,2,3,1], 3));
// console.log(containsNearbyDuplicate([1,0,1,1], 1));
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));

// var containsNearbyDuplicate = function(nums, k) {
//     const dict = {};
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i] in dict && i - dict[nums[i]] <= k) {
//             return true;
//         }
//         dict[nums[i]] = i;
//     }
//     return false;
// };
// console.log(containsNearbyDuplicate([1,2,3,1], 3));
// console.log(containsNearbyDuplicate([1,0,1,1], 1));
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));

// var isPowerOfTwo = function(n) {
//     let total = 1;
//     while (total < n) {
//         total *= 2;
//     }
//     return total === n
// };
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(218));

// var isPowerOfTwo = function(n) {
//     if (n < 1) {
//         return false;
//     }
//     while (n > 1) {
//         n /= 2;
//     }
//     if (n === 1) {
//         return true;
//     } 
//     return false;
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(218));

// var addDigits = function (num) {
//     let str = num.toString();
//     while (str.length > 1) {
//         str = str.split("");
//         let sum = 0;
//         for (let i = 0; i < str.length; i++) {
//             sum += parseInt(str[i]);
//         }
//         str = sum.toString();
//     }
//     return str;
// };
// console.log(addDigits(38));

// var addDigits = function(num) {
//     while(num >= 10) {
//         let temp = num;
//         num = 0;
//         while(temp > 0) {
//             num += temp % 10;
//             temp = Math.floor(temp/10);
//         }
//     }
//     return num;
// };
// console.log(addDigits(38));

// var wordPattern = function(pattern, str) {
//     str = str.split(" ");
//     if (str.length !== pattern.length) {
//         return false;
//     }
//     const dict = {};
//     const dict2 = {};
//     for (let i=0; i<pattern.length; i++) {
//         if (!dict[pattern[i]]) {
//             dict[pattern[i]] = str[i];
//         } else {
//             if (dict[pattern[i]] !== str[i]) {
//                 return false;
//             }
//         }
//     }
//     for (let i=0; i<str.length; i++) {
//         if (!dict2[str[i]]) {
//             dict2[str[i]] = pattern[i];
//         } else {
//             if (dict2[str[i]] !== pattern[i]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };
// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("aaaa", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog dog dog dog"));

// var isPowerOfFour = function(num) {
//     if (num < 1) {
//         return false;
//     }
//     while (num > 1) {
//         num /= 4;
//     }
//     if (num === 1) {
//         return true;
//     } 
//     return false;
// };
// console.log(isPowerOfFour(16));
// console.log(isPowerOfFour(5));

// var isPowerOfFour = function(num) {
//     if (num < 1) {
//         return false;
//     }
//     if (num === 1) {
//         return true;
//     } 
//     return isPowerOfFour(num/4);
// };
// console.log(isPowerOfFour(16));
// console.log(isPowerOfFour(5));

// var reverseVowels = function (s) {
//     let left = 0;
//     let right = s.length - 1;
//     let vowels = "aeiouAEIOU";
//     s = s.split("");
//     while (left < right) {
//         if (vowels.includes(s[left]) && vowels.includes(s[right])) {
//             let temp = s[left];
//             s[left] = s[right];
//             s[right] = temp;
//             left++;
//             right--;
//         }
//         if (!vowels.includes(s[left])) {
//             left++;
//         }
//         if (!vowels.includes(s[right])) {
//             right--;
//         }
//     }
//     return s.join("");
// };
// console.log(reverseVowels("hello"));
// console.log(reverseVowels("leetcode"));

// var intersection = function(nums1, nums2) {
//     let set1 = new Set(nums1);
//     let set2 = new Set(nums2);
//     const res =[];
//     for (let keys of set1) {
//         if (set2.has(keys)) {
//             res.push(keys);
//         }
//     }
//     return res;
// };
// console.log(intersection([1,2,2,1], [2,2]));
// console.log(intersection([4,9,5], [9,4,9,8,4]));

// var isPerfectSquare = function(num) {
//     let i=0;
//     while (i*i < num) {
//         i++;
//     }
//     if (i*i === num) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(isPerfectSquare(16));
// console.log(isPerfectSquare(14));

// var canConstruct = function(ransomNote, magazine) {
//     const dict = [];
//     const dict2 = [];
//     for (let i=0; i<ransomNote.length; i++) {
//         if (!dict[ransomNote[i]]) {
//             dict[ransomNote[i]] = 1;
//         } else {
//             dict[ransomNote[i]]++;
//         }
//     }
//     for (let i=0; i<magazine.length; i++) {
//         if (!dict2[magazine[i]]) {
//             dict2[magazine[i]] = 1;
//         } else {
//             dict2[magazine[i]]++;
//         }
//     }
//     for (let key in dict) {
//         if (!(key in dict2)) {
//             return false;
//         }
//         if (dict[key] > dict2[key]) {
//             return false
//         }
//     }
//     return true;
// };
// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));

// var canConstruct = function (ransomNote, magazine) {
//     const dict2 = [];

//     for (let i = 0; i < magazine.length; i++) {
//         if (!dict2[magazine[i]]) {
//             dict2[magazine[i]] = 1;
//         } else {
//             dict2[magazine[i]]++;
//         }
//     }
//     for (let i = 0; i < ransomNote.length; i++) {
//         if (dict2[ransomNote[i]] > 0) {
//             dict2[ransomNote[i]]--;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));

// var findTheDifference = function(s, t) {
//     const dict = [];
//     for (let i=0; i<s.length; i++) {
//         if (!dict[s[i]]) {
//             dict[s[i]] = 1;
//         } else {
//             dict[s[i]]++;
//         }
//     }
//     for (let i=0; i<t.length; i++) {
//         if (dict[t[i]] > 0) {
//             dict[t[i]]--;
//         } else {
//             return t[i];
//         }
//     }
// };
// console.log(findTheDifference("abcd", "abcde"));

// var findTheDifference = function(s, t) {
//     let total1 = 0;
//     let total2 = 0;
//     for (let i=0; i<s.length; i++) {
//         total1 += s.charCodeAt(i);
//     }
//     for (let i=0; i<t.length; i++) {
//         total2 += t.charCodeAt(i);
//     }
//     return String.fromCharCode(total2-total1);
// };
// console.log(findTheDifference("abcd", "abcde"));

// var longestPalindrome = function(s) {
//     const dict = [];
//     let count = 0;
//     for (let i=0; i<s.length; i++) {
//         if (!dict[s[i]]) {
//             dict[s[i]] = 1;
//         } else {
//             dict[s[i]]++;
//         }
//     }
//     for (let key in dict) {
//         if (dict[key] / 2 >= 1) {
//             count += (2*Math.floor(dict[key]/2));
//         } 
//     }
//     if (s.length > count) {
//         count++;
//     }
//     return count;
// };
// console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("bananas"));

// var longestPalindrome = function(s) {
//     const dict = [];
//     let count = 0;
//     for (let i=0; i<s.length; i++) {
//         if (dict[s[i]] === 1) {
//             dict[s[i]] = 0;
//             count += 2;
//         } else {
//             dict[s[i]] = 1;
//         }
//     }
//     if (s.length > count) {
//         count++;
//     }
//     return count;
// };
// console.log(longestPalindrome("abccccdd"));
// console.log(longestPalindrome("bananas"));

// var thirdMax = function(nums) {
//     nums = nums.sort();
//     if (nums.length < 3) {
//         return nums[nums.length-1]
//     }
// };
// console.log(thirdMax([3,2]));
// console.log(thirdMax([3,2,1]));

// var thirdMax = function(nums) {
//     nums = nums.sort((a,b)=>{return a-b;});
//     let newSet = new Set(nums);
//     nums = Array.from(newSet);
//     if (nums.length < 3) {
//         return Math.max(...nums)
//     }
//     return nums[nums.length-3];
// };
// console.log(thirdMax([3,2,1]));
// console.log(thirdMax([1,2]));
// console.log(thirdMax([2,2,3,1]));
// console.log(thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]));

// var thirdMax = function(nums) {
//     let max = -Infinity;
//     let second = -Infinity;
//     let third = -Infinity;
//     for (let i=0; i<nums.length; i++) {
//         if (nums[i] > max) {
//             third = second;
//             second = max;
//             max = nums[i];
//         } else if (nums[i] > second && nums[i] !== max) {
//             third = second;
//             second = nums[i];
//         } else if (nums[i] > third && nums[i] !== second && nums[i] !== max) {
//             third = nums[i]
//         }
//     }
//     return third === -Infinity ? max : third;
// };
// console.log(thirdMax([3,2,1]));
// console.log(thirdMax([1,2]));
// console.log(thirdMax([2,2,3,1]));
// console.log(thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]));

// // 438. Find All Anagrams in a String
// // TIMES OUT ON ONE CASE
// var findAnagrams = function(s, p) {
//     p = p.split("").sort().join("");
//     let res =[];

//     for (let i=0; i<s.length-p.length+1; i++) {
//         let sub = s.substring(i, i+p.length).split("").sort().join("");
//         for (let j=0; j<p.length; j++) {
//             if (sub[j] !== p[j]) {
//                 break;
//             }
//             if (j === p.length-1) {
//                 res.push(i);
//             }
//         }
//     }
//     return res;
// };
// console.log(findAnagrams("cbaebabacd", "abc"))

// var findAnagrams = function (s, p) {
//     const map = new Array(26);
//     map.fill(0);
//     for (let i = 0; i < p.length; i++) {
//         map[p[i].charCodeAt() - 97]++;
//     }
//     console.log(map)
//     let j = 0;
//     let res = [];
//     for (let i = 0; i < s.length; i++) {
//         let subChar = s[i].charCodeAt() - 97;

//         map[subChar]--;
//         console.log(map)

//         while (map[subChar] < 0) {
//             let addChar = s[j].charCodeAt() - 97;
//             // console.log("addchar " +addChar, subChar)
//             j++
//             map[addChar]++;
//             console.log("in while loop " +map)
//         }
//         if (i - j + 1 === p.length) {
//             res.push(j)
//         }
//     }
//     return res;
// };
// console.log(findAnagrams("cbaebabacd", "abc"))

// var arrangeCoins = function (n) {
//     let count = 0;
//     let i = 1;
//     while (1) {
//         if (n - i >= 0) {
//             count++;
//             n -= i;
//             i++;
//         }
//         else return count;
//     }
// };
// console.log(arrangeCoins(5));
// console.log(arrangeCoins(8));

// var arrangeCoins = function (n) {
//     let staircase = 0;
//     while (n >= staircase + 1) {
//         n -= staircase + 1;
//         staircase++;
//     }
//     return staircase;
// };
// console.log(arrangeCoins(5));
// console.log(arrangeCoins(8));

// var findContentChildren = function(g, s) {
//     g.sort(function(a, b) { return a - b});
//     s.sort(function (a, b) { return a - b });
//     let count = 0;
//     for (let i=0, j=0; i<g.length, j<s.length; i++, j++) {
//         if (g[i] <= s[j]) {
//             count++;
//         } else {
//             i--;
//         }
//     }
//     return count;
// };
// console.log(findContentChildren([1,2,3], [1,1]));

// var findContentChildren = function(g, s) {
//     g.sort(function(a, b) { return a - b});
//     s.sort(function (a, b) { return a - b });
//     let i = 0;
//     for (let j=0;j<s.length; j++) {
//         if (g[i] <= s[j]) {
//             i++;
//         }
//     }
//     return i;
// };
// console.log(findContentChildren([1,2,3], [1,1]));

// var countSegments = function(s) {
//     s = s.trim().split(" ");
//     let count=0;
//     for (let i=0; i<s.length; i++) {
//         if (s[i] != "") {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(countSegments("Hello, my name is John"));
// console.log(countSegments(""));
// console.log(countSegments("                "));
// console.log(countSegments("Of all the gin joints in all the towns in all the world,   "));
// console.log(countSegments(", , , ,        a, eaefa"));

// var licenseKeyFormatting = function(S, K) {
//     S = S.toUpperCase().split("-").join("");
//     let newStr = "";
//     let count = 0;
//     for (let i=S.length-1; i>=0; i--) {
//         if (count === K) {
//             newStr = "-" + newStr;
//             count = 0;
//         }
//         newStr = S[i] + newStr;
//         count++;
//     }
//     return newStr;
// };
// console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4));
// console.log(licenseKeyFormatting("2-5g-3-J", 2));

// var findMaxConsecutiveOnes = function(nums) {
//     let count = 0;
//     let max = 0;
//     for (let i=0, length=nums.length; i<length; i++) {
//         if (nums[i] === 1) {
//             count++;
//         } else {
//             if (count > max) {
//                 max = count;
//             }
//             count = 0;
//         }
//     }
//     if (count > max) {
//         max = count;
//     }
//     return max;
// };
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

// var findMaxConsecutiveOnes = function(nums) {
//     let count = 0;
//     let max = 0;
//     for (let i=0, length=nums.length; i<length; i++) {
//         if (nums[i] === 1) {
//             count++;
//             if (count > max) {
//                 max = count;
//             }
//         } else {

//             count = 0;
//         }
//     }
//     return max;
// };
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

// var findMaxConsecutiveOnes = function(nums) {
//     let count = 0;
//     let max = 0;
//     for (let i=0, length=nums.length; i<length; i++) {
//         if (nums[i] === 1) {
//             count++;
//             max = Math.max(max, count)
//         } else {
//             count = 0;
//         }
//     }
//     return max;
// };
// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

// var constructRectangle = function(area) {
//     for (let i=Math.floor(Math.sqrt(area)); i>0; i--) {
//         if (area % i === 0) {
//             return [area/i, i]
//         }
//     }
// };
// console.log(constructRectangle(4))

// var nextGreaterElement = function(nums1, nums2) {
//     let arr = [];
//     for (let i=0, len1=nums1.length; i<len1; i++) {
//         let j = nums2.indexOf(nums1[i])
//         while (nums2[j] <= nums1[i]) {
//             j++;
//         }
//         arr.push(nums2[j] ? nums2[j]: -1);
//     }
//     return arr;
// };
// console.log(nextGreaterElement([4,1,2], [1,3,4,2]))
// console.log(nextGreaterElement([2,4], [1,2,3,4]))

// var nextGreaterElement = function(nums1, nums2) {
//     let arr = [];
//     for (let i=0, len1=nums1.length; i<len1; i++) {
//         let j = nums2.indexOf(nums1[i])
//         let found = false;
//         while (j < nums2.length) {
//             if (nums2[j] > nums1[i]) {
//                 arr.push(nums2[j]);
//                 found = true
//                 break;
//             }
//             j++;
//         }
//         if (found === false) {
//             arr.push(-1);
//         }
//     }
//     return arr;
// };
// console.log(nextGreaterElement([4,1,2], [1,3,4,2]))
// console.log(nextGreaterElement([2,4], [1,2,3,4]))

// var convertToBase7 = function(num) {
//     return num.toString(7);
// };
// console.log(convertToBase7(100))
// console.log(convertToBase7(-7))

// var projectionArea = function (grid) {
//     let count = 0;
//     for (let i = 0, len1 = grid.length; i < len1; i++) {
//         let col = 0;
//         let row = 0;
//         for (let j = 0; j < len1; j++) {
//             if (grid[i][j] > 0) {
//                 count++;
//             }
//             if (grid[i][j] > row) {
//                 row = grid[i][j];
//             }
//             if (grid[j][i] > col) {
//                 col = grid[j][i]
//             }
//         }
//         count += row + col;
//     }
//     return count;
// };

// var findRelativeRanks = function(nums) {
//     let arr = nums.slice();
//     arr.sort((a,b) => b-a);
//     let map = {};
//     for (let i=0, len=arr.length; i<len; i++) {
//         if (i === 0) {
//             map[arr[i]] = "Gold Medal"
//         } else if (i === 1) {
//             map[arr[i]] = "Silver Medal"
//         } else if (i === 2) {
//             map[arr[i]] = "Bronze Medal"
//         } else {
//             map[arr[i]] = (i+1).toString();
//         }
//     }
//     return nums.map(el => {
//         return map[el];
//     });
// };
// console.log(findRelativeRanks([1,2,3,4,5]));
// console.log(findRelativeRanks([10,3,8,4,9]));

// var checkPerfectNumber = function(num) {
//     if (num === 0) {
//         return false;
//     }
//     let count = 0;
//     for (let i=1; i<num; i++) {
//         if (num % i === 0) {
//             count += i;
//         }
//     }
//     return count === num;
// };
// console.log(checkPerfectNumber(28));

// var checkPerfectNumber = function(num) {
//     if (num < 2) {
//         return false;
//     }
//     let count = 1;
//     for (let i=2, half=Math.ceil(Math.sqrt(num)); i<half; i++) {
//         if (num % i === 0) {
//             count += i + num/i;
//         }
//     }
//     return count === num;
// };
// console.log(checkPerfectNumber(28));

// var compress = function(chars) {
//     chars.push("end");
//     let count = 1;
//     for(let i = 0; i< chars.indexOf("end"); i++){    
//         if(chars[i] === chars[i+1]){
//             count++;
//             continue;
//         }
//         chars.push(chars[i]);
//         if(count!==1){
//             chars.push(...(count.toString().split("")));
//         }
//         count = 1;
//     }
//    chars.splice(0,chars.indexOf("end")+1);
//    console.log(chars)
// };
// compress(["a","a","b","b","c","c","c"]);
// compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]);

// var findMaxConsecutiveOnes = function (arr) {
//     var start = 0
//     var curr = 0
//     var flag = false
//     var temp = 0
//     var max = 0
//     while (start < arr.length - max) {
//         if (curr >= arr.length) {
//             max = Math.max(max, temp)
//             start++
//             curr = start + 1
//             flag = false
//             temp = 0
//         } else {
//             if (arr[curr] == 0) {
//                 if (flag == true) {
//                     max = Math.max(max, temp)
//                     start++
//                     curr = start + 1
//                     flag = false
//                     temp = 0
//                 } else {
//                     temp++
//                     curr++
//                     flag = true
//                 }
//             } else {
//                 temp++
//                 curr++
//             }
//         }
//     }
//     return Math.max(max, temp)
// };
// console.log(findMaxConsecutiveOnes([1,0,1,1,0]));

// var orangesRotting = function (grid) {
//     if (grid.length === 0) {
//         return 0;
//     }
//     let queue = [];
//     let count = 0;
//     let minute = -1;
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[0].length; j++) {
//             if (grid[i][j] === 2) {
//                 queue.push([i, j]);
//             }
//             if (grid[i][j] === 1) {
//                 count++;
//             }
//         }
//     }
//     if (count === 0) {
//         return 0;
//     }
//     while (queue.length > 0) {
//         let len = queue.length;
//         for (let k = 0; k < len; k++) {
//             let cur = queue.shift();
//             let i = cur[0]
//             let j = cur[1];
//             if (i - 1 >= 0 && grid[i - 1][j] === 1) {
//                 grid[i - 1][j] = 2;
//                 count--;
//                 queue.push([i - 1, j]);
//             }
//             if (i + 1 < grid.length && grid[i + 1][j] === 1) {
//                 grid[i + 1][j] = 2;
//                 count--;
//                 queue.push([i + 1, j]);
//             }
//             if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
//                 grid[i][j + 1] = 2;
//                 count--;
//                 queue.push([i, j + 1]);
//             }
//             if (j - 1 >= 0 && grid[i][j - 1] === 1) {
//                 grid[i][j - 1] = 2;
//                 count--;
//                 queue.push([i, j - 1]);
//             }
//         }
//         minute++;
//     }
//     if (count > 0) {
//         return -1;
//     }
//     return minute;
// };
// console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
// console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]));
// console.log(orangesRotting([[0,2]]));

// 200. Number of Islands
// var numIslands = function (grid) {
//     function dfs(grid, i, j) {
//         if (i < 0 || i >= length || j < 0 || j >= length2 || grid[i][j] === "0") {
//             return 0;
//         }
//         grid[i][j] = "0";
//         dfs(grid, i + 1, j);
//         dfs(grid, i - 1, j);
//         dfs(grid, i, j + 1);
//         dfs(grid, i, j - 1);
//         return 1;
//     }
//     if (grid.length === 0) {
//         return 0;
//     }
//     let count = 0;
//     let length = grid.length;
//     let length2 = grid[0].length;

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length2; j++) {
//             if (grid[i][j] === "1") {
//                 dfs(grid, i, j);
//                 count++;
//             }
//         }
//     }
//     return count;
// };
// let grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ];
// let grid2 = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ];
// let grid3 = [];
// console.log(numIslands(grid));
// console.log(numIslands(grid2));
// console.log(numIslands(grid3));


// var repeatedSubstringPattern = function(s) {
//     const str = s + s;
//     return str.slice(1, str.length - 1).includes(s);
// };
// console.log(repeatedSubstringPattern("abab"));
// console.log(repeatedSubstringPattern("aba"));
// console.log(repeatedSubstringPattern("abcabcabcabc"));

// var repeatedSubstringPattern = function(s) {
//     const str = s + s;
//     return str.substring(1, str.length - 1).includes(s);
// };
// console.log(repeatedSubstringPattern("abab"));
// console.log(repeatedSubstringPattern("aba"));
// console.log(repeatedSubstringPattern("abcabcabcabc"));

// var detectCapitalUse = function(word) {
//     if (word === word.toUpperCase()) {
//         return true;
//     } else if (word === word.toLowerCase()) {
//         return true;
//     } else if (word === word[0].toUpperCase() + word.substring(1).toLowerCase()) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(detectCapitalUse("USA"));
// console.log(detectCapitalUse("FLaG"));
// console.log(detectCapitalUse("leetcode"));
// console.log(detectCapitalUse("Google"));

// var findLUSlength = function (a, b) {
//     if (a === b) {
//         return -1;
//     }
//     return Math.max(a.length, b.length)
// };
// console.log(findLUSlength("aba", "cdc"));

// var reverseStr = function (s, k) {
//     let res = "";
//     for (let i = 0, length = s.length; i < length; i += 2 * k)
//         res += s.substring(i, i + k).split("").reverse().join("") + s.substring(i + k, i + k + k);
//     return res;
// };
// console.log(reverseStr("abcdefg", 2));

// var checkRecord = function(s) {
//     let absent = 0;
//     let late = 0;
//     for (let i=0, length=s.length; i<length; i++) {
//         if (s[i] === "A") {
//             if (absent === 1) {
//                 return false;
//             }
//             absent++;
//             late = 0;
//         } else if (s[i] === "L") {
//             if (late === 2) {
//                 return false;
//             }
//             late++;
//         } else {
//             late = 0;
//         }
//     }
//     return true;
// };
// console.log(checkRecord("PPALLP"));
// console.log(checkRecord("PPALLL"));

// var matrixReshape = function (nums, r, c) {
//     if (r * c !== nums.length * nums[0].length) {
//         return nums;
//     }
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums[0].length; j++) {
//             arr.push(nums[i][j]);
//         }
//     }
//     let newArr = [];
//     for (var i = 0; i < r; i++) {
//         newArr[i] = [];
//         for (var j = 0; j < c; j++) {
//             newArr[i][j] = 0;
//         }
//     }
//     for (let i = 0; i < r; i++) {
//         for (let j = 0; j < c; j++) {
//             newArr[i][j] = arr[j + i * c]
//         }
//     }
//     return newArr;
// };
// let nums = [
//     [1, 2],
//     [3, 4]
// ]
// console.log(matrixReshape(nums, 1, 4));

// var matrixReshape = function (nums, r, c) {
//     let rows = nums.length;
//     let columns = nums[0].length
//     if (rows * columns !== r * c) {
//         return nums;
//     }
//     const result = [];
//     let arr = [];
//     let count = 0;
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < columns; j++) {
//             arr.push(nums[i][j]);
//             count++;
//             if (count === c) {
//                 result.push(arr);
//                 arr = [];
//                 count = 0;
//             }
//         }
//     }
//     return result;
// };
// let nums = [
//     [1, 2],
//     [3, 4]
// ]
// console.log(matrixReshape(nums, 1, 4));

// var findUnsortedSubarray = function(nums) {
//     let sorted = nums.slice().sort((a,b) => a-b);
//     let left = 0;
//     let right = nums.length-1;
//     let i = 0
//     let j = nums.length-1;
//     while (nums[i] === sorted[i] && i !== j) {
//         i++;
//     }
//     if (i === j) {
//         return 0;
//     }
//     left = i;
//     while (nums[j] === sorted[j] ) {
//         j--;
//     }
//     right = j;
//     return nums.slice(left,right+1).length
// };
// console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// console.log(findUnsortedSubarray([1, 2, 3, 4]));

// var findLHS = function(nums) {
//     let dict = {};
//     let max = 0;
//     for (let i=0; i<nums.length; i++) {
//         if (dict[nums[i]]) {
//             dict[nums[i]]++;
//         } else {
//             dict[nums[i]] = 1;
//         }
//         if (dict[nums[i]] + dict[nums[i]+1] > max) {
//             max = dict[nums[i]] + dict[nums[i]+1]
//         }
//         if (dict[nums[i]] + dict[nums[i]-1] > max) {
//             max = dict[nums[i]] + dict[nums[i]-1]
//         }
//     }
//     return max;
// };
// console.log(findLHS([1,3,2,2,5,2,3,7]));

// var findRestaurant = function(list1, list2) {
//     let dict = {};
//     let length1 = list1.length;
//     let length2 = list2.length;
//     let maxLength = Math.max(length1,length2);
//     for (let i=0; i<maxLength;i++){
//         if(i < length1){
//             if (dict[list1[i]]) {
//                 dict[list1[i]][0]++;
//                 dict[list1[i]][1]+=i;
//             } else {
//                 dict[list1[i]] = [1,i];
//             }
//         }
//         if(i < length2){
//             if (dict[list2[i]]) {
//                 dict[list2[i]][0]++;
//                 dict[list2[i]][1]+=i;
//             } else {
//                 dict[list2[i]] = [1,i];
//             }
//         }
//     }
//     let res = [];
//     let min = Infinity;
//     for (let key in dict) {
//         if (dict[key][0] === 2) {
//             if (dict[key][1] < min) {
//                 min = dict[key][1];
//                 res = [];
//                 res.push(key);
//             } else if (dict[key][1] === min) {
//                 res.push(key);
//             }
//         }
//     }
//     return res;
// };
// let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
// let list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
// let list3 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
// let list4 = ["KFC", "Shogun", "Burger King"];
// console.log(findRestaurant(list1, list2));
// console.log(findRestaurant(list3, list4));

// var findRestaurant = function (list1, list2) {
//     const dict = {};
//     for (let i = 0, length = list1.length; i < length; i++) {
//         dict[list1[i]] = i;
//     }
//     let res = [];
//     let min = Infinity;
//     for (let i = 0, length2 = list2.length; i < length2; i++) {
//         if (dict[list2[i]] !== null) {
//             let sum = i + dict[list2[i]];
//             if (sum < min) {
//                 min = sum;
//                 res = [list2[i]];
//             } else if (sum === min)
//                 res.push(list2[i]);
//         }
//     }
//     return res;
// };
// let list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
// let list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
// let list3 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
// let list4 = ["KFC", "Shogun", "Burger King"];
// console.log(findRestaurant(list1, list2));
// console.log(findRestaurant(list3, list4));

// var canPlaceFlowers = function(flowerbed, n) {
// 	let count = 0;
//     for (let i=0, length=flowerbed.length; i<length; i++) {
// 		if (flowerbed[i-1] !== 1 && flowerbed[i] === 0 && flowerbed[i+1] !== 1) {
// 			count++;
// 			i++;
// 		}
// 	}
// 	if (count >= n) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
// console.log(canPlaceFlowers([1,0,0,0,1], 1));
// console.log(canPlaceFlowers([1,0,0,0,1], 2));
// console.log(canPlaceFlowers([1,0,0,0,0,1], 2));
// console.log(canPlaceFlowers([0,0,1,0,1], 1));

// var maximumProduct = function(nums) {
//     if (nums.length === 3) {
// 		return nums[0]*nums[1]*nums[2];
// 	}
// 	nums.sort((a,b) => a-b);
// 	let max = Math.max( (nums[0]*nums[1]*nums[nums.length-1]), (nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3]))
// 	return max;
// };
// console.log(maximumProduct([1,2,3]));
// console.log(maximumProduct([1,2,3,4]));
// console.log(maximumProduct([-1,-2,1,2,3]));

// var maximumProduct = function (nums) {
// 	let max1 = -Infinity;
// 	let max2 = -Infinity;
// 	let max3 = -Infinity;
// 	let min1 = Infinity;
// 	let min2 = Infinity;
// 	for (let i=0, length=nums.length; i<length; i++) {
// 		let num = nums[i];
// 		if (num >= max1) {
// 			max3 = max2;
// 			max2 = max1;
// 			max1 = num;
// 		} else if (num >= max2) {
// 			max3 = max2;
// 			max2 = num;
// 		} else if (num >= max3) {
// 			max3 = num;
// 		}
// 		if (num <= min1) {
// 			min2 = min1;
// 			min1 = num;
// 		} else if (num <= min2) {
// 			min2 = num;
// 		}
// 	};
// 	const prod1 = max1 * max2 * max3;
// 	const prod2 = max1 * min1 * min2;
// 	return Math.max(prod1, prod2);
// }
// console.log(maximumProduct([1,2,3]));
// console.log(maximumProduct([1,2,3,4]));
// console.log(maximumProduct([-1,-2,1,2,3]));

// var judgeSquareSum = function(c) {
// 	let a = 0;
// 	let b = Math.floor(Math.sqrt(c));
// 	while (a<=b) {
// 		if (a*a + b*b > c) {
// 			b--
// 		} else if (a*a + b*b < c) {
// 			a++
// 		} else {
// 			return true;
// 		}
// 	}
// 	return false;
// };
// console.log(judgeSquareSum(5));
// console.log(judgeSquareSum(3));
// console.log(judgeSquareSum(4));

// var judgeSquareSum = function(c) {
//     for(let a=0, b=Math.floor(Math.sqrt(c)); a<=b; a++){
//         if(Number.isInteger(Math.sqrt(c - a*a)))
// 			return true
// 		}
//     return false;
// };
// console.log(judgeSquareSum(5));
// console.log(judgeSquareSum(3));
// console.log(judgeSquareSum(4));

// var findLengthOfLCIS = function(nums) {
// 	let length = nums.length;
// 	if (nums.length === 0) {
// 		return 0;
// 	}
// 	let max = 1;
// 	let count = 1;
// 	for (let i=1; i<length; i++) {
// 		if (nums[i] > nums[i-1]) {
// 			count++;
// 		} else {
// 			count = 1;
// 		}
// 		max = Math.max(count, max)
// 	}
// 	return max;
// };
// console.log(findLengthOfLCIS([1,3,5,4,7]))

// var validPalindrome = function(s) {
// 	let length = s.length-1;
// 	let range = s.length/2;
// 	let count = 0;
//     for (let i=0; i<range; i++) {
// 		if (s[i] !== s[length-i]) {
// 			if (count === 1) {
// 				return false;
// 			}
// 			count++;
// 		}
// 	}
// 	return true;
// };
// console.log(validPalindrome("aba"));
// console.log(validPalindrome("abca"));
// console.log(validPalindrome("abcdasdasa"));
// console.log(validPalindrome("abc"));

// var validPalindrome = function (s) {
// 	let res = checkString(s,false);
// 	function checkString(s, deleted) {
// 		let length = s.length - 1;
// 		let range = s.length / 2;
// 		for (let i = 0; i < range; i++) {
// 			if (s[i] !== s[length - i]) {
// 				if (deleted === true) {
// 					return false;
// 				}
// 				return checkString(s.substring(i, length - i), true) || checkString(s.substring(i + 1, length - i + 1), true)
// 			}
// 		}
// 		return true;
// 	}
// 	return res;
// };
// console.log(validPalindrome("aba"));
// console.log(validPalindrome("abca"));
// console.log(validPalindrome("abcdasdasa"));
// console.log(validPalindrome("abc"));

// var countBinarySubstrings = function(s) {
// 	let res = 0;
// 	let left = 0;
// 	let counter = 1;
// 	for (let i=1, length=s.length; i<length; i++) {
// 		if (s[i] === s[i-1]) {
// 			counter++;
// 		} else {
// 			left = counter;
// 			counter = 1;
// 		}
// 		if (left >= counter) {
// 			res++;
// 		}
// 	}
// 	return res;
// };
// console.log(countBinarySubstrings("00110011"));

// var findShortestSubArray = function(nums) {
// 	const dict = {};
// 	const fidx = {};
// 	const lidx = {};
// 	let max = 0;
// 	for (let i=0, length=nums.length; i<length; i++) {
// 		let num=nums[i]
// 		if (dict[num]) {
// 			dict[num]++;
// 		} else {
// 			dict[num] = 1;
// 		}
// 		max = Math.max(max, dict[num]);
// 		if (fidx[num] === undefined ) {
// 			fidx[num] = i;
// 		}
// 		lidx[num] = i;
// 	}
// 	let res = nums.length;
// 	for (let key in dict) {
// 		if (dict[key] === max) {
// 			res = Math.min(res, lidx[key] - fidx[key] + 1)
// 		}
// 	}
// 	return res;
// };
// console.log(findShortestSubArray([1, 2, 2, 3, 1]));

// var search = function(nums, target) {
// 	let left = 0;
// 	let right = nums.length-1;
// 	while (left <= right) {
// 		let half = Math.floor((left+right)/2);
// 		if (nums[half] === target) {
// 			return half;
// 		} else if (nums[half] < target) {
// 			left = half + 1;
// 		} else {
// 			right = half - 1;
// 		}
// 	}
// 	return -1;
// };
// console.log(search([-1,0,3,5,9,12], 9));
// console.log(search([-1,0,3,5,9,12], 2));

// var pivotIndex = function (nums) {
// 	let total = 0;
// 	let length = nums.length;
// 	for (let i=0; i<length; i++) {
// 		total += nums[i];
// 	}
// 	let left = 0;
// 	for (let i=0; i<length; i++) {
// 		let num = nums[i];
// 		if (left === total - left - num) {
// 			return i;
// 		}
// 		left += num;
// 	}
// 	return -1;
// };
// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([1, 2, 3]));

// var selfDividingNumbers = function(left, right) {
// 	const res = [];
//     for (let i=left; i<=right; i++) {
// 		let str = i.toString();
// 		let check = true;
// 		for (let j=0, length= str.length; j<length; j++) {
// 			if (i % parseInt(str[j]) !== 0) {
// 				check = false;
// 				break;
// 			}
// 		}
// 		if (check === true) {
// 			res.push(i);
// 		}
// 	}
// 	return res;
// };
// console.log(selfDividingNumbers(1, 22));

// basic calculator 1
// var calculate = function (s) {
//     let res = 0;
//     let sign = 1;
//     const stack = [];
//     const signStack = [];

//     for (let i=0, length=s.length; i<length; i++) {
//         const char = s[i];
//         if (char === " ") {
//             continue;
//         } else if (char === "+") {
//             sign = 1;
//         } else if (char === "-") {
//             sign = -1;
//         } else if (char >= "0" && char <= "9") {
//             let num = char;
//             while (i+1 < length && s[i+1] >= "0" && s[i+1] <= "9") {
//                 num += s[i+1];
//                 i++;
//             }
//             res += sign * parseInt(num);
//         } else if (char === "(") {
//             stack.push(res);
//             res = 0;
//             signStack.push(sign);
//             sign = 1;
//         } else if (char === ")") {
//             res = signStack.pop() * res + stack.pop();
//             sign = 1;
// 		}
//     }
//     return res;
// };
// console.log(calculate(" 1 + 1 "));
// console.log(calculate(" 2-1 + 2 "));
// console.log(calculate(" 8 - (2+3+1) + 2 "));
// console.log(calculate("(1+(4+5+2)-3)+(6+8)"));

// var floodFill = function (image, sr, sc, newColor) {
// 	let oldColor = image[sr][sc];
// 	checkAdjacents(image, sr, sc, newColor, oldColor);
// 	function checkAdjacents(image, i, j, newColor, oldColor) {
// 		if (i<0 || j<0 || i>=image.length || j>=image[i].length || image[i][j] !== oldColor || image[i][j] === newColor) {
// 			return image;
// 		}
// 		image[i][j] = newColor;
// 		checkAdjacents(image, i, j-1, newColor, oldColor);
// 		checkAdjacents(image, i, j+1, newColor, oldColor);
// 		checkAdjacents(image, i+1, j, newColor, oldColor);
// 		checkAdjacents(image, i-1, j, newColor, oldColor);
// 		return image;
// 	}

// 	return image;
// };
// console.log(floodFill(
// 	[[1,1,1],[1,1,0],[1,0,1]],
// 	1,
// 	1,
// 	2
// ));

// var nextGreatestLetter = function (letters, target) {
// 	let left = 0;
// 	let right = letters.length - 1;
// 	while (left <= right) {
// 		let mid = Math.floor((right - left) / 2) + left;
// 		if (target < letters[mid]) {
// 			right = mid-1;
// 		} else {
// 			left = mid+1;
// 		}
// 	}
// 	return letters[left%letters.length];
// };
// console.log(nextGreatestLetter(["c", "f", "j"], "a"))
// console.log(nextGreatestLetter(["c", "f", "j"], "c"))
// console.log(nextGreatestLetter(["c", "f", "j"], "d"))
// console.log(nextGreatestLetter(["c", "f", "j"], "g"))
// console.log(nextGreatestLetter(["c", "f", "j"], "j"))
// console.log(nextGreatestLetter(["c", "f", "j"], "k"))

// var minCostClimbingStairs = function(cost) {
// 	let length = cost.length;
//     for (let i=2; i<length; i++) {
//         cost[i] += Math.min(cost[i-1], cost[i-2]);
//     }
//     return Math.min(cost[length-1], cost[length-2]);
// };
// console.log(minCostClimbingStairs([10, 15, 20]))

// var dominantIndex = function(nums) {
// 	let max = -Infinity;
// 	let second = -Infinity;
// 	let idx = -1;
// 	for (let i=0, length=nums.length; i<length; i++) {
// 		let num = nums[i];
// 		if (num > max) {
// 			second = max;
// 			max = num;
// 			idx = i;
// 		} else if (num > second) {
// 			second = num;
// 		}
// 	}
// 	if (max >= 2*second) {
// 		return idx;
// 	}
// 	return -1;
// };
// console.log(dominantIndex([3, 6, 1, 0]))
// console.log(dominantIndex([1, 2, 3, 4]))

// var shortestCompletingWord = function(licensePlate, words) {
// 	licensePlate = licensePlate.toLowerCase();
// 	let letters = licensePlate.replace(/[^a-z]/g, ""); 
// 	const dict = {};
// 	let min = 16;
// 	let result = "";
// 	for (let i=0, length=letters.length; i<length; i++) {
// 		let cLetter = letters[i];
// 		if (dict[cLetter]) {
// 			dict[cLetter]++;
// 		} else {
// 			dict[cLetter] = 1;
// 		}
// 	}
// 	for (let i=0, wLength=words.length; i<wLength; i++) {
// 		const dict2 = {};
// 		let broke = false;
// 		let currentWordLength = words[i].length;
// 		if (currentWordLength < min) {
// 			for (let j=0; j<currentWordLength; j++) {
// 				let cLetter2 = words[i][j];
// 				if (dict[cLetter2]) {
// 					if (dict2[cLetter2]) {
// 						dict2[cLetter2]++;
// 					} else {
// 						dict2[cLetter2] = 1;
// 					}
// 				}
// 			}
// 			for (let key in dict) {
// 				if (dict2[key] === undefined || dict[key] > dict2[key]) {
// 					broke = true;
// 					break;
// 				}
// 			}
// 			if (broke === true) {
// 				continue;
// 			} else {
// 				result = words[i];
// 				min = currentWordLength;
// 			}
// 		}
// 	}
// 	return result;
// };
// console.log(shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]))
// console.log(shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]))
// console.log(shortestCompletingWord("Ah71752", ["suggest", "letter", "of", "husband", "easy", "education", "drug", "prevent", "writer", "old"]))

// var rotatedDigits = function(N) {
// 	let count = 0;
//     for (let i=1; i<=N; i++) {
// 		let num = i.toString().split("")
// 		for (let j=0, length=num.length; j<length; j++) {
// 			if (num[j] === "3" || num[j] === "4" || num[j] === "7") {
// 				num = undefined;
// 				break;
// 			} else if (num[j] === "2") {
// 				num[j] = "5";
// 			} else if (num[j] === "5") {
// 				num[j] = "2";
// 			} else if (num[j] === "6") {
// 				num[j] = "9";
// 			} else if (num[j] === "9") {
// 				num[j] = "5";
// 			} else if (num[j] === "6") {
// 				num[j] = "5";
// 			}
// 		}
// 		if (num && i !== parseInt(num.join(""))) {
// 			count++;
// 		}
// 	}
// 	return count;
// };
// console.log(rotatedDigits(10));
// console.log(rotatedDigits(857));

// var rotatedDigits = function(N) {
// 	let count = 0;
//     for (let i=1; i<=N; i++) {
// 		const dict = {};
// 		let num = i.toString()
// 		for (let j=0, length=num.length; j<length; j++) {
// 			if (dict[num[j]]) {
// 				dict[num[j]]++
// 			} else {
// 				dict[num[j]] = 1;
// 			}
// 		}
// 		if (dict[3] || dict[4] || dict[7]) {
// 			continue;
// 		} else if (dict[2] || dict[5] || dict[6] || dict[9]) {
// 			count++;
// 		}
// 	}
// 	return count;
// };
// console.log(rotatedDigits(10));
// console.log(rotatedDigits(857));

// var rotatedDigits = function (N) {
// 	let count = 0;
// 	for (let i=1; i<=N; i++) {
// 		let num = i.toString();
// 		if (!/[347]/.test(num) && /[2569]/.test(num)) {
// 			count++;
// 		}
// 	}
// 	return count;
// };
// console.log(rotatedDigits(10));
// console.log(rotatedDigits(857));

// var rotateString = function(A, B) {
// 	if (A.length !== B.length || !(A+A).includes(B)) {
// 		return false;
// 	}
// 	return true;
// };
// console.log(rotateString('abcde', 'cdeab'))
// console.log(rotateString('abcde', 'abced'))

// var subdomainVisits = function (cpdomains) {
// 	let dict = {};
// 	let res = [];
// 	for (let websites of cpdomains) {
// 		let split = websites.split(" ");
// 		let visits = parseInt(split[0]);
// 		let domains = split[1].split(".");
// 		let key = domains.pop();
// 		if (dict[key]) {
// 			dict[key] += visits;
// 		} else {
// 			dict[key] = visits
// 		}
// 		while (domains.length > 0) {
// 			key = domains.pop() + "." + key;
// 			if (dict[key]) {
// 				dict[key] += visits;
// 			} else {
// 				dict[key] = visits
// 			}
// 		}
// 	}
// 	for (let i in dict) {
// 		res.push(dict[i] + " " + i)
// 	}
// 	return res;
// };
// console.log(subdomainVisits(["9001 discuss.leetcode.com"]));
// console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));

// var mostCommonWord = function(paragraph, banned) {
// 	let edited = paragraph.toLowerCase().replace(/,/g, " ").replace(/[^a-z ]/g, "").split(" ");
// 	let dict = {}
//     for (let i=0; i<edited.length; i++) {
// 		if (dict[edited[i]]) {
// 			dict[edited[i]]++
// 		} else {
// 			dict[edited[i]] = 1
// 		}
// 	}
// 	for (let key in dict) {
// 		if (banned.includes(key) || key.length < 1) {
// 			dict[key] = undefined;
// 		}
// 	}
// 	let max = 0;
// 	for (let key in dict) {
// 		if (dict[key] > max) {
// 			max = dict[key];
// 			res = key
// 		}
// 	}
// 	return res
// };
// console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
// console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));

// var mostCommonWord = function(paragraph, banned) {
// 	let edited = paragraph.toLowerCase().replace(/[\W_]+/g," ").split(" ");
// 	let dict = {}
//     for (let i=0; i<edited.length; i++) {
// 		if (dict[edited[i]]) {
// 			dict[edited[i]]++
// 		} else {
// 			dict[edited[i]] = 1
// 		}
// 	}
// 	for (let key in dict) {
// 		if (banned.includes(key)) {
// 			dict[key] = undefined;
// 		}
// 	}
// 	let max = 0;
// 	for (let key in dict) {
// 		if (dict[key] > max) {
// 			max = dict[key];
// 			res = key
// 		}
// 	}
// 	return res
// };
// console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
// console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));

// var shortestToChar = function (S, C) {
// 	const res = [];
// 	const arr = []
// 	let length = S.length;
// 	for (let i=0; i<length; i++) {
// 		if (S[i] === C) {
// 			arr.push(i)
// 		}
// 	}
// 	for (let i=0; i<length; i++) {
// 		let min = length;
// 		for (let j=0, aLength=arr.length; j<aLength; j++) {
// 			min = Math.min(Math.abs(i - arr[j]), min);
// 		}
// 		res.push(min);
// 	}
// 	return res;
// };
// console.log(shortestToChar("loveleetcode", 'e'))

// var toGoatLatin = function (S) {
// 	let split = S.split(" ");
// 	let res = "";
// 	for (let i = 0, length = split.length; i < length; i++) {
// 		let char = split[i][0];
// 		let end = "";
// 		let j = 0;
// 		while (j < i + 1) {
// 			end += "a";
// 			j++;
// 		}
// 		if (
// 			char === "a" ||
// 			char === "e" ||
// 			char === "i" ||
// 			char === "o" ||
// 			char === "u" ||
// 			char === "A" ||
// 			char === "E" ||
// 			char === "I" ||
// 			char === "O" ||
// 			char === "U"
// 		) {
// 			res += split[i] + "ma" + end + " ";
// 		} else {
// 			res += split[i].substring(1) + char + "ma" + end + " ";
// 		}
// 	}
// 	return res.trim();
// };
// console.log(toGoatLatin("I speak Goat Latin"));
// console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));

// var toGoatLatin = function (S) {
// 	let split = S.split(" ");
// 	for (let i = 0, length = split.length; i < length; i++) {
// 		let word = split[i];
// 		let char = split[i][0];
// 		let end = "a".repeat(i + 1)
// 		if (word.match(/^[aeiouAEIOU]/g)) {
// 			split[i] = word + "ma" + end;
// 		} else {
// 			split[i] = word.substring(1) + char + "ma" + end;
// 		}
// 	}
// 	return split.join(" ");
// };
// console.log(toGoatLatin("I speak Goat Latin"));
// console.log(toGoatLatin("The quick brown fox jumped over the lazy dog"));

// var largeGroupPositions = function(S) {
// 	const res = [];
// 	let count = 1;
// 	for (let i=1, length=S.length; i<=length; i++) {
// 		if (S[i] === S[i-1]) {
// 			count++;
// 		} else {
// 			if (count > 2) {
// 				res.push([i-count ,i-1])
// 			}
// 			count = 1;
// 		}
// 	}
// 	return res;
// };
// console.log(largeGroupPositions("abbxxxxzzy"));
// console.log(largeGroupPositions("abc"));
// console.log(largeGroupPositions("abcdddeeeeaabbbcd"));
// console.log(largeGroupPositions("aaa"));

// var isRectangleOverlap = function(rec1, rec2) {
// 	let oneleft = rec1[0];
// 	let oneright = rec1[2];
// 	let onebottom = rec1[1];
// 	let onetop = rec1[3];
// 	let secondleft = rec2[0];
// 	let secondright = rec2[2];
// 	let secondbottom = rec2[1];
// 	let secondtop = rec2[3];

//     if (oneright > secondleft && secondright > oneleft) {
// 		if (onetop > secondbottom && secondtop > onebottom) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		return false;
// 	}
// };
// console.log(isRectangleOverlap([0,0,2,2], [1,1,3,3]));
// console.log(isRectangleOverlap([0,0,1,1], [1,0,2,1]));
// console.log(isRectangleOverlap([7,8,13,15], [10,8,12,20]));
// console.log(isRectangleOverlap([2,17,6,20], [3,8,6,20]));

// // using strings
// var backspaceCompare = function(S, T) {
//     let newS = "";
//     let newT = "";
//     for (let i=0, length=S.length; i<length; i++) {
//         if (S[i] === "#") {
//             newS = newS.slice(0,-1)
//         } else {
//             newS += S[i];
//         }
//     }
//     for (let i=0, length=T.length; i<length; i++) {
//         if (T[i] === "#") {
//             newT = newT.slice(0,-1)
//         } else {
//             newT += T[i];
//         }
//     }
//     return newS === newT;
// };
// console.log(backspaceCompare("ab#c", "ad#c"));
// console.log(backspaceCompare("ab##", "c#d#"));
// console.log(backspaceCompare("a##c", "#a#c"));
// console.log(backspaceCompare("a#c", "b"));

// // using strings and helper
// var backspaceCompare = function(S, T) {
//     function newString(str) {
//         let newStr = "";
//         for (let i=0, length=str.length; i<length; i++) {
//             if (str[i] === "#") {
//                 newStr = newStr.slice(0,-1)
//             } else {
//                 newStr += str[i];
//             }
//         }
//         return newStr;
//     }
//     return newString(S) === newString(T);
// };
// console.log(backspaceCompare("ab#c", "ad#c"));
// console.log(backspaceCompare("ab##", "c#d#"));
// console.log(backspaceCompare("a##c", "#a#c"));
// console.log(backspaceCompare("a#c", "b"));

// // using arrays
// var backspaceCompare = function(S, T) {
//     let newS = [];
//     let newT = [];
//     for (let i=0, length=S.length; i<length; i++) {
//         if (S[i] !== "#") {
//             newS.push(S[i])
//         } else {
//             newS.pop();
//         }
//     }
//     for (let i=0, length=T.length; i<length; i++) {
//         if (T[i] !== "#") {
//             newT.push(T[i])
//         } else {
//             newT.pop()
//         }
//     }
//     newS = newS.join("");
//     newT = newT.join("");
//     return newS === newT;
// };
// console.log(backspaceCompare("ab#c", "ad#c"));
// console.log(backspaceCompare("ab##", "c#d#"));
// console.log(backspaceCompare("a##c", "#a#c"));
// console.log(backspaceCompare("a#c", "b"));

// var maxDistToClosest = function(seats) {
//     let max = 0;
//     let length = seats.length;
//     for (let left=0, right=0; left<length; left=right) {
//         for (left=right; left<length && seats[left] === 1; left++) {

//         }
//         for (right=left; right<length && seats[right] === 0; right++) {

//         }
//         if (left === 0 || right === length) {
//             max = Math.max(max, (right - left));
//         } else {
//             max = Math.max(max, Math.floor((right-left+1)/2));
//         }
//     }
//     return max;
// };
// console.log(maxDistToClosest([1,0,0,0,1,0,1]))
// console.log(maxDistToClosest([1,0,0,0]))

// var maxDistToClosest = function(seats) {
//     let max = 0;
//     let length = seats.length;
//     for (let left=0, right=0; left<length; left=right) {
//         while (left<length && seats[left] === 1) {
//             left++
//         }
//         right = left;
//         while (right<length && seats[right] === 0) {
//             right++
//         }
//         if (left === 0 || right === length) {
//             max = Math.max(max, (right - left));
//         } else {
//             max = Math.max(max, Math.floor((right-left+1)/2));
//         }
//     }
//     return max;
// };
// console.log(maxDistToClosest([1,0,0,0,1,0,1]))
// console.log(maxDistToClosest([1,0,0,0]))

// var buddyStrings = function(A, B) {
//     let length = A.length;
//     let swap = [];
//     if (length !== B.length) {
//         return false;
//     }
//     let removeDup = new Set(A);
//     if (A === B) {
//         if (removeDup.size === length) {
//             return false;
//         }
//         return true;
//     }
//     for (let i=0; i<length; i++) {
//         if (A[i] !== B[i]) {
//             swap.push(i);
//         }
//     }
//     if (swap.length !== 2) {
//         return false;
//     }
//     let check = A.split("");
//     let temp = check[swap[0]];
//     check[swap[0]] = check[swap[1]];
//     check[swap[1]] = temp;
//     A = check.join("");
//     return A === B;
// };
// console.log(buddyStrings("ab", "ba"));
// console.log(buddyStrings("ab", "ab"));
// console.log(buddyStrings("aa", "aa"));
// console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"));
// console.log(buddyStrings("", "aa"));
// console.log(buddyStrings("abcaa", "abcbb"));

// var buddyStrings = function(A, B) {
//     let length = A.length;
//     let swap = [];
//     if (length !== B.length) {
//         return false;
//     }
//     let removeDup = new Set(A);
//     if (A === B) {
//         if (removeDup.size === length) {
//             return false;
//         }
//         return true;
//     }
//     for (let i=0; i<length; i++) {
//         if (A[i] !== B[i]) {
//             swap.push(i);
//         }
//     }
//     if (swap.length !== 2) {
//         return false;
//     }

//     return A[swap[0]] === B[swap[1]] && A[swap[1]] === B[swap[0]];
// };
// console.log(buddyStrings("ab", "ba"));
// console.log(buddyStrings("ab", "ab"));
// console.log(buddyStrings("aa", "aa"));
// console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"));
// console.log(buddyStrings("", "aa"));
// console.log(buddyStrings("abcaa", "abcbb"));

// var lemonadeChange = function(bills) {
//     let fives = 0;
//     let tens = 0;
//     for (let i=0, length=bills.length; i<length; i++) {
//         if (bills[i] === 5) {
//             fives++;
//         } else if (bills[i] === 10 && fives > 0) {
//             tens++;
//             fives--;
//         } else if (bills[i] === 20) {
//             if (tens > 0 && fives > 0) {
//                 tens--;
//                 fives--;
//             } else if (fives>2) {
//                 fives -= 3;
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(lemonadeChange([5,5,5,10,20]));
// console.log(lemonadeChange([5,5,10]));
// console.log(lemonadeChange([10,10]));
// console.log(lemonadeChange([5,5,10,10,20]));

// var transpose = function(A) {
//     const res = [];
//     let cLength = A[0].length;
//     let rLength = A.length;
//     for (let col=0; col<cLength; col++) {
//         const temp = [];
//         for (let row=0; row<rLength; row++) {
//             temp.push(A[row][col])
//         }
//         res.push(temp)
//     }
//     return res;
// };
// console.log(transpose( [[1,2,3],[4,5,6],[7,8,9]] ));
// console.log(transpose( [[1,2,3],[4,5,6]] ));

// // takes too much time but saves in memory
// var fairCandySwap = function(A, B) {
//     let sumA = A.reduce((a, b) => a + b, 0);
//     let sumB = B.reduce((a, b) => a + b, 0);
//     let target = (sumA+sumB)/2;
//     for (let i=0, length=A.length; i<length; i++) {
//         let check = target - (sumA - A[i]); 
//         if (B.includes(check)) {
//             return [A[i], check];
//         }
//     }
// };
// console.log(fairCandySwap([1,1], [2,2]));
// console.log(fairCandySwap([1,2], [2,3]));
// console.log(fairCandySwap([2], [1,3]));
// console.log(fairCandySwap([1,2,5], [2,4]));

// // set is much faster to check but more memory
// var fairCandySwap = function(A, B) {
//     let sumA = A.reduce((a, b) => a + b, 0);
//     let sumB = B.reduce((a, b) => a + b, 0);
//     let target = (sumA+sumB)/2;
//     const setB = new Set(B);
//     for (let i=0, length=A.length; i<length; i++) {
//         let check = target - (sumA - A[i]); 
//         if (setB.has(check)) {
//             return [A[i], check];
//         }
//     }
// };
// console.log(fairCandySwap([1,1], [2,2]));
// console.log(fairCandySwap([1,2], [2,3]));
// console.log(fairCandySwap([2], [1,3]));
// console.log(fairCandySwap([1,2,5], [2,4]));

// var isMonotonic = function(A) {
//     let inc = false;
//     let dec = false;
//     for (let i=1, length=A.length; i<length; i++) {
//         let num = A[i];
//         let prev = A[i-1];
//         if (num < prev) {
//             if (inc === true) {
//                 return false;
//             }
//             dec = true;
//         } else if (num > prev) {
//             if (dec === true) {
//                 return false;
//             }
//             inc = true;
//         }
//     }
//     return true;
// };
// console.log(isMonotonic([1,2,2,3]));
// console.log(isMonotonic([6,5,4,4]));
// console.log(isMonotonic([1,3,2]));
// console.log(isMonotonic([1,2,4,5]));
// console.log(isMonotonic([1,1,1]));

// var isMonotonic = function(A) {
//     let inc = false;
//     let dec = false;
//     for (let i=0, length=A.length; i<length-1; i++) {
//         let num = A[i];
//         let next = A[i+1];
//         if (num < next) {
//             if (dec === true) {
//                 return false;
//             }
//             inc = true;
//         } else if (num > next) {
//             if (inc === true) {
//                 return false;
//             }
//             dec = true;
//         }
//     }
//     return true;
// };
// console.log(isMonotonic([1,2,2,3]));
// console.log(isMonotonic([6,5,4,4]));
// console.log(isMonotonic([1,3,2]));
// console.log(isMonotonic([1,2,4,5]));
// console.log(isMonotonic([1,1,1]));

// var smallestRangeI = function(A, K) {
//     let max = -Infinity;
//     let min = Infinity;
//     for (let i=0; i<A.length; i++) {
//         if (A[i] > max) {
//             max = A[i];
//         }
//         if (A[i] < min) {
//             min = A[i];
//         }
//     }
//     max = max - K;
//     min = min + K;
//     let res = max - min
//     if (res < 0) {
//         return 0;
//     }
//     return res;
// };
// console.log(smallestRangeI([1], 0));
// console.log(smallestRangeI([0,10], 2));
// console.log(smallestRangeI([1,3,6], 3));

// var smallestRangeI = function(A, K) {
//     let max = A[0];
//     let min = A[0];
//     for (let i=1, length=A.length; i<length; i++) {
//         let num = A[i];
//         if (num > max) {
//             max = num;
//         } else if (num < min) {
//             min = num;
//         }
//     }
//     max = max - K;
//     min = min + K;
//     let res = max - min
//     if (res < 0) {
//         return 0;
//     }
//     return res;
// };
// console.log(smallestRangeI([1], 0));
// console.log(smallestRangeI([0,10], 2));
// console.log(smallestRangeI([1,3,6], 3));

// // 914. X of a Kind in a Deck of Cards
// var hasGroupsSizeX = function(deck) {
//     const dict = {};
//     for (let i=0, length=deck.length; i<length; i++) {
//         let num = deck[i];
//         if (dict[num]) {
//             dict[num]++;
//         } else {
//             dict[num] = 1;
//         }
//     }
//     let res = 0;
//     for (let key in dict) {
//         res = gcd(res, dict[key])
//     }
//     return res > 1;

//     function gcd (a, b) {
//         return b > 0 ? gcd(b, a % b) : a;
//     }
// };
// console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]));
// console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));
// console.log(hasGroupsSizeX([1]));
// console.log(hasGroupsSizeX([1,1]));
// console.log(hasGroupsSizeX([1,1,2,2,2,2]));
// console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]));

// var isLongPressedName = function(name, typed) {
//     for (let i=0, j=0; i<name.length; i++) {
//         let nCount = 1;
//         let tCount = 0;
//         let current = name[i];
//         while (name[i] === name[i+1]) {
//             i++;
//             nCount++;
//         }
//         if (current !== typed[j]) {
//             return false;
//         } else {
//             while (typed[j] === name[i]) {
//                 j++;
//                 tCount++;
//             }
//         }
//         if (nCount > tCount) {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(isLongPressedName("alex", "aaleex"));
// console.log(isLongPressedName("saeed", "ssaaedd"));
// console.log(isLongPressedName("leelee", "lleeelee"));
// console.log(isLongPressedName("laiden", "laiden"));

// var validMountainArray = function (A) {
//     let asc = false;
//     let i = 1;
//     let length = A.length;
//     while (A[i] > A[i - 1]) {
//         asc = true;
//         i++;
//     }
//     if (i === length) {
//         return false;
//     }
//     i--;
//     while (i < length) {
//         if (A[i] <= A[i + 1]) {
//             return false;
//         } else {
//             desc = true;
//         }
//         i++;
//     }
//     return asc === true;
// };
// console.log(validMountainArray([2, 1]));
// console.log(validMountainArray([3, 5, 5]));
// console.log(validMountainArray([0, 3, 2, 1]));
// console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));

// var validMountainArray = function(A) {
//     let length = A.length;
//     if (length < 3) {
//         return false;
//     }
//     let asc = false;
//     let desc = false;
//     for (let i=0; i<length-1; i++) {
//         let curr = A[i];
//         let next = A[i+1];
//         if (curr < next) {
//             if (desc) {
//                 return false;
//             } else {
//                 asc = true;
//             }
//         } else if (curr > next) {
//             desc = true;
//         } else {
//             return false;
//         }
//     }
//     return desc && asc; 
// };
// console.log(validMountainArray([2, 1]));
// console.log(validMountainArray([3, 5, 5]));
// console.log(validMountainArray([0, 3, 2, 1]));
// console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));

// var isAlienSorted = function (words, order) {
//     for (let i=0, length=words.length-1; i<length; i++) {
//         let longer = Math.max(words[i].length, words[i + 1].length);
//         for (let j=0; j<longer; j++) {
//             let cur = order.indexOf(words[i][j]);
//             let next = order.indexOf(words[i+1][j]);
//             if (cur > next) {
//                 return false;
//             } else if (cur < next) {
//                 break;
//             }
//         }
//     }
//     return true;
// };
// console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
// console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"));
// console.log(isAlienSorted(["hello","hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));

// var isAlienSorted = function (words, order) {
//     for (let i=0, length=words.length-1; i<length; i++) {
//         let longer = Math.max(words[i].length, words[i + 1].length);
//         for (let j=0; j<longer; j++) {
//             let cur = order.indexOf(words[i][j]);
//             let next = order.indexOf(words[i+1][j]);
//             if (cur > next) {
//                 return false;
//             } else if (cur < next) {
//                 break;
//             }
//         }
//     }
//     return true;
// };
// console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
// console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
// console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"));
// console.log(isAlienSorted(["hello","hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));

// var largestPerimeter = function (A) {
//     A.sort( (a,b) => a-b );
//     for (let i=A.length-1; i>1; i--) {
//         let first = A[i];
//         let sum = A[i-1] + A[i-2];
//         if (first < sum) {
//             return first + sum;
//         }
//     }
//     return 0;
// };
// console.log(largestPerimeter([2,1,2]));
// console.log(largestPerimeter([1,2,1]));
// console.log(largestPerimeter([3,2,3,4]));
// console.log(largestPerimeter([3,6,2,3]));

// var sumEvenAfterQueries = function(A, queries) {
//     const res = [];
//     for (let i=0, length=queries.length; i<length; i++) {
//         A[queries[i][1]] += queries[i][0];
//         let sum = 0;
//         for (let j=0, aLength=A.length; j<aLength; j++) {
//             if (A[j] % 2 === 0) {
//                 sum += A[j];
//             }
//         }
//         res.push(sum)
//     }
//     return res;
// };
// console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));

// var sumEvenAfterQueries = function (A, queries) {
//     const res = [];
//     let sum = 0;
//     for (let i=0, length=A.length; i<length; i++) {
//         if (A[i] % 2 === 0) {
//             sum += A[i];
//         }
//     }
//     for (let i=0, length=queries.length; i<length; i++) {
//         const idx = queries[i][1];
//         const num = queries[i][0];
//         if (A[idx] % 2 === 0) {
//             sum -= A[idx];
//         }
//         A[idx] += num;
//         if (A[idx] % 2 === 0) {
//             sum += A[idx];
//         }
//         res.push(sum);
//     }
//     return res;
// };
// console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));

// // 541 reverse string 2
// var reverseStr = function(s, k) {
//     let res = "";
//     for (let i=0, length=s.length; i<length; i+=(2*k)) {
//         let temp = s.substr(i,k);
//         let flipped = temp.split("").reverse().join("");
//         res += flipped;
//         res += s.substr(i+k,k);
//     }
//     return res;
// };
// console.log(reverseStr("abcdefg", 2));

// var addToArrayForm = function(A, K) {
//     let converted = parseInt(A.join("")) + K;
//     return converted.toString().split("");
// };

// var addToArrayForm = function(A, K) {
//     let converted = BigInt(A.join("")) + BigInt(K);
//     return converted.toString().split("");
// };
// console.log(addToArrayForm([1,2,0,0], 34));
// console.log(addToArrayForm([2,7,4], 181));
// console.log(addToArrayForm([2,1,5], 806));
// console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1));
// console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));

// // 692. Top K Frequent Words
// USING LOCALE COMPARE TO SORT
// var topKFrequent = function(words, k) {
//     const dict = {};
//     for (let el in words) {
//         if (dict[words[el]]) {
//             dict[words[el]]++;
//         } else {
//             dict[words[el]] = 1;
//         }
//     }
//     return Object.keys(dict).sort((a, b) => dict[b] - dict[a] || a.localeCompare(b)).slice(0, k);
// };
// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));

// IF STATEMENTS FOR SORTING
// var topKFrequent = function(words, k) {
//     const dict = {};
//     for (let el in words) {
//         if (dict[words[el]]) {
//             dict[words[el]]++;
//         } else {
//             dict[words[el]] = 1;
//         }
//     }
//     return Object.keys(dict).sort((a,b) => {
//         if (dict[a] > dict[b]) {
//             return -1
//         } else if (dict[b] > dict[a]) {
//             return 1
//         } else {
//             if (a < b) {
//                 return -1
//             } else if (b < a) {
//                 return 1
//             }
//         }
//     }).slice(0, k);
// };
// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));

// // 1005. Maximize Sum Of Array After K Negations
// var largestSumAfterKNegations = function(A, K) {
//     let sum = 0;
//     for (let i=0; i<A.length; i++) {
//         sum += A[i];
//     }
//     A.sort(function (a, b) { return a - b });
//     for (let i=0; i<K; i++) {
//         let min = A[0];
//         sum -= 2*min;
//         A[0] *= -1;
//         A.sort(function (a, b) { return a - b });
//     }
//     return sum;
// };
// console.log(largestSumAfterKNegations([4,2,3], 1));
// console.log(largestSumAfterKNegations([3,-1,0,2], 3));
// console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2));

// var largestSumAfterKNegations = function (A, K) {
//     let sum = 0;
//     A.sort((a, b) => a - b);
//     let min = Infinity;
//     for (let i=0, length=A.length; i<length; i++) {
//         let num = A[i];
//         if (num < 0 && K > 0) {
//             sum -= num;
//             K--;
//             if (min > -num) {
//                 min = -num;
//             }
//         } else {
//             sum += num;
//             if (min > num) {
//                 min = num;
//             }
//         }
//     }
//     if (K % 2 === 1) {
//         sum -= 2*min;
//     }
//     return sum;
// };
// console.log(largestSumAfterKNegations([4, 2, 3], 1));
// console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
// console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));

// var canThreePartsEqualSum = function (A) {
//     let sum = 0;
//     for (let el of A) {
//         sum += el;
//     }
//     if (sum % 3 !== 0) {
//         return false;
//     }
//     let third = sum/3;
//     let temp = 0;
//     let count = 0;
//     for (let el of A) {
//         temp += el;
//         if (temp === third) {
//             count++;
//             temp = 0;
//         }
//         if (count > 3) {
//             return false;
//         }
//     }
//     return count === 3;
// };
// console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]));
// console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]));
// console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]));

// // 3. Longest Substring Without Repeating Characters
// USING DICT
// var lengthOfLongestSubstring = function(s) {
//     let max = 0;
//     let start = 0;
//     let dict = {};
//     for (let i=0; i<s.length; i++) {
//         if (dict[s[i]] >= start) start = dict[s[i]]+1;
//         dict[s[i]] = i;
//         if(i - start + 1 > max) max = i - start + 1;

//     }
//     return max;
// };
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("aab"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("ckilbkd"));

// USING MAPS
// var lengthOfLongestSubstring = function(s) {
//     var start = 0, maxLen = 0;
//     var map = new Map();

//     for(var i = 0; i < s.length; i++) {
//         var ch = s[i];
//         if(map.get(ch) >= start) start = map.get(ch) + 1;
//         map.set(ch, i);
//         if(i - start + 1 > maxLen) maxLen = i - start + 1;
//     }

//     return maxLen;
//   };
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("aab"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("ckilbkd"));

// USING STRING
// var lengthOfLongestSubstring = function(s) {
//     let length = s.length;
//     if (length < 2) {
//         return length;
//     }
//     let start = 0;
//     let i = 1;
//     let res = 1;
//     while (i<length) {
//         let str = s.slice(start,i);
//         let check = str.indexOf(s[i]);
//         if (check !== -1) {
//             start = start+check+1
//         }
//         i++
//         res = i-start > res ? i-start : res;
//     }
//     return res;
// };
// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring("aab"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("ckilbkd"));

// // 1051. Height Checker
// // SLOW BECAUSE OF SLICE
// var heightChecker = function(heights) {
//     const sorted = heights.slice().sort((a,b) => {return a-b});
//     let count = 0;
//     for (let i=0, len=heights.length; i<len; i++) {
//         if (heights[i] !== sorted[i]) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(heightChecker([1,1,4,2,1,3]));

// // SPREAD OPERATOR
// var heightChecker = function(heights) {
//     const sorted = [...heights].sort((a,b) => {return a-b});
//     let count = 0;
//     for (let i=0, len=heights.length; i<len; i++) {
//         if (heights[i] !== sorted[i]) {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(heightChecker([1,1,4,2,1,3]));

// // 944. Delete Columns to Make Sorted
// var minDeletionSize = function(A) {
//     let count = 0;
//     for (let i=0, len=A[0].length; i<len; i++) {
//         let decrease = false;
//         for (let j=0, col=A.length-1; j<col; j++) {
//             if (A[j][i] > A[j+1][i]) {
//                 decrease = true;
//             }
//         }
//         if (decrease) {
//             count++
//         }
//     }
//     return count;
// };
// console.log(minDeletionSize(["cba","daf","ghi"]));
// console.log(minDeletionSize(["a", "b"]));
// console.log(minDeletionSize(["zyx","wvu","tsr"]));

// // 1078. Occurrences After Bigram
// var findOcurrences = function(text, first, second) {
//     let res = [];
//     text = text.split(" ");
//     for (let i=0, len=text.length-2; i<len; i++) {
//         if (text[i] === first && text[i+1] === second) {
//             res.push(text[i+2])
//         }
//     }
//     return res;
// };
// console.log(findOcurrences("alice is a good girl she is a good student", "a", "good"));
// console.log(findOcurrences("we will we will rock you", "we", "will"))

// // 589. N-ary Tree Preorder Traversal
// var preorder = function(root) {
//     const res = [];
//     traversal(root);
//     return res;

//     function traversal (node) {
//         if (node == null) {
//         return res;
//         }
//         res.push(node.val);
//         for (let i=0; i<node.children.length; i++) {
//             traversal(node.children[i])
//         }
//         return res;
//     }
// };

// // 590. N-ary Tree Postorder Traversal
// var postorder = function(root) {
//     const res = [];
//     traversal(root);
//     return res;

//     function traversal (node) {
//         if (node == null) {
//         return res;
//         }
//         for (let i=0; i<node.children.length; i++) {
//             traversal(node.children[i]);
//         }
//         res.push(node.val);
//         return res;
//     }
// };

// // 1108. Defanging an IP Address
// var defangIPaddr = function(address) {
//     return address.split(".").join("[.]")
// };
// console.log(defangIPaddr("1.1.1.1"));

// // REGEX
// var defangIPaddr = function(address) {
//     return address.replace(/\./g, "[.]");
// };
// console.log(defangIPaddr("1.1.1.1"));

// // 1021. Remove Outermost Parentheses
// var removeOuterParentheses = function(S) {
//     let res = "";
//     let count = 0;
//     for (let i=0, length=S.length; i<length; i++) {
//         let char = S[i];
//         if (char === "(") {
//             if (count > 0) {
//                 res += char;
//             }
//             count++;
//         } else if (char === ")") {
//             if (count > 1) {
//                 res += char;
//             }
//             count--;
//         }
//     }
//     return res;
// };
// console.log(removeOuterParentheses("(()())(())"));
// console.log(removeOuterParentheses("(()())(())(()(()))"));
// console.log(removeOuterParentheses("()()"));

// // 461. Hamming Distance
// var hammingDistance = function(x, y) {
//     let count = 0;
//     let xor = x ^ y;
//     xor = xor.toString(2);
//     for (let i=0; i<xor.length; i++) {
//         if (xor[i] === "1") {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(hammingDistance(1,4));

// // 999. Available Captures for Rook
// var numRookCaptures = function (board) {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             if (board[i][j] === "R") {
//                 var rook = [i, j];
//                 break;
//             }
//         }
//     }
//     let count = 0;

//     // check up
//     let x = rook[0];
//     let y = rook[1];
//     while (x > 0) {
//         if (board[x - 1][y] === "p") {
//             count++;
//             break;
//         } else if (board[x - 1][y] === "B") {
//             break;
//         } else {
//             x--;
//         }
//     }

//     // check down
//     x = rook[0];
//     y = rook[1];
//     while (x < board.length-1) {
//         if (board[x + 1][y] === "p") {
//             count++;
//             break;
//         } else if (board[x + 1][y] === "B") {
//             break;
//         } else {
//             x++;
//         }
//     }

//     // check left
//     x = rook[0];
//     y = rook[1];
//     while (y > 0) {
//         if (board[x][y - 1] === "p") {
//             count++;
//             break;
//         } else if (board[x][y - 1] === "B") {
//             break;
//         } else {
//             y--;
//         }
//     }

//     // check right
//     x = rook[0];
//     y = rook[1];
//     while (y < board[0].length-1) {
//         if (board[x][y + 1] === "p") {
//             count++;
//             break;
//         } else if (board[x][y + 1] === "B") {
//             break;
//         } else {
//             y++;
//         }
//     }

//     return count;
// };
// let map = [
//     [".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", "p", ".", ".", ".", "."],
//     [".", ".", ".", "R", ".", ".", ".", "p"],
//     [".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", "p", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", "."],
//     [".", ".", ".", ".", ".", ".", ".", "."]
// ];
// // console.log(numRookCaptures(map));

// let map2 = [
//     [".",".",".",".",".",".",".","."],
//     [".","p","p","p","p","p",".","."],
//     [".","p","p","B","p","p",".","."],
//     [".","p","B","R","B","p",".","."],
//     [".","p","p","B","p","p",".","."],
//     [".","p","p","p","p","p",".","."],
//     [".",".",".",".",".",".",".","."],
//     [".",".",".",".",".",".",".","."]
// ];
// // console.log(numRookCaptures(map2));

// let map3 = [
//     [".",".",".",".",".",".",".","."],
//     [".",".",".","p",".",".",".","."],
//     [".",".",".","p",".",".",".","."],
//     ["p","p",".","R",".","p","B","."],
//     [".",".",".",".",".",".",".","."],
//     [".",".",".","B",".",".",".","."],
//     [".",".",".","p",".",".",".","."],
//     [".",".",".",".",".",".",".","."]
// ]
// console.log(numRookCaptures(map3));

// // 559. Maximum Depth of N-ary Tree
// var maxDepth = function (root) {
//     if (!root) {
//         return 0;
//     }
//     let max = 0;
//     let temp = 0;
//     for (let child of root.children) {
//         temp = maxDepth(child);
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max + 1;
// };

// // 1002. Find Common Characters
// var commonChars = function(A) {
//     let res = A[0].split("");
//     for (let i=1, length=A.length; i<length; i++) {
//         var temp = A[i].split("");
//         res = res.filter(char => {
//             let idx = temp.indexOf(char);
//             if (idx > -1) {
//                 temp[idx] = false;
//                 return true;
//             }
//             return false;
//         })
//     }
//     return res;
// };
// console.log(commonChars(["bella","label","roller"]));

// // 671. Second Minimum Node In a Binary Tree
// var findSecondMinimumValue = function (root) {
//     let set = new Set();
//     helper(root);
//     function helper(node) {
//         if (node) {
//             if (!set[node.val]) {
//                 set.add(node.val);
//             }
//             helper(node.left);
//             helper(node.right);
//         }
//     }
//     let min = Infinity;
//     let second = Infinity;
//     for (let num of set.values()) {
//         if (num < min) {
//             second = min;
//             min = num;
//         } else if (num < second) {
//             second = num;
//         }
//     }
//     if (second === Infinity) {
//         return -1;
//     }
//     return second;
// };

// // 1022. Sum of Root To Leaf Binary Numbers
// var sumRootToLeaf = function (root) {
//     var sum = 0;
//     var string = "";
//     helper(root, string);
//     function helper(node, string) {
//         if (!node) {
//             return;
//         }
//         string += node.val;
//         helper(node.left, string);
//         helper(node.right, string);
//         if (!node.left && !node.right) {
//             sum += parseInt(string, 2);
//         }
//     }
//     return sum;
// };

// // 598. Range Addition II
// var maxCount = function (m, n, ops) {
//     let length = ops.length;
//     if (length == 0) {
//         return m * n;
//     }
//     let left = m
//     let right = n
//     for (let i = 0; i < length; i++) {
//         if (ops[i][0] < left) {
//             left = ops[i][0]
//         }
//         if (ops[i][1] < right) {
//             right = ops[i][1]
//         }
//     }
//     return left * right;
// };
// console.log(maxCount(3, 3, [[2,2],[3,3]]))

// // 1047. Remove All Adjacent Duplicates In String
// var removeDuplicates = function(S) {
//     S = S.split("");
//     for(let i=0; i<S.length; i++) {
//         if (S[i] === S[i+1]) {
//             S.splice(i,2)
//             i -= 2;
//             if (i < 0) {
//                 i =-1
//             }
//         }
//     }
//     return S.join("");
// };
// console.log(removeDuplicates("abbaca"));

// // 872. Leaf-Similar Trees
// var leafSimilar = function (root1, root2) {
//     let arr1 = [];
//     let arr2 = [];
//     helper(root1, arr1);
//     helper(root2, arr2);

//     function helper(node, arr) {
//         if (!node.left && !node.right) {
//             arr.push(node.val);
//             return;
//         }
//         if (node.left) {
//             helper(node.left, arr)
//         }
//         if (node.right) {
//             helper(node.right, arr)
//         }
//     }
//     return arr1.join("") === arr2.join("");
// };

// // 1103. Distribute Candies to People
// var distributeCandies = function(candies, num_people) {
//     const res = new Array(num_people).fill(0);
//     var i=0;
//     var candycount = 1;
//     while (candies >= candycount) {
//         res[i] += candycount;
//         candies -= candycount;
//         candycount++;
//         i++;
//         if (i === num_people) {
//             i=0;
//         }
//     }
//     res[i] += candies;
//     return res;
// };
// console.log(distributeCandies(7, 4));
// console.log(distributeCandies(10, 3));

// // 108. Convert Sorted Array to Binary Search Tree
// // USING SLICE METHOD
// var sortedArrayToBST = function (nums) {
//     if (!nums.length) {
//         return null;
//     }
//     let mid = Math.floor(nums.length / 2);
//     let root = new TreeNode(nums[mid]);
//     root.left = sortedArrayToBST(nums.slice(0, mid));
//     root.right = sortedArrayToBST(nums.slice(mid + 1));
//     return root;
// };

// // USING HELPER FUNCTION AND RANGES
// var sortedArrayToBST = function (nums) {
//     if (!nums.length) {
//         return null;
//     }
//     return helper(0, nums.length)

//     function helper(start, end) {
//         if (start >= end) {
//             return null;
//         }
//         let mid = start + Math.floor((end - start) / 2);
//         let root = new TreeNode(nums[mid]);
//         root.left = helper(start, mid);
//         root.right = helper(mid + 1, end);
//         return root;
//     }
// };

// // 130. Surrounded Regions
// var solve = function (board) {
//     function dfs(board, i, j) {
//         if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== "O") {
//             return 0;
//         }
//         board[i][j] = "V";
//         dfs(board, i + 1, j);
//         dfs(board, i - 1, j);
//         dfs(board, i, j + 1);
//         dfs(board, i, j - 1);
//         return 1;
//     }
//     if (board.length === 0) {
//         return;
//     }
//     let length = board.length;
//     let length2 = board[0].length;

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length2; j++) {
//             if (i === 0 || i === length - 1 || j === 0 || j === length2 - 1) {
//                 dfs(board, i, j);
//             }
//         }
//     }
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length2; j++) {
//             if (board[i][j] === "O") {
//                 board[i][j] = "X"
//             } else if (board[i][j] === "V") {
//                 board[i][j] = "O"
//             }
//         }
//     }
//     return board;
// };
// let board = [
//     ["X", "X", "X", "X"],
//     ["X", "O", "O", "X"],
//     ["X", "X", "O", "X"],
//     ["X", "O", "X", "X"]
// ];
// console.log(solve(board));

// // 250. Count Univalue Subtrees
// var countUnivalSubtrees = function (root) {
//     var count = 0;
//     helper(root);
//     return count;

//     function helper(node) {
//         if (!node) return false;

//         let leftUnivalue;
//         let rightUnvalue;

//         if (node.left) {
//             leftUnivalue = helper(node.left);
//         }
//         if (node.right) {
//             rightUnivalue = helper(node.right);
//         }

//         if (node.left && (node.val !== node.left.val || !leftUnivalue)) {
//             return false;
//         }
//         if (node.right && (node.val !== node.right.val || !rightUnivalue)) {
//             return false;
//         }
//         count++;
//         return true;
//     }
// };

// // 937. Reorder Log Files
// var reorderLogFiles = function (logs) {
//     let temp = [];
//     let res = [];
//     for (let i = 0; i < logs.length; i++) {
//         logs[i] = logs[i].split(" ");
//         if (Number.isInteger(parseInt(logs[i][1])) === true) {
//             temp.push(logs[i].join(" "));
//         } else {
//             logs[i].push(logs[i].shift())
//             res.push(logs[i].join(" "));
//         }
//     }
//     res.sort();
//     for (let i=0; i<res.length; i++) {
//         res[i] = res[i].split(" ")
//         res[i].unshift(res[i].pop())
//         res[i] = res[i].join(" ")
//     }
//     for (let i=0; i<temp.length; i++) {
//         res.push(temp[i]);
//     }
//     return res;
// };
// console.log(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"]))

// // 498. Diagonal Traverse
// var findDiagonalOrder = function (matrix) {
//     if (matrix.length === 0) {
//         return res;
//     }
//     const res = [];
//     let width = matrix[0].length;
//     let height = matrix.length
//     let end = width * height;
//     let up = true;
//     let i = 0;
//     let j = 0;

//     while (res.length < end) {
//         res.push(matrix[i][j])
//         if (up === true) {
//             if (j + 1 === width) {
//                 i++;
//                 up = false;
//             } else if (i - 1 < 0) {
//                 j++;
//                 up = false;
//             } else {
//                 i--;
//                 j++;
//             }
//         } else {
//             if (i + 1 === height) {
//                 j++;
//                 up = true;
//             } else if (j - 1 < 0) {
//                 i++;
//                 up = true;
//             } else {
//                 j--;
//                 i++;
//             }
//         }
//     }
//     return res;
// }
// let matrix =
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// console.log(findDiagonalOrder(matrix));

// // 102. Binary Tree Level Order Traversal
// // RECURSION
// var levelOrder = function (root) {
//     const res = [];
//     helper(root, 0);
//     return res;

//     function helper(node, level) {
//         if (!node) {
//             return;
//         }
//         if (res.length < level + 1) {
//             res.push([])
//         }
//         // // cound be written this way
//         // if(!res[level]){
//         //     res[level] = []
//         // }

//         helper(node.left, level + 1)
//         helper(node.right, level + 1)
//         res[level].push(node.val)
//     }
// };

// // // STACKS
// var levelOrder = function(root) {
// const res = [];
// let stack = [];
// if (root) {
//     stack.push(root)
// }

// while (stack.length > 0) {
//     let level = [];
//     let length = stack.length
//     for (let i=0; i<length; i++) {
//         let node = stack.shift();
//         level.push(node.val)
//         if (node.left) {
//             stack.push(node.left);
//         }
//         if (node.right) {
//             stack.push(node.right);
//         }
//     }
//     res.push(level);
// }

// return res;
// };

// // 341. Flatten Nested List Iterator
// var NestedIterator = function(nestedList) {
//     this.queue = helper(nestedList);

//     function helper(nested, res = []) {
//         if (!nested.length) return res;
//         while (nested.length) {
//             let el = nested.shift();
//             if (el.isInteger()) {
//                 res.push(el.getInteger())
//             } else {
//                 helper(el.getList(), res)
//             }
//         }
//         return res;
//     }
// };
// NestedIterator.prototype.hasNext = function() {
//     return this.queue.length;
// };

// NestedIterator.prototype.next = function() {
//     return this.queue.shift();
// };

// // USING SPREAD OPERATOR
// var NestedIterator = function(nestedList) {
//     this.queue = nestedList;
// };

// NestedIterator.prototype.hasNext = function() {
//     while (this.queue.length) {
//         if (this.queue[0].isInteger()) {
//             return true;
//         } else {
//             let el = this.queue[0].getList();
//             this.queue.shift();
//             this.queue.unshift(...el)
//         }
//     }
// };

// NestedIterator.prototype.next = function() {
//     return this.queue.shift().getInteger();
// };

// // 515. Find Largest Value in Each Tree Row
// var largestValues = function(root) {
//     const res = [];
//     helper(root, 0);
//     const max = [];
//     for (let i=0; i<res.length; i++) {
//         max.push(Math.max(...res[i]));
//     }
//     return max;
//     function helper(node, level) {
//         if (!node) {
//             return;
//         }
//         if(!res[level]){
//             res[level] = []
//         }
//         helper(node.left, level + 1)
//         helper(node.right, level + 1)
//         res[level].push(node.val)
//     }
// };

// Stacks
// var largestValues = function (root) {
//     const res = [];
//     let stack = [];
//     if (root) {
//         stack.push(root)
//     }
//     while (stack.length > 0) {
//         let level = [];
//         let length = stack.length
//         for (let i=0; i<length; i++) {
//             let node = stack.shift();
//             level.push(node.val)
//             if (node.left) {
//                 stack.push(node.left);
//             }
//             if (node.right) {
//                 stack.push(node.right);
//             }
//         }
//         res.push(Math.max(...level));
//     }
//     return res;
// };

// // 38. Count and Say
// var countAndSay = function(n) {
//     let dict = {
//         '1':'1',
//         '2':'11',
//         '3':'21',
//         '4':'1211',
//         '5':'111221'
//     }
//     if(n > 5){
//         for(let i = 6; i <= n; i++){
//             let temp = ''
//             let counter = 1;
//             for(let j = 0; j < dict[i-1].length; j++){
//                 if(dict[i-1][j] == dict[i-1][j+1]){
//                     counter++
//                 } else {
//                     temp += counter + dict[i-1][j]
//                     counter = 1
//                 }
//             }
//             dict[i] = temp
//         }
//     }
//     return dict[n]
// };
// console.log(countAndSay(6));

// // 155. Min Stack
// var MinStack = function() {
//     this.stack = []
//     this.history = []
//     this.min = Infinity;
// };

// MinStack.prototype.push = function(x) {
//     if(x <= this.min){
//         this.min = x
//     }
//     this.stack.push(x)
//     this.history.push(this.min)
// };

// MinStack.prototype.pop = function() {
//     this.stack.pop()
//     this.history.pop()
//     if(this.history.length == 0){
//         this.min = Infinity;
//     } else {
//         this.min = this.history[this.history.length - 1]
//     }
// };

// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length -1]
// };

// MinStack.prototype.getMin = function() {
//     return this.min;
// };

// // 94. Binary Tree Inorder Traversal
// RECURSIVE WITH HELPER FUNCTION
// var inorderTraversal = function(root) {
//     if (!root) return [];
//     let res = [];
//     helper(root)
//     return res;

//     function helper(node) {
//         if (node.left) helper(node.left);
//         res.push(node.val);
//         if (node.right) helper(node.right);
//     }
// };

// // RECURSIVE ONE FUNCTION
// var inorderTraversal = function(root, res=[]) {
//     if (root) {
//         if (root.left) inorderTraversal(root.left, res);
//         res.push(root.val);
//         if (root.right) inorderTraversal(root.right, res);
//     }
//     return res;
// };

// // ITERATIVE
// var inorderTraversal = function (root) {
//     const stack = [];
//     const res = [];
//     while (root || stack.length) {
//         if (root) {
//             stack.push(root);
//             root = root.left;
//         } else {
//             root = stack.pop();
//             res.push(root.val);
//             root = root.right;
//         }
//     }
//     return res;
// };

// // 2. Add Two Numbers
// var addTwoNumbers = function (l1, l2) {
//     let num1 = "";
//     let num2 = "";
//     while (l1) {
//         num1 = l1.val + num1
//         l1 = l1.next
//     }
//     while (l2) {
//         num2 = l2.val + num2
//         l2 = l2.next
//     }
//     let sum = BigInt(num1) + BigInt(num2);
//     sum = sum.toString();
//     let counter = (sum.length - 1)
//     var res = new ListNode(parseInt(sum[counter]))
//     let node = res;
//     while (counter > 0) {
//         node.next = new ListNode(parseInt(sum[counter - 1]))
//         node = node.next
//         counter--;
//     }
//     return res;
// };

// // 67. Add Binary
// var addBinary = function(a, b) {
//     let i = a.length-1;
//     let j = b.length-1;
//     let carry = 0;
//     let res = "";
//     while (i > -1 || j > -1) {
//         let aChar = a[i] || 0;
//         let bChar = b[j] || 0;
//         let sum = parseInt(aChar) + parseInt(bChar) + carry;
//         let newDigit = sum % 2;
//         carry = Math.floor(sum/2);
//         res = newDigit + res;
//         i--;
//         j--;
//     }
//     if (carry) res = carry + res;
//     return res
// };
// console.log(addBinary("11","1"))
// console.log(addBinary("1010","1011"))

// // 328. Odd Even Linked List
// var oddEvenList = function (head) {
//     if (!head) return head;
//     let lastNode = head;
//     while (lastNode.next) {
//         lastNode = lastNode.next;
//     }
//     let node = head;
//     let end = lastNode;
//     while (node !== end && node.next !== end) {
//         lastNode.next = node.next;
//         node.next = node.next.next;
//         lastNode = lastNode.next;
//         lastNode.next = null;
//         node = node.next
//     }
//     if (node.next === end) {
//         lastNode.next = node.next
//         node.next = node.next.next;
//         lastNode = lastNode.next;
//         lastNode.next = null;
//     }
//     return head;
// };

// // SPLIT LIST
// var oddEvenList = function (head) {
//     if (!head) return head;
//     var odd = head;
//     var even = head.next;
//     while (odd.next && odd.next.next) {
//         var tmp = odd.next;
//         odd.next = odd.next.next;
//         odd = odd.next;
//         tmp.next = odd.next;
//     }
//     odd.next = even;
//     return head;
// };

// // UGLY NUMBER AMAZING NUMBER
// function amazing(num) {

//     let i = 2;
//     let count = 0;
//     while (count<num) {
//         if (isUgly(i)) {
//             count++
//         }
//         i++;
//     }
//     return i-1;

//     function isUgly(num) {
//         if (num === 0) {
//             return false;
//         }
//         if (num === 1) {
//             return true;
//         }
//         if (num % 2 === 0) {
//             return isUgly(num / 2);
//         }
//         if (num % 3 === 0) {
//             return isUgly(num / 3);
//         }
//         if (num % 7 === 0) {
//             return isUgly(num / 7);
//         }
//         return false;
//     };
// }
// console.log(amazing(10))

// // 128. Longest Consecutive Sequence
// var longestConsecutive = function(nums) {
//     let res = -Infinity;
//     let set = new Set (nums);
//     for (let i=0; i<nums.length; i++) {
//         if (!set.has(nums[i]-1)) {
//             let next = nums[i]+1;
//             while (set.has(next)) {
//                 next++;
//             }
//             if (next-nums[i] > res) {
//                 res = next-nums[i]
//             }
//         }
//     }
//     return res;
// };
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

// // 33. Search in Rotated Sorted Array
// var search = function(nums, target) {
//     let start = 0;
//     let end = nums.length-1;
//     if (target === nums[start]) return start;
//     if (target === nums[end]) return end;
//     while (start < end) {
//         if (target === nums[start]) return start;
//         if (target === nums[end]) return end;
//         let mid = Math.floor((end+start)/2);
//         if (target === nums[mid]) return mid;
//         if (nums[start] < nums[mid]) {
//             if (target > nums[start] && target < nums[mid]) {
//                 end = mid-1;
//             } else {
//                 start = mid+1;
//             }
//         } else {
//             if ( target > nums[mid] && target < nums[end]) {
//                 start = mid+1;
//             } else {
//                 end = mid-1;
//             }
//         }
//     }
//     return -1;
// };
// console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([4,5,6,7,0,1,2], 3));
// console.log(search([4,5,6,7,0,1,2], 1));
// console.log(search([4,5,6,7,8,1,2,3], 8));

// // 153. Find Minimum in Rotated Sorted Array
// var findMin = function(nums) {
//     let start = 0;
//     let end = nums.length-1;
//     while (end - start > 1) {
//         let mid = Math.floor((end+start)/2);
//         if (nums[mid] > nums[end]) {
//             start = mid;
//         } else {
//             end = mid;
//         }
//     }
//     return Math.min(nums[start],nums[end]);
// };
// console.log(findMin([3,4,5,1,2], 1));

// function reverseStringInArrays (arr) {
//     for (let i=0; i<arr.length; i++) {
//         arr[i] = helper(arr[i]);
//     }
//     return arr;

//     function helper(el) {
//         let temp = el.split("").reverse().join("");
//         return temp
//     }
// }
// console.log(reverseStringInArrays(['eno', 'owt', 'eerht']))

// function reverseStringInArrays (arr) {
//     for (let i=0; i<arr.length; i++) {
//         arr[i] = helper(arr[i]);
//     }
//     return arr;

//     function helper(el) {
//         let arr = el.split("");
//         for (let i=0; i<el.length/2; i++) {
//             let temp = arr[i];
//             arr[i] = arr[el.length-1-i];
//             arr[el.length-1-i] = temp;
//         }
//         return arr.join("")
//     }
// }
// console.log(reverseStringInArrays(['eno', 'owt', 'eerht']))

// // 297. Serialize and Deserialize Binary Tree
// WITH STRINGS
// var serialize = function(root) {
//     let serial = "";
//     helper(root);
//     return serial;

//     function helper(node) {
//         if (!node) {
//             serial += "null ";
//         } else {
//             serial += node.val + " ";
//             helper(node.left);
//             helper(node.right);
//         }
//     }

// };

// var deserialize = function(data) {
//     let nodes = data.split(" ");
//     return helper();

//     function helper() {
//         let value = nodes.shift();
//         if (value === "null") {
//             return null;
//         }
//         let node = new TreeNode(parseInt(value));
//         node.left = helper();
//         node.right = helper();
//         return node;
//     }
// };

// // CHEATING USING ARRAYS WITHOUT CONVERTING TO STRING 
// var serialize = function(root) {
//     let serial = [];
//     helper(root);
//     return serial;

//     function helper(node) {
//         if (!node) {
//             serial.push(null);
//         } else {
//             serial.push(node.val);
//             helper(node.left);
//             helper(node.right);
//         }
//     }
// };

// var deserialize = function(data) {
//     return helper();

//     function helper() {
//         let value = data.shift();
//         if (value === null) {
//             return null;
//         }
//         let node = new TreeNode(value);
//         node.left = helper();
//         node.right = helper();
//         return node;
//     }
// };

// // 378. Kth Smallest Element in a Sorted Matrix
// var kthSmallest = function(matrix, k) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;
//     let left = matrix[0][0];
//     let right = matrix[rows-1][cols-1];
//     while (left < right) {
//         const mid = Math.floor((left+right)/2);
//         let count = 0;
//         let j = cols-1;

//         for (let i=0; i<rows; i++) {
//             while (j>=0 && matrix[i][j]>mid) {
//                 j--
//             }
//             count += j+1
//         }
//         if (count < k) {
//             left = mid+1;
//         } else {
//             right = mid;
//         }
//     }
//     return left;
// };
// let matrix = [
//     [ 1,  5,  9],
//     [10, 11, 13],
//     [12, 13, 15]
// ];
// let k = 3;
// console.log(kthSmallest(matrix, k))

// var kthSmallest = function(matrix, k) {
//     var n = matrix.length, lo = matrix[0][0]
//     var hi = matrix[n-1][n-1];
//     var mid, count;

//     while(lo < hi) {
//         mid = (lo + (hi - lo) / 2) >> 0;
//         count = countLEQ(matrix, mid);
//         if (count < k) {
//             lo = mid + 1;
//         } else {
//             hi = mid;
//         }
//     }
//     return lo;
// };

// var countLEQ = function (matrix, x) {
//     var n = matrix.length;
//     var count = 0;
//     var j;

//     matrix.forEach(function(row){
//         for(j = 0; j < n && row[j] <= x; j++){ ;}
//         count += j
//     });
//     return count;
// };
// let matrix = [
//     [ 1,  5,  9],
//     [10, 11, 13],
//     [12, 13, 15]
// ];
// let k = 3;
// console.log(kthSmallest(matrix, k))
// let matrix2 = [
//     [1,2],
//     [1,3]
// ];
// let k2 = 2;
// console.log(kthSmallest(matrix2, k2))

// // 912. Sort an Array
// CHEATING USING BUILT IN FUNCTION
// var sortArray = function(nums) {
//     return nums.sort((a,b) => a-b);
// };
// console.log(sortArray([5,2,3,1]));
// console.log(sortArray([5,1,1,2,0,0]));

// // 912. Sort an Array
// var sortArray = function(nums) {
//     helper(0, nums.length-1, nums);
//     return nums;

//     function helper(start, end, nums) {
//         if (start >= end) return;
//         let pivot = start;
//         let left = start+1;
//         let right = end;

//         while (left <= right) {
//             if (nums[left] > nums[pivot] && nums[right] < nums[pivot]) {
//                 swap(left, right, nums)
//             }
//             if (nums[left] <= nums[pivot]) left++;
//             if (nums[right] >= nums[pivot]) right--;
//         }
//         swap(pivot, right, nums);
//         helper(start, right-1, nums);
//         helper(right+1, end, nums);
//     }

//     function swap(idx1, idx2, nums) {
//         let temp = nums[idx1];
//         nums[idx1] = nums[idx2];
//         nums[idx2] = temp;
//     }
// };
// console.log(sortArray([5,2,3,1]));
// console.log(sortArray([5,1,1,2,0,0]));

// function treasureIsland(grid) {
//     helper(0,0);

//     function helper(i,j);
// }
// let grid = [
//     [0, 0, 0, 0],
//     [2, 0, 2, 0],
//     [0, 0, 0, 0],
//     [1, 2, 2, 0]
// ];
// console.log(treasureIsland(grid));

// SHORTEST PATH OF TWO POINTS
// var matrix = [
//     [0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 1, 0],
//     [0, 0, 1, 0, 0],
//     [0, 1, 0, 1, 0]
// ];

// var start = [0, 0];
// var end = [4, 2];

// function findWay(position, end) {
//     var queue = [];

//     matrix[position[0]][position[1]] = 1;
//     queue.push([position]); // store a path, not just a position
//     // console.log(queue)
//     while (queue.length > 0) {
//         console.log(queue)
//         var path = queue.shift(); // get the path out of the queue
//         var pos = path[path.length - 1]; // ... and then the last position from it
//         //   console.log(path)
//         var direction = [
//             [pos[0] + 1, pos[1]],
//             [pos[0], pos[1] + 1],
//             [pos[0] - 1, pos[1]],
//             [pos[0], pos[1] - 1]
//         ];

//         for (var i = 0; i < direction.length; i++) {
//             // Perform this check first:
//             if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
//                 // return the path that led to the find
//                 return path.concat([end]);
//             }

//             if (direction[i][0] < 0 || direction[i][0] >= matrix[0].length
//                 || direction[i][1] < 0 || direction[i][1] >= matrix[0].length
//                 || matrix[ direction[i][0] ] [ direction[i][1] ] != 0) {
//                 continue;
//             }

//             matrix[ direction[i][0] ] [ direction[i][1] ] = 1;
//             // extend and push the path on the queue
//             queue.push(path.concat([direction[i]]));
//         }
//     }
// }

// var path = findWay(start, end);
// console.log(JSON.stringify(path));

// // 1091. Shortest Path in Binary Matrix
// var shortestPathBinaryMatrix = function(grid) {
//     if(grid[0][0] != 0) return -1
//     if(grid[grid.length-1][grid.length-1] != 0) return -1
//     var queue = [[[0,0]]];
//     let N = grid.length;
//     while (queue.length > 0) {
//         var path = queue.shift();
//         var pos = path[path.length - 1]; // [0,0]
//         var direction = [
//             [pos[0] + 1, pos[1]],
//             [pos[0], pos[1] + 1],
//             [pos[0] - 1, pos[1]],
//             [pos[0], pos[1] - 1],
//             [pos[0] + 1, pos[1] + 1],
//             [pos[0] + 1, pos[1] - 1],
//             [pos[0] - 1, pos[1] - 1],
//             [pos[0] - 1, pos[1] + 1],
//         ];
//         for (var i = 0; i < direction.length; i++) {
//             if (direction[i][0] === N-1 && direction[i][1] === N-1) {
//                 return path.length + 1;
//             }
//             if (direction[i][0] < 0 || direction[i][0] >= grid[0].length
//                 || direction[i][1] < 0 || direction[i][1] >= grid[0].length
//                 || grid[direction[i][0]][direction[i][1]] != 0) {
//                 continue;
//             }
//             grid[direction[i][0]][direction[i][1]] = 1;
//             queue.push(path.concat([direction[i]]));
//         }
//     }  
//     return -1
// };
// console.log(shortestPathBinaryMatrix([[0,1],[1,0]], 2));
// console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]], 4));

// 
// var shortestPathBinaryMatrix = function(grid) {
//     let N = grid.length;
//     if (N < 1) return -1;
//     if (grid[0][0] === 1 || grid[N-1][N-1] === 1) return -1;
//     if (N === 1) return 1;
//     var queue = [[0,0]];
//     grid[0][0] = 1;

//     while (queue.length != 0) {
//         let cur = queue.shift();
//         let cX = cur[0];
//         let cY = cur[1];
//         let aList = [
//             [ cX+1, cY ],
//             [ cX-1, cY ],
//             [ cX, cY+1 ],
//             [ cX, cY-1 ],
//             [ cX+1, cY+1 ],
//             [ cX+1, cY-1 ],
//             [ cX-1, cY-1 ],
//             [ cX-1, cY+1 ],
//         ]
//         for (let i=0, length=aList.length; i<length; i++){
//             let adj = aList[i];
//             let aX = adj[0];
//             let aY = adj[1];
//             if (aX < 0 || aX >= N || aY < 0 || aY >= N || grid[aX][aY] !== 0){
//                 continue; 
//             }
//             if(aX >= (N-1) && aY >= (N-1)){
//                 return grid[cX][cY] + 1;
//             }
//             queue.push([aX,aY])
//             grid[aX][aY] = grid[cX][cY] + 1;
//         }
//     }
//     return -1 ;
// };
// console.log(shortestPathBinaryMatrix([[0,0,0],[1,1,0],[1,1,0]], 4));

// // 783. Minimum Distance Between BST Nodes
// var minDiffInBST = function(root) {
//     let prev = null;
//     let min = Infinity;
//     helper(root);
//     return min;

//     function helper(node) {
//         if (!node) return;
//         helper(node.left);
//         if (prev) {
//             min = Math.min(min, Math.abs(node.val - prev.val));
//         }
//         prev = node;
//         helper(node.right);
//     };
// };

// // WITH EXTRA SPACE
// var minDiffInBST = function(root) {
//     if (root === null) return null;
//     var res = [];
//     var min = Infinity;
//     helper(root);
//     for(var i=0, length=res.length-1; i<length; i++){
//         min = Math.min(min, res[i+1] - res[i]);
//     }
//     return min;

//     function helper(node) {
//         if (node) {
//             helper(node.left);
//             res.push(node.val);
//             helper(node.right);
//         }
//     }
// };

// // 45. Jump Game II
// var jump = function(nums) {
//     let length = nums.length;
//     if (length < 2) {
//         return 0;
//     }

//     let max = nums[0];
//     let start = 0
//     let end = nums[0];
//     let count = 1;

//     while (max < length - 1) {
//         let left = start
//         let right = end;
//         start = end + 1;
//         for (let i=left; i<=right; i++) {
//             if (i + nums[i] > max) {
//                 max = i + nums[i];
//                 end = max;
//             }
//         }
//         count++;
//     } 
//     return count;
// };
// console.log(jump([2,3,1,1,4]));

// // 55. Jump Game
// var canJump = function(nums) {
//     let jump = 0
//     let len = nums.length;
//     for (var i = 0; i < len; i++){
//         jump = Math.max(nums[i], jump);
//         if(jump === 0 && i !== len -1 )return false;
//         jump--;
//     }
//     return true;
// };
// console.log(canJump([2,3,1,1,4]));

// var canJump = function(nums) {
//     let lastGood = nums.length - 1;

//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] + i >= lastGood) {
//             lastGood = i;
//         }
//     }

//     return lastGood === 0;
// };
// console.log(canJump([2,3,1,1,4]))

// // 1122. Relative Sort Array
// var relativeSortArray = function(arr1, arr2) {
//     const dict = {};
//     let end = [];
//     let res = [];
//     for (let i=0, length=arr1.length; i<length; i++) {
//         let num = arr1[i];
//         if (!arr2.includes(num)) {
//             end.push(num);
//         } else {
//             if (dict[num] && arr2.includes(num)) {
//                 dict[num]++;
//             } else {
//             dict[num] = 1;
//             }
//         }

//     }
//     for (let num of arr2) {
//         if (dict[num]) {
//             for (let i=0; i<dict[num]; i++) {
//                 res.push(num)
//             }
//         }
//     }
//     end = end.sort((a,b) => a-b);
//     return res.concat(end);
// };
// console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));

// // 139. Word Break
// DOESNT WORK
// var wordBreak = function(s, wordDict) {
// 	for (let i = 0; i < wordDict.length; i++) {
//         s = s.split(wordDict[i]).join('.');
//         console.log(s)
//     }
//     return s.split('.').join('').length === 0;
// };
// console.log(wordBreak("leetcode",["leet", "code"]));
// console.log(wordBreak("applepenapple", ["apple", "pen"]));
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));

// // 1025. Divisor Game
// var divisorGame = function(N) {
//     return !(N%2);
// };
// console.log(divisorGame(2));
// console.log(divisorGame(3));

// // 394. Decode String
// var decodeString = function(s) {
//     return helper (s, 0, s.length-1);

//     function helper(s, left, right,) {
//         let repeat = 1;
//         let open = 0;
//         let bracketStart;
//         let res = '';

//         while (left <= right) {
//             if (s[left] === '[') {
//                 if (open === 0) {
//                     bracketStart = left;
//                 }
//                 open++;
//                 left++;
//             } else if (s[left] === ']') {
//                 open--;
//                 if (open === 0) {
//                     const repeatText = helper(s, bracketStart + 1, left);
//                     res += repeatText.repeat(repeat);
//                 }
//                 left++;
//             } else if (open > 0) {
//                 left++;
//             } else if (!isNaN(s[left])) {
//                 repeat = 0;
//                 while (!isNaN(s[left])) {
//                     repeat *= 10;
//                     repeat += Number(s[left]);
//                     left++;
//                 }
//             } else {
//                 res += s[left];
//                 left++;
//             }
//         }
//         return res;
//     }
// };
// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));

// var decodeString = function(s) {
//     return helper (0, s.length-1);

//     function helper(left, right) {
//         let repeat = 1;
//         let open = 0;
//         let bracketStart;
//         let res = '';

//         while (left <= right) {
//             if (s[left] === '[') {
//                 if (open === 0) {
//                     bracketStart = left;
//                 }
//                 open++;
//                 left++;
//             } else if (s[left] === ']') {
//                 open--;
//                 if (open === 0) {
//                     const repeatText = helper(bracketStart + 1, left);
//                     res += repeatText.repeat(repeat);
//                 }
//                 left++;
//             } else if (open > 0) {
//                 left++;
//             } else if (!isNaN(s[left])) {
//                 let num = "";
//                 while (!isNaN(s[left])) {
//                     num += s[left];
//                     left++;
//                 }
//                 repeat = parseInt(num)
//             } else {
//                 res += s[left];
//                 left++;
//             }
//         }
//         return res;
//     }
// };
// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));

// // 893. Groups of Special-Equivalent Strings
// var numSpecialEquivGroups = function(A) {
//     let set = new Set();
//     for (let el of A) {
//         let temp = helper(el);
//         if (!set.has(temp)) {
//             set.add(temp)
//         }
//     }
//     return set.size;

//     function helper(str) {
//         let odd = [];
//         let even = [];
//         for (let i=0; i<str.length; i++) {
//             if (i%2 == 0) {
//                 even.push(str[i]); 
//             } else {
//                 odd.push(str[i]);
//             }
//         }
//         odd = odd.sort().join("");
//         even = even.sort().join("");
//         return even+odd;
//     }
// };
// console.log(numSpecialEquivGroups(["a","b","c","a","c","c"]));
// console.log(numSpecialEquivGroups(["aa","bb","ab","ba"]));



// // 1046. Last Stone Weight
// var lastStoneWeight = function(stones) {
//     stones.sort((a,b) => b-a);
//     while (stones.length>1) {
//         if (stones[0] !== stones[1]) {
//             stones.push(stones[0] - stones[1]);
//         }
//         stones.shift();
//         stones.shift();
//         stones.sort((a,b) => b-a);
//     }
//     if (!stones.length) return 0;
//     return stones[0];
// };
// console.log(lastStoneWeight([2,7,4,1,8,1]));

// var lastStoneWeight = function(stones) {
//     while (stones.length>1) {
//         let max1 = Math.max(...stones);
//         stones.splice(stones.indexOf(max1),1)
//         let max2 = Math.max(...stones);
//         stones.splice(stones.indexOf(max2),1)
//         if (max1 !== max2) {
//             stones.push(max1-max2);
//         }
//     }
//     return stones[0] || 0;
// };
// console.log(lastStoneWeight([2,7,4,1,8,1]));

// // 1137. N-th Tribonacci Number
// var tribonacci = function(n) {
//     let arr = [0,1,1];
//     for (let i=3; i<=n; i++) {
//         arr[i] = arr[i-3] + arr[i-2] + arr[i-1];
//         // could be faster to push than to set
//         // arr.push(arr[i-3] + arr[i-2] + arr[i-1]);
//     }
//     return arr[n];
// };
// console.log(tribonacci(4));
// console.log(tribonacci(25));

// // 669. Trim a Binary Search Tree
// var trimBST = function(root, L, R) {
//     if (!root) return null;
//     if (root.val < L) {
//         return trimBST(root.right, L, R);
//     }
//     if (root.val > R) {
//         return trimBST(root.left, L, R);
//     }
//     root.left = trimBST(root.left, L, R);
//     root.right = trimBST(root.right, L, R);
//     return root;
// };

// // 429. N-ary Tree Level Order Traversal
// var levelOrder = function (root) {
//     if (!root) return [];
//     let res = [];
//     let queue = [root];
//     while (queue.length) {
//         let len = queue.length;
//         let temp = [];
//         for (let i=0; i<len; i++) {
//             let node = queue.shift();
//             temp.push(node.val);
//             for (let child of node.children) {
//                 queue.push(child)
//             }
//         }
//         res.push(temp);
//     }
//     return res;
// };

// // // 1150. Check If a Number Is Majority Element in a Sorted Array
// var isMajorityElement = function(nums, target) {
//     let dict = {};
//     let length = nums.length;
//     for (let i=0; i<length; i++) {
//         let num = nums[i];
//         if (!dict[num]) {
//             dict[num] = 1;
//         } else {
//             dict[num]++;
//         }
//     }
//     return dict[target]>(length/2);
// };
// console.log(isMajorityElement([2,4,5,5,5,5,5,6,6], 5))

// // 762. Prime Number of Set Bits in Binary Representation
// var countPrimeSetBits = function(L, R) {
//     let res = 0;
//     let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
//     for (let i=L; i<=R; i++) {
//         let count = 0;
//         let binary = i.toString(2);
//         for (let j=0; j<binary.length; j++) {
//             if (binary[j] === "1") {
//                 count++;
//             }
//         }
//         if (primes.indexOf(count) !== -1) {
//             res++;
//         }
//     }
//     return res;
// };
// console.log(countPrimeSetBits(6,10));

// var countPrimeSetBits = function(L, R) {
//     let res = 0;
//     let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
//     for (let i=L; i<=R; i++) {
//         let count = 0;
//         let temp = i;
//         while (temp) {
//             if (temp % 2 === 1) {
//                 count++;
//             }
//             temp = Math.floor(temp/2);
//         }
//         if (primes.indexOf(count) !== -1) {
//             res++;
//         }
//     }
//     return res;
// };
// console.log(countPrimeSetBits(6,10));

// // 868. Binary Gap
// var binaryGap = function(N) {
//     let str = N.toString(2);
//     let last = 0;
//     let max = 0;
//     for (let i=0, length=str.length; i<length; i++) {
//         if (str[i] === "1") {
//             max = Math.max(max, i-last);
//             last = i;
//         }
//     }
//     return max
// };
// console.log(binaryGap(22));
// console.log(binaryGap(5));
// console.log(binaryGap(6));
// console.log(binaryGap(8));
// console.log(binaryGap(13));

// // 637. Average of Levels in Binary Tree
// var averageOfLevels = function(root) {
//     if (!root) return [];
//     let res = [];
//     let queue = [root];
//     while (queue.length) {
//         let len = queue.length;
//         let sum = 0;
//         for (let i=0; i<len; i++) {
//             let node = queue.shift();
//             if (node.left) queue.push(node.left)
//             if (node.right) queue.push(node.right)
//             sum += node.val
//         }
//         res.push(sum/len);
//     }
//     return res;
// };

// // 226. Invert Binary Tree
// var invertTree = function (root) {
//     if (root) {
//         let temp = root.left;
//         root.left = invertTree(root.right);
//         root.right = invertTree(temp)
//     }
//     return root;

// };

// var invertTree = function (root) {
//     if (!root) return root
//     let temp = root.left
//     root.left = root.right
//     root.right = temp

//     invertTree(root.left)
//     invertTree(root.right)

//     return root
// };

// function invertTree(root) {
//     if (root) {
//         [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
//     }
//     return root;
// }

// function invertTree(root) {
//     let stack = [root];
//     while (stack.length) {
//         let node = stack.pop();
//         if (!node) {
//             continue;
//         }
//         [node.left, node.right] = [node.right, node.left];
//         stack.push(node.left, node.right);
//     }
//     return root;
// }

// // 1089. Duplicate Zeros
// // REPLACING VALUES
// var duplicateZeros = function(arr) {
//     let length = arr.length;
//     for (let i=0; i<length-1; i++) {
//         if (arr[i] === 0) {
//             for (let j=length-1; j>i+1; j--) {
//                 arr[j] = arr[j-1]
//             }
//             arr[i+1] = 0;
//             i++;
//         }
//     }
//     return arr;
// };
// console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
// console.log(duplicateZeros([1,2,3]));

// // USING SPLICE METHOD (MIGHT NOT BE CONSIDERED IN PLACE)
// var duplicateZeros = function(arr) {
//     let length = arr.length;
//     for (let i=0; i<length; i++) {
//         if (arr[i] === 0) {
//             // splice(start,delete count, add)
//             arr.splice(i,0,0);
//             arr.pop();
//             i++;
//         }
//     }
//     return arr;
// };
// console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
// console.log(duplicateZeros([1,2,3]));

// // 1009. Complement of Base 10 Integer
// USING NEW STRING
// var bitwiseComplement = function(N) {
//     let binary = N.toString(2);
//     let res = "";
//     for (let letters of binary) {
//         if (letters === "0") {
//             res += 1;
//         } else {
//             res += 0;
//         }
//     }
//     return parseInt(res, 2);
// };
// console.log(bitwiseComplement(5))

// REVERSING BITS
// var bitwiseComplement = function(N) {
//     let binary = N.toString(2).split("");
//     for (let i=0; i<binary.length; i++) {
//         if (binary[i] === "0") {
//             binary[i] = "1";
//         } else {
//             binary[i] = "0";
//         }
//     }
//     return parseInt(binary.join(""), 2);
// };
// console.log(bitwiseComplement(5));

// // 784. Letter Case Permutation
// var letterCasePermutation = function(S) {
//     let res = [];
//     helper(S, 0);
//     return res;

//     function helper(S, idx) {
//         if (idx === S.length) {
//            res.push(S);
//         } else if (isNaN(S.charAt(idx))) {
//             helper(S.substring(0, idx) + S.charAt(idx).toLowerCase() + S.substring(idx+1, S.length), idx+1);
//             helper(S.substring(0, idx) + S.charAt(idx).toUpperCase() + S.substring(idx+1, S.length), idx+1);
//         } else {
//             helper(S, idx+1);
//         }
//     }
// };
// console.log(letterCasePermutation("a1b2"));

// // 693. Binary Number with Alternating Bits
// var hasAlternatingBits = function(n) {
//     let binary = n.toString(2);
//     for (let i=0; i<binary.length-1; i++) {
//         if (binary[i] === binary[i+1]) return false;
//     }
//     return true;
// };
// console.log(hasAlternatingBits(5));
// console.log(hasAlternatingBits(7));
// console.log(hasAlternatingBits(11));
// console.log(hasAlternatingBits(10));

// var hasAlternatingBits = function(n) {
//     let last = n%2;
//     n = Math.floor(n/2);
//     while (n) {
//         let cur = n%2;
//         if (cur === last) return false;
//         last = cur;
//         n = Math.floor(n/2);
//     }
//     return true;
// };
// console.log(hasAlternatingBits(5));
// console.log(hasAlternatingBits(7));
// console.log(hasAlternatingBits(11));
// console.log(hasAlternatingBits(10));

// // 706. Design HashMap
// var MyHashMap = function() {
//     this.dict = {};
// };

// MyHashMap.prototype.put = function(key, value) {
//    this.dict[key] = value;
// };

// MyHashMap.prototype.get = function(key) {
//     let value = this.dict[key];
//     return value === undefined ? -1: value;
// };

// MyHashMap.prototype.remove = function(key) {
//     delete this.dict[key];
// };

// // 812. Largest Triangle Area
// var largestTriangleArea = function(points) {
//     let res = 0;
//     let iLength = points.length-2;
//     let jLength = points.length-1;
//     let kLength = points.length;

//     for (let i=0; i<iLength; i++) {
//         for (let j=i+1; j<jLength; j++) {
//             for (let k=i+2; k<kLength; k++) {
//                 let temp = helper(points[i],points[j],points[k]);
//                 res = Math.max(temp, res);
//             }
//         }
//     }
//     return res;

//     function helper([x1, y1], [x2, y2], [x3, y3]) {
//         // let area = Math.abs( (x2-x1)*(y3-y1) - (x3-x1)*(y2-y1) ) / 2;
//         let area = Math.abs( x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2) ) / 2;


//         return area;
//     }
// };
// console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]));

// // 892. Surface Area of 3D Shapes
// USING HELPER FUNCTION
// var surfaceArea = function(grid) {
//     let res = 0;
//     for (let i=0; i<grid.length; i++) {
//         for (let j=0; j<grid[0].length; j++) {
//             let value = grid[i][j];
//             if (value) {
//                 res += value*4 + 2;
//                 helper(i+1,j, value);
//                 helper(i,j+1, value);
//             }
//         }
//     }
//     return res;

//     function helper(i,j,value) {
//         if (i>grid.length-1 || j>grid[0].length-1) {
//             return;
//         }
//         res -= 2*Math.min(value, grid[i][j]);
//     }
// };
// console.log(surfaceArea([[1]]));
// console.log(surfaceArea([[2]]));
// console.log(surfaceArea([[1,2],[3,4]]));
// console.log(surfaceArea([[1,0],[0,2]]));
// console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]]));

// var surfaceArea = function(grid) {
//     let res = 0;
//     let length = grid.length;
//     for (let i=0; i<length; i++) {
//         for (let j=0; j<length; j++) {
//             let value = grid[i][j];
//             if (value) {
//                 res += value*4 + 2;
//                 if (i<length-1) res -= 2*Math.min(value, grid[i+1][j]);
//                 if (j<length-1) res -= 2*Math.min(value, grid[i][j+1]);
//             }
//         }
//     }
//     return res;
// };
// console.log(surfaceArea([[1]]));
// console.log(surfaceArea([[2]]));
// console.log(surfaceArea([[1,2],[3,4]]));
// console.log(surfaceArea([[1,0],[0,2]]));
// console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]]));

// // 705. Design HashSet
// var MyHashSet = function() {
//     this.hash = {};
// };

// MyHashSet.prototype.add = function(key) {
//     this.hash[key] = true;
// };

// MyHashSet.prototype.remove = function(key) {
//     delete this.hash[key];
// };

// MyHashSet.prototype.contains = function(key) {
//     if (this.hash[key]) {
//         return true;
//     } else {
//         return false;
//     }
// };

// // 1029. Two City Scheduling
// var twoCitySchedCost = function(costs) {
//     // sort smaller to bigger difference
//     costs.sort( (a,b) => ( (a[1]-a[0]) - (b[1]-b[0]) ) );
//     let res = 0;
//     // add city B starting from the beginning of list and add city A starting from the end of list
//     for(let i=0; i<costs.length/2; i++){
//         res += costs[i][1] + costs[costs.length-1-i][0];
//     }
//     return res;
// };
// console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))

// var twoCitySchedCost = function(costs) {
//     // sort smaller to bigger difference
//     costs.sort( (a,b) => ( (a[1]-a[0]) - (b[1]-b[0]) ) );
//     let res = 0;
//     // add city B until halfway point then add city A fir the rest
//     for(let i=0; i<costs.length; i++){
//         if (i<costs.length/2) {
//             res += costs[i][1]
//         } else {
//             res += costs[i][0]
//         }
//     }
//     return res;
// };
// console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))

// // 1071. Greatest Common Divisor of Strings
// USING EUCLIDEAN ALGORITHM
// var gcdOfStrings = function(str1, str2) {
//     if (str1+str2 !== str2+str1) {
//         return "";
//     } else if (str1 === str2) {
//         return str1;
//     } else if (str1.length > str2.length) {
//         return gcdOfStrings(str1.slice(str2.length), str2);
//     } else {
//         return gcdOfStrings(str2.slice(str1.length), str1);
//     }
// };
// console.log(gcdOfStrings("ABCABC", "ABC"));
// console.log(gcdOfStrings("ABABAB", "ABAB"));
// console.log(gcdOfStrings("LEET", "CODE"));

// FINDING THE GCD OF STRING LENGTHS THEN RETURNING SUBSTRING FROM 0 TO GCD
// var gcdOfStrings = function(str1, str2) {
// if (str1 + str2 !== str2 + str1) return '';
// const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));
// return str1.substring(0, gcd(str1.length, str2.length));
// };
// console.log(gcdOfStrings("ABCABC", "ABC"));
// console.log(gcdOfStrings("ABABAB", "ABAB"));
// console.log(gcdOfStrings("LEET", "CODE"));

// // 448. Find All Numbers Disappeared in an Array
// DIRTY SOLUTION SLOW
// var findDisappearedNumbers = function(nums) {
//     let res = [];
//     for (let i=1; i<=nums.length; i++) {
//         if (nums.indexOf(i) === -1) {
//             res.push(i)
//         }
//     }
//     return res;
// };
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))

// MANUALLY BUILDING ARRAY
// var findDisappearedNumbers = function(nums) {
//     let res = [];
//     for (let i=1; i<=nums.length; i++) {
//         res[i] = i;
//     }
//     for (let i=0; i<nums.length; i++) {
//         res[nums[i]] = 0;
//     }
//     return res.filter(i => (i>0));
// };
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
// console.log(findDisappearedNumbers([1,1]))

// USING BUILD ARRAY TRICK
// var findDisappearedNumbers = function(nums) {
//     let res = [...Array(nums.length+1).keys()]
//     for (let i=0; i<nums.length; i++) {
//         res[nums[i]] = 0;
//     }
//     return res.filter(i => (i>0));
// };
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
// console.log(findDisappearedNumbers([1,1]))

// // 653. Two Sum IV - Input is a BST
// USING DICTIONARY
// var findTarget = function(root, k) {
//     let dict = {};
//     let found = false;
//     helper(root);
//     return found;

//     function helper(node) {
//         if (!node) return;
//         helper(node.left);
//         if (dict[k-node.val]) {
//             found = true;
//             return;
//         } else {
//             dict[node.val] = true;
//         }
//         helper(node.right);
//     }
// };

// USING SET
// var findTarget = function (root, k) {
//     const set = new Set()
//     return helper(root);

//     function helper(node) {
//         if (!node) return false;
//         if (set.has(k - node.val)) return true;
//         set.add(node.val);
//         return helper(node.left) || helper(node.right);
//     }
// };

// USING SORTED ARRAY
// var findTarget = function(root, k) {
//     let arr = [];
//     helper(root);

//     function helper(node) {
//         if (!node) return;
//         helper(node.left);
//         arr.push(node.val);
//         helper(node.right);
//     }

//     let left = 0;
//     let right = arr.length-1
//     while (left<right) {
//         if (arr[left]+arr[right] > k) {
//             right--;
//         } else if (arr[left]+arr[right] < k) {
//             left++;
//         } else {
//             return true;
//         }
//     }
//     return false;
// };

// // 993. Cousins in Binary Tree
// UGLY SOLUTION 
// var isCousins = function(root, x, y) {
//     let xDepth = -1;
//     let yDepth = -1;
//     findDepth(root, 0);

//     function findDepth(node, depth) {
//         if (!node || (xDepth !== -1 && yDepth !== -1) ) return;
//         if (node.val === x) xDepth = depth;
//         if (node.val === y) yDepth = depth;
//         findDepth(node.left,depth+1);
//         findDepth(node.right,depth+1);
//     }

//     if (xDepth !== yDepth) return false;
//     var cousins = true;
//     findParent(root);
//     return cousins;

//     function findParent(node) {
//         if (!node) return;
//         if (node.left && node.right) {
//             if (node.left.val === x && node.right.val === y) {
//                 cousins = false;
//                 return;
//             }
//             if (node.left.val === y && node.right.val === x) {
//                 cousins = false;
//                 return;
//             }
//         }
//         findParent(node.left);
//         findParent(node.right);
//     }
// };

// CLEANER BUT SAME SPEED
// var isCousins = function (root, x, y) {
//     let xDepth = 0;
//     let xParent = -1;
//     let yDepth = 0;
//     let yParent = -1;
//     helper(root, -1, -1);
//     return xDepth == yDepth && xParent !== yParent;

//     function helper(node, depth, parent) {
//         if (node) {
//             helper(node.left, depth+1, node);
//             helper(node.right, depth+1, node);
//             if (node.val === x) {
//                 xParent = parent;
//                 xDepth = depth+1;
//             }
//             if (node.val === y) {
//                 yParent = parent;
//                 yDepth = depth+1;
//             }
//         }
//     }
// };

// // 538. Convert BST to Greater Tree
// var convertBST = function(root) {
//     let count = 0;
//     helper(root);
//     return root;    

//     function helper(node) {
//         if (!node) return;
//         helper(node.right);
//         node.val += count;
//         count = node.val;
//         helper(node.left);
//     }
// };

// // 1154. Day of the Year
// USING SUBSTRING
// var dayOfYear = function(date) {
//     let year = parseInt(date.substring(0,4));
//     const months = [31,28,31,30,31,30,31,31,30,31,30,31];
//     if (year%400 === 0) {
//         months[1] = 29;
//     } else if (year%100 === 0) {
//     } else if (year%4 === 0) {
//         months[1] = 29;
//     }
//     let month = parseInt(date.substring(5,8));
//     let daysTotal = 0;
//     let i = 0;
//     while (i<month-1) {
//         daysTotal += months[i];
//         i++;
//     }
//     let days = parseInt(date.substring(8));
//     daysTotal += days;
//     return daysTotal;
// };
// console.log(dayOfYear("2019-01-09"));
// console.log(dayOfYear("2019-02-10"));
// console.log(dayOfYear("2003-03-01"));
// console.log(dayOfYear("2004-03-01"));

// USING SPLIT
// var dayOfYear = function(date) {
//     let res = 0;
//     date = date.split("-");
//     let year = parseInt(date[0]);
//     let month = parseInt(date[1]);
//     let days = parseInt(date[2]);
//     const months = [31,28,31,30,31,30,31,31,30,31,30,31];
//     if (year%400 === 0) {
//         months[1] = 29;
//     } else if (year%100 === 0) {
//     } else if (year%4 === 0) {
//         months[1] = 29;
//     }
//     let i = 0;
//     while (i<month-1) {
//         res += months[i];
//         i++;
//     }
//     res += days;
//     return res;
// };
// console.log(dayOfYear("2019-01-09"));
// console.log(dayOfYear("2019-02-10"));
// console.log(dayOfYear("2003-03-01"));
// console.log(dayOfYear("2004-03-01"));

// // 530. Minimum Absolute Difference in BST
// var getMinimumDifference = function(root) {
//     let res = Infinity;
//     let arr =[];
//     helper(root);
//     for (let i=0, length=arr.length-1; i<length; i++) {
//         if (arr[i+1]-arr[i] < res) {
//             res = arr[i+1]-arr[i];
//         }
//     }
//     return res;

//     function helper(node) {
//         if (!node) return;
//         helper(node.left);
//         arr.push(node.val);
//         helper(node.right);
//     }
// };

// // 404. Sum of Left Leaves
// var sumOfLeftLeaves = function(root) {
//     let res = 0;
//     helper(root);
//     return res;

//     function helper(node) {
//         if (!node) return;
//         helper(node.left);
//         if (node.left && node.left.left === null && node.left.right === null) {
//             res += node.left.val;
//         }
//         helper(node.right);
//     }
// };

// // 453. Minimum Moves to Equal Array Elements
// var minMoves = function(nums) {
//     let min = nums[0];
//     let sum = min;
//     let length = nums.length;
//     for (let i=1; i<length; i++) {
//         let num = nums[i];
//         sum += num;
//         min = Math.min(min, num)
//     }
//     return sum - length * min;
// };
// console.log(minMoves([1,2,3]));

// var minMoves = function(nums) {
//     let min = Math.min(...nums);
//     let sum = 0;
//     for (let num of nums) {
//         sum += num;
//     }
//     return sum - nums.length * min;
// };
// console.log(minMoves([1,2,3]));

// var minMoves = function(nums) {
//     let min = Infinity;
//     let sum = 0;
//     for (let num of nums) {
//         sum += num;
//         min = Math.min(min, num)
//     }
//     return sum - nums.length * min;
// };
// console.log(minMoves([1,2,3]));

// // 997. Find the Town Judge
// var findJudge = function(N, trust) {
//     let truster = new Array(N + 1).fill(0);
//     let trusted = new Array(N + 1).fill(0);

//     for (let i=0; i<trust.length; i++) {
//         truster[trust[i][0]]++;
//         trusted[trust[i][1]]++;
//     }
//     let allTrust = N - 1;
//     for (let i=1; i<=N; i++) {
//         if (truster[i] === 0 && trusted[i] === allTrust) {
//             return i;
//         }
//     }
//     return -1;
// };
// console.log(findJudge(2,[[1,2]]));
// console.log(findJudge(3,[[1,3], [2,3]]));
// console.log(findJudge(3,[[1,3], [2,3], [3,1]]));
// console.log(findJudge(3,[[1,2], [2,3]]));

// // 717. 1-bit and 2-bit Characters
// USING FOR LOOP IF ITERATOR LANDS ON THE LAST BIT THEN ITS TRUE
// var isOneBitCharacter = function(bits) {
//     for (let i=0, length=bits.length; i<length; i++) {
//         if (i === length-1) return true;
//         if (bits[i] === 1) i++;
//     }
//     return false;
// };
// console.log(isOneBitCharacter([1, 0, 0]));
// console.log(isOneBitCharacter([1, 1, 1, 0]));

// USING WHILE LOOP AND IF STATEMENT
// var isOneBitCharacter = function(bits) {
//     let i=0;
//     let length = bits.length-1;
//     while (i<length) {
//         if (bits[i] === 1) i++;
//         i++;
//     }
//     return i === length;
// };
// console.log(isOneBitCharacter([1, 0, 0]));
// console.log(isOneBitCharacter([1, 1, 1, 0]));

// USING WHILE LOOP AND IF STATEMENT
// var isOneBitCharacter = function(bits) {
//     let i=0;
//     let length = bits.length-1;
//     while (i<length) {
//         i += bits[i] + 1;
//     }
//     return i === length;
// };
// console.log(isOneBitCharacter([1, 0, 0]));
// console.log(isOneBitCharacter([1, 1, 1, 0]));

// // 661. Image Smoother
// MAKING A NEW EMPTY ARRAY
// var imageSmoother = function(M) {
//     let res = [];
//     for (let i=0; i<M.length; i++) {
//         let temp = [];
//         for (let j=0; j<M[0].length; j++) {
//             temp.push([])
//         }
//         res.push(temp)
//     }

//     for (let i=0; i<M.length; i++) {
//         for (let j=0; j<M[0].length; j++) {
//             var sum = M[i][j];
//             var cells = 1;
//             helper(i+1, j);
//             helper(i-1, j);
//             helper(i, j+1);
//             helper(i, j-1);
//             helper(i+1, j+1);
//             helper(i-1, j-1);
//             helper(i+1, j-1);
//             helper(i-1, j+1);
//             res[i][j] = Math.floor(sum/cells);
//         }
//     }
//     return res;

//     function helper(x,y) {
//         if (x<0 || x>=M.length || y<0 || y>=M[0].length) return;
//         sum += M[x][y];
//         cells++;
//     }
// };
// let M = [
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
// ]
// console.log(imageSmoother(M));
// let M2 = [
//     [2,3,4],
//     [5,6,7],
//     [8,9,10],
//     [11,12,13],
//     [14,15,16]
// ]
// console.log(imageSmoother(M2))

// USING SLICE TO MAKE DEEP COPY OF 2D ARRAY
// var imageSmoother = function(M) {
//     let res = [];
//     for (let i of M) {
//         res.push(i.slice())
//     }

//     for (let i=0; i<M.length; i++) {
//         for (let j=0; j<M[0].length; j++) {
//             var sum = M[i][j];
//             var cells = 1;
//             helper(i+1, j);
//             helper(i-1, j);
//             helper(i, j+1);
//             helper(i, j-1);
//             helper(i+1, j+1);
//             helper(i-1, j-1);
//             helper(i+1, j-1);
//             helper(i-1, j+1);
//             res[i][j] = Math.floor(sum/cells);
//         }
//     }
//     return res;

//     function helper(x,y) {
//         if (x<0 || x>=M.length || y<0 || y>=M[0].length) return;
//         sum += M[x][y];
//         cells++;
//     }
// };
// let M = [
//     [1,1,1],
//     [1,0,1],
//     [1,1,1]
// ]
// console.log(imageSmoother(M));
// let M2 = [
//     [2,3,4],
//     [5,6,7],
//     [8,9,10],
//     [11,12,13],
//     [14,15,16]
// ]
// console.log(imageSmoother(M2))

// // 392. Is Subsequence
// var isSubsequence = function(s, t) {
//     if (!s.length) return true;
//     for (let i=0; i<s.length; i++) {
//         for (let j=0; j<t.length; j++) {
//             if (s[i] === t[j]) {
//                 if (i === s.length-1) return true;
//                 i++;
//             }
//         }
//         return false;
//     }
// };
// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdc"));

// var isSubsequence = function(s, t) {
//     let i = 0;
//     let j = 0;
//     let sLength = s.length;
//     let tLength = t.length;

//     while (i<sLength && j<tLength) {
//         if (s[i] === t[j]) {
//             i++;
//         }
//         j++
//     }
//     return i === s.length
// };
// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdc"));

// // 543. Diameter of Binary Tree
// var diameterOfBinaryTree = function (root) {
//     let res = 0;
//     helper(root);
//     return res;

//     function helper(node) {
//         if (!node) return 0;
//         let left = helper(node.left);
//         let right = helper(node.right);
//         let path = left + right;
//         res = Math.max(max, path);
//         return Math.max(left, right) + 1;
//     }
// };

// // 563. Binary Tree Tilt
// var findTilt = function(root) {
//     let res = 0;
//     helper (root);
//     return res;

//     function helper(node) {
//         if (!node) return 0;
//         let left = helper(node.left);
//         let right = helper(node.right);
//         tilt += Math.abs(left-right);
//         return node.val + left + right;
//     }
// };

// // 257. Binary Tree Paths
// var binaryTreePaths = function (root) {
//     if (!root) return [];
//     var res = [];
//     helper(root, "");
//     return res;

//     function helper(node, str) {
//         if (!node.left && !node.right) {
//             res.push(str + node.val);
//         }
//         if (node.left) {
//             helper(node.left, str + node.val + "->");
//         }
//         if (node.right) {
//             helper(node.right, str + node.val + "->");
//         }
//     }
// };

// // 1018. Binary Prefix Divisible By 5
// FAILS FOR BIGGER NUMBERS
// var prefixesDivBy5 = function(A) {
//     let res = [];
//     let str = "";
//     for (let i=0; i<A.length; i++) {
//         let binary = str + A[i];
//         let num = parseInt(binary,2);
//         res.push(num%5 === 0)
//         str += A[i];
//     }
//     return res;
// };
// console.log(prefixesDivBy5([0,1,1]));
// console.log(prefixesDivBy5([1,1,1]));
// console.log(prefixesDivBy5([0,1,1,1,1,1]));
// console.log(prefixesDivBy5([1,1,1,0,1]));

// var prefixesDivBy5 = function (A) {
//     let res = [];
//     let num = 0;
//     for (let bit of A) {
//         num = (num * 2 + bit) % 5;
//         res.push(num === 0)
//     }
//     return res;
// };
// console.log(prefixesDivBy5([0, 1, 1]));
// console.log(prefixesDivBy5([1, 1, 1]));
// console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]));
// console.log(prefixesDivBy5([1, 1, 1, 0, 1]));

// var prefixesDivBy5 = function (A) {
//     let value = 0;

//     let b = A.map(digit => {
//         value = (value * 2 + digit) % 5;
//         return !value;
//     });
// };
// console.log(prefixesDivBy5([0, 1, 1]));
// console.log(prefixesDivBy5([1, 1, 1]));
// console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]));
// console.log(prefixesDivBy5([1, 1, 1, 0, 1]));

// // 235. Lowest Common Ancestor of a Binary Search Tree
// WHILE LOOP
// var lowestCommonAncestor = function(root, p, q) {
//     while (root) {
//         if (p.val < root.val && q.val < root.val) {
//             root = root.left;
//         } else if (p.val > root.val && q.val > root.val) {
//             root = root.right;
//         } else {
//             return root;
//         }
//     }
//     return root;
// };

// RECURSIVE
// var lowestCommonAncestor = function(root, p, q) {
//     if (p.val < root.val && q.val < root.val) {
//         return lowestCommonAncestor(root.left, p, q);
//     } else if (p.val > root.val && q.val > root.val) {
//         return lowestCommonAncestor(root.right, p, q);
//     } else {
//         return root;
//     }
// };

// RECURSIVE W/ HELPER
// var lowestCommonAncestor = function(root, p, q) {
//     return helper(root,p.val,q.val);

//     function helper(node, p, q) {
//         if (p < node.val && q < node.val) {
//             return helper(node.left, p, q);
//         } else if (p > node.val && q > node.val) {
//             return helper(node.right, p, q);
//         } else {
//             return node;
//         }
//     }
// };

// // 1010. Pairs of Songs With Total Durations Divisible by 60
// VERY SLOW
// var numPairsDivisibleBy60 = function(time) {
//     let count = 0;
//     for (let i=0; i<time.length-1; i++) {
//         for (let j=i+1; j<time.length; j++) {
//             if ((time[i]+time[j]) % 60 === 0) {
//                 count++;
//             }
//         }
//     }
//     return count;
// };
// console.log(numPairsDivisibleBy60([30,20,150,100,40]));
// console.log(numPairsDivisibleBy60([60,60,60]));

// OPTIMIZED USING A DICT TO STORE MATCHES
// var numPairsDivisibleBy60 = function(time) {
//     let count = 0;
//     let dict = {};
//     for (let i=0; i<time.length; i++) {
//         let num = time[i] % 60;
//         let match = (60-num) % 60;
//         if (dict[match]) {
//             count += dict[match];
//         }
//         if (dict[num]) {
//             dict[num]++;
//         } else {
//             dict[num] = 1;
//         }
//     }
//     return count;
// };
// console.log(numPairsDivisibleBy60([30,20,150,100,40]));
// console.log(numPairsDivisibleBy60([269,230,318,468,171,158,350,60,287,27,11,384,332,267,412,478,280,303,242,378,129,131,164,467,345,146,264,332,276,479,284,433,117,197,430,203,100,280,145,287,91,157,5,475,288,146,370,199,81,428,278,2,400,23,470,242,411,470,330,144,189,204,62,318,475,24,457,83,204,322,250,478,186,467,350,171,119,245,399,112,252,201,324,317,293,44,295,14,379,382,137,280,265,78,38,323,347,499,238,110,18,224,473,289,198,106,256,279,275,349,210,498,201,175,472,461,116,144,9,221,473]));

// // 401. Binary Watch
// var readBinaryWatch = function(num) {
//     let res =[];
//     for (let i=0; i<12; i++) {
//         let bits = 0;
//         for (let j=0; j<60; j++) {
//             bits = i.toString(2).split(1).length - 1;
//             bits += j.toString(2).split(1).length - 1;
//             if (bits === num) {
//                 let hours = i.toString();
//                 let minutes = j.toString();
//                 if (j<10) {
//                     minutes = "0" + minutes;
//                 }
//                 let str =  hours + ":" + minutes;
//                 res.push(str);
//             }
//         }
//     }
//     return res;
// };
// console.log(readBinaryWatch(1));

// // 1160. Find Words That Can Be Formed by Characters
// var countCharacters = function(words, chars) {
//     let count = 0;
//     let arr = new Array(26).fill(0);

//     for (let i=0; i<chars.length; i++) {
// 		arr[chars.charCodeAt(i) - 97]++;
//     }

//     for (let i=0; i<words.length; i++) {
//         let temp = arr.slice();
//         let valid = true;
//         for (let j=0; j<words[i].length; j++) {
//             temp[words[i].charCodeAt(j) - 97]--;
//             if (temp[words[i].charCodeAt(j) - 97] < 0) {
//                 valid = false;
//                 break;
//             }
//         }
//         if (valid === true) {
//             count += words[i].length;
//         }
//     }
//     return count;
// };
// console.log(countCharacters(["cat","bt","hat","tree"], "atach"));

// // 690. Employee Importance
// PHP CANT TEST BECAUSE BROKEN TEST CASES
// function getImportance($employees, $id) {
//     function helper($id2) {
//         $res = dict[$id2];
//         foreach ($subs[$id2] as $sub) {
//             $res += helper($sub);
//         }
//         return $res;
//     }
//     $dict = array();
//     $subs = array();
//     foreach ($employees as $employee) {
//         $dict[$employee] = $employee->importance;
//         $subs[$employee] = $employee->subordinates;
//     }
//     return helper($id);
// }
// console.log(getImportance([[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1))

// // 1170. Compare Strings by Frequency of the Smallest Character
// USING REGULAR FOR LOOPS IS FASTER
// SORT FOR FASTER EXIT
// var numSmallerByFrequency = function (queries, words) {
//     let res = [];
//     let qArray = [];
//     let wArray = [];

//     for (let i=0; i<words.length; i++) {
//         let temp = helper(words[i]);
//         wArray.push(temp);
//     }
//     wArray.sort((a,b) => b-a);

//     for (let i=0; i<queries.length; i++) {
//         let temp = helper(queries[i]);
//         qArray.push(temp);
//     }

//     for (let i=0; i<qArray.length; i++) {
//         let count = 0;
//         for (let j=0; j<wArray.length; j++) {
//             if (qArray[i] < wArray[j]) {
//                 count++;
//             } else {
//                 break;
//             }
//         }
//         res.push(count);
//     }
//     return res;

//     function helper(str) {
//         let min = str[0];
//         let mCount = 1;
//         for (let i=1; i < str.length; i++) {
//             if (str[i] < min) {
//                 min = str[i];
//                 mCount = 1;
//             } else if (str[i] === min) {
//                 mCount++;
//             }
//         }
//         return mCount;
//     }
// };
// console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
// console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]));

// SLOW NO FAST EXIT
// var numSmallerByFrequency = function (queries, words) {
//     let res = [];
//     let qArray = [];
//     let wArray = [];

//     for (let word in words) {
//         let temp = helper(words[word]);
//         wArray.push(temp);
//     }
//     for (let query in queries) {
//         let temp = helper(queries[query]);
//         qArray.push(temp);
//     }

//     for (let query in qArray) {
//         let count = 0;
//         for (let word in wArray) {
//             if (qArray[query] < wArray[word]) count++;
//         }
//         res.push(count);
//     }
//     return res;

//     function helper(str) {
//         let dict = {};
//         let min = str[0];
//         for (let i=0; i < str.length; i++) {
//             if (str[i] < min) {
//                 min = str[i];
//             }
//             if (dict[str[i]]) {
//                 dict[str[i]]++;
//             } else {
//                 dict[str[i]] = 1;
//             }
//         }
//         return dict[min];
//     }
// };
// console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
// console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]));

// SORT WORDS ARRAY FOR FAST EXIT
// var numSmallerByFrequency = function (queries, words) {
//     let res = [];
//     let qArray = [];
//     let wArray = [];

//     for (let word in words) {
//         let temp = helper(words[word]);
//         wArray.push(temp);
//     }
//     wArray.sort((a,b) => b-a);

//     for (let query in queries) {
//         let temp = helper(queries[query]);
//         qArray.push(temp);
//     }

//     for (let query in qArray) {
//         let count = 0;
//         for (let word in wArray) {
//             if (qArray[query] < wArray[word]) {
//                 count++;
//             } else {
//                 break;
//             }
//         }
//         res.push(count);
//     }
//     return res;

//     function helper(str) {
//         let min = str[0];
//         let mCount = 1;
//         for (let i=1; i < str.length; i++) {
//             if (str[i] < min) {
//                 min = str[i];
//                 mCount = 1;
//             } else if (str[i] === min) {
//                 mCount++;
//             }
//         }
//         return mCount;
//     }
// };
// console.log(numSmallerByFrequency(["cbd"], ["zaaaz"]));
// console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]));

// // 447. Number of Boomerangs
// var numberOfBoomerangs = function(points) {
//     let res = 0;
//     let length = points.length;
//     for (let i=0; i<length; i++) {
//         let dict = {};
//         for (let j=0; j<length; j++) {
//             if (i === j) continue;
//             let xTemp = points[i][0] - points[j][0];
//             let yTemp = points[i][1] - points[j][1];
//             let dTemp = xTemp*xTemp + yTemp*yTemp;
//             if (dict[dTemp]) {
//                 res += dict[dTemp]*2;
//                 dict[dTemp]++;
//             } else {
//                 dict[dTemp] = 1;
//             }
//         }
//     }
//     return res;
// };
// console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));

// // 703. Kth Largest Element in a Stream
// var KthLargest = function(k, nums) {
//     this.k = k;
//     this.nums = nums.sort((a,b) => a-b);
// };

// KthLargest.prototype.add = function(val) {
//     let left = 0;
//     let right = this.nums.length;

//     while (left<right) {
//         let mid = Math.floor((right+left)/2);
//         if (this.nums[mid] < val) {
//             left = mid+1;
//         } else {
//             right = mid;
//         }
//     }

//     this.nums.splice(left,0,val);
//     return this.nums[this.nums.length-this.k];
// };
// let test2 = new KthLargest(3,[4,5,8,2]);
// console.log(test2.add(3));
// console.log(test2.add(5));
// console.log(test2.add(10));
// console.log(test2.add(9));
// console.log(test2.add(4));

// USING ARRAY OF K LENGTH;
// var KthLargest = function(k, nums) {
//     this.k = k;
//     this.nums = nums.sort((a,b) => b-a);
// };

// KthLargest.prototype.add = function(val) {
//     let cur = this.nums[this.k - 1];
//     if (val <= cur) {
//       return cur;
//     }
//     let i = this.k;
//     while (i >= 0) {
//       if (this.nums[i] > val) {
//         break;
//       }
//       this.nums[i + 1] = this.nums[i];
//       i--;
//     }
//     i++;
//     this.nums[i] = val;
//     return this.nums[this.k - 1];
// };
// let test2 = new KthLargest(3,[4,5,8,2]);
// console.log(test2.add(3));
// console.log(test2.add(5));
// console.log(test2.add(10));
// console.log(test2.add(9));
// console.log(test2.add(4));

// // 720. Longest Word in Dictionary
// var longestWord = function(words) {
//     words.sort();
//     let set = new Set(words);
//     let res = "";
//     for (let i=0, length=words.length; i<length; i++) {
//         let valid = true;
//         let temp = "";
//         let wLength = words[i].length;
//         for (let j=0; j<wLength; j++) {
//             temp += words[i][j];
//             if (!set.has(temp)) {
//                 valid = false;
//                 break;
//             }
//         }
//         if (valid && wLength > res.length) {
//             res = words[i];
//         }
//     }
//     return res;
// };
// console.log(longestWord(["w","wo","wor","worl", "world"]));

// FAST EXITS
// var longestWord = function(words) {
//     let set = new Set(words);
//     let res = "";
//     for (let i=0, length=words.length; i<length; i++) {
//         let isValid = true;
//         if (words[i].length < res.length) continue;
//         if (words[i].length === res.length && words[i] > res) continue;
//         for (let j=length-1; j>0; j--) {
//             if (!set.has(words[i].substring(0,j))) {
//                 isValid = false;
//                 continue;
//             }
//         }
//         if (isValid) res = words[i];
//     }
//     return res;
// };
// console.log(longestWord(["w","wo","wor","worl", "world"]));

// // 1128. Number of Equivalent Domino Pairs
// var numEquivDominoPairs = function(dominoes) {
//     let dict = {};
//     let res = 0;

//     for (let [a,b] of dominoes) {
//         let strA = a.toString();
//         let strB = b.toString();
//         let key = "";
//         if ( a < b) {
//             key = strA + strB;
//         } else {
//             key = strB + strA;
//         }

//         if (dict[key] !== undefined) {
//             dict[key]++;
//             res += dict[key];
//         } else {
//             dict[key] = 0;
//         }
//     }
//     return res;
// };
// console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]));

// var numEquivDominoPairs = function(dominoes) {
//     let res = 0;
//     for (let i in dominoes) {
//         if (dominoes[i][1] < dominoes[i][0]) {
//             let temp = dominoes[i][1];
//             dominoes[i][1] = dominoes[i][0];
//             dominoes[i][0] = temp;
//         }
//     }
//     for (let i=0; i<dominoes.length-1; i++) {
//         for (let j=i+1; j<dominoes.length; j++) {
//             if (dominoes[i][0] === dominoes[j][0]) {
//                 if (dominoes[i][1] === dominoes[j][1]) {
//                     res++;
//                 }
//             }
//         }
//     }
//     return res;
// };
// console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]))

// var numEquivDominoPairs = function(dominoes) {
//     let res = 0;
//     for (let i=0; i<dominoes.length-1; i++) {
//         for (let j=i+1; j<dominoes.length; j++) {
//             if (dominoes[i][0] === dominoes[j][0]) {
//                 if (dominoes[i][1] === dominoes[j][1]) {
//                     res++;
//                 }
//             } else if (dominoes[i][0] === dominoes[j][1]) {
//                 if (dominoes[i][1] === dominoes[j][0]) {
//                     res++;
//                 }
//             }
//         }
//     }
//     return res;
// };
// console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]));

// // 232. Implement Queue using Stacks
// var MyQueue = function() {
//     this.stack = [];
// };

// MyQueue.prototype.push = function(x) {
//     this.stack.push(x);
// };

// MyQueue.prototype.pop = function() {
//     let stack2 = [];
//     while (this.stack.length) {
//         stack2.push(this.stack.pop());
//     }
//     let el = stack2.pop();
//     while (stack2.length) {
//         this.stack.push(stack2.pop());
//     }
//     return el;
// };

// MyQueue.prototype.peek = function() {
//     let stack2 = [];
//     while (this.stack.length) {
//         stack2.push(this.stack.pop());
//     }
//     let el = stack2[stack2.length-1];
//     while (stack2.length) {
//         this.stack.push(stack2.pop());
//     }
//     return el;
// };

// MyQueue.prototype.empty = function() {
//     return !this.stack.length;
// };

// // 415. Add Strings
// var addStrings = function(num1, num2) {
//     let res = "";
//     let length = Math.max(num1.length, num2.length);
//     let carry = 0;
//     let i = 1;
//     while (i<=length || carry > 0) {
//         let a = num1[num1.length - i] || 0;
//         let b = num2[num2.length - i] || 0;
//         let temp = parseInt(a) + parseInt(b) + carry;
//         if (temp >= 10) {
//             carry = Math.floor(temp/10);
//         } else {
//             carry = 0;
//         }
//         temp %= 10;
//         i++;
//         res = temp + res;
//     }
//     return res;
// };
// console.log(addStrings("8234", "8888"));

// // 437. Path Sum III
// var pathSum = function(root, sum) {
//     if (!root) return 0;
//     let res = 0;
//     helper(root, 0);
//     res += pathSum(root.left, sum);
//     res += pathSum(root.right, sum);
//     return res;

//     function helper(node, temp) {
//         if (!node) return;
//         temp += node.val;
//         if (temp === sum) res++;
//         helper(node.left, temp);
//         helper(node.right, temp);
//     }
// };

// CLEANER CODE BUT SAME
// let pathSum = function(root, sum) {
//     if (!root) return 0;
//     return helper(root, 0) + pathSum(root.left, sum) + pathSum(root.right, sum);

//     function helper(node, temp) {
//         if (!node) return 0;
//         temp += node.val;
//         return (temp === sum) + helper(node.left, temp) + helper(node.right, temp);
//     };
// };

// // 405. Convert a Number to Hexadecimal
// var toHex = function(num) {
//     const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
//     let res = "";

//     if (num == 0) return "0";
//     if (num < 0) {
//         num += Math.pow(2,32);
//     }

//     while (num > 0) {
//         let digit = num % 16;
//         res = arr[digit] + res;
//         num = Math.floor(num/16);
//     }
//     return res;
// };
// console.log(toHex(26));
// console.log(toHex(-1));

// // 572. Subtree of Another Tree
// preorder to build strings and check if t is a substring of s
// fix so i only need one helper 
// var isSubtree = function(s, t) {
//     let str1 = "";
//     let str2 = "";
//     helper(s);
//     helper2(t);

//     function helper(node) {
//         if (!node) {
//             str1 += "[" +null+ "]";
//             return;
//         }
//         str1 += "[" +node.val+ "]";
//         helper(node.left);
//         helper(node.right);
//     }
//     function helper2(node) {
//         if (!node) {
//             str2 += "[" +null+ "]";
//             return;
//         }
//         str2 += "[" +node.val+ "]";
//         helper2(node.left);
//         helper2(node.right);
//     }
//     if (str1.includes(str2)) return true;
//     return false;
// };

// // 110. Balanced Binary Tree
// var isBalanced = function(root) {
//     if (!root) return true;

//     let res = true;
//     let left = helper(root.left);
//     let right = helper(root.right);
//     let diff = Math.abs(left-right);

//     if (diff>1) res = false;

//     return res && isBalanced(root.left) && isBalanced(root.right);

//     function helper(node) {
//         if (!node) return 0;
//         let left = helper(node.left);
//         let right = helper(node.right);

//         return Math.max(left, right) + 1;
//     }
// };

// var isBalanced = function(root) {
//     return helper(root) !== -1

//     function helper(node) {
//         if (!node) return 0;
//         let left = helper(node.left);
//         if (left === -1) return -1;
//         let right = helper(node.right);
//         if (right === -1) return -1;
//         if (Math.abs(left-right) > 1) return -1;
//         return Math.max(left, right) + 1;
//     }
// };

// // 645. Set Mismatch
// var findErrorNums = function(nums) {
//     let res = [];
//     let arr = Array(nums.length+1).fill(0);
//     for (let i=0; i<nums.length; i++) {
//         let num = nums[i];
//         if (arr[num]) {
//             arr[num]++
//         } else {
//             arr[num] = 1;
//         }
//     }
//     let count = 0;
//     for (let i=1; i<arr.length; i++) {
//         if (arr[i] === 0) {
//             res[1] = i;
//             count++;
//         } else if (arr[i] === 2) {
//             res[0] = i;
//             count++;
//         }
//         if (count > 1) break;
//     }
//     return res;
// };
// console.log(findErrorNums([1,2,2,4]));

// var findErrorNums = function(nums) {
//     let res = [];
//     let arr = Array(nums.length+1).fill(0);
//     let sum = (nums.length * (nums.length+1)) / 2;
//     let fSum = 0;

//     for (let i=0; i<nums.length; i++) {
//         let num = nums[i];
//         if (arr[num]) {
//             res[0] = num;
//         } else {
//             arr[num] = 1;
//         }
//         fSum += nums[i];
//     }
//     if (sum-fSum > 0) {
//         res[1] = res[0] + Math.abs(sum-fSum);
//     } else {
//         res[1] = res[0] - Math.abs(sum-fSum);
//     }
//     return res;
// };
// console.log(findErrorNums([1,2,2,4]));
// console.log(findErrorNums([2,2]));

// // 287. Find the Duplicate Number
// var findDuplicate = function(nums) {
//     let slow = nums[0];
//     let fast = nums[nums[0]];

//     while (slow !== fast) {
//         slow = nums[slow];
//         fast = nums[nums[fast]];
//     }
//     fast = 0;
//     while (slow !== fast) {
//         slow = nums[slow];
//         fast = nums[fast];
//     }
//     return slow;
// };
// console.log(findDuplicate([1,3,4,2,2]));
// console.log(findDuplicate([3,1,3,4,2]));

// // 263. Ugly Number
// RECURSIVE
// var isUgly = function(num) {
//     if (num <= 0) return false;
//     if (num === 1 || num === 2|| num === 3|| num === 5) return true;
//     if (num % 2 === 0) return isUgly(num/2);
//     else if (num % 3 === 0) return isUgly(num/3);
//     else if (num % 5 === 0) return isUgly(num/5);
//     else return false;
// };
// console.log(isUgly(6));
// console.log(isUgly(8));
// console.log(isUgly(14));

// // WHILE LOOPS
// var isUgly = function(num) {
//     if (num <= 0) return false;
//     while (num % 2 === 0) num /= 2;
//     while (num % 3 === 0) num /= 3;
//     while (num % 5 === 0) num /= 5;
//     return num === 1;
// };
// console.log(isUgly(6));
// console.log(isUgly(8));
// console.log(isUgly(14));

// // USING DOUBLE TILDA AND DIVISION FOR BETTER SPEED
// var isUgly = function(num) {
//     if (num <= 0) return false;
//     while (~~(num / 2) === num/2) num /= 2;
//     while (~~(num / 3) === num/3) num /= 3;
//     while (~~(num / 5) === num/5) num /= 5;
//     return num === 1;
// };
// console.log(isUgly(6));
// console.log(isUgly(8));
// console.log(isUgly(14));

// // 225. Implement Stack using Queues
// var MyStack = function() {
//     this.q = [];
// };

// MyStack.prototype.push = function(x) {
//     this.q.push(x);
// };

// MyStack.prototype.pop = function() {
//     for (let i=0; i<this.q.length-1; i++) {
//         this.q.push(this.q.shift());
//     }
//     return this.q.shift();
// };

// MyStack.prototype.top = function() {
//     return this.q[this.q.length-1];
// };

// MyStack.prototype.empty = function() {
//     return this.q.length === 0;
// };

// NO JS AVAIABLE SO THIS IS IN JAVA
// // 374. Guess Number Higher or Lower
// public class Solution extends GuessGame {
//     public int guessNumber(int n) {
//         int left = 1;
//         int right = n;

//         while (left < right) {
//             int mid = left + (right-left)/2;
//             int res = guess(mid);
//             if (res == 0)
//                 return mid;
//             else if (res == -1)
//                 right = mid-1;
//             else
//                 left = mid+1;

//         }
//         return left;
//     }
// }

// // 501. Find Mode in Binary Search Tree
// var findMode = function(root) {
//     let dict = {};
//     let res = [];
//     let max = 1;
//     helper(root);
//     return res;

//     function helper(node) {
//         if (!node) return;
//         helper(node.left);
//         if (dict[node.val]) {
//             dict[node.val]++;
//         } else {
//             dict[node.val] = 1;
//         }
//         if (dict[node.val] === max) {
//             res.push(node.val);
//         } else if (dict[node.val] > max) {
//             res = [node.val];
//             max = dict[node.val];
//         }
//         helper(node.right);
//     }
// };

// // 970. Powerful Integers
// var powerfulIntegers = function(x, y, bound) {
//     let res = [];
//     let i=0;
//     while (Math.pow(x,i) < bound) {
//         let j=0;
//         while (Math.pow(y,j) < bound) {
//             let temp = Math.pow(x,i)+Math.pow(y,j);
//             if (temp <= bound) {
//                 if (!res.includes(temp)) res.push(temp);
//             }
//             if (y === 1) break;
//             j++;
//         }
//         if (x === 1) break;
//         i++;
//     }
//     return res;
// };
// console.log(powerfulIntegers(3, 5, 15));
// console.log(powerfulIntegers(2, 3, 10));
// console.log(powerfulIntegers(2, 3, 2));
// console.log(powerfulIntegers(2, 1, 10));

// // 303. Range Sum Query - Immutable
// BRUTE FORCE
// var NumArray = function(nums) {
//     this.nums = nums;
// };

// NumArray.prototype.sumRange = function(i, j) {
//     let sum = 0;
//     for (;i<=j; i++) {
//         sum += this.nums[i];
//     }
//         return sum;
// };


// DYNAMIC PROGRAMMING WITH MEMO
// var NumArray = function(nums) {
//     let sum = 0;
//     this.memo = [];
//     for (let i=0; i<nums.length; i++) {
//         let num = nums[i];
//         sum += num;
//         this.memo.push(sum);
//     }
// };
// NumArray.prototype.sumRange = function(i, j) {
//     if (i === 0) return this.memo[j];
//     return this.memo[j] - this.memo[i - 1];
// };

// DYNAMIC PROGRAMMING WITH MEMO USING MAP
// var NumArray = function(nums) {
//     let sum = 0;
//     this.memo = nums.map(num => (sum += num));
// };
// NumArray.prototype.sumRange = function(i, j) {
//     if (i === 0) return this.memo[j];
//     return this.memo[j] - this.memo[i - 1];
// };

// // 112. Path Sum
// var hasPathSum = function(root, sum) {
//     let res = false;
//     helper(root, 0);
//     return res;

//     function helper(node, temp) {
//         if (!node) return;
//         temp += node.val;
//         helper(node.left, temp);
//         helper(node.right, temp);
//         if (!node.left && !node.right) {
//             if (temp === sum) res = true;
//         }
//     }
// };

// // 1033. Moving Stones Until Consecutive
// var numMovesStones = function(a, b, c) {
//     let arr = [a, b, c];
//     arr.sort((a,b) => a-b);

//     let max = arr[2] - arr[0] - 2;
//     let min = 2;
//     if (arr[2] - arr[1] < 3 || arr[1] - arr[0] < 3) min = 1;
//     if (arr[2] - arr[1] === 1 && arr[1] - arr[0] === 1) min = 0;

//     return [min, max];
// };
// console.log(numMovesStones(1, 2, 5));
// console.log(numMovesStones(4, 3, 2));
// console.log(numMovesStones(3, 5, 1));

// var numMovesStones = function(a, b, c) {
//     let arr = [a, b, c];
//     arr.sort((a,b) => a-b);

//     let max = arr[2] - arr[0] - 2;
//     let min;

//     let d1 = arr[1] - arr[0];
//     let d2 = arr[2] - arr[1];

//     if (d1 === 1 && d2 === 1) {
//         min = 0;
//     } else if (d1 < 3 || d2 < 3) {
//         min = 1;
//     } else {
//         min = 2;
//     }

//     return [min, max];
// };
// console.log(numMovesStones(1, 2, 5));
// console.log(numMovesStones(4, 3, 2));
// console.log(numMovesStones(3, 5, 1));
// console.log(numMovesStones(7, 4, 1));

// // 1037. Valid Boomerang
// var isBoomerang = function(points) {
//     let p1 = points[0];
//     let p2 = points[1];
//     let p3 = points[2];

//     if ((p1[0] == p2[0] && p1[1] == p2[1]) || 
//         (p1[0] == p3[0] && p1[1] == p3[1]) ||
//         (p2[0] == p3[0] && p2[1] == p3[1])) {
//         return false;
//     }

//     let x = p1[0] - p2[0];
//     let y = p1[1] - p2[1];
//     let slope = y/x;

//     let x2 = p2[0] - p3[0];
//     let y2 = p2[1] - p3[1];
//     let slope2 = y2/x2;

//     let x3 = p1[0] - p3[0];
//     let y3 = p1[1] - p3[1];
//     let slope3 = y3/x3;

//     if (slope === slope2 && slope === slope3) return false;
//     return true;
// };
// console.log(isBoomerang([[1,1],[2,3],[3,2]]));

// // 203. Remove Linked List Elements
// var removeElements = function(head, val) {
//     let prev = null;
//     let node = head;

//     while (node) {
//         if (node.val === val) {
//             if (prev === null) {
//                 head = node.next;
//             } else {
//                 prev.next = node.next;
//             }
//         } else {
//             prev = node;
//         }
//         node = node.next;
//     }
//     return head;
// };

// // 840. Magic Squares In Grid
// var numMagicSquaresInside = function(grid) {
//     if (!grid || grid.length < 3 || grid[0].length < 3) return 0;

//     let row = grid.length;
//     let col = grid[0].length;
//     let count = 0;

//     for (let i=1; i<row-1; i++) {
//         for (let j=1; j<col-1; j++) {
//             if (grid[i][j] === 5) {
//                 let isValid = helper(i,j);
//                 if (isValid) {
//                     let top = [i-1];
//                     let bottom = [i+1];
//                     let left = [j-1];
//                     let right = [j+1];

//                     // CHECK ROWS
//                     if (grid[top][left] + grid[top][j] + grid[top][right] !== 15) continue;
//                     if (grid[i][left] + grid[i][right] !== 10) continue;
//                     if (grid[bottom][left] + grid[bottom][j] + grid[bottom][right] !== 15) continue;

//                     // CHECK COLUMNS
//                     if (grid[top][left] + grid[i][left] + grid[bottom][left] !== 15) continue;
//                     if (grid[top][j] + grid[bottom][j] !== 10) continue;
//                     if (grid[top][right] + grid[i][right] + grid[bottom][right] !== 15) continue;

//                     count++;
//                 }
//             }
//         }
//     }
//     return count;

//     function helper(x,y) {
//         let set = new Set();
//         for (let i=-1; i<=1; i++) {
//             for (let j=-1; j<=1; j++) {
//                 if (set.has(grid[x+i][y+j]) || grid[x+i][y+j] < 1 || grid[x+i][y+j] > 9) {
//                     return false;
//                 } else {
//                     set.add(grid[x+i][y+j]);
//                 }
//             }
//         }
//         return true;
//     }
// };
// let grid = [
//     [4,3,8,4],
//     [9,5,1,9],
//     [2,7,6,2]
// ]
// console.log(numMagicSquaresInside(grid));

// // 111. Minimum Depth of Binary Tree
// var minDepth = function (root) {
// 	if (!root === null) return 0;
//     let res = Infinity;
//     helper(root, 1);
//     return res;

//     function helper(node, depth) {
//         if (!node.left && !node.right) {
//             res = Math.min(res, depth);
//         }
//         if (node.left) helper(node.left, depth+1);
//         if (node.right) helper(node.right, depth+1);
//     }
// };

// var minDepth = function(root) {
//     if (!root) return 0;
//     if (!root.left || !root.right) {
//         return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
//     } else {
//         return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
//     }
// };

// // 687. Longest Univalue Path
// var longestUnivaluePath = function(root) {
//     let res = 0;
//     helper(root);
//     return res;

//     function helper(node) {
//         if (!node) return 0;

//         let left = helper(node.left);
//         let right = helper(node.right);

//         let leftLen = 0;
//         let rightLen = 0;

//         if (node.left && node.left.val === node.val) {
//             leftLen = left + 1;
//         }
//         if (node.right && node.right.val === node.val) {
//             rightLen = right + 1;
//         }
//         res = Math.max(res, leftLen + rightLen);

//         return Math.max(leftLen, rightLen)
//     }
// };

// var longestUnivaluePath = function(root) {
//     if (!root) return 0;
//     return Math.max(
//         longestUnivaluePath(root.left),
//         longestUnivaluePath(root.right),
//         helper(root.left,root.val) + helper(root.right, root.val)
//     );

//     function helper(node, univalue) {
//         if (!node || node.val !== univalue) return 0;
//         return Math.max(
//             helper(node.left, univalue),
//             helper(node.right, univalue)
//         ) + 1;
//     }
// };

// var longestUnivaluePath = function(root) {
//     let counts = [];
//     let result = 0;

//     getLongestPath(node);
//     result = Math.max(...counts);

//     return result;

//     function getLongestPath(node){
//         if (node == null) return 0;

//         let longestLeftPath = getLongestPath(node.left);
//         let longestRightPath = getLongestPath(node.right);
//         let countLeft = 0;
//         let countRight = 0;

//         if (node.left != null && node.val == node.left.val) {
//             countLeft = longestLeftPath + 1            
//         }
//         if (node.right != null && node.val == node.right.val) {
//             countRight = longestRightPath + 1            
//         }
//         counts.push(countLeft + countRight)
//         return Math.max(countLeft, countRight)
//     }
// }

// // 874. Walking Robot Simulation
// var robotSim = function(commands, obstacles) {
//     let facing = 0;
//     let position = [0,0];
//     let res = 0;
//     let set = new Set();
//     for (let i=0; i<obstacles.length; i++) {
//         set.add(obstacles[i].toString())
//     }
//     for (let i=0; i<commands.length; i++) {
//         if (commands[i] === -2) {
//             facing--;
//             if (facing === -1) facing = 3;
//         } else if (commands[i] < 0) {
//             facing++;
//             if (facing > 3) facing = 0;
//         } else {
//             let j = 0;
//             if (facing === 0) {
//                 while (!set.has(([position[0],position[1]+1]).toString()) && j<commands[i]) {
//                     position[1]++;
//                     j++;
//                 }
//             } else if (facing === 2) {
//                 while (!set.has(([position[0],position[1]-1]).toString()) && j<commands[i]) {
//                     position[1]--;
//                     j++;
//                 }
//             } else if (facing === 1) {
//                 while (!set.has(([position[0]+1,position[1]]).toString()) && j<commands[i]) {
//                     position[0]++;
//                     j++;
//                 }
//             } else {
//                 while (!set.has(([position[0]-1,position[1]]).toString()) && j<commands[i]) {
//                     position[0]--;
//                     j++;
//                 }
//             }
//             res = Math.max(res, position[0]*position[0] + position[1]*position[1])
//         }
//     }
//     return res;
// };
// console.log(robotSim([4, -1, 3], []));
// console.log(robotSim([4,-1,4,-2,4], [[2,4],[4,4]]));

// // 475. Heaters
// var findRadius = function(houses, heaters) {
//     houses.sort((a,b) => a-b);
//     heaters.sort((a,b) => a-b);

//     let len1 = houses.length;
//     let len2 = heaters.length;
//     let res = 0;
//     let j = 0;
//     for (let i=0; i<len1; i++) {
//         while (j<len2-1 && (Math.abs(heaters[j]-houses[i]) >= Math.abs(heaters[j+1]-houses[i]))) {
//             j++;
//         }
//         res = Math.max(res, Math.abs(heaters[j] - houses[i]));
//     }
//     return res;
// };
// console.log(findRadius([1, 2, 3], [2]));
// console.log(findRadius([1, 2, 3, 4], [1, 4]));

// // 686. Repeated String Match
// var repeatedStringMatch = function(A, B) {
//     let str = "";
//     let count = 0;
//     let length = A.length + B.length;

//     while (str.length <= length) {
//         str += A;
//         count++;
//         if (str.includes(B)) return count;
//     }
//     return -1;
// };

// var repeatedStringMatch = function(A, B) {
//     let count =  Math.ceil(B.length/A.length);
//     let str =  A.repeat(count);
//     if (str.includes(B)){
//         return count;
//     } else if ((str + A).includes(B)) {
//         return count + 1;
//     }
//     return -1;
// };

// // 532. K-diff Pairs in an Array
// var findPairs = function(nums, k) {
//     let res = 0;
//     let arr = nums.sort((a,b) => a-b);

//     for (let i=0; i<arr.length; i++) {
//         while (arr[i] === arr[i-1]) i++;
//         for (let j=i+1; j<arr.length; j++) {
//             let diff = Math.abs(arr[i] - arr[j]);
//             if (diff > k) {
//                 break;
//             } else if (diff === k) {
//                 res++;
//                 break;
//             }
//         }
//     }
//     return res;
// };
// console.log(findPairs([3, 1, 4, 1, 5], 2));
// console.log(findPairs([1, 2, 3, 4, 5], 1));
// console.log(findPairs([1, 3, 1, 5, 4], 0));

// var findPairs = function(nums, k) {
//     if (k < 0) return 0;

//     if (k === 0) {
//         let set2 = new Set();
//         let set3 = new Set();
//         for (let i=0, length=nums.length; i<length; i++) {
//             if (set2.has(nums[i])) {
//                 set3.add(nums[i]);
//             } else {
//                 set2.add(nums[i]);
//             }
//         }
//         return set3.size;
//     }

//     let res = 0;
//     let set = new Set(nums);
//     set.forEach(
//         function helper(key) {
//             if (set.has(key-k)) {
//                 res++;
//             }
//         }
//     )
//     return res;
// };
// console.log(findPairs([3, 1, 4, 1, 5], 2));
// console.log(findPairs([1, 2, 3, 4, 5], 1));
// console.log(findPairs([1, 3, 1, 5, 4], 0));
// console.log(findPairs([1, 2, 3, 4, 5], -1));

// // 168. Excel Sheet Column Title
// var convertToTitle = function(n) {
//     if (n < 27) {
//         return String.fromCharCode(n+64);
//     }
//     let res = "";
//     while (n > 0) {
//         let temp = n % 26;
//         if (temp === 0) temp = 26;
//         res = String.fromCharCode(temp+64) + res;
//         n -= temp;
//         n /= 26;
//     }
//     return res;
// };
// console.log(convertToTitle(1));
// console.log(convertToTitle(28));
// console.log(convertToTitle(701));

// var convertToTitle = function(n) {
//     let res = [];
//     while (n > 0) {
//         let temp = n % 26;
//         if (temp === 0) {
//             temp = 26;
//             n = Math.floor(n/26)-1;

//         } else {
//             n = Math.floor(n/26);
//         }
//         res.unshift(String.fromCharCode(temp+64));
//     }
//     return res.join("");
// };
// console.log(convertToTitle(1));
// console.log(convertToTitle(28));
// console.log(convertToTitle(701));

// // 707. Design Linked List
// var MyLinkedList = function() {
//     this.head = null;
//     this.length = 0;
// };

// MyLinkedList.prototype.get = function(index) {
//     if (index > this.length-1 || index < 0) return -1;
//     let i = 0;
//     let cur = this.head;
//     while (i < index) {
//         cur = cur.next;
//         i++;
//     }
//     return cur.val;
// };

// MyLinkedList.prototype.addAtHead = function(val) {
//     let node = new Node(val);
//     node.next = this.head;
//     this.head = node;
//     this.length++;
// };

// MyLinkedList.prototype.addAtTail = function(val) {
//     let node = new Node(val);
//     let cur = this.head;

//     if (!cur) {
//         this.head = node;
//     } else {
//         while (cur.next) {
//             cur = cur.next;
//         }
//         cur.next = node;
//     }
//     this.length++;
// };

// MyLinkedList.prototype.addAtIndex = function(index, val) {
//     if (index > this.length) return;
//     if (index === this.length) {
//         this.addAtTail(val);
//         return;
//     }
//     if (index < 1) {
//         this.addAtHead(val);
//         return;
//     }

//     let node = new Node(val);
//     let cur = this.head;
//     let i = 0;
//     while (i < index-1) {
//         cur = cur.next;
//         i++;
//     }
//     node.next = cur.next;
//     cur.next = node;
//     this.length++;
// };

// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if (index >= this.length || index < 0) return;
//     let cur = this.head;
//     let i=0;
//     if (index === 0) {
//         this.head = cur.next;
//         return;
//     }
//     while (i < index-1) {
//         cur = cur.next;
//         i++;
//     }
//     cur.next = cur.next.next;
//     this.length--;
// };

// // 949. Largest Time for Given Digits
// var largestTimeFromDigits = function(A) {
//     let res = ""
//     for (let i=23; i>=0; i--) {
//         let hourTens = Math.floor(i/10);
//         let hourOnes = i%10;
//         let indexTens = A.indexOf(hourTens);
//         if (indexTens >= 0) {
//             let copy = [...A];
//             copy.splice(indexTens,1);
//             let indexOnes = copy.indexOf(hourOnes);
//             if (indexOnes >= 0) {
//                 copy.splice(indexOnes,1);
//                 let check = helper(copy);
//                 if (check.length > 0) {
//                     res = "" + hourTens + hourOnes + ":" + check;
//                     return res;
//                 }
//             } else {
//                 continue;
//             }
//         }
//     }
//     return res;

//     function helper(arr) {
//         let min1 = arr[0]*10 + arr[1];
//         let min2 = arr[1]*10 + arr[0];
//         let min1Valid = false;
//         let min2Valid = false;
//         if (min1<60 && min1 >=0) {
//             min1Valid = true;
//         }
//         if (min2<60 && min2 >=0) {
//             min2Valid = true;
//         }
//         let res2 = "";
//         if (min1Valid && min2Valid) {
//             res2 = Math.max(min1, min2);
//         } else if (min1Valid) {
//             res2 = min1;
//         } else if (min2Valid) {
//             res2 = min2;
//         } else {
//             return res2;
//         }
//         if (res2 < 10) {
//             return "0"+res2;
//         }
//         return res2.toString();
//     }
// }
// console.log(largestTimeFromDigits([1,2,3,4]));
// console.log(largestTimeFromDigits([0,0,0,0]));
// console.log(largestTimeFromDigits([1,9,6,0]));
// console.log(largestTimeFromDigits([9,0,7,7]));

// // 1185. Day of the Week
// var dayOfTheWeek = function(day, month, year) {
//     const dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//     const months = [31,28,31,30,31,30,31,31,30,31,30,31];
//     let incrementDay = 1;
//     if (year%400 === 0 || (year%100 !== 0 && year%4 === 0)) {
//         months[1]++;
//         incrementDay++;
//     }
//     let daysTotal = 4;
//     for (let i=1971; i<year; i++) {
//         daysTotal += 365;
//         if (i%400 === 0 || (i%100 !== 0 && i%4 === 0)) {
//             daysTotal++;
//         }
//     }
//     let i = 0;
//     while (i<month-1) {
//         daysTotal += months[i];
//         i++;
//     }
//     daysTotal += day;

//     let res = daysTotal%7;
//     return dayOfWeek[res];
// };
// console.log(dayOfTheWeek(31, 8, 1971));
// console.log(dayOfTheWeek(31, 8, 2019));
// console.log(dayOfTheWeek(31, 8, 2020));
// console.log(dayOfTheWeek(31, 8, 2021));
// console.log(dayOfTheWeek(31, 8, 2022));
// console.log(dayOfTheWeek(31, 8, 2100));

// // 1189. Maximum Number of Balloons
// var maxNumberOfBalloons = function (text) {
//     let dict = {
//         b: 0,
//         a: 0,
//         l: 0,
//         o: 0,
//         n: 0
//     };

//     for (let i=0; i<text.length; i++) {
//         let letter = text[i];
//         if (dict[letter] !== undefined) {
//             dict[letter]++;
//         }
//     }
//     let res = Math.min(dict["b"], dict["a"], Math.floor(dict["l"] / 2), Math.floor(dict["o"] / 2), dict["n"]);
//     return res;
// };
// console.log(maxNumberOfBalloons("nlaebolko"));
// console.log(maxNumberOfBalloons("loonbalxballpoon"));

// // 1184. Distance Between Bus Stops
// var distanceBetweenBusStops = function(distance, start, destination) {
//     let cw = 0;
//     let ccw = 0;
//     let length = distance.length-1;
//     let i=start;
//     while (i !== destination) {
//         cw += distance[i];
//         i++;
//         if (i > length) i = 0;
//     }
//     let j=start;
//     while (j !== destination) {
//         j--;
//         if (j < 0) j = length;
//         ccw += distance[j];
//     }
//     return Math.min(cw,ccw);
// };
// console.log(distanceBetweenBusStops([1,2,3,4], 0, 1));
// console.log(distanceBetweenBusStops([1,2,3,4], 0, 2));
// console.log(distanceBetweenBusStops([1,2,3,4], 0, 3));

// // QUICK EXIT
// var distanceBetweenBusStops = function(distance, start, destination) {
//     if (start === destination) return 0;

//     let cw = 0;
//     let ccw = 0;
//     let length = distance.length-1;
//     let i = start;
//     let j = start;

//     while (true) {
//         cw += distance[i];
//         i++;
//         if (i > length) i = 0;
//         j--;
//         if (j < 0) j = length;
//         ccw += distance[j];
        
//         if (i === destination) return cw;
//         if (j === destination) return ccw;
//     }
// };
// console.log(distanceBetweenBusStops([1,2,3,4], 0, 1));
// console.log(distanceBetweenBusStops([1,2,3,4], 0, 2));
// console.log(distanceBetweenBusStops([1,2,3,4], 0, 3));

// // 1175. Prime Arrangements
// var numPrimeArrangements = function(n) {
//     let count = 0;
//     const mod = BigInt(1e9 + 7);
//     const dict = [1n]

//     for(let i=1; i<=n; i++) {
//         dict[i] = BigInt(dict[i-1] * BigInt(i) % mod);
//     }

//     for(let i=2; i<=n; i++){
//         count += isPrime(i)
//     }
//     return dict[count] * dict[n-count] % mod;

//     function isPrime(num){
//         for(let i=2; i*i<=num; i++){
//             if(num%i === 0) return 0;
//         }
//         return 1;
//     }
// };
// console.log(numPrimeArrangements(5));
// console.log(numPrimeArrangements(100));
// console.log(numPrimeArrangements(99));
// console.log(numPrimeArrangements(90));

// // 558. Quad Tree Intersection
// var intersect = function(quadTree1, quadTree2) {
//     if (quadTree1.isLeaf) {
//         return quadTree1.val ? quadTree1 : quadTree2;
//     }

//     if(quadTree2.isLeaf) {
//         return quadTree2.val ? quadTree2 : quadTree1;
//     }

//     let topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
//     let topRight = intersect(quadTree1.topRight, quadTree2.topRight);
//     let bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
//     let bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);

//     if (topLeft.isLeaf && 
//         topRight.isLeaf && 
//         bottomLeft.isLeaf && 
//         bottomRight.isLeaf && 
//         topLeft.val === topRight.val &&
//         topRight.val === bottomLeft.val && 
//         bottomLeft.val === bottomRight.val) {
//             let leafNode = new Node(topLeft.val, true, null, null, null, null)
//         return leafNode;
//     } else {
//         let node = new Node(false, false, topLeft, topRight, bottomLeft, bottomRight)
//         return node;
//     }
// };

// // 807. Max Increase to Keep City Skyline
// var maxIncreaseKeepingSkyline = function(grid) {
//     let res = 0;
//     let rLength = grid.length;
//     let cLength = grid[0].length;
//     let maxRow = new Array(cLength).fill(0);
//     let maxCol = new Array(rLength).fill(0);

//     for (let i=0; i<rLength; i++) {
//         for (let j=0; j<cLength; j++) {
//             let cur = grid[i][j];
//             if (maxRow[i] < cur) maxRow[i] = cur;
//             if (maxCol[j] < cur) maxCol[j] = cur;
//         }
//     }

//     for (let i=0; i<rLength; i++) {
//         for (let j=0; j<cLength; j++) {
//             let cur = grid[i][j];
//             let max = Math.min(maxRow[i], maxCol[j]);
//             if (max > cur) res += (max - cur);
//         }
//     }
//     return res;
// };
// console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]))

// // 535. Encode and Decode TinyURL
// let dict = {};
// var encode = function(longUrl) {
//     let random = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
//     let tinyurl = "";
//     for (let i=0; i<6; i++) {
//         let idx = Math.floor(Math.random()*62);
//         tinyurl += random[idx];
//     }
//     dict[tinyurl] = longUrl;
//     return "http://tinyurl.com/" + tinyurl;
// };
// var decode = function(shortUrl) {
//     let tinyurl = shortUrl.substring(shortUrl.length-6);
//     return dict[tinyurl];
// };
// console.log(encode("https://leetcode.com/problems/design-tinyurl"));
// console.log(decode("http://tinyurl.com/abcdef"));

// // 1079. Letter Tile Possibilities
// USING DICTIONARY
// var numTilePossibilities = function(tiles) {
//     let dict = {};
//     for (let i=0; i<tiles.length; i++) {
//         let tile = tiles[i];
//         if (!dict[tile]) {
//             dict[tile] = 1;
//         } else {
//             dict[tile]++;
//         }
//     }
//     return helper(dict);

//     function helper(dict2) {
//         let res = 0;
//         for (let key in dict2) {
//             if (dict2[key] === 0) continue;
//             res++;
//             dict2[key]--;
//             res += helper(dict2);
//             dict2[key]++;
//         }
//         return res;
//     }
// };

// console.log(numTilePossibilities("AAB"));
// console.log(numTilePossibilities("AAABBC"));

// USING ARRAYS
// var numTilePossibilities = function(tiles) {
//     let res = 0;
//     let sequences = [];
//     let sortedArr = tiles.split("").sort();

//     helper(sortedArr, sequences);
    
//     return res;
    
//     function helper(arr, used) {
//         for (let i=0; i<tiles.length; i++) {
//             if (used[i] || i > 0 && arr[i] == arr[i-1] && !used[i-1]){
//                 continue;
//             }
//             used[i] = true;
//             res++;
//             helper(arr, used);
//             used[i] = false;
//         }
//     }
// };
// console.log(numTilePossibilities("AAB"));
// console.log(numTilePossibilities("AAABBC"));

// // 1008. Construct Binary Search Tree from Preorder Traversal
// var bstFromPreorder = function(preorder) {
//     let node = null;
//     for (let val of preorder) {
//         node = helper(node, val);
//     }
//     return node;

//     function helper(node, val) {
//         if (node === null) return new TreeNode(val);
//         if (val < node.val) {
//             node.left = helper(node.left, val);
//         } else {
//             node.right = helper(node.right, val)
//         }
//         return node;
//     }
// };

// // 950. Reveal Cards In Increasing Order
// var deckRevealedIncreasing = function(deck) {
//     deck = deck.sort((a, b) => a - b);
//     let res = [deck.pop()]
//     while (deck.length > 0) {
//       res.unshift(deck.pop(), res.pop());
//     };
//     return res;
// };
// console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]));

// // 1200. Minimum Absolute Difference
// var minimumAbsDifference = function(arr) {
//     let sorted = arr.sort((a,b) => a-b);
//     let min = Infinity;
//     let res = [];
//     for (let i=0; i<arr.length-1; i++) {
//         let j = i+1;
//         while (j<arr.length && (arr[j]-arr[i])<=min) {
//             if (arr[j]-arr[i] === min) {
//                 res.push([arr[i],arr[j]])
//             } else {
//                 min = arr[j]-arr[i];
//                 res = [[arr[i],arr[j]]];
//             }
//             j++;
//         }
//     }
//     return res;
// };
// console.log(minimumAbsDifference([4,2,1,3]))

// // 1207. Unique Number of Occurrences
// var uniqueOccurrences = function(arr) {
//     const dict = {};
//     for (let i=0, length=arr.length; i<length; i++) {
//         let num = arr[i];
//         if (dict[num]) {
//             dict[num]++;
//         } else {
//             dict[num] = 1;
//         }
//     }
//     const check = {};
//     for (let key in dict) {
//         if (!check[dict[key]]) {
//             check[dict[key]] = true;
//         } else {
//             return false;
//         }
//     }
//     return true;
// };
// console.log(uniqueOccurrences([1,2,2,1,1,3]));

// // 1217. Play with Chips
// var minCostToMoveChips = function(chips) {
//     let odd = 0;
//     let even = 0;
//     for (let i=0; i<chips.length; i++) {
//         if (chips[i] % 2 === 0) {
//             even++;
//         } else {
//             odd++;
//         }
//     }
//     return Math.min(even, odd);
// };
// console.log(minCostToMoveChips([1,2,3]));
// console.log(minCostToMoveChips([2,2,2,3,3]));

