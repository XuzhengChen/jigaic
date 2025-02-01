// 示例：在控制台输出欢迎信息
/*
console.log("欢迎访问  课程页面！");

// 示例：点击课程信息时弹出提示
document.querySelector('#course-info').addEventListener('click', function () {
    alert('这里是课程信息！');
});
*/
// 获取按钮元素
const pdfButton = document.getElementById('pdf-button');

// 添加点击事件
pdfButton.addEventListener('click', function () {
    // 替换为你的 PDF 文件链接
    window.location.href = 'https://github.com/XuzhengChen/jigaic/blob/main/references/sol_to_oj/sol1.pdf';
});