let path1 = '/user/profile';
let path2 = '/v3plus/medal';

if (url.indexOf(path1) != -1) {
    var obj = JSON.parse(body);
    obj['data']['user']['medalList'] = JSON.parse('[{"name":"1080P","endTime":"2022-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20180607/o_1528365641950.png","id":25}]');
    obj['data']['user']['privilegeList'] = JSON.parse('[{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1640966400000},{"effectObject":"video","action":"play","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":1640966400000},{"effectObject":"video","action":"play","func":"noAd","description":"看剧无告","icon":"kanjuwuguanggao","endTime":1640966400000},{"effectObject":"danmu","action":"send","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":1640966400000}]');
    result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
    var obj = JSON.parse(body);
    obj['data']['medalList'] = JSON.parse('[{"medal":{"id":25,"createTime":1557652458897,"updateTime":1557652458897,"imgUrl":"http://img.rr.tv/medal/20180607/o_1528365641950.png","name":"1080P","orderNum":0,"text":"此勋章仅作为原画体验使用，若要长期解锁：请付费激活勋章。","getWay":"绝版勋章","durationDays":1,"activity":true,"beginTime":"2019-05-11 16:39:25","endTime":"2020-01-01 00:00:00","getUrl":"NONE ","spec":null,"assembly":false,"display":true,"type":1,"visible":true,"medalPrivilegeViewList":[{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua"},{"description":"看剧无限制","icon":"kanjuwuxianzhi","effectObject":"video","func":"noLimit","action":"play"},{"description":"看剧无广告","icon":"kanjuwuguanggao","effectObject":"video","func":"noAd","action":"play"},{"description":"超级弹幕","icon":"chaojidanmu","effectObject":"danmu","func":"superBarrageBlue","action":"send"}],"createTimeStr":"刚刚"}}]');
    result = JSON.stringify(obj);
}
result;
