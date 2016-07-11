var re = /-?\d+/;

function DatetimeStringToDate(datetime)
{
    var m = re.exec(datetime);
    var d = new Date(parseInt(m[0]));
    return d;

}
function DateToString(d)
{
  return d.getDate() + "."+d.getMonth()+"."+d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
}
function getValue(id)
{
    return document.getElementById(id).value;
}
