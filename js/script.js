$(window).on('load', function() {

    function setAnimate(objectName, objectNameActive) {
        
        $(`.${objectName}`).on({
            touchstart: function() {
                $(`.${objectNameActive}`).removeClass(objectNameActive);
                $(this).addClass(objectNameActive);
            },
            mouseenter: function() {
                $(this).addClass(objectNameActive);
            },
            mouseleave: function() {
                $(`.${objectNameActive}`).removeClass(objectNameActive);
            },
        });
    }

    setAnimate('menu__item', 'menu__item-active');
    setAnimate('gallery__box', 'gallery__box-active');
});