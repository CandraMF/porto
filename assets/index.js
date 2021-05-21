$('.scroll-spy').scrollSpy({
    offsetElement:'.header',
    ignoreAnchors: ['.not' ],
});

$('.scroll-spy').scrollSpy({
    offset: 50,
    scrollDuration: 100,
    scrollEasing:'swing',
});


$('.scroll-spy').scrollSpy({
    activeClass:'enabled'
});

$('.scroll-spy').scrollSpy({
    anchors: ['a[href*=\\#]']
});

    
