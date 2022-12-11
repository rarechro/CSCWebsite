//loads data onto page

class InputData{

constructor(
time_sec,
latitude,
longitude,
gps_alt,
BMPsAlt,
BMPsPres,
BMPsTemp,
DIGsTemp,
CSSsTemp,
CSSseC02,
CSSsTVOC,
UV,
accelX,
accelY,
accelZ,
magX,
magY,
magZ,
gyrox,
gyroy,
gyroz,
){
this.time_sec = time_sec;
this.latitude = latitude;
this.longitude = longitude;
this.gps_alt = gps_alt;
this.BMPsAlt = BMPsAlt;
this.BMPsPres = BMPsPres;
this.BMPsTemp = BMPsTemp;
this.DIGsTemp = DIGsTemp;
this.CSSsTemp = CSSsTemp;
this.CSSseC02 = CSSseC02;
this.CSSsTVOC = CSSsTVOC;
this.UV = UV;
this.accelX = accelX;
this.accelY = accelY;
this.accelZ = accelZ;
this.magX = magX;
this.magY = magY;
this.magZ = magZ;
this.gyrox = gyrox;
this.gyroy = gyroy;
this.gyroz = gyroz;
}}
//gets data func, extracts data from dataloader.js
function getData(){
    var loadedData = loadData();

    return loadedData;



}

//set up data in the table
function dataRow(legend,value,units){
msg = "<td>";
msg += legend;
msg += ": </td><td>";
msg += value;
msg += " " + units;
msg += "</td>";
return msg;



}
function updateDisplay(){

    console.log("update started");
    //record andn display time data
    theTime = new Date();
    console.log(theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
    + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds : theTime.getSeconds()));
//set clock element to current time and every 5 seconds update clock
document.getElementById("clockTime").innerHTML = "The current time is: " + theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
    + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds : theTime.getSeconds());

//sets unique elements to data in dataloader.js and updates table
var timeRead = data[index].time_sec;

if (timeRead >= 10){
    document.getElementById("dataTable").rows["timeelapsed"].innerHTML = 
        dataRow("Time Elapsed",data[index].time_sec,"seconds");

    document.getElementById("dataTable").rows["latitude"].innerHTML = 
        dataRow("Latitude",data[index].latitude,"");

    document.getElementById("dataTable").rows["longitude"].innerHTML = 
        dataRow("Longitude",data[index].longitude,"");

    document.getElementById("dataTable").rows["gpsalt"].innerHTML = 
        dataRow("GPS Altitude",data[index].gps_alt,"");

    document.getElementById("dataTable").rows["BMPsAlt"].innerHTML = 
        dataRow("BMP Sensor Altitude",data[index].BMPsAlt,"");

    document.getElementById("dataTable").rows["BMPsPres"].innerHTML = 
        dataRow("BMP Sensor Pressure",data[index].BMPsPres,"");
    
    document.getElementById("dataTable").rows["BMPsTemp"].innerHTML = 
        dataRow("BMP Sensor Temprature",data[index].BMPsTemp,"");

    document.getElementById("dataTable").rows["DigsTemp"].innerHTML = 
        dataRow("Digital Sensor Temprature",data[index].DIGsTemp,"");

    document.getElementById("dataTable").rows["CSSsec02"].innerHTML = 
        dataRow("CSS Sensor c02",data[index].CSSseC02,"");

    document.getElementById("dataTable").rows["CSSsTVOC"].innerHTML = 
        dataRow("CSS Sensor TVOC",data[index].CSSsTVOC,"");

    document.getElementById("dataTable").rows["UV"].innerHTML = 
        dataRow("UV",data[index].UV,"");

    document.getElementById("dataTable").rows["AccelX"].innerHTML = 
        dataRow("Accel X",data[index].accelX,"");

    document.getElementById("dataTable").rows["AccelY"].innerHTML = 
        dataRow("Accel Y",data[index].accelY,"");

    document.getElementById("dataTable").rows["AccelZ"].innerHTML = 
        dataRow("Accel Z",data[index].accelZ,"");

    document.getElementById("dataTable").rows["MAGX"].innerHTML = 
        dataRow("MAG X",data[index].magX,"");

    document.getElementById("dataTable").rows["MAGY"].innerHTML = 
        dataRow("MAG Y",data[index].magY,"");

    document.getElementById("dataTable").rows["MAGZ"].innerHTML = 
        dataRow("MAG Z",data[index].magZ,"");

    document.getElementById("dataTable").rows["GYROX"].innerHTML = 
        dataRow("GYRO X",data[index].gyrox,"");

    document.getElementById("dataTable").rows["GYROY"].innerHTML = 
        dataRow("GYRO Y",data[index].gyroy,"");
    document.getElementById("dataTable").rows["GYROZ"].innerHTML = 
        dataRow("GYRO Z",data[index].gyroz,"");

}
if (index < 500){
    index++;

}else{

    index = 0;
}
}