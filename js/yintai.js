$(function(){
var jdjd=jQuery.noConflict();
jdjd("img").lazyload({
      threshold:10,
      event:"scroll",
      effect:'fadeIn',
})


  
          var btns=$(".cbl")[0];
          var tops=$(".cbl10")[0];
          var fl=$(".fl");
          var ans=$(".ani");
          var cbl11=$(".cbl11")[0];
          var cbl22=$(".cbl22")[0];
          var cbl33=$(".cbl33")[0];
          var cbl44=$(".cbl44")[0];
          var cbl55=$(".cbl55")[0];
          var cbl66=$(".cbl66")[0];
          var cbl77=$(".cbl77")[0];
          var cbl88=$(".cbl88")[0];
          var cbl99=$(".cbl99")[0];
          var cbl1010=$(".cbl1010")[0];
          var now;
       for (var i = 0; i < fl.length; i++) {
              fl[i].h=fl[i].offsetTop;
            };          
        window.onscroll=function(){
          var obj=document.body.scrollTop?document.body:document.documentElement;
          var top=obj.scrollTop;
            if (top>=fl[0].h-300) {
              btns.style.display="block"
            }else if(top<=300){
              btns.style.display="none"         
            }
            for (var i = 0; i < fl.length; i++) {
                 if (top>=fl[i].h-200) {
                  for (var j = 0; j < ans.length; j++) {
                  ans[j].style.background="";
                  var aa=$("div",ans[j])[0];
                  aa.style.display="block";
                  }
                  ans[i].style.background="#e81960";
                  cbl11.style.display="block";
                  cbl22.style.display="block";
                  cbl33.style.display="block";
                  cbl44.style.display="block";
                  cbl55.style.display="block";
                  cbl66.style.display="block";
                  cbl77.style.display="block";
                  cbl88.style.display="block";
                  cbl99.style.display="block";
                  cbl1010.style.display="block";
                  var aa=$("div",ans[i])[0];
                  aa.style.display="none";
                  now=i;
               };
            };
          }
          for (var i = 0; i < ans.length; i++) {
                ans[i].index=i;
              ans[i].onclick=function(){
                   animate(document.body,{scrollTop:fl[this.index].h})
                   animate(document.documentElement,{scrollTop:fl[this.index].h})
                  }
                  ans[i].onmouseover=function(){
                    ans[this.index].style.background="#e81960";
                    var a=$("div",ans[this.index])[0];
                    a.style.display="none"

                  }
                  ans[i].onmouseout=function(){
                    if (this.index==now) {
                      return
                    };
                  ans[this.index].style.background=""
                  var aa=$("div",ans[this.index])[0];
                  aa.style.display="block";
                  }  
              }; 
           tops.onclick=function(){
                   animate(document.body,{scrollTop:0})
                   animate(document.documentElement,{scrollTop:0})
           }






//侧边菜单
	var sc1=$('.cdban')[0];
	var sc2=$('.banneraa1')[0];
	var dd=getChild(sc1,"b");
	for (var i = 0; i < dd.length; i++) {
		dd[i].index=i;
	    dd[i].onmouseover=function(){
		     	   sc2.style.display="block"
	    }
	    dd[i].onmouseout=function(){
		     sc2.style.display="none";
	   }	    		
	};








//小轮播
function xiaolb(lb1,lb,yd,tp,yda,l,r){
var flag=true;
var n=0;
var next=0;
var width=parseInt(getStyle(lb,"width"));
lb1.onmouseover=function(){
    l.style.display="block";
    r.style.display="block";
l.onclick=function(){
  if (flag==false) {
    return;
  };
  flag=false;
    next=n-1;
    if (next<0) {
      next=tp.length-1;
    };
    tp[next].style.left=-width+"px";
    animate(tp[n],{left:width});
    animate(tp[next],{left:0},function(){
      flag=true;
    });
    yda[n].style.background="#fff";
    yda[next].style.background="red";
    n=next;  
}
r.onclick=function(){
   if (flag==false) {
       return;
   };
   flag=false;
    next=n+1;
    if (next>=tp.length) {
      next=0;
    };
    tp[next].style.left=width+"px";
     animate(tp[n],{left:-width});
    animate(tp[next],{left:0},function(){
      flag=true;
    });
    yda[n].style.background="#fff";
    yda[next].style.background="red";
    n=next;
}      
}
lb1.onmouseout=function(){
    l.style.display="none";
    r.style.display="none"
}  
for (var i = 0; i < yda.length; i++) {
        yda[i].index=i;
        yda[i].onclick=function(){
           if (flag==false) {
              return;
             };
            flag=false;
          if (n>this.index) {
            tp[this.index].style.left=-width+"px";
            animate(tp[n],{left:width});
          } else if(n<this.index){
            tp[this.index].style.left=width+"px";
            animate(tp[n],{left:-width})
          };
            animate(tp[this.index],{left:0},function(){
              flag=true;
            })
            for (var i = 0; i < yda.length; i++) {
              yda[i].style.background="#fff";
            };
            yda[this.index].style.background="red";
            n=this.index;
     }
  };
}
        var lb11=$(".dllbb")[0];
        var lb1=$(".dllb")[0];
        var yd1=$(".ydan")[0];
        var tp1=$(".lbtp1");
        var yda1=$(".yda");
        var l1=$(".left")[0];
        var r1=$(".right")[0];
        xiaolb(lb11,lb1,yd1,tp1,yda1,l1,r1);


        var lb22=$(".djjbb")[0];
        var lb2=$(".djjb")[0];
        var yd2=$(".jydan")[0];
        var tp2=$(".jbtp1");
        var yda2=$(".jyda");
        var l2=$(".jleft")[0];
        var r2=$(".jright")[0];
        xiaolb(lb22,lb2,yd2,tp2,yda2,l2,r2);



        var lb33=$(".dssbb")[0];
        var lb3=$(".dssb")[0];
        var yd3=$(".sydan")[0];
        var tp3=$(".sbtp1");
        var yda3=$(".syda");
        var l3=$(".sleft")[0];
        var r3=$(".sright")[0];
        xiaolb(lb33,lb3,yd3,tp3,yda3,l3,r3);        



        var lb44=$(".dshbb")[0];
        var lb4=$(".dshb")[0];
        var yd4=$(".shydan")[0];
        var tp4=$(".shbtp1");
        var yda4=$(".shyda");
        var l4=$(".shleft")[0];
        var r4=$(".shright")[0];
        xiaolb(lb44,lb4,yd4,tp4,yda4,l4,r4);



        var lb55=$(".dshwbb")[0];
        var lb5=$(".dshwb")[0];
        var yd5=$(".shwydan")[0];
        var tp5=$(".shwbtp1");
        var yda5=$(".shwyda");
        var l5=$(".shwleft")[0];
        var r5=$(".shwright")[0];
        xiaolb(lb55,lb5,yd5,tp5,yda5,l5,r5);



        var lb66=$(".dshlbb")[0];
        var lb6=$(".dshlb")[0];
        var yd6=$(".shlydan")[0];
        var tp6=$(".shlbtp1");
        var yda6=$(".shlyda");
        var l6=$(".shlleft")[0];
        var r6=$(".shlright")[0];
        xiaolb(lb66,lb6,yd6,tp6,yda6,l6,r6);          



//小小轮播
function xxlb(xlb,xtp,xl,xr){
    var flag=true;
    var n=0;
    var next=0;
    var width=parseInt(getStyle(xlb,"width"));
xl.onclick=function(){
if (flag==false) {
    return;
};
flag=false;
    next=n-1;
    if (next<0) {
      next=xtp.length-1;
    };
    xtp[next].style.left=-width+"px";
    animate(xtp[n],{left:width});
    animate(xtp[next],{left:0},function(){
      flag=true;
    });
    n=next;  
}
xr.onclick=function(){
   if (flag==false) {
       return;
   };
   flag=false;
    next=n+1;
    if (next>=xtp.length) {
      next=0;
    };
    xtp[next].style.left=width+"px";
    animate(xtp[n],{left:-width});
    animate(xtp[next],{left:0},function(){
      flag=true;
    });
    n=next;
} 	
}
    var xlb0=$(".dlbf51")[0];
	var xtp0=$(".dlbf50");
	var xl0=$(".lleft")[0];
	var xr0=$(".lright")[0];
	xxlb(xlb0,xtp0,xl0,xr0);

    var xlb1=$(".dqbf51")[0];
	var xtp1=$(".dqbf50");
	var xl1=$(".qleft")[0];
	var xr1=$(".qright")[0];
	xxlb(xlb1,xtp1,xl1,xr1);

    var xlb2=$(".dbbf51")[0];
	var xtp2=$(".dbbf50");
	var xl2=$(".bleft")[0];
	var xr2=$(".bright")[0];
	xxlb(xlb2,xtp2,xl2,xr2);
    
    var xlb3=$(".djbf51")[0];
	var xtp3=$(".djbf50");
	var xl3=$(".jjleft")[0];
	var xr3=$(".jjright")[0];
	xxlb(xlb3,xtp3,xl3,xr3);

    var xlb4=$(".dshbf51")[0];
	var xtp4=$(".dshbf50");
	var xl4=$(".shsleft")[0];
	var xr4=$(".shsright")[0];
	xxlb(xlb4,xtp4,xl4,xr4);  

    var xlb5=$(".dshisibf51")[0];
	var xtp5=$(".dshisibf50");
	var xl5=$(".shisileft")[0];
	var xr5=$(".shisiright")[0];
	xxlb(xlb5,xtp5,xl5,xr5); 

    var xlb6=$(".dshwbf51")[0];
	var xtp6=$(".dshwbf50");
	var xl6=$(".shwwleft")[0];
	var xr6=$(".shwwright")[0];
	xxlb(xlb6,xtp6,xl6,xr6);
	
	
    var xlb7=$(".dshlbf51")[0];
	var xtp7=$(".dshlbf50");
	var xl7=$(".shllleft")[0];
	var xr7=$(".shllright")[0];
	xxlb(xlb7,xtp7,xl7,xr7);
	
   var xlb8=$(".dshqbf51")[0];
	var xtp8=$(".dshqbf50");
	var xl8=$(".shqleft")[0];
	var xr8=$(".shqright")[0];
	xxlb(xlb8,xtp8,xl8,xr8); 







//二维码动画
// function erweima(a,b){
//       a.onmouseover=function(){
//         b.style.display="block"
//       }
//       a.onmouseout=function(){
//          b.style.display="none";
//      } 
// }
//       var a1=$('.dh2w')[0];
//       var b1=$('.dh2w1')[0];
//       erweima(a1,b1);

      // var aa1=$(".dh3s")[0];
      // var aa2=$(".dh3s1")[0];
      // erweima(aa1,aa2)

    var wdyt=$(".h4")[0];
    var clickwdyt=$(".clickwdyt")[0];
    wdyt.onmouseover=function(){
        clickwdyt.style.display="block";
        clickwdyt.onmouseover=function(){
            clickwdyt.style.display="block";
        }
        clickwdyt.onmouseout=function(){
            clickwdyt.style.display="none";
        }
    }

      var aa1=$(".dh3s")[0];
      var aa2=$(".dh3s1")[0];
    aa1.onmouseover=function(){
        aa2.style.display="block";
        aa2.onmouseover=function(){
            aa2.style.display="block";
        }
        aa2.onmouseout=function(){
            aa2.style.display="none";
        }
    }
    aa1.onmouseout=function(){
        aa2.style.display="none";
    }


      var a1=$('.dh2w')[0];
      var b1=$('.dh2w1')[0];
    a1.onmouseover=function(){
        b1.style.display="block";
        b1.onmouseover=function(){
            b1.style.display="block";
        }
        b1.onmouseout=function(){
            b1.style.display="none";
        }
    }

//侧边线动画效果
       var mm1=$(".img");
       var zuo=$(".zuo");
       var shang=$(".shang");
       var you=$(".you");
       var xia=$(".xia"); 
      for (var i = 0; i < mm1.length; i++) {
           mm1[i].index=i;      
           mm1[i].onmouseover=function(){
               var ow=this.offsetWidth;
               var oh=this.offsetHeight;
               animate(zuo[this.index],{height:oh},400);
               animate(xia[this.index],{width:ow},400);
               animate(you[this.index],{height:oh},400); 
               animate(shang[this.index],{width:ow},400);
           }
           mm1[i].onmouseout=function(){
               var ow=this.offsetWidth;
               var oh=this.offsetHeight;
               animate(zuo[this.index],{height:0},400);
               animate(xia[this.index],{width:0},400);
               animate(you[this.index],{height:0},400); 
               animate(shang[this.index],{width:0},400);
           }
   }





//选项卡效果
    // var wz=$(".wz");
    // var ds1=$(".dsbft");
    // var ds=$(".dsbfts")[0];
    // var cf1=$(".cf1");
    // var cf11=$(".cf11")[0];
    // for (var i = 0; i < wz.length; i++) {
    //   wz[i].index=i;
    //   wz[i].onmouseover=function(){
    //     for (var g = 0; g < wz.length; g++) {
    //       ds[g].style.display="block";
    //       cf11[g].style.display="block";
    //     };
    //   }
    //   wz[i].onmouseout=function(){
    //     ds[this.index].style.display="none";
    //     cf11[this.index].style.display="none";       
    //   }
    // };



    var xxk2=getClass('wz');
    var PIC2=getClass('dsbft');
    var hx2=getClass("cf1");
    for(var i=0;i<xxk2.length;i++){
        xxk2[i].index=i;
        xxk2[i].onmouseover=function(){
        for(var i=0;i<xxk2.length;i++){
                xxk2[i].style.cssText='font-weight: normal;'
            } 
            this.style.cssText='font-weight: bold;';
        for(var i=0;i<PIC2.length;i++){
            PIC2[i].style.display='none';
        }
        PIC2[this.index].style.display='block';
        for(var i=0;i<hx2.length;i++){
            hx2[i].style.background='#333';
        }
        hx2[this.index].style.background='#e5004f';
        }
    }






    var wdh1=$(".wdh1")[0];
    var wdh2=$(".wdh2")[0];
    var cf3=$(".cf3")[0];
    var cf4=$(".cf4")[0];
    var wdhtp1=$(".wdhtp1")[0];
    var wdhtp=$(".wdhtp")[0];
    wdh2.onmouseover=function(){
       wdhtp1.onmouseover=function(){
       cf3.style.display="none";
       cf4.style.display="block";
       wdhtp1.style.display="block";
       wdhtp.style.display="none";
       }
       wdhtp1.onmouseout=function(){
       cf3.style.display="block";
       cf4.style.display="none";
       wdhtp1.style.display="none";
       wdhtp.style.display="block";  
       }
       cf3.style.display="none";
       cf4.style.display="block";
       wdhtp1.style.display="block";
       wdhtp.style.display="none";
    }





//银泰轮播图
    var banner=$(".banner1")[0];
    var pic=$(".bn");
    // var bannerBox=$(".imgbox")[0];
    var list=$(".active");
    var bannerLeft=$(".bannerleft")[0];
    var bannerRight=$(".bannerright")[0];
    var n=0;
    var t=setInterval(move,3000);
    function move(){
        n++;
        if(n>=pic.length){
            n=0;
        }
        for(var i=0;i<pic.length;i++){
            animate(pic[i],{opacity:0},3000)
            list[i].style.background='#3E3E3E'
        }
        animate(pic[n],{opacity:1},3000)
        list[n].style.background='#E5004F'
    }
    banner.onmouseover=function(){
        clearInterval(t);
        bannerRight.style.display='block';
        bannerLeft.style.display='block';
    }
    banner.onmouseout=function(){
        t=setInterval(move,3000);
        bannerRight.style.display='none';
        bannerLeft.style.display='none';
    }
    bannerRight.onclick=function(){
        move();
    }
    bannerLeft.onclick=function(){
        n--;
        if(n<=0){
            n=pic.length-1;
        }
        for(var i=0;i<pic.length;i++){
            animate(pic[i],{opacity:0},3000)
            list[i].style.background='#3E3E3E'
        }
        animate(pic[n],{opacity:1},3000)
        list[n].style.background='#3E3E3E'
    }
    for(var i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onmouseover=function(){
            if(this.index>n){
                n++;
                if(n>=pic.length){
                    n=0;
                }
                for(var i=0;i<pic.length;i++){
                    animate(pic[i],{opacity:0},3000);
                    list[i].style.background='#3E3E3E';
                }
                animate(pic[this.index],{opacity:1},3000);
                list[this.index].style.background='#B61B1F';
                n=this.index;
            }else if(this.index<n){
                n--;
                if(n<=0){
                    n=pic.length-1;
                }
                for(var i=0;i<pic.length;i++){
                    animate(pic[i],{opacity:0},3000);
                    list[i].style.background='#3E3E3E';
                }
                animate(pic[this.index],{opacity:1},3000);
                list[this.index].style.background='#B61B1F';
                n=this.index;
            }
            
        }
    } 
})