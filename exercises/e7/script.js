console.log('hello')

$('body').css('background-color','white');


for (let i=0; i < 500; i++) {
    let block = `<div style= "width:100%; height:20px; background-color: hsl(${i}, 50%, 50%"></div>`;
    $('.foreground').append(block);
}

$('div').each(function(){
    $(this).on('mouseenter', function(){
        $(this).addClass('no-color');
    })
})

$('body').on('keypress', function(){
    console.log('keypress');
    $('div').removeClass('no-color')
})