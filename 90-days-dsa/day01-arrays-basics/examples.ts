// Create an array
let nums: number[] = [2, 5, 7, 10];

// Access (O(1))
console.log(nums[2]);

// Insert at the end (O(1))
nums.push(12);
console.log(nums);

// Insert at the beginning (O(n))
nums.unshift(1);
console.log(nums);

// Delete last element (O(1))
nums.pop();
console.log(nums);

// Delete at index 2 (O(n))
nums.splice(2, 1);
console.log(nums);
