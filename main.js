
define(
    [
        //'libs/pdf2/src/pdf',
        'libs/pdf2/src/shared/util',
        'libs/pdf2/src/shared/colorspace',
        'libs/pdf2/src/shared/pattern',
        'libs/pdf2/src/shared/function',
        'libs/pdf2/src/shared/annotation',
        'libs/pdf2/src/display/api',
        'libs/pdf2/src/display/metadata',
        'libs/pdf2/src/display/canvas',
        'libs/pdf2/src/display/font_loader'
    ],
    function(){
        PDFJS.workerSrc = '/libs/pdf2/src/worker_loader.js';
        return PDFJS;
    }
);