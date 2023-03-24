import Quill from 'quill'
import '../index.css'
// 自定义字体写法
export const fontFamily = [
  'SimSun',
  'SimHei',
  'Microsoft-YaHei',
  'KaiTi',
  'FangSong',
  'Arial',
  // 'pingfang',
]
const FontAttributor = Quill.import('attributors/style/font')
FontAttributor.whitelist = fontFamily
Quill.register(FontAttributor, true)

// 自定义文字大小,false表示normal
export const fontSize = [false, '12px', '14px', '16px', '20px', '24px', '36px']
const fontStyleSize = Quill.import('attributors/style/size')
fontStyleSize.whitelist = fontSize
Quill.register(fontStyleSize, true)
