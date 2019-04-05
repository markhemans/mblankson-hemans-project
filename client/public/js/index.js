document.body.onkeyup = function(spacebar)
{
    if(spacebar.keyCode == 32)
    {
    	window.location.replace('mainmenu');
	}
}


document.getElementById('flash').addEventListener("click", openmenu);
function openmenu()
	{
	window.location.replace('mainmenu');
	}