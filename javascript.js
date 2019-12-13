
$(document).ready( function() {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a')
    $("#time").prepend(now)
})
