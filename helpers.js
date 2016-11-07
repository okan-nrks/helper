var re = /-?\d+/;
//Converts c# datetime(string) to Javascript Date
function DatetimeStringToDate(datetime)
{
    var m = re.exec(datetime);
    var d = new Date(parseInt(m[0]));
    return d;

}
//Converts Javascript Date to dd.mm.yyyy hh:mm
function DateToString(d)
{
  return d.getDate() + "."+d.getMonth()+"."+d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
}
function getValue(id)
{
    return document.getElementById(id).value;
}
function _id(x)
{
    return document.getElementById(x);
}
