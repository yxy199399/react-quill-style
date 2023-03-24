import Quill from 'quill'
const Parchment = Quill.import('parchment')
import '../../index.css'
const lineHeight = new Parchment.Attributor.Style('self-lineHeight', 'line-height', {
  // 这里使用Parchment.Scope.BLOCK，而非Parchment.Scope.INLINE,block直接在p标签上添加样式，
  // INLINE在p标签内部创建span标签，在span上添加样式
  scope: Parchment.Scope.BLOCK,
  whitelist: [
    false,
    '1',
    '1.1',
    '1.2',
    '1.3',
    '1.5',
    '1.6',
    '1.7',
    '1.8',
    '1.9',
    '2',
    '2.1',
    '2.2',
    '2.3',
    '2.4',
    '2.5',
    '2.6',
    '2.7',
    '2.8',
    '2.9',
    '3',
  ],
})
Quill.register('formats/lineHeight', lineHeight, true)