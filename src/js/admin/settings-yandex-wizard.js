// Yandex.Kassa shopPassword generator:
jQuery(document).ready(function($){

    var $genBtn = $('#yandex-generate-shop-password');
    
    if(!$genBtn.length) {
        return;
    }
    
    var $stepSubmit = $('.step-submit');
    $stepSubmit.hide();
    
    $genBtn.click(function(){
        var password = makePassword(10);
        var $block = $genBtn.closest('.enum-separated-block');
        $genBtn.hide();
        $block.find('.caption').css('display', 'unset');
        $block.find('.body b').css('display', 'unset').text(password);
        $block.find('input[name=leyka_yandex_shop_password]').val(password);
        $stepSubmit.show();
    });

});
// Yandex.Kassa shopPassword generator - END

// Yandex.Kassa payment tryout:
jQuery(document).ready(function($){

    var $genBtn = $('#yandex-make-live-payment');
    
    if(!$genBtn.length) {
        return;
    }
    
    var $loading = $('.yakassa-make-live-payment-loader');

    leykaYakassaPaymentData.leyka_success_page_url = window.location;

    var $loading = $('.yandex-make-live-payment-loader');

    $genBtn.click(function(){
        
        $loading.show();
        $genBtn.prop('disabled', true);

        $.post(leyka.ajaxurl, leykaYandexPaymentData, null, 'json')
            .done(function(json) {
                
                console.log(json);

                if(typeof json.status === 'undefined') {
                    
                    alert('Ошибка!');
                    
                } else if(json.status === 0 && json.payment_url) {
                    
                    window.location.href = json.payment_url;

                } else {
                    alert('Ошибка!');
                }

            }).fail(function(){
                alert('Ошибка!');
            }).always(function(){
                $loading.hide();
                $genBtn.prop('disabled', false);
            });
            
    });

});
// Yandex.Kassa payment tryout - END