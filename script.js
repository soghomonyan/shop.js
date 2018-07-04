// // var burger = document.getElementById('burger');

// // burger.onclick = function(){
// //       var nav = document.getElementsByClassName('navigate');
// //       nav.style.display = 'block';
// //       alert('-_-')
// // }




// // window.onload = function(){
// //       for (var i=0; i<9; i++){
// // 	     document.getElementById('game').innerHTML+='<div class="block"></div>'
// //        }
// //        var hod=0;
// //        document.getElementById('game').onclick = function(e){
// //        	console.log(e);
// //        	if(e.target.className == 'block'){
// //        		if (hod%2==0) {
// //        			e.target.innerHTML = 'X';
// //        		}else{
// //        			e.target.innerHTML = 'O'
// //        		}
// //             hod++;
// //             checkWinner();
// //        	}
// //        }	
// //        function checkWinner(){
// //        	var allblock = document.getElementsByClassName('block');

// //        	if(allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') alert('Winning X');
// //        	if(allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x') alert('Winning X');
// //        	if(allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Winning X');
// //        	if(allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x') alert('Winning X');
// //        	if(allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x') alert('Winning X');
// //        	if(allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Winning X');
// //        	if(allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x') alert('Winning X');
// //        	if(allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x') alert('Winning X');
 

// //         if(allblock[0].innerHTML=='o' && allblock[1].innerHTML=='o' && allblock[2].innerHTML=='o') alert('Winning NOlik');
// //        	if(allblock[3].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[5].innerHTML=='o') alert('Winning NOlik');
// //        	if(allblock[6].innerHTML=='o' && allblock[7].innerHTML=='o' && allblock[8].innerHTML=='o') alert('Winning NOlik');
// //        	if(allblock[0].innerHTML=='o' && allblock[3].innerHTML=='o' && allblock[6].innerHTML=='o') alert('Winning NOlik');
// //        	if(allblock[1].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[7].innerHTML=='o') alert('Winning NOlik');
// //        	if(allblock[2].innerHTML=='o' && allblock[5].innerHTML=='o' && allblock[8].innerHTML=='o') alert('Winning NOlik');
// //        	if(allblock[0].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[8].innerHTML=='o') alert('Winning NOlik');
// //        	if(allblock[2].innerHTML=='o' && allblock[4].innerHTML=='o' && allblock[6].innerHTML=='o') alert('Winning NOlik');
// //       }
// //   }
var url = 'https://www.wiredmates.com/uploads/profiles/images/';
var app ='https://www.wiredmates.com/api-adm/';
var post_img = 'https://www.wiredmates.com/uploads/posts/';
// // 



// $.post(app,{
//   action:'login',
//   username:'arsen.kostanyan@',
//   password:'12345678',
// },function (data) {
// 	 localStorage.setItem('tokken',data.token)
// })
// $.post(app,{
// 	action:'getAllPosts',
// 	token:localStorage.getItem('tokken')
// },function (data) {
	
// 	var x = data.data;
// 	var y = '';
// 	for(var i in x){
// 		y.append("<div class='card' style='width: 18rem;'>");
// 			// for(var key in x[i].gallery){
// 			// 	if (x[i].gallery[key].globalType == 'image') {
// 			// 		y += "<img class='card-img-top' src='"+post_img+x[i].gallery[key].file+'.'+x[i].gallery[key].type+"' alt='Card image cap'>";
// 			// 	}else{
// 			// 		y += "<img class='card-img-top' src='"+'https://png.pngtree.com/element_origin_min_pic/16/10/28/e5827428735bd2c5bf089dd98401cc3f.jpg'+"' alt='Card image cap'>";
// 			// 	}
// 			// }
// 			// y += "<div class='card-body'>";
// 			// 	if(x[i].description.length==0){
// 			//      y += "<p class='card-text'>"+'empty'+"</p>";
// 			// 	}else{
// 			//      y += "<p class='card-text'>"+x[i].description+"</p>";
// 			// 	}
// 			// y += "</div>";
// 		// y += "</div>";

// 	}
// 	console.log(y)
// 	$('.container').html(y)
// })


// $.post(app,{
// 	action:'login',
// 	username:'arsen.kostanyan@yahoo.com',
// 	password:'12345678'
// },function (data) {
// 	localStorage.setItem('tokken',data.token);

// })
// $.post(app,{
// 	action:'getAllPosts',
// 	token:localStorage.getItem('tokken')
// },function (data) {
//     var x = '';
//     var y = data.data
//     for(var i in y){
//     	x +="<div  class='card' style='width: 18rem;'>";
//         x+="<div class='your-class'>"
//     		for(var key in y[i].gallery){
                 
//                 if(y[i].gallery.length>0){
                   
//                     x +="<div><img class='card-img-top' src='"+post_img+y[i].gallery[key].file+'.'+y[i].gallery[key].type+"' alt='Card image cap'></div>";

//                 }else{
//                     x +="<img class='card-img-top' src='"+post_img+y[i].gallery[key].file+'.'+y[i].gallery[key].type+"' alt='Card image cap'>";
//                 }
//     		}
//         x+="</div>"

//     		   x +="<div class='card-body'>"
//     			if(y[i].description.length==0){
//         		  x +="<p class='card-text'>"+'ljkikj'+"</p>";
//     			}else{
//                     if(y[i].profile.details.photo==undefined){
//                         x +="<img class='card-text' width='50' src='https://png.pngtree.com/element_origin_min_pic/16/10/28/e5827428735bd2c5bf089dd98401cc3f.jpg'>";
//                     }else{
//                         x +="<img class='card-text' width='50'  src='"+url+y[i].profile.details.photo+'.m.'+y[i].profile.details.photoType+"'>";
//                     }
//                 // x +="<img class='card-text' src=''>";
//     			x +="<p class='card-text'>"+y[i].profile.details.firstName+' '+y[i].profile.details.lastName+"</p>";
//         		// x +="<p class='card-text'>"+y[i].description.substr(0,10)+"</p>";

//     			}
//        		x +="</div>"
//         x +="</div>"
//     }
//     console.log(data)
//     $('.container').html(x)
// })




// <div class="your-class">
//   <div>your content</div>
//   <div>your content</div>
//   <div>your content</div>
// </div>
// $.post(app,{
// 	action:'login',
// 	username:'arsen.kostanyan@yahoo.com',
// 	password:'12345678'
// },function (data) {
// 	localStorage.setItem('tok',data.token)
// 	// console.log(data)
// })
// $.post(app,{
// 	action:'getAllPosts',
// 	token:localStorage.getItem('tok')
// },function (data) {
// 	// console.log(data)
// 	var y = '';
// 	var x = data.data;
// 	for(var i in x){
// 			y+="div class='card' style='width: 18rem;'"
// 			for(var u in x[i].gallery){
// 				if(x[i].gallery[u].globalType=='image'){
// 					y+="<img width='250px' src='"+post_img+x[i].gallery[u].file+'.'+x[i].gallery[u].type+"'>"
// 				}else{
// 					x +="<img class='card-img-top' src='https://png.pngtree.com/element_origin_min_pic/16/10/28/e5827428735bd2c5bf089dd98401cc3f.jpg' alt='Card image cap'>";
// 				}
//             // if(){
//             // 	if(x[i].gallery[u].globalType=='image'&& x[i].gallery[u].file!=undefined){
//             // 		y += "<img width='250px' src='"+post_img+x[i].gallery[u].file+'.'+x[i].gallery[u].type+"'>"
//             //          }else{
//             // 		y += "<img width='250px' src='https://i.stack.imgur.com/WOlr3.png'>"
//             //          }
            		
//             //      }else{
//             // 		y += "<img width='250px' src='https://i.stack.imgur.com/WOlr3.png'>"
//             // }
// 		}
	
// 	}
// 	$('.container').html(y)
// })

// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>




























// // $.post(app,{
// // 	action:'login',
// // 	username:'arsen.kostanyan@yahoo.com',
// // 	password:'12345678'
// // },function(data){
// // 	localStorage.setItem('tokken',data.token)

// // })
// // $.post(app,{
// // 	action:'getAllPosts',
// // 	token:localStorage.getItem('tokken')
// // },function(data){
// // 	// console.log(data)
// // 	var x='';
// // 	var y = data.data
// // 	for(var i in y){
// // 	// x += "<div>"+y[i].description+"</div>";
// // 	if(y[i].description.length == 0){
// // 		x += "<div>"+'enpty'+"</div>"
// // 	}else{
// // 			x += "<div>"+y[i].description.substr(0,10)+"</div>";
// // 	}
// // 	}
// // 	$('.container').html(x);
// // })












// var pr = 25+'%';


// var progress = "<div class='progress-bar' role='progressbar' style='width: 45%;' aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'><span id='lines'>"+pr+"</span></div>";

// $('#lines').animateNumber({ number: 165 });
// $(".progress").html(progress)
// // $.post('lang.json', function(data){
// // 	var u = '';

// 	for(var i in data.lang){
//     	u+="<option>"+data.lang[i]+"</option>"
       
// 	}
// 	$('#lang').html(u)
// })







// // $.post('https://www.wiredmates.com/api-adm/',{
// //       action:'login',
// //       username:'arsen.kostanyan@yahoo.com',
// //       password:'12345678'
// // },function(data){
// //      var data = localStorage.getItem('token');
// //       // console.log(data)

// // }) 
// // $.get(
// // 	'https://www.wiredmates.com/api-adm/',
// // 	{
// // 		action:'getAllProfiles',
// // 		token:localStorage.getItem('token')
// // 	},function(info){
// // 		// console.log(data)
// // 		var i = '';
// // 		var info = info.data;
// //        for(var x in info){
// //        		// console.log(info[x].firstName)
// //        		i+="<p>"+info[x].firstName+"</p>"
// //        }
// //        $('.container').html(i)
// // 	}
// // )


// $('#form').submit(function(event){
//     event.preventDefault();
//     var login = $('#login').val()
//     var password = $('#password').val()
//     $.post(app,{
//         action:'login',
//         username:login,
//         password:password,
//     },function(data){
//         if(data.e == 0){
//             localStorage.setItem('tooken',data.token)
//             chack()
//         }else{
//             alert('error')
//         }
//     })
// })

// function chack(){
//     if(localStorage.tooken){
//         window.location = 'dash.html'
//     }
     
// }
// function chackIn(){
//     if(!localStorage.tooken){
//         window.location = 'index.html'
//     }
// }

// function logOut(){
//     $('#logout').click(function(){
//        localStorage.removeItem('tooken');
//         chackIn()
//     })
   
        
// }

// function show_posts(){
//     $.post(app,{
//         action:'getAllPosts',
//         token:localStorage.tooken
//     },function(data){
//         var data = data.data;
//         var x = '';
//          console.log(data)
//          for(var i in data){
//             for(var key in data[i].gallery){
//                  if(data[i].gallery.length>0){
//                      x +="<div><img width='100' src='"+post_img+data[i].gallery[key].file+'.'+data[i].gallery[key].type+"'></div>";
//                  }else{
//                      x +="<img width='100' src='"+post_img+data[i].gallery[key].file+'.'+data[i].gallery[key].type+"'>";
//                  }
//          }
//             x +="<tr>"
//             x +="<th>"
//             x += "<td>"+data[i].id+"</td>"
//             x += "<td class='descr'>"+data[i].description+"</td>"
//             if (data[i].state == -1) {
//               x += "<td><button class='btn btn-success' data-description='"+data[i].description+"' data-id='"+data[i].id+"'>unblock</button></td>"
//             }else{
//                  x += "<td><button class='btn btn-danger' data-description='"+data[i].description+"'  data-id='"+data[i].id+"'>block</button></td>"
            
//             }
//            x +="<th>"
//             x +="</tr>"
//          }
//      $('.posts').html(x)
//       getPost()
//       unblock()
//     })

// }
// function getPost(){
//     $('.btn').click(function(){
//         var btn = this;
//         var descr = $(this).attr('data-description');

//         var id=$(this).attr('data-id')
//         var state = -1;
//         $.post(app,{
//             action:'editPost',
//             id: id,
//             description:descr,

//             state:state,
//             token: localStorage.tooken
//         },function(data){
//               if(data.e==0){
//                 $(btn).html("unblock");
//                 $(btn).removeClass("btn-danger")
//                 $(btn).addClass("btn-success")

//               }
//         })
//         console.log(id)
//     })

// }

// function unblock(){
//     $('.btn-success').click(function(){
//         var btn = this;
//         var descr = $(this).attr('data-description');
//         var descr = $('.descr').html();
//         var id=$(this).attr('data-id')
//         var state = 1;
//         $.post(app,{
//             action:'editPost',
//             id: id,
//             description:descr,
//             state:state,
//             token: localStorage.tooken
//         },function(data){
//               if(data.e==0){
//                 $(btn).html("unblock");
//                 $(btn).removeClass("btn-danger")
//                 $(btn).addClass("btn-success")

//               }
//         })
//         console.log(id)
//     })

// }























// $( "#form" ).submit(function( event ) {
//     var l = $('#login');
//     var p = $('#password');
//  $.post(app,{
//     action:'login',
//     username: l.val(),
//     password: p.val(),
//  },function (data) {
//     if(data.e == 0){
//         localStorage.setItem('tokken',data.token);
//         chack()
//     }else{
//        alert('yuy') 
//     }
   
//      // console.log(data)
//  })
//   event.preventDefault();//refresh chi linum

// });
// function chack(){
//     if(localStorage.tokken){
//         window.location = 'dash.html';
//         // break;
//     }
// }
// // 
// function logout(){
//     $('#logout').click(function(){
//         localStorage.removeItem('tokken');
//         chackToken()
//         // chack();
//     })
// }
// function chackToken(){
//     if(!localStorage.tokken){
//         window.location = 'index.html';
//         // break;
//     }
// }
// var fruts = "lang.json"
// $.post("lang.json",function(data){
//    alert(data)
// })

// $.getJSON( "lang.json", function( json ) {
//   console.log( "JSON Data:" );
//  });

