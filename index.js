/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let seen = new Map();

    for(let i = 0; i < nums.length; i++){
        
        let j = seen.get(nums[i]);
        
        if(j !== undefined){
            
            if(Math.abs(i - j) <= k){
                return true;
            }
        }
        
        seen.set(nums[i],i);
    }
    return false;
    
};
