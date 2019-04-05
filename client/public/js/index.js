document.body.onkeyup = function(spacebar)
{
    if(spacebar.keyCode == 32)
    {
    window.open('mainmenu')
	}
}


document.getElementById('flash').addEventListener("click", openmenu);
function openmenu()
	{
	window.open('mainmenu')
	}