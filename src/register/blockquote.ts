import Quill from 'quill'
const Block = Quill.import('blots/block')
// 打印所有
// console.log((Quill as any).imports)
class MyBlockquote extends Block {
  static create() {
    // 添加样式
    const node = super.create()
    node.setAttribute(
      'style',
      'border-left: 4px solid #ccc;margin-bottom: 5px;margin-top: 5px;padding-left: 16px;'
    )
    return node
  }
  static formats() {
    return true
  }
  optimize(context: any) {
    super.optimize(context)
    if (this.domNode.tagName !== this.statics.tagName) {
      this.replaceWith(this.statics.blotName)
    }
  }
}
MyBlockquote.blotName = 'blockquote'
MyBlockquote.tagName = 'BLOCKQUOTE'

Quill.register('formats/blockquote', MyBlockquote, true)

// blockquote样式
// border-left: 4px solid #ccc;
// margin-bottom: 5px;
// margin-top: 5px;
// padding-left: 16px;
