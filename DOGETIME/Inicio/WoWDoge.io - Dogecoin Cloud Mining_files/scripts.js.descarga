$(document).ready(function(){if(document.querySelector(".page")){var params1={container:document.getElementById('doge1'),renderer:'svg',loop:true,autoplay:true,path:'animation1/data.json'};var params2={container:document.getElementById('doge2'),renderer:'svg',loop:true,autoplay:true,path:'animation2/data.json'};var anim1;anim1=lottie.loadAnimation(params1);var anim2;anim1=lottie.loadAnimation(params2);$(".header__list").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top;$('body,html').animate({scrollTop:top},1500);$('body').removeClass("open");});new WOW().init();let openMenu=document.querySelector(".header__menu a");let body=document.querySelector("body");openMenu.addEventListener("click",function(){body.classList.toggle("open");});let worksTab=document.querySelectorAll(".works__tab");let worksItem=document.querySelectorAll(".works__item");for(let i=0;i<worksTab.length;i++){worksTab[i].addEventListener("click",function(){for(let k=0;k<worksTab.length;k++){worksTab[k].classList.remove("works__tab-active");}
worksTab[i].classList.add("works__tab-active");for(let k=0;k<worksTab.length;k++){if(worksItem[k].classList.contains("works__item-active")){let worksItemWow=worksItem[k].querySelectorAll('.wow')
for(t=0;t<worksItemWow.length;t++){worksItemWow[t].style.animationName='none';}}
worksItem[k].classList.remove("works__item-active");if(i===k){worksItem[k].classList.add("works__item-active");}}});}
$(".pricing__items").slick({slidesToShow:5,infinite:false,responsive:[{breakpoint:999,settings:{slidesToShow:4,dots:true,},},{breakpoint:870,settings:{slidesToShow:3,dots:true,},},{breakpoint:666,settings:{slidesToShow:2,dots:true,},},{breakpoint:500,settings:{slidesToShow:1,dots:true,},},],});$(window).on('orientationchange',function(){$('.pricing__item').removeClass('wow');});$('[data-fancybox]').fancybox();$.fancybox.defaults.closeExisting=true;let faqItem=document.querySelectorAll('.faq__item');let faqItemPlus=document.querySelectorAll('.faq__item-title');let faqItemTitle=document.querySelectorAll('.faq__item-btn');function faqOpen(item){let itemParent=item.closest('.faq__item');if(itemParent.classList.contains('faq__item-active')){itemParent.classList.remove('faq__item-active')}
else{for(let k=0;k<faqItem.length;k++){faqItem[k].classList.remove('faq__item-active')}
itemParent.classList.add('faq__item-active')}}
for(let i=0;i<faqItemPlus.length;i++){faqItemPlus[i].addEventListener('click',function(){faqOpen(faqItemPlus[i]);})}
for(let i=0;i<faqItemTitle.length;i++){faqItemTitle[i].addEventListener('click',function(){faqOpen(faqItemTitle[i]);})}
const socket=io('https://ws.wowdoge.io:8443');socket.on('LiveBlock',function(data){l_user=data.username;l_type=data.types;l_desc=data.desc;l_date=data.date;if(l_type==3){if(l_desc==1)l_name='Newbie';else if(l_desc==2)l_name='Worker';else if(l_desc==3)l_name='Engineer';else if(l_desc==4)l_name='Driller';else if(l_desc==5)l_name='Bomber';l_text='Buy <b>'+l_name+'</b> worker.';l_img='img/main/stat-dog-'+l_desc+'.png';}else
if(l_type==4){l_text='Win <b>+'+l_desc+'</b> DOGE.';l_img='img/main/stat-roulette.png';}else
if(l_type==5){if(l_desc==3)l_name='Engineer';else if(l_desc==4)l_name='Driller';else if(l_desc==5)l_name='Bomber';l_text='Win <b>'+l_name+'</b> worker.';l_img='img/main/stat-roulette.png';}else
if(l_type==6){l_text='Quest <b>'+l_desc+'</b> completed.';l_img='img/main/stat-quest.png';}else
if(l_type==7){l_text='Win <b>'+l_desc+'</b> DOGE.';l_img='img/main/stat-dice.png';}else
if(l_type==31){l_text='Collect <b>+'+l_desc+'</b> DOGE.';l_img='img/main/stat-chest2.png';}else{l_text='';l_img='img/blank.png';}
icon_rand=Math.floor(Math.random()*(Math.floor(3)-Math.ceil(1))+Math.ceil(1));let addStat=`
                  <div class="stats__item">
                    <div class="stats__item-icon">
                      <img src="`+l_img+`">
                    </div>
                    <div class="stats__item-wrap stats__item-money`+icon_rand+`">
                      <div class="stats__item-block">
                        <div class="stats__item-name">`+l_user+`</div>
                        <div class="stats__item-description">`+l_text+`</div>
                      </div>
                      <div class="stats__item-time">`+l_date+`</div>
                    </div>
                  </div>
		`
$(addStat).prependTo($('.stats__items'));if(document.hidden){$(".stats__items div.stats__item:first-child").addClass("active");t=$(".stats__items div.stats__item").length;for(var o=0;o<t-4;o++)$(".stats__items div.stats__item:last-child").remove();}})
function removeActive(){let activeItems=$(".stats__item.active");let statsItem=$(".stats__item");if($(statsItem).length>$(activeItems).length){$(activeItems[activeItems.length-1]).addClass("opacity");setTimeout(()=>{$(activeItems[activeItems.length-1]).remove();},1000);}
$(activeItems[0]).prev().addClass("active");}
setInterval(()=>!document.hidden&&removeActive(),2000);}
function Notify(mess,error){if(error==true)type='error';else type='success';new Noty({theme:'sunset',progressBar:true,timeout:'4000',type:type,text:mess}).show();}
$("#registration button.popup__btn").click(function(){button=$(this);email=$('#registration input[name*="r_mail"]').val();login=$('#registration input[name*="r_login"]').val();pass1=$('#registration input[name*="r_pass1"]').val();pass2=$('#registration input[name*="r_pass2"]').val();captcha=grecaptcha.getResponse(capReg);ga=$('#visitorId').val();if(email.length==false){Notify('Email is empty.',true);return;}
if(login.length==false){Notify('Login is empty.',true);return;}
if(pass1.length==false){Notify('Password is empty.',true);return;}
if(pass1.length<6||pass1.length>20){Notify('A password must be from 6 to 20 characters.',true);return;}
if(pass2.length==false){Notify('Confirm password is empty.',true);return;}
if(pass1!=pass2){Notify('The passwords are different!',true);return;}
if($('#check_terms').is(":checked")==false){Notify('You do not agree with the terms of use.',true);return;}
if(!pass1.match(/[0-9]/)){Notify('Password must include at least one number!',true);return;}
if(!pass1.match(/[a-z]/)){Notify('Password must include at least one letter!',true);return;}
if(!pass1.match(/[A-Z]/)){Notify('Password must include at least one CAPS!',true);return;}
button.attr('disabled',true);$.ajax({type:"POST",data:{action:"registration",mail:email,login:login,password:pass1,captcha:captcha,ga:ga},url:'api/index.php',dataType:'json'}).done(function(data){if(data.error==false){location.href='/dashboard.php';}else{if(data.type=='captcha'){grecaptcha.reset(capReg);}else
if(data.type=='sess'){initFingerprintJS();}
button.attr('disabled',false);}
Notify(data.message,data.error);}).fail(function(){Notify('Server error, try later.',true);button.attr('disabled',false);});});$("#SignIn button.popup__btn").click(function(){button=$(this);login=$('#SignIn input[name*="r_login"]').val();password=$('#SignIn input[name*="r_pass1"]').val();captcha=grecaptcha.getResponse(capEnter);ga=$('#visitorId').val();if(login.length==false){Notify('Login is empty.',true);return;}
if(password.length==false){Notify('Password is empty.',true);return;}
button.text('Loading...').attr('disabled',true);$.ajax({type:"POST",data:{action:"login",login:login,password:password,captcha:captcha,ga:ga},url:'api/index.php',dataType:'json'}).done(function(data){if(data.error==false){location.href='/dashboard.php';}else{if(data.type=='captcha'){grecaptcha.reset(capEnter);}
button.text('Sign In').attr('disabled',false);}
Notify(data.message,data.error);}).fail(function(){Notify('Server error, try later.',true);button.text('Sign In').attr('disabled',false);});});$("#forgotPassword button.popup__btn").click(function(){button=$(this);mail=$('#forgotPassword input[name*="f_mail"]').val();login=$('#forgotPassword input[name*="f_login"]').val();captcha=grecaptcha.getResponse(capFor);if(login.length==false){Notify('Login is empty.',true);return;}
if(mail.length==false){Notify('Email is empty.',true);return;}
button.text('Loading...').attr('disabled',true);$.ajax({type:"POST",data:{action:"forgot",login:login,mail:mail,captcha:captcha},url:'api/index.php',dataType:'json'}).done(function(data){grecaptcha.reset(capFor);button.text('Forgot').attr('disabled',false);Notify(data.message,data.error);}).fail(function(){Notify('Server error, try later.',true);button.text('Forgot').attr('disabled',false);});});});