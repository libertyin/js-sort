'use-strict'

   var btnsBox =  $('.js-btns');
   var btnItems = btnsBox.find('button');
   var contantImg = $('.js-img');

   btnItems.on('click', sortImg);
   
   function sortImg() {

    var currentBtn = $(this).data('color');

    contantImg.each(function(index , elem) {

        $(this).css('display', 'block');
    });

    contantImg.each(function(index , elem){

        currentItem = $(this).attr('id');

        if(currentItem!=currentBtn && currentBtn!='all') {
            $(this).css({
                'display':'none'
            })
        }
    });
    

   }

