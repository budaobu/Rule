let path1 = '/user/profile';
let path2 = '/v3plus/medal';

if (url.indexOf(path1) != -1) {
    var obj = JSON.parse(body);
    obj['data']['user']['medalList'] = JSON.parse('[{"name":"1080P","endTime":"2022-01-01 00:00:00","imgUrl":"http://img.rr.tv/medal/20180607/o_1528365641950.png","id":25}]');
    obj['data']['user']['privilegeList'] = JSON.parse('[{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1640966400000}]');
    result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
    var obj = JSON.parse(body);
    obj['data']['medalList'] = JSON.parse('[{"medal":{"id":25,"createTime":1557652458897,"updateTime":1557652458897,"imgUrl":"http://img.rr.tv/medal/20180607/o_1528365641950.png","name":"1080P","orderNum":0,"text":"看剧可选择“原画” 画质，此勋章仅作为原画体验使用。若要长期解锁原画：请自助激活（看剧必备）勋章。","getWay":"特殊活动产出","durationDays":1,"activity":true,"beginTime":"2019-05-11 16:39:25","endTime":"2020-01-01 00:00:00","getUrl":"NONE ","spec":null,"assembly":false,"display":true,"type":1,"visible":true,"medalPrivilegeViewList":[{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua"}],"createTimeStr":"刚刚"}}]');
    result = JSON.stringify(obj);
}
result;
