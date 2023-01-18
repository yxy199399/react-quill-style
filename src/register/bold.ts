// 此方案只能适用行内元素，不适应块元素，块元素换行会触发remove丢失样式

import Quill from 'quill'
const Parchment = Quill.import('parchment')
class BoldStyleAttributor extends Parchment.Attributor.Style {
  constructor(attrName: string, keyName: string, options: any) {
    super(attrName, keyName, options)
  }

  value(domNode: HTMLElement) {
    const value = super.value(domNode)
    return value
  }

  add(node: HTMLElement) {
    node.style.fontWeight = 'bold'
    // ('font-weight', 'bold')
    return true
  }
  remove(node: HTMLElement) {
    node.style.fontWeight = 'normal'
  }
}
const BoldStyle = new BoldStyleAttributor('bold', 'font-weight', {
  scope: Parchment.Scope.INLINE,
  whitelist: [true, false],
})

Quill.register('formats/bold', BoldStyle, true)
