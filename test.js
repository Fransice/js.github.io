var twoSum = function(nums) {
    setTimeout(() => {
        console.log('timer1')
        Promise.resolve().then(function() {
            console.log('promise1')
        })
    }, 0)
    process.nextTick(() => {
        console.log('nextTick1')
        process.nextTick(() => {
            console.log('nextTick2')
            process.nextTick(() => {
                console.log('nextTick3')
                process.nextTick(() => {
                    console.log('nextTick4')
                })
            })
        })
    })

};
console.log(twoSum())