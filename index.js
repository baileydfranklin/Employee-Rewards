/* Activity - Employee Rewards - Starter Code */
/* Construct conditional statements that meet the requirements: */
/* ================================== */

// Continue same pattern/naming convention for each banker
// leaving only one variable declaration section uncommented each 'Run'

/////     IF/ELSE STATEMENTS     ///////////////////////////////////////////////////////////////////////////////
let associateBanker = [56123, 1, 4]; //employeeId, checking, years
let empId = associateBanker[0]       //employee Id number
let empChecking = associateBanker[1] //number of new checking 
let empYears = associateBanker[2];   //years employed


/*1. If the employee has 1 year or less with the company, 1 new checking account: Output: 'Ship 50.00 Gift Card'
Otherwise output:'Incentives not met'*/

/*2. If the employee has 2 years with the company, 3+ new checking accounts:  Output: 'Ship $400.00 Gift Card'
Otherwise output:'Ship $100.00 Gift Card'*/

/*3. If the employee has 3 years with the company, 2+ new checking accounts:  Output: 'Ship $700.00 Gift Card'
Otherwise output:'Ship $350.00 Gift Card'*/

/*4. If the employee has 4+ years with the company, 1+ new checking accounts:  Output: 'Ship $3500.00 Gift Card'
Otherwise output:'Ship set of knives'*/

if(associateBanker[2] >= 4 && associateBanker[1] >=1){
    console.log("Congradulations! You won a $3500.00 Gift Card!")
}else if(associateBanker[2] >= 4 && associateBanker[1] == 0){
    console.log("Congraduations! You won the secondary Incentive prize for a brand new set of knives!")
}else if(associateBanker[2] == 3 && associateBanker[1] >= 2){
    console.log("Congradulations! You won a $700.00 Gift Card!")
}else if(associateBanker[2] == 3 && associateBanker[1] < 2){
    console.log("Congraduations! You won the secondary Incentive prize of a $350.00 Gift Card!")
}else if(associateBanker[2] == 2 && associateBanker[1] >= 3){
    console.log("Congradulations! You won a $400.00 Gift Card!")
}else if(associateBanker[2] == 2 && associateBanker[1] < 3){--
    console.log("Congraduations! You won the secondary Incentive prize of a $100.00 Gift Card!")
}else if(associateBanker[2] <= 1 && associateBanker[1] >= 1){
    console.log("Congradulations! You won a $50.00 Gift Card!")
}else{
    console.log("Unfortunately you did not meet the requirements for the incentives program.")
}

/////     SWITCH/CASE STATEMENTS     ///////////////////////////////////////////////////////////////////////////////
let seniorBanker = [77227, 5, 5];
let seniorEmpId = seniorBanker[0];       
let seniorEmpChecking = seniorBanker[1];
let seniorEmpYears = seniorBanker[2];  

switch (seniorBanker) {
    case 'seniorBanker[2] >= 4 && seniorBanker[1] >=1':
        console.log("Congradulations! You won a $3500.00 Gift Card!")
        break
    case 'seniorBanker[2] >= 4 && seniorBanker[1] == 0':
        console.log("Congraduations! You won the secondary Incentive prize for a brand new set of knives!")
        break
    case 'seniorBanker[2] == 3 && seniorBanker[1] >= 2':
        console.log("Congradulations! You won a $700.00 Gift Card!")
        break
        case 'seniorBanker[2] == 3 && seniorBanker[1] < 2':
        console.log("Congraduations! You won the secondary Incentive prize of a $350.00 Gift Card!")
        break
    case 'seniorBanker[2] == 2 && seniorBanker[1] >= 3':
        console.log("Congradulations! You won a $400.00 Gift Card!")
        break
    case 'seniorBanker[2] == 2 && seniorBanker[1] < 3':
        console.log("Congraduations! You won the secondary Incentive prize of a $100.00 Gift Card!")
        break
    case 'seniorBanker[2] <= 1 && seniorBanker[1] >= 1':
        console.log("Congradulations! You won a $50.00 Gift Card!")
        break
    default:
        console.log('Unfortunately you did not meet the requirements for the incentives program.')
}

// Output when activity is complete
console.log(`${empId}: Processed`)