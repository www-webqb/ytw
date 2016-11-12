	// var imgbox=getClass("imgbox")[0];
 //    var img=imgbox.getElementsByTagName("a");
 //    var btnbox=getClass("btnbox")[0];
 //    var btn=btnbox.getElementsByTagName("li");
 //    num=0;
 //    function change(){
 //    	num++;
 //    	if(num>=img.length){
 //    		num=0;
 //    	}
 //    	for(var i=0;i<img.length;i++){
 //    		img[i].style.zIndex="0";
 //    	    btn[i].id="";
 //    	}
 //    	img[num].style.zIndex="5";
 //    	btn[num].id="active";
 //    }
 //    var t=setInterval(change,3000);
 //    var banner=getClass("banner")[0];
 //    banner.onmouseover=function(){
 //    	clearInterval(t);
 //    }
 //    banner.onmouseout=function(){
 //    	t=setInterval(change,3000);
 //    }
 //    for(i=0;i<btn.length;i++){
 //    	btn[i].index=i;
 //    	btn[i].onclick=function(){
 //    		for(var j=0;j<img.length;j++){
 //    			img[j].style.zIndex="0";
 //    			btn[j].id="";
 //    		}
 //            img[this.index].style.zIndex="5";
 //            this.id="active";
 //            num=this.index;
 //    	}
 //    }


// $(function(){
//     var banner=$(".banner1")[0];
//     var pic=$(".bn");
//     console.log(pic.length)
//     var bannerBox=$(".imgbox")[0];
//     var list=$(".active");
//     var bannerLeft=$(".bannerleft")[0];
//     var bannerRight=$(".bannerright")[0];
//     var n=0;
//     var t=setInterval(move,2000);
//     function move(){
//         n++;
//         if(n>=pic.length){
//             n=0;
//         }
//         for(var i=0;i<pic.length;i++){
//             animate(pic[i],{opacity:0},2000)
//             list[i].style.background='#3E3E3E'
//         }
//         animate(pic[n],{opacity:1},2000)
//         list[n].style.background='#B61B1F'
//     }
//     bannerBox.onmouseover=function(){
//         clearInterval(t);
//         bannerRight.style.display='block';
//         bannerLeft.style.display='block';
//     }
//     bannerBox.onmouseout=function(){
//         t=setInterval(move,2000);
//         bannerRight.style.display='none';
//         bannerLeft.style.display='none';
//     }
//     bannerRight.onclick=function(){
//         move();
//     }
//     bannerLeft.onclick=function(){
//         n--;
//         if(n<=0){
//             n=pic.length-1;
//         }
//         for(var i=0;i<pic.length;i++){
//             animate(pic[i],{opacity:0},2000)
//             list[i].style.background='#3E3E3E'
//         }
//         animate(pic[n],{opacity:1},2000)
//         list[n].style.background='#3E3E3E'
//     }
//     for(var i=0;i<list.length;i++){
//         list[i].index=i;
//         list[i].onmouseover=function(){
//             if(this.index>n){
//                 n++;
//                 if(n>=pic.length){
//                     n=0;
//                 }
//                 for(var i=0;i<pic.length;i++){
//                     animate(pic[i],{opacity:0},2000);
//                     list[i].style.background='#3E3E3E';
//                 }
//                 animate(pic[this.index],{opacity:1},2000);
//                 list[this.index].style.background='#B61B1F';
//                 n=this.index;
//             }else if(this.index<n){
//                 n--;
//                 if(n<=0){
//                     n=pic.length-1;
//                 }
//                 for(var i=0;i<pic.length;i++){
//                     animate(pic[i],{opacity:0},2000);
//                     list[i].style.background='#3E3E3E';
//                 }
//                 animate(pic[this.index],{opacity:1},2000);
//                 list[this.index].style.background='#B61B1F';
//                 n=this.index;
//             }
            
//         }
//     }   
// })
