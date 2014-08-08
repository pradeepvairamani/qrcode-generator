

$('#url1').keyup(function () {
    url_value = $('#url1').val();
    $('.qrcode').empty()
    $('.qrcode').qrcode(url_value);
});