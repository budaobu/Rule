let path1 = '/vip/v2/user/vip';
let path2 = '/music.pay';

if (url.indexOf(path1) != -1) {
    var obj = JSON.parse(body);
    obj.data = JSON.parse('{"time":"1556095726751","vipExpire":1738717749000,"biedSong":"0","isYearUser":2,"vipmExpire":1738717749000,"biedAlbum":"0","vipOverSeasExpire":1738717749000,"vip3Expire":1738717749000,"vipLuxuryExpire":1738717749000,"isNewUser":2}');
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
}
result;
