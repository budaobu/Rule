let path1 = '/user/profile';
let path2 = '/v3plus/medal/getAllMedalDetailWithPiece';

if (url.indexOf(path1) != -1) {
    var obj = JSON.parse(body);
    obj['data']['user']['medalList'] = JSON.parse('[{"name":"原画","endTime":"2033-12-31 23:59:59","imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510128764030.png","id":1}]');
    obj['data']['user']['privilegeList'] = JSON.parse('[{"effectObject":"video","action":"play","func":"originalPainting","description":"解锁原画","icon":"jiesuoyuanhua","endTime":1671718942000},{"effectObject":"coin","action":"sign","func":"5","description":"签到额外银币+5","icon":"qiandaoyinbi","endTime":1671718942000},{"effectObject":"growth","action":"play","func":"0.4","description":"经验值加成+40%","icon":"jingyanzhijiacheng","endTime":1671718942000},{"effectObject":"video","action":"play","func":"noLimit","description":"看剧无限制","icon":"kanjuwuxianzhi","endTime":1671718942000},{"effectObject":"video","action":"play","func":"noAd","description":"看剧无告","icon":"kanjuwuguanggao","endTime":1671718942000}]');
    result = JSON.stringify(obj);
}

if (url.indexOf(path2) != -1) {
    var obj = JSON.parse(body);
    obj['data']['medalList'] = JSON.parse('[{"medal":{"medalPrivilegeViewList":[{"description":"解锁原画","icon":"jiesuoyuanhua","effectObject":"video","func":"originalPainting","action":"play"},{"description":"看剧无限制","icon":"kanjuwuxianzhi","effectObject":"video","func":"noLimit","action":"play"},{"description":"经验值加成+40%","icon":"jingyanzhijiacheng","effectObject":"growth","func":"0.4","action":"play"},{"description":"看剧无广告","icon":"kanjuwuguanggao","effectObject":"video","func":"noAd","action":"play"},{"description":"超级弹幕","icon":"chaojidanmu","effectObject":"danmu","func":"superBarrageBlue","action":"send"}],"getUrl":"HTML http://mobile.rr.tv/mission/#/achievement/center","durationDays":500,"updateTime":1557564183313,"endTime":"2022-01-01 00:00:00","activity":true,"orderNum":100,"name":"看剧必备","createTimeStr":"刚刚","type":1,"id":1,"display":null,"imgUrl":"http://img.rr.tv/screenshot/20171108/o_1510128764030.png","text":"开通后，看剧可选择“原画”画质，可搜索观看限制级剧。","assembly":false,"createTime":1557564183313,"getWay":"激活勋章","visible":true,"beginTime":"2019-05-11 00:00:00"}}]');
    result = JSON.stringify(obj);
}
result;
