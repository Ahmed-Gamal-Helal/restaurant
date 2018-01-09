$(function(){
    'use strict';
    $('.users').click(function(event) {
        event.preventDefault();
        var ahmed = document.querySelectorAll('.main-col .col-lg-3');
        
        for(var i = 3, ii = ahmed.length ; i < ii; i++) {
            $(ahmed[i]).css('display', 'none');
        }
        var arr = ['المستخدمين', 'المجموعات', 'الصلاحيات'] ; 
        for(var i = 0, ii = 3 ; i < ii; i++) {
            ahmed[i].getElementsByTagName('h5')[0].innerHTML = arr[i];
            ahmed[i].setAttribute('href','index-2.html');
        }
    });

    $('#dataTable').DataTable();
    $('tr:even').css('background-color', '#EEE');
    $('tr:odd').css('background-color', '#FFF');
});