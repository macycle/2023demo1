$(function(){
    $("#btn").click(function(){
        $("#wraper>p").text('xxxxxx').css('border-radius','20px').css('padding','20px')
    })

    $("#btn").mouseenter(function(){
        $(this).css('background-color','red')
    })
    $("#btn").mouseleave(function(){
        $(this).css('background-color','green')
    })
})