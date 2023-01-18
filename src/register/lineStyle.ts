import Quill from 'quill'
const fontSize = Quill.import('attributors/style/size')
fontSize.whitelist = [
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
  '48px',
]
Quill.register(fontSize, true)

// 对齐方式重置
const Align = Quill.import('attributors/style/align')
Align.whitelist = ['right', 'center', 'justify']
Quill.register(Align, true)

// 字体
// const FontAttributor = Quill.import('attributors/class/font')
// FontAttributor.whitelist = ['sofia', 'slabo', 'roboto', 'inconsolata', 'ubuntu']
// Quill.register(FontAttributor, true)
