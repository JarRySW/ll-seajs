(function (window) {
    var r = /require\(\s*"(.*)"\s*\)/g
    var cache = {} // 文件缓存
    var relation = [] //依赖过程管理
    var obj = {} // xhr 管理对象

    Object.keys = Object.keys || function (obj) {
        var a = []
        for (a[a.length] in obj)
        return a
    }

    window.start = function (str) {
        while(match = r.exec(str)) {
            obj[match[1]] = new XMLHttpRequest()
            require(obj[match[1]], match[1])
        }
    }

    var require = function (xhr, path) {
        // 记录依赖
        relation.push(path)

        xhr.open('GET', path, true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var res = xhr.responseText
                // 缓存文件
                cache[path] = res
                console.log('已缓存：' + path)
                // 删除加载完函数
                delete obj[path]

                Object.keys(obj).length === 0 ? Event.trigger('allLoad') : void 0

                if (Object.keys(obj).length === 0) {
                    console.log('cache:')
                    console.log(cache)
                    console.log('relation:')
                    console.log(relation)
                }

                while(match = r.exec(res)) {
                    obj[match[1]] = new XMLHttpRequest()
                    require(obj[match[1]], match[1])
                }
            }
        }
        xhr.send()
    }
})(window)

Event.events.push({
    evt: 'allLoad',
    func: []
})

Event.on('allLoad', function () {
    console.log('所有模块加载完毕')
})
