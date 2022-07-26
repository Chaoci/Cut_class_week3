var div = document.querySelector(".header-top i");
var cssCollection = window.getComputedStyle(div, null);
var result = cssCollection.getPropertyValue("display"); //利用js取css值


$(function () {
	$(".header-top i").click(function (e) {
		e.preventDefault();
		//h2 在父層元素中，找到 p 元素，並且給它滑動效果
		$('.header-top').parent().find("li img").slideToggle(700);
        $('.header-top').classList.add('.nav')
		//h2 在父層 .question 元素中，找到其他 .question 同層元素，再找到該同層元素的 p 標籤，並向上收闔
		$('.header-top').parent().siblings().find("li").slideUp(700);
	});

	//如果有出現menu icon則為block，表示正在手機畫面則執行以下code
	if(result == 'inline'){  
		$(".slide li").click(function(e){
			$('.slide').parent().find("li").slideToggle(700);
			$('.slide').parent().siblings().find("li").slideUp(700);
		})
	}
});

// className 特性可用來變更 class 屬性值，如果屬性不存在，它會建立屬性並將指定的值設定於屬性中。注意，如果原本就有 class 值，再用 className 賦予值的話，會取代原本的 class 值，而不是將新的值加入既有的 class 名稱中。
// document.querySelector('.titleClass').className = 新的 class 名稱;



