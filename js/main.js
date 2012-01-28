var id_arr=[];
function makeCentered()
{
	var main=document.getElementById('main');
	main.style.marginTop=window.innerHeight/2-main.offsetHeight/2;
}
function explodeImage(id)
{
	$("#image"+id).hide("explode",{pieces:50}, 1000);
	$('#status'+id).css('background','#A20000');
	$('#image'+id).attr("src","images/crying.png");
	$('#image'+id).fadeIn("normal");
	id_arr.push(id);

}

function playAudio(url)
{
	document.getElementById("audio").innerHTML="<embed src=\""+ url +"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}
function explode(id)
{
		if($.inArray(id,id_arr)==-1)
		{
			if(id_arr.length==0)
			{
				//Still can more participant involved
				playAudio("audio/glass-break.mp3");
				explodeImage(id);
			}
			else if(id_arr.length==1)
			{
				var newid;
				for(i=1;i<=3;i++)
				{
					if(id!=i && $.inArray(i,id_arr)==-1)
					{
						newid=i;
						break;
					}
				}
				playAudio("audio/glass-break.mp3");
				explodeImage(id);
				$('#image'+newid).fadeOut("slow", function () 
				{
					$('#status'+newid).css('background','#006666');
					$('#image'+newid).attr("src","images/trophy.png");
					$('#image'+newid).fadeIn("slow");
					id_arr.push(id);
				});
			}
		}
}
