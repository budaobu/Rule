var obj = JSON.parse(body); // 对 response body 进行 JSON 解析得到 Object
delete obj['advertisement_info']; // 删除 'advertisement_info' 字段
JSON.stringify(obj); // 进行 JSON 编码并作为结果返回
