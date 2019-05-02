var calculate = function(s) {
	let res = 0;
	let sign = 1;
	const stack = [];
	const opStack = [];
    
    for(let i=0, length=s.length; i<length; i++){
        const char = s[i];
        if(char === " "){ 
            continue;
        } else if(char === "+"){ 
            sign = 1;
        } else if(char === "-"){ 
            sign = -1;
        } else if(char >= "0" && char <= "9"){
            let num = char;
            while(i+1 < length && s[i+1] >= "0" && s[i+1] <= "9"){
                num += s[i+1];
                i++;
            }
            res += sign * parseInt(num);
        } else if(char === "("){
            stack.push(res);  
            res = 0;  
            opStack.push(sign);  
            sign = 1;
        } else if(char === ")"){
            res = opStack.pop() * res + stack.pop();  
            sign = 1;
        }
    }
    return res;
};
console.log(calculate(" 1 + 1 "));
console.log(calculate(" 2-1 + 2 "));
console.log(calculate(" 8 - (2+3+1) + 2 "));
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));