    define(function() {
        function ajax(opt) {
            return new Promise(function(resolve, reject) {
                var params = Object.assign({}, {
                    type: 'get',
                    data: '',
                    async: true
                }, opt)
                var xml = new XMLHttpRequest();

                xml.onreadystatechange = function() {
                    if (xml.readyState != 4) {
                        return false;
                    }
                    if (xml.status === 200 || xml.status === 304) {
                        resolve(xml.responseText)
                    } else {
                        reject('有错误' + params.url)
                    }
                }

                function format(data) {
                    if (data == null) {
                        return data
                    }
                    var arr = [];
                    for (var i in data) {
                        var str = `${i}=${data[i]}`
                        arr.push(str)
                    }
                    return arr.join('&')
                }
                var objString = typeof params.data === 'object' ? format(params.data) : params.data;
                var url = (params.type === 'get' && typeof params.type === 'object') ? `${params.url}'?'${objString}` : params.url;
                xml.open(params.type, url, params.async);
                params.type === 'get' ? xml.send(null) : xml.send(objString);
            })

        }
        return ajax
    })