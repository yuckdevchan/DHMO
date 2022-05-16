<!--

function mailto(name,subj,text)
{
	var addr=name+'@';
	addr += 'dhmo.org';
	if (!text)
	{
		text=addr;
	}
	if (!subj)
	{
		subj = '';
	}
	else
	{
		subj = '?subject='+subj;
	}
	document.write('<a href=\"mailto:'+addr+subj+'\" target=\"_self\">');
	document.write(text);
	document.write('</a>');
}

//-->