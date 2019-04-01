
var toolbarOptions = [
    ['bold', 'italic','underline','strike'],    // toggled buttons   
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'header': [1, 2, 3, 4, false] }],
    [{ 'color': [] }, { 'background': [] }],        
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['link', 'image']
];
var quill = new Quill('#editor', {
    modules : {
        toolbar : toolbarOptions
    },
    theme: 'snow'
});