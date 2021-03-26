$( document ).ready(function() {
			$(document).on("mouseup touchstart", "#startanimation", function(e){
				if ($("#startanimation:checked").val() === 'on') {
					lottie.freeze();
				}else{
					lottie.unfreeze();
				}
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('dt1'), // required
				path: 'dt1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('dt2'), // required
				path: 'dt1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('free'), // required
				path: 'dt1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('at1'), // required
				path: 'at1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('at2'), // required
				path: 'at1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('ct1'), // required
				path: 'ct1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('ct2'), // required
				path: 'ct1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('ft1'), // required
				path: 'ft1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('ft2'), // required
				path: 'ft1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('rt1'), // required
				path: 'rt1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('rt2'), // required
				path: 'rt1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('pt1'), // required
				path: 'pt1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			var animation = bodymovin.loadAnimation({
				container: document.getElementById('pt2'), // required
				path: 'pt1.json', // required
				renderer: 'svg', // required
				loop: true, // optional
				autoplay: true, // optional
				prerender: true,
			});

			function getOnlineUsers() {
			    var cname = 'count_online_player';
			    var d = new Date();
			    var HH = d.getHours();
			    var h = HH > 14 ? ((HH % 12) || 12) : HH;
			    var m = ('0' + d.getMinutes()).slice(-2);
			    var count = parseInt(((h >= 2 && h <= 8) || h == 0) ? 500 : 1000) + parseInt((!h ? 10 : h) + '' + m);
			    var name = cname + '=';
			    var ca = document.cookie.split(';');
			    for (var i = 0; i < ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0) == ' ') {
			            c = c.substring(1);
			        }
			        if (c.indexOf(name) == 0) {
			            return parseInt(c.substring(name.length, c.length));
			        }
			    }
			    return parseInt(count*1.6);
			}

			function getRandomUsers(min, max) {
			    return Math.floor(Math.random() * (max - min + 1) + min);
			}

			function setOnlineUsers(count) {
			    var exdays = 1;
			    var cvalue = count;
			    var cname = 'online_users_counter';

			    document.getElementById('count_online_player').innerHTML = count;

			    var d = new Date();
			    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			    var expires = 'expires=' + d.toUTCString();
			    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
			}

			function displayOnlineUsers() {
			    var count = getOnlineUsers();
			    setOnlineUsers(count);
			    setInterval(function() {
			        var variation = getRandomUsers(-5, 5);
			        count += variation;
			        setOnlineUsers(count);
			    }, 2000);
			}

			displayOnlineUsers();

			var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			  return new bootstrap.Tooltip(tooltipTriggerEl)
			});

			$("form").submit(function() {
			    $(":submit").addClass('disabled');
			    $(":submit").text('Loading..');
			});

			$(document).ajaxStart(function() {
				$( "#reglogbarhere" ).prepend('<div class="loaderhere"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>');
			});

			$(document).ajaxComplete(function() {
				$("#reglogbarhere .loaderhere").remove();
			});

			// Lang
            $(document).on("mouseup touchstart", "#change_lang", function(e){
                var nlang = $(this).data("lang");

                document.cookie = 'lalela=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain='+host+';path=/';
                document.cookie = "lalela="+nlang+"; domain="+host+";path=/";

                doGTranslate("en|"+nlang+"");

                $(".dropbtt").html('<img src="'+urlcdn+'flag_'+nlang+'.svg">');

                return false;
            });

            if (readCookie("lalela") == 'en') {
                var lglg = readCookie("lalela");
                                
                if (lglg == 'de') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Germany");
                }else if (lglg == 'fr') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Français");
                }else if (lglg == 'en') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("English");
                }else if (lglg == 'ru') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Russian");
                }else if (lglg == 'tr') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Turkish");
                }else if (lglg == 'it') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Italian");
                }else if (lglg == 'es') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Español");
                }else if (lglg == 'pt') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Brazil");
                }else if (lglg == 'hi') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("India");
                }else if (lglg == 'uk') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Ukrainian");
                }else if (lglg == 'ja') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Japanese");
                }else if (lglg == 'zh-CN') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Chinese");
                }
            }else if (readCookie("lalela")) {
                var lglg = readCookie("lalela");
                
                doGTranslate("en|"+lglg+"");
                
                $(".dropbtt").html('<img src="'+urlcdn+'flag_'+lglg+'.svg">');

                if (lglg == 'de') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Germany");
                }else if (lglg == 'fr') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Français");
                }else if (lglg == 'en') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("English");
                }else if (lglg == 'ru') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Russian");
                }else if (lglg == 'tr') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Turkish");
                }else if (lglg == 'it') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Italian");
                }else if (lglg == 'es') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Español");
                }else if (lglg == 'pt') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Brazil");
                }else if (lglg == 'hi') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("India");
                }else if (lglg == 'uk') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Ukrainian");
                }else if (lglg == 'ja') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Japanese");
                }else if (lglg == 'zh-CN') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Chinese");
                }
            }else{
                if (lglg == 'en') {
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("English");
                }else{
                    $(".nk-menu-link.dropdown-indicator.has-indicator .nk-menu-text").html("Language");
                }
            }

	        function GTranslateFireEvent(a, b) {
	            try {
	                if (document.createEvent) {
	                    var c = document.createEvent("HTMLEvents");
	                    c.initEvent(b, true, true);
	                    a.dispatchEvent(c)
	                } else {
	                    var c = document.createEventObject();
	                    a.fireEvent('on' + b, c)
	                }
	            } catch (e) {}
	        }

	        function readCookie(name) {
	            var c = document.cookie.split('; '),
	            cookies = {}, i, C;

	            for (i = c.length - 1; i >= 0; i--) {
	                C = c[i].split('=');
	                cookies[C[0]] = C[1];
	            }

	            return cookies[name];
	        }

	        function doGTranslate(a) {
	            if (a.value) a = a.value;
	            if (a == '') return;
	            var b = a.split('|')[1];
	            var c;
	            var d = document.getElementsByTagName('select');
	            for (var i = 0; i < d.length; i++)
	                if (d[i].className == 'goog-te-combo') c = d[i];
	            if (document.getElementById('google_translate_element2') == null || document.getElementById('google_translate_element2').innerHTML.length == 0 || c.length == 0 || c.innerHTML.length == 0) {
	                setTimeout(function() {
	                    doGTranslate(a)
	                }, 500)
	            } else {
	                c.value = b;
	                GTranslateFireEvent(c, 'change');
	                GTranslateFireEvent(c, 'change')
	            }
	        }

  			$("form#reglog").on("submit", function(e){
				e.preventDefault();
			
				if (!grecaptcha.getResponse()) {
				    $(".gcap").addClass('shake');
				    setTimeout(function(){
				        $(".gcap").removeClass('shake');
				    }, 1800);

					$("#reglog button[type=submit]").removeClass('disabled');
					$("#reglog button[type=submit]").text('Continue');
					return false;
				}

				var emailadd = $("form#reglog input[name=member_email]").val();
				var emailaddel = $("form#reglog input[name=member_email]");
				if (emailadd.length < 6) {
				    emailaddel.addClass('shake');
				    setTimeout(function(){
				        emailaddel.removeClass('shake');
				    }, 1800);

				    emailaddel.focus();
				    return false;
				}else{
					var onecaptcha = grecaptcha.getResponse();

                    $.ajax({
                        type: "post",
                        url: siteurl + 'reglog',
                        data: {member_email: emailadd, 'g-recaptcha-response': grecaptcha.getResponse()},
                        cache: false,
                        dataType: 'JSON',
                        context: this,

                        success: function(retu) {
                            var obj = JSON.parse(JSON.stringify(retu));

                            if (obj.status === 'success') {
                            	$("form#reglog").hide();
                            	$("form#reglog").html(obj.html);
                            	$("form#reglog").show(600);

								if (obj.operation === 'login') {
									$('form#reglog').attr('id','logonly');
	
									$(document.body).on("submit", "form#logonly", function(e){
										e.preventDefault();

										var mpassword = $("form#logonly input[name=member_password]").val();
					                    $.ajax({
					                        type: "post",
					                        url: siteurl + 'log',
					                        data: {member_email: $("form#logonly input[name=member_email]").val(), member_password: mpassword, 'g-recaptcha-response': onecaptcha},
					                        cache: false,
					                        dataType: 'JSON',
					                        context: this,

					                        success: function(retu) {
					                            var obj = JSON.parse(JSON.stringify(retu));

					                            if (obj.status === 'success') {
					                            	$("form#logonly").hide();
					                            	$("form#logonly").html(obj.html);
					                            	$("form#logonly").show(600);

					                            	if (obj.operation === 'loggedin') {
					                            		location.reload();
					                            		return false;
					                            	}

					                            }else if (obj.status === 'error') {
					                            	location.reload();
					                            	return false;
					                            }
					                        }
					                    });

					                    e.stopImmediatePropagation();
					                });
								}else if (obj.operation === 'register') {
									$('form#reglog').attr('id','regonly');

									$(document.body).on("submit", "form#regonly", function(e){
										e.preventDefault();

										if ($("form#regonly input[name=terms]:checked").val() === "on") {
											//true
										}else{
										    $("form#regonly input[name=terms]").addClass('shake');
										    setTimeout(function(){
										        $("form#regonly input[name=terms]").removeClass('shake');
										    }, 1800);

										    $("form#regonly input[name=terms]").focus();
										    return false;
										}

										var mpassword = $("form#regonly input[name=member_password]").val();
					                    $.ajax({
					                        type: "post",
					                        url: siteurl + 'reg',
					                        data: {member_email: $("form#regonly input[name=member_email]").val(), member_password: mpassword, terms: $("form#regonly input[name=terms]").val(), member_name: $("form#regonly input[name=member_name]").val(), member_surname: $("form#regonly input[name=member_surname]").val(), 'g-recaptcha-response': onecaptcha},
					                        cache: false,
					                        dataType: 'JSON',
					                        context: this,

					                        success: function(retu) {
					                            var obj = JSON.parse(JSON.stringify(retu));

					                            if (obj.status === 'success') {
					                            	$("form#regonly").hide();
					                            	$("form#regonly").html(obj.html);
					                            	$("form#regonly").show(600);
					                            }else if (obj.status === 'error') {
					                            	location.reload();
					                            	return false;
					                            }
					                        }
					                    });

					                    e.stopImmediatePropagation();
					                });
								}
                            }else if (obj.status === 'error') {
                            	location.reload();
                            	return false;
                            }
                        }
                    });
				}

				e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#directlogin", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'login',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$(document.body).on("submit", "form#logonly_direct", function(e){
							e.preventDefault();
						
							var datastring = $("form#logonly_direct").serialize();

			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'login?send=true',
		                        data: datastring,
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#resetpwlink", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'reset_password',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$(document.body).on("submit", "#respw", function(e){
							e.preventDefault();

			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'reset_password?send=true',
			                    data: {post: 'true', member_email: $("#respw input[name=member_email]").val()},
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#profile_settings", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'profile_settings',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$(document.body).on("submit", "#profile_settingsfrm", function(e){
							e.preventDefault();

							var datastring = $("#profile_settingsfrm").serialize();
			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'profile_settings?send=true',
			                    data: datastring,
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#support", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'support',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$(document).on("mouseup touchstart", "#newTicket", function(e){
							e.preventDefault();

							$("#gameScreen .modal-body").empty();
							$("#gameScreen").modal("show");

			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'support?create=New',
			                    data: {post: 'true'},
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);

									$(document.body).on("submit", "#createNewFrm", function(e){
										e.preventDefault();

										var datastring = $("#createNewFrm").serialize();
						                $.ajax({
						                    type: "post",
						                    url: siteurl + 'support?send=newTicket',
						                    data: datastring,
						                    cache: false,

						                    success: function(retu) {
												$("#gameScreen .modal-body").html(retu);
						                    }
						                });

						                e.stopImmediatePropagation();
									});
			                    }
			                });

			                e.stopImmediatePropagation();
						});

						$(document).on("mouseup touchstart", "#viewSupport", function(e){
							e.preventDefault();

							$("#gameScreen .modal-body").empty();
							$("#gameScreen").modal("show");

			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'support?view=true',
			                    data: {post: 'true', supportKey: $(this).data("supportid")},
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);

									$(document.body).on("submit", "#replyTicket", function(e){
										e.preventDefault();

										var datastring = $("#replyTicket").serialize();
						                $.ajax({
						                    type: "post",
						                    url: siteurl + 'support?view=true&send=replyTicket',
						                    data: datastring,
						                    cache: false,

						                    success: function(retu) {
												$("#gameScreen .modal-body").html(retu);
						                    }
						                });

						                e.stopImmediatePropagation();
									});
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#twofactor", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'twofactor',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$(document.body).on("submit", "#submitfrmtwo", function(e){
							e.preventDefault();

							var datastring = $("#submitfrmtwo").serialize();
			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'twofactor?send=true',
			                    data: datastring,
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#change_password", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'password',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$(document.body).on("submit", "#profile_settingsfrm", function(e){
							e.preventDefault();

							var datastring = $("#profile_settingsfrm").serialize();
			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'password?send=true',
			                    data: datastring,
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", ".giftbox", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'giftbox',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$(document.body).on("submit", "form#claimGift", function(e){
							e.preventDefault();

			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'giftbox?send=true',
			                    data: {post: true},
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);
									$(".giftbox").remove();
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", ".online_count", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'online',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#affiliate_here", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'affiliate',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
                        new ClipboardJS('.copylink');

						$("#gameScreen .modal-body").html(retu);
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#earn_history", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'earn_history',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "#withdraw_history", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'withdraw_history',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "[data-gamecharacter]", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'game_character',
                    data: {post: 'true', character: $(this).data("gamecharacter")},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "[data-gohome]", function(e){
				e.preventDefault();

                $.ajax({
                    type: "post",
                    url: siteurl + 'gohome',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$(".playerarea").html(retu);
                    }
                });

                e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", "[data-gotohome]", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'nonehome',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);
                    }
                });

                e.stopImmediatePropagation();
			});

			var packid = 0;
			$(document).on("mouseup touchstart", "#buy_char", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

				var packid = $(this).data("packid");
                $.ajax({
                    type: "post",
                    url: siteurl + 'buy_char',
                    data: {post: 'true', character: $(this).data("packid")},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$("form").submit(function() {
						    $(":submit").addClass('disabled');
						    $(":submit").text('Loading..');
						});

						$(document).ajaxStart(function() {
							$("#gameScreen .modal-body").prepend('<div class="loaderherepay"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i></div>');
						});

						$(document).ajaxComplete(function() {
							$("#gameScreen .loaderherepay").remove();
						});

						$(document).on("submit", "form#get_pay", function(e){
							e.preventDefault();

	                        new ClipboardJS('.copylink');
			
			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'buy_char?send='+ $("form#get_pay input[name=packid]").val() +'',
			                    data: {currency_type: $("form#get_pay select[name=currency_type]").val(), character: $("form#get_pay input[name=packid]").val() },
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);									
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

            	e.stopImmediatePropagation();
			});

			$(document).on("mouseup touchstart", ".balance_here", function(e){
				e.preventDefault();

				$("#gameScreen .modal-body").empty();
				$("#gameScreen").modal("show");

                $.ajax({
                    type: "post",
                    url: siteurl + 'withdraw',
                    data: {post: 'true'},
                    cache: false,

                    success: function(retu) {
						$("#gameScreen .modal-body").html(retu);

						$(document.body).on("submit", "form#withFrm", function(e){
							e.preventDefault();

							var datastring = $("form#withFrm").serialize();
			                $.ajax({
			                    type: "post",
			                    url: siteurl + 'withdraw?send='+ hash +'',
			                    data: datastring,
			                    cache: false,

			                    success: function(retu) {
									$("#gameScreen .modal-body").html(retu);									
			                    }
			                });

			                e.stopImmediatePropagation();
						});
                    }
                });

            	e.stopImmediatePropagation();
			});
});