///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE

//day_one = fujiAcres [0] + galaAcres [0] + pinkAcres[0]

//console.log(day_one);

let totalAcres = 0

for (let acres = 0; acres < fujiAcres.length; acres +=1) {
    totalAcres = totalAcres + fujiAcres[acres] + galaAcres [acres] + pinkAcres [acres];
    console.log(totalAcres);
}


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE

averageDailyAcres = totalAcres / 7
console.log (averageDailyAcres);


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
    days +=1
    acresLeft = acresLeft - averageDailyAcres
}
console.log(days);


// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for (let i = 0; i < fujiAcres.length; i +=1){
    fujiTons[i] = fujiAcres[i] * 6.5
    galaTons [i] = galaAcres[i] * 6.5
    pinkTons [i] = pinkAcres[i] * 6.5
}
console.log(fujiTons, galaTons, pinkTons);

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let total_pounds_fuji = 0
let total_pounds_gala = 0
let total_pounds_pink = 0

for(let i=0 ; i < fujiTons.length; i +=1) {
    total_pounds_fuji = total_pounds_fuji + fujiTons[i];
    total_pounds_gala = total_pounds_gala + galaTons[i];
    total_pounds_pink = total_pounds_pink + pinkTons[i];
}
total_pounds_fuji = total_pounds_fuji * 2000
total_pounds_gala = total_pounds_gala * 2000
total_pounds_pink = total_pounds_pink * 2000

console.log(total_pounds_fuji);
console.log(total_pounds_gala);
console.log(total_pounds_pink);

// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE

let fujiProfit = 0
let galaProfit = 0
let pinkProfit = 0

fujiProfit = total_pounds_fuji * fujiPrice
galaProfit = total_pounds_gala * galaPrice
pinkProfit = total_pounds_pink * pinkPrice

console.log(fujiProfit, galaProfit, pinkProfit);



// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = 0

totalProfit = totalProfit + fujiProfit + galaProfit + pinkProfit

console.log(totalProfit);