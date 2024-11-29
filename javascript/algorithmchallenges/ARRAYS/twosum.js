var twoSum=function(nums,target){
const map= new Map()
for(const index in nums){
    const pairNumber=target-nums[index];
    if(map.has(pairNumber)) return [index,map.get(pairNumber)]
    map.set(nums[index],index)
}
}
let nums=[1,2,3,1,2,4,11,21,31,2];
console.log(twoSum(nums,4));