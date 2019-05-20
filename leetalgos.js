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
// 		const another = target - nums[i];

// 		if (another in dict) {
// 			return [dict[another], i];
// 		}

// 		dict[nums[i]] = i;
// 	}
// 	return null;
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
// 	}
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
//     let j = 0;
//     let res = [];
//     for (let i = 0; i < s.length; i++) {
//         let subChar = s[i].charCodeAt() - 97;
//         map[subChar]--;

//         while (map[subChar] < 0) {
//             let addChar = s[j].charCodeAt() - 97;
//             j++
//             map[addChar]++;
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

// var numIslands = function (grid) {
//     function dfs(grid, i, j) {
//         if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
//             return 0;
//         }
//         grid[i][j] = 0;
//         dfs(grid, i + 1, j);
//         dfs(grid, i - 1, j);
//         dfs(grid, i, j + 1);
//         dfs(grid, i, j - 1);
//         return 1;
//     }
//     let count = 0;
//     let length = grid.length;
//     let length2 = grid[0].length;

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length2; j++) {
//             if (grid[i][j] === 1) {
//                 dfs(grid, i, j);
//                 count++;
//             }
//         }
//     }
//     return count;
// };
// let grid = [
//     [1,1,1,1,0],
//     [1,1,0,1,0],
//     [1,1,0,0,0],
//     [0,0,0,0,0]
// ];
// let grid2 = [
//     [1,1,0,0,0],
//     [1,1,0,0,0],
//     [0,0,1,0,0],
//     [0,0,0,1,1]
// ];
// console.log(numIslands(grid));
// console.log(numIslands(grid2));

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

// // NEED TO SOLVE STILL
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
//     let min = Infinity;
//     console.log(dict)
//     for (let key in dict) {
//         let current = dict[key]
//         if (current < 2) {
//             return false;
//         }
//         if (current < min) {
//             min = current;
//         }
//     }
//     for (let key in dict) {
//         let current = dict[key]
//         if (current % min !== 0) {
//             return false;
//         }
//     }
//     return true;
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

// // NEED TO FIX THIS
// var largestTimeFromDigits = function (A) {
//     let res = "";
//     A.sort((a, b) => a - b);
//     let test = A.filter((x) => x < 3)
//     if (test.length === 0) {
//         return "1"
//     }
//     let del = test[test.length - 1];
//     let idx = A.indexOf(del)
//     A.splice(idx, 1);
//     res += test[test.length - 1];

//     if (res[0] === "2") {
//         let test2 = A.filter((x) => x < 4)
//         if (test2.length === 0) {
//             return "2"
//         }
//         let del2 = test2[test2.length - 1];
//         let idx2 = A.indexOf(del2)
//         A.splice(idx2, 1);
//         res += test2[test2.length - 1];
//     } else {
//         res += A[A.length - 1];
//         A.pop();
//     }
//     res += ":";
//     console.log(res)
//     let test3 = A.filter((x) => x < 6)
//     if (test3.length === 0) {
//         return "3"
//     }
//     let del3 = test3[test3.length - 1];
//     let idx3 = A.indexOf(del3)
//     A.splice(idx3, 1);
//     res += test3[test3.length - 1];
//     res += A[0];
//     return res;
// };
// console.log(largestTimeFromDigits([4, 2, 3, 1]));
// console.log(largestTimeFromDigits([6, 8, 3, 1]));
// console.log(largestTimeFromDigits([5,5,5,5]));
// console.log(largestTimeFromDigits([0,0,0,0]));
// console.log(largestTimeFromDigits([0,4,0,0]));
// console.log(largestTimeFromDigits([2,0,6,6]));

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

var canThreePartsEqualSum = function (A) {
    let sum = 0;
    for (let el of A) {
        sum += el;
    }
    if (sum % 3 !== 0) {
        return false;
    }
    let third = sum/3;
    let temp = 0;
    let count = 0;
    for (let el of A) {
        temp += el;
        if (temp === third) {
            count++;
            temp = 0;
        }
        if (count > 3) {
            return false;
        }
    }
    return count === 3;
};
console.log(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]));
console.log(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]));
console.log(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]));

