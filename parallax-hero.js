{
    
    // vars

    const _body = document.querySelector('body');
    const _hero = document.getElementsByClassName('hero');
    const _image_bg = document.getElementsByClassName('image-bg');
    const _video_bg = document.getElementsByClassName('video-bg');
    const _hero_content = document.getElementsByClassName('hero-content');


    // core function

    function _parallax_hero() {

        let _current_top = document.documentElement;

        // image-bg 

        if (_image_bg.length > 0) {
            for (var i = 0; i < _image_bg.length; i++) {
                // option translate
                _image_bg[i].style.transform = 'translateY(' + _current_top * 0.5 + 'px)';
                // option scale
                _image_bg[i].style.transform = 'scale(' + (_current_top / 1000 + 1) + ')';
                // option opacity
                _image_bg[i].style.opacity = 1 - _current_top / 1000;
            }
        }

        // video-bg 

        if (_video_bg.length > 0) {
            for (var i = 0; i < _video_bg.length; i++) {
                // option translate
                _video_bg[i].style.transform = 'translateY(' + _current_top * 0.5 + 'px)';
                // option scale
                _video_bg[i].style.transform = 'scale(' + (_current_top / 1000 + 1) + ')';
                // option opacity
                _video_bg[i].style.opacity = 1 - _current_top / 1000;
            }
        }

        // hero-content

        if (_hero_content.length > 0) {
            for (var i = 0; i < _hero_content.length; i++) {
                // option opacity
                _hero_content[i].style.opacity = 1 - _current_top / 500;
            }
        }

    }

    _parallax_hero();

    window.addEventListener('scroll', _parallax_hero);
    
}
