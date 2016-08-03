function change()
	{
		element = document.getElementById("button");
		if (element.src.match("yes"))
		{
			element.src="images/no.png";
		}
		else
		{
			element.src="images/yes.png";
		}
	}
  
  
function showPopup(id,w,h)
	{    
		var popUp = document.getElementById(id);      
		popUp.style.width = w + "px";    
		popUp.style.height = h + "px";       
		popUp.style.display = "block";
		var popUp2 = document.getElementById("BgDiv");    
		popUp2.style.display = "block";
		popUp.style.bottom = "0";//窗口距离浏览器内容区最上方的偏移值
		popUp.style.left = "25%";
		
	}


function hidePopup(id,id2)
	{
		var popUp = document.getElementById(id);
		popUp.style.display = "none";
		var popUp2 = document.getElementById("BgDiv");    
		popUp2.style.display = "none";
		hide(id2);

	}


function selectvalue(id,id2,val,values)
	{
		document.getElementById(val).value = values;
		hidePopup(id,id2);
	}


function pop(id)
	{
		var popUp = document.getElementById(id); 
		popUp.style.display = "block";
	}

function hide(id)
	{
		var popUp = document.getElementById(id);
		popUp.style.display = "none";
	}

function SelSay(values)
	{
		document.getElementById("psay").value = values;	
	}
		

function ChColor(id1,id2)
	{
		var p = document.getElementById(id1);
		p.style.color="white";
		p.style.background="#0099ff";
		var p2 = document.getElementById(id2);
		p2.style.color="black";
		p2.style.background="#d9d9d9"
	}

	function ChColor(id1,id2)
	{
		var p = document.getElementById(id1);
		p.style.color="white";
		p.style.background="#0099ff";
		var p2 = document.getElementById(id2);
		p2.style.color="black";
		p2.style.background="#d9d9d9";
	}
	window.onload=	function ccolor(){
		var divs = document.getElementById("Time").getElementsByTagName("div");
		var len = divs.length;
		for(var i=0;i<len;i++){
			divs[i].onclick = function(){
				for(var j=0;j<len;j++){
					divs[j].style.background = "white";
					divs[j].style.color = "black";
				}
				this.style.background = "#0099ff";
				this.style.color = "white";
			}
		}
	}
function ccolor2(id){
		var divs = document.getElementById(id).getElementsByTagName("div");
		var len = divs.length;
		for(var i=0;i<len;i++){
			divs[i].onclick = function(){
				for(var j=0;j<len;j++){
					divs[j].style.background = "#d0d0d0";
					divs[j].style.color = "black";
				}
				this.style.background = "#0099ff";
				this.style.color = "white";
			}
		}
	}
