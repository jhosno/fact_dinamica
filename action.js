$(document).ready(function(){


    let data = [
        {

            id :'esca226552',
            text : 'martillo de thor',
            precio : 152,
        },
        {

            id : 'egip15236',
            text : 'Ojo de Osiris',
            precio : 300,
        },
        {
            id : 'grec12536',
            text : 'Lira de Orfeo',
            precio : 235,
        },
        {
            id : 'meta25351',
            text : 'Arenas del tiempo',
            precio : 1253,
        },
        {
            id : 'medi21553',
            text : 'Piedra filosofal',
            precio : 800,
        },
        {
            id : 'cris212536',
            text : 'manto de jebus',
            precio : 5,
        }
    ];


    $('#select-items').select2({
        data:data
    });

    //remove item
    $("#section-content").on('click','button.remove-btn', function() {
        $(this).parent().remove();
    })
})
function addRow(){
    //add item
    let content = $('#div-container-row');
    element = null;
    element = content.clone();
    element.attr('class','div-container');
    let type_div = 'item_' + jQuery.now();
    element.attr('id', type_div);
    element.find('.remove-btn').attr('targetDiv', type_div);

    element.appendTo('#section-content');

};
function addNote(){
    //add item
    let content = $('#div-container-note');
    element = null;
    element = content.clone();
    element.attr('class','div-container');
    let type_div = 'item_' + jQuery.now();
    element.attr('id', type_div);
    element.find('.remove-btn').attr('targetDiv', type_div);

    element.appendTo('#section-content');

};
function addSpace(){
    //add item
    let content = $('#div-container-space');
    element = null;
    element = content.clone();
    element.attr('class','div-container');
    let type_div = 'item_' + jQuery.now();
    element.attr('id', type_div);
    element.find('.remove-btn').attr('targetDiv', type_div);

    element.appendTo('#section-content');

};



