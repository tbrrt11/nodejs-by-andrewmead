const dummy = () => {
    return {
        payload: [{
            idmqtt_topics: 21
        }]
    }
}

var a = {}
a = dummy()
console.log(a.payload[0].idmqtt_topics)