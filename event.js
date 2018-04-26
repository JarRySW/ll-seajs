(function (window) {
    window.Event = {}
    Event.events = []

    Event.on = function (evt, func) {
        for (var i = 0; i < Event.events.length; i++) {
            if (Event.events[i].evt === evt) {
                Event.events[i].func.push(func)
                return
            }
        }
    }

    Event.trigger = function (evt) {
        for (var i = 0; i < Event.events.length; i++) {
            if (Event.events[i].evt === evt) {
                for (var j = 0; j < Event.events[i].func.length; j++) {
                    Event.events[i].func[j]()
                }
                return
            }
        }
    }

    Event.off = function (evt) {
        for (var i = 0; i < Event.events.length; i++) {
            Event.events.splice(i, 1)
        }
    }
    
})(window)

