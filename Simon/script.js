var z=0;
var mry=[];
var s=0;
var mg=document.getElementById('mssg');
var score=document.getElementById('score');
var bttns=document.querySelectorAll('.btn');
bttns.forEach((item)=>{ item.addEventListener('click' ,function xyz() {  clicked(item.innerHTML); } ) });
document.addEventListener('keydown',(e)=>{ 
      if(e.key=='Enter') 
      { 
        score.innerHTML='Score : 0';
        s=0;
        z=0;
        mry=[];
        watch();
      } 
        });
function  clicked(y)
{
    x=parseInt(y);
    if(z<mry.length)
    {
      mu(x);
      if(mry[z]==x)
        z+=1;
      else 
      {
        mg.innerHTML="Game  Over ! press enter";
        z=0;
        mry=[];
        s=0;
      }
    }
    if(z==mry.length)
    {
      if(mry.length!=0)
       {
        s+=1;
        score.innerHTML="Score : "+s;
        z=0;
        watch();
       }
    }
}
function mu(x)
{
   var audio;
   var b;
   if( x==0)
     { 
       audio=new Audio('music/Sa.mp3');
       b=document.getElementById('b1');
      }
    else if(x==1)
    { 
      audio=new Audio('music/Pa.mp3'); 
      b=document.getElementById('b2');
    }
    else if(x==2)
    {
      audio=new Audio('music/Ni.mp3');
      b=document.getElementById('b3');
    }
    else
     { 
       audio=new Audio('music/Da.mp3');
       b=document.getElementById('b4');
     }
     b.style.opacity='0.5';
     audio.play();
     audio.addEventListener('ended',function release()
                             {
                               b.style.opacity='1';
                              
                              });
     
}
function watch()
{
  mg.innerHTML="Watch";
  var x=Math.floor(Math.random()*4);
  mry.push(x);
  loop();
  mg.innerHTML='Play';
}
async function loop()
{
   await new Promise(resolve=> setTimeout(resolve,600));
   for(let i=0;i<mry.length;i++)
   {
    await new Promise(resolve=> setTimeout(resolve,900));
    mu(mry[i]);
   }
}

