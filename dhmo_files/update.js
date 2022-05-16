<!--
// JavaScript to write current update info
var url = document.URL;
var maxlen = 36;
var halflen = maxlen / 2;
if (url.length > maxlen)
{
   //var qpos = url.indexOf('?');
   //url = url.substring(0,qpos+1) + "<br>" + url.substring(qpos+1);
   url = url.substring(0,halflen)+"..."+url.substring(url.length-halflen);
}
document.write("URL:&nbsp;"+url+"<BR>\n");
document.write("Last Updated: ");
var now = new Date();
var month = now.getMonth();
var day = now.getDate();
var year = now.getYear();
if ( year <= 1900 )
	year += 1900;
switch( month )
{
   case 0: monthStr="January"; break;
   case 1: monthStr="February"; break;
   case 2: monthStr="March"; break;
   case 3: monthStr="April"; break;
   case 4: monthStr="May"; break;
   case 5: monthStr="June"; break;
   case 6: monthStr="July"; break;
   case 7: monthStr="August"; break;
   case 8: monthStr="September"; break;
   case 9: monthStr="October"; break;
   case 10: monthStr="November"; break;
   case 11: monthStr="December"; break;
   default: monthStr="September"; break;
}
document.write( monthStr + " " + day + ", " + year);
document.write("<BR>\n");
//-->
