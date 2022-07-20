$(document).ready(function(){
  function darkmode(){
    $('.container').addClass('dark-mode');
    $('.nav-list').addClass('dark-mode');
    $('.home').addClass('dark-mode');
    $('.samsung').addClass('dark-mode');
    $('.xiaomi').addClass('dark-mode');
    $('.contact').addClass('dark-mode');
    $('.nav-link').addClass('dark-mode');
    $('html').addClass('dark-mode');
    $('.form-div').addClass('dark-mode');
    $('.skills-box').addClass('dark-mode');
    localStorage.setItem("mode", "dark");
  }

  function nodark(){
    $('.container').removeClass('dark-mode');
    $('.nav-list').removeClass('dark-mode');
    $('.home').removeClass('dark-mode');
    $('.samsung').removeClass('dark-mode');
    $('.xiaomi').removeClass('dark-mode');
    $('.contact').removeClass('dark-mode');
    $('.nav-link').removeClass('dark-mode');
    $('html').removeClass('dark-mode');
    $('.form-div').removeClass('dark-mode');
    $('.skills-box').removeClass('dark-mode');
    localStorage.setItem("mode", "light");
  }

  if(localStorage.getItem("mode")=="dark"){
    $('#custom-switch').prop('checked', true);
      darkmode();
  }else{
      nodark();
  }

  $('#custom-switch').on("click", function(){
    if ($(this).prop('checked')){
        darkmode();
    }
    else{
        nodark();
    }
  });
});
