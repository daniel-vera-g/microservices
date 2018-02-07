/**
 * Functions to get the Unix & natural Time
 */
let ex = module.exports;
let date = new Date();

/**
 * Check Whether time is unix ot Natural
 * @param  {stiring} time input from the user --> Time to check
 * @param  {} callback callback function with
 * @returns {booljean} info whether time is in unix or natural format
 */
ex.checkTime = (time, callback) => {
  //check if the input is in unix time

  //Test whether natural language is right
  let valid = new Date(time).getTime() > 1;
  if (valid) {
    //get the unix time from the natural one
    let unix = new Date(time).getTime();

    let natural = time;
  } else {
    let unix = time;
    //get year
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    switch (month) {
      case 0:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "Oktober";
        break;
      case 11:
        month = "December";
        month = "November";
        break;
      case 12:
        break;
      default:
        console.error(
          "The Month number is to high or to low, please try with another number"
        );
        break;
    }
    let natural = month + " " + day + ", " + year;
  }
  //time object to send back
  let timeObject = { unix: unix, natural: natural };
  return timeObject;
};

// ex.toUnix = (time, callback) => {};

// ex.toNatural = (time, callback) => {};