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
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] !== 0) {
// 			nums[start] = nums[i];
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

// var moveZeroes = function (nums) {
// 	let start = 0;
// 	for (let i = 0; i < nums.length; i++) {
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

// // NEED TO WORK ON THIS
// var longestCommonPrefix = function (strs) {
// 	const dict = {};
// 	let prefix = "";
// 	for (let i = 0; i < strs.length; i++) {
// 		for (let j = 0; j < strs[i].length; j++) {
// 			if (dict[strs[i][j]]) {
// 				dict[strs[i][j]]++;
// 			} else {
// 				dict[strs[i][j]] = 1;
// 			}
// 		}
// 		if (dict[strs[i][j]] !== strs.length) {
// 			return prefix;
// 		} else {
// 			string += dict[strs[i][j]];
// 		}
// 	}
// };
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

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