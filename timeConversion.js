function timeConversion(s) {
  if (s[8] == "A") {
    let am = s.substring(8, 10);
    let time = s.replace(am, "");
    let arr = time.split(":");
    let hour = arr.shift();
    if (hour == "12") {
      hour = "00";
    }
    arr.unshift(hour);
    return arr.join(":");
  } else {
    let pm = s.substring(8, 10);
    let time = s.replace(pm, "");
    let arr = time.split(":");
    let hour = Number(arr.shift());
    let militariHour = hour + 12;
    let diff = militariHour - 24;
    if (diff > -1) {
      militariHour = diff;
    }
    if (hour == 12) {
      militariHour = hour;
    }
    arr.unshift(militariHour);
    return arr.join(":");
  }
}
timeConversion("07:05:45PM");
