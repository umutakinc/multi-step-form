function switchTab(clickedTab, e) {
    var i;
    var tabContent = $('.tab-content');
    for (i = 0; i < tabContent.length; i++) {
      $(tabContent[i]).css('display', 'none');  
    }
    $('#' + clickedTab).css('display', 'block');
    if($(e).parent().hasClass('active')) {
        $(e).parent().removeClass('active');
    } else {
        $(e).parent().addClass('active');
    }
}