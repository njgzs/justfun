function simditorinit(){

toolbar = [ 'title', 'bold', 'italic', 'underline', 'strikethrough',
    'color', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|',
    'link', 'image', 'hr', '|', 'indent', 'outdent' ];
var editor = new Simditor( {
    textarea : $('#editor'),
    placeholder : '这里输入内容...',
    toolbar : toolbar,  //工具栏
    defaultImage : '', //编辑器插入图片时使用的默认图片
    upload : {
        url : '/images/upload', //文件上传的接口地址
        params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
        fileKey: 'url', //服务器端获取文件数据的参数名
        connectionCount: 3,
        leaveConfirm: '正在上传文件'
    },
    pasteImage:true
});
$('.combobox').combobox();
}

