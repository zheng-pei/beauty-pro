﻿ 

KindEditor.ready(function (K) {
    var editor1 = K.create('#content', {
        items: [
        'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'cut', 'copy', 'paste',
        'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
        'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
        'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
        'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
        'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image'
         , 'table', 'hr', 'emoticons', 'baidumap', 'code', 'pagebreak',
        'link', 'unlink', 'music', 'video'
        ],
        themeType: "simple",
        allowFileManager: true,
        allowFlashUpload: false,
        allowMediaUpload: false,
        allowFileUpload:false
        //urlType: "domain"//”relative”、”absolute”、”domain”。
    });
   
});
 