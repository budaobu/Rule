let path1 = '/vip/v2/user/vip';
let path2 = '/music.pay';
let path3 = '/vip/spi/mservice';

if (url.indexOf(path1) != -1) {
    var obj = JSON.parse(body);
    obj.data.isNewUser = 2;
    obj.data.vipLuxuryExpire = 1738717749000;
    obj.data.isYearUser = 2;
    obj.data.vipmExpire = 1738717749000;
    obj.data.vipOverSeasExpire = 1738717749000;
    obj.data.vipExpire = 1738717749000;
    obj.data.vip3Expire = 1738717749000;
    result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
    function replaceAll(str, find, replace){
	return str.replace(new RegExp(find, 'g'), replace);
}
    var keywords = ['vip'];
    var result = body;
    keywords.forEach(function(k) {
	result = replaceAll(result, k, 'song');
});

if (url.indexOf(path3) != -1) {
    var obj = JSON.parse(body);
    obj.data.isVIPMAutoPay = 2;
    obi.data.isVIPLuxAutoPay = 2；
    result = JSON.stringify(obj);
}
}
result;
