
## License

1.xx版本将原有功能基于react-quill的基础，将所有（公式除外，公式用到其它依赖）转换成行内样式，在移动端等地方使用可不用单独引入样式
11种行内格式：

background
bold
color
font
code
italic
link
size
strike
script
underline
7种块级格式：

blockquote
header
indent
list
align
direction
code-block
3种嵌入格式：

formula（公式）
image
video

发布前先检查这两个命名是否生效，没有生效，通过npx执行
"build:css": "cpx 'node_modules/quill/dist/quill.*.css' dist",
"build:font": "cpx 'src/register/font/index.css' lib/register/font",
