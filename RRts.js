let path1 = '/user/profile';
let path2 = '/v3plus/index/channel';
let path3 = '/v3plus/index/todayChoice';

if (url.indexOf(path1) != -1) {
    var obj = JSON.parse(body);
    obj['data']['user']['medalList'] = JSON.parse('[{"name":"看剧必备","endTime":"2020-01-01 00:00:00","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510128764030.png","id":1}]');
    obj['data']['user']['privilegeList'] = JSON.parse('[{"effectObject":"danmu","action":"send","func":"superBarrageBlue","description":"超级弹幕","icon":"chaojidanmu","endTime":1640966400000},{"effectObject":"video","action":"play","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":1640966400000},{"effectObject":"video","action":"play","func":"noAd","description":"看剧无广告","icon":"kanjuwuguanggao","endTime":1640966400000},{"effectObject":"growth","action":"play","func":"0.4","description":"经验值加成+40%","icon":"jingyanzhijiacheng","endTime":1640966400000},{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1640966400000}]');
    result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
    var obj = JSON.parse(body);
    obj['data']['sections'].splice(1,1);
    obj['data']['sections'].splice(15,1);
    result = JSON.stringify(obj);
}

if (url.indexOf(path3) != -1) {
    var obj = JSON.parse(body);
    delete obj['data']['notice'];
    obj['data']['sections'].splice(2,1);
    obj['data']['sections'].splice(4,1);
    obj['data']['sections'].splice(8,1);
    obj['data']['sections'].splice(10,1);
    result = JSON.stringify(obj);
}
result;
