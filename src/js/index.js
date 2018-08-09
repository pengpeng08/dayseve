require(['require', 'ajax'], function($, ajax) {
    ajax({
        url: '/api/list',
        dataType: 'json'
    }).then(function(res) {
        console.log(res)
    }).catch(function(error) {
        console.log(error)
    })
})