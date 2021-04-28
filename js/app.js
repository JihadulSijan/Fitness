// Header toggle

let toggle = document.querySelector('#toggle');
let close = document.querySelector('#close');
let toggle_menu = document.querySelector('nav ul')

toggle.addEventListener('click',function(){
    this.style.display = 'none';
    close.style.display = 'block';
    toggle_menu.style.left = '0';

})

close.addEventListener('click',function(){
    this.style.display = 'none';
    toggle.style.display = 'block';
    toggle_menu.style.left = '100%';
})

// Header Scroll

$(document).ready(function(){
    $(window).scroll(function(){
        if($(document).scrollTop()>30){
            $('#header').addClass('active')
        }
    
        else if($(document).scrollTop()<30){
            $('#header').removeClass('active')
        }
    })
})



// Get Start Section

let getButtonOpen = document.querySelector('.getStartButton');
let getButtonClose = document.querySelector('.getStartButtonClose');
let form = document.querySelector('#form');

getButtonOpen.addEventListener('click',function(){
    this.style.display = "none";
    form.style.display = "block"
    getButtonClose.style.display = "block";
    getButtonClose.style.marginTop = "30px";
})

getButtonClose.addEventListener('click',function(){
    this.style.display = "none";
    form.style.display = "none"
    getButtonOpen.style.display = "block"
})


// Accrodion
$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

$(document).ready(function(){
    $('.accrodion_head_top').click(function(){
        if($('.accrodion_head_top').hasClass('ui-state-active')) {
            $('.accrodion_head_top .open').css("display","none");
            $('.accrodion_head_top .close').css("display","inline-block");
            $('.accrodion_head_end .open').css("display","inline-block");
            $('.accrodion_head_end .close').css("display","none");
            $('.accrodion_head_middle .open').css("display","inline-block");
            $('.accrodion_head_middle .close').css("display","none");
        }

        else {
            $('.accrodion_head_top .open').css("display","inline-block");
            $('.accrodion_head_top .close').css("display","none");
        }
    })
 })

$(document).ready(function(){
    $('.accrodion_head_middle').click(function(){
        if($('.accrodion_head_middle').hasClass('ui-state-active')) {
            $('.accrodion_head_middle .open').css("display","none");
            $('.accrodion_head_middle .close').css("display","inline-block");
            $('.accrodion_head_top .open').css("display","inline-block");
            $('.accrodion_head_top .close').css("display","none");
            $('.accrodion_head_end .open').css("display","inline-block");
            $('.accrodion_head_end .close').css("display","none");
        }

        else {
            $('.accrodion_head_middle .open').css("display","inline-block");
            $('.accrodion_head_middle .close').css("display","none");
        }
    })
 })

$(document).ready(function(){
    $('.accrodion_head_end').click(function(){
        if($('.accrodion_head_end').hasClass('ui-state-active')) {
            $('.accrodion_head_end .open').css("display","none");
            $('.accrodion_head_end .close').css("display","inline-block");
            $('.accrodion_head_top .open').css("display","inline-block");
            $('.accrodion_head_top .close').css("display","none");
            $('.accrodion_head_middle .open').css("display","inline-block");
            $('.accrodion_head_middle .close').css("display","none");
        }

        else {
            $('.accrodion_head_end .open').css("display","inline-block");
            $('.accrodion_head_end .close').css("display","none");
        }
    })
 })

//  wow js

