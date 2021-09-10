/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    let employeeRecord = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord
}//closes createEmployeeRecord

function createEmployeeRecords(eRecord){
    return eRecord.map(record => createEmployeeRecord(record))
}//Closes createEmployeeRecords

function createTimeInEvent(dateStamp){
    let time = dateStamp.split(' ')
    const newEvent = {
    }
    newEvent.type = "TimeIn"
    newEvent.hour = parseInt(time[1])
    newEvent.date = time[0]
    this.timeInEvents.push(newEvent)

    //console.log(newEvent)
    return this

}//closes createTimeInEvents

function createTimeOutEvent(dateStamp){
    let time = dateStamp.split(' ')
    const newEvent = {
    }
    newEvent.type = "TimeOut"
    newEvent.hour = parseInt(time[1])
    newEvent.date = time[0]
    this.timeOutEvents.push(newEvent)

    //console.log(this)
    return this
    
}//closes createTimeOutEvent

function hoursWorkedOnDate(date){
    
    let timeIn = this.timeInEvents.find((event) => event.date === date)
    let timeOut = this.timeOutEvents.find((event) => event.date === date)
    let hours = (timeOut.hour - timeIn.hour)/100
    console.log(timeIn)
    console.log(timeOut)
    console.log(hours)
    return hours

}//Closes hoursWorkedOnDate

function wagesEarnedOnDate(date){

  //  console.log(this)
    let pay = this.payPerHour 
    //console.log("pay: ",pay)
    let hours = hoursWorkedOnDate.call(this, date)
   // console.log("hours: ",hours)
    let wage = pay * hours
   // console.log("wage: ",wage)

    return wage
}//Closes wagesEarnedOnDate

function findEmployeeByFirstName(srcArray, firstName){

    for(let i in srcArray){
        if(srcArray[i].firstName===firstName){
            //console.log(srcArray[i])
            return srcArray[i]
        }
    }
   /*  let name = this.firstName.find((event) => event.firstName === firstName)
    console.log("name: ",name)
    srcArray.apply(element => {srcArray[element].firstName === firstName
        console.log(srcArray)
        return srcArray[element]
    }) */ 
}//Closes findEmployeeByFirstName

function calculatePayroll(records){ 
    return records.reduce(function(payroll, element){ 
       return payroll + allWagesFor.call(element)
    },0)
    /* console.log("records: ",records)
    let payroll = allWagesFor.apply(this, records)
    console.log("timeIn: ",this.timeInEvents)
    console.log(payroll)
    return payroll */
 
}//closes calculatePayroll 
 
