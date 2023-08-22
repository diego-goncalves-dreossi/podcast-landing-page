function resizeIframe(){
    var largura = window.screen.width;
    var video = document.querySelector('#videoap')

    if(largura > 992){
        if(video.classList.contains('w-100')){
            video.classList.remove('w-100')

        }

        if(!video.classList.contains('w-50')){
            video.classList.add('w-50')
        }

    }else{
        if(video.classList.contains('w-50')){
            video.classList.remove('w-50')

        }

        if(!video.classList.contains('w-100')){
            video.classList.add('w-100')
        }
    }
}

function loadIframe(){
    var largura = window.screen.width;
    var video = document.querySelector('#videoap')

    if(largura > 992){
        video.classList.add('w-50')

    }else{
        video.classList.add('w-100')
    }
}

window.onload = loadIframe()
window.addEventListener('resize',resizeIframe, true)