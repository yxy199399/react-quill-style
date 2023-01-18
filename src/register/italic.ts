import Quill from 'quill'
const Inline = Quill.import('blots/inline')
class MyItalic extends Inline {
  static create() {
    // return super.create()
    // 添加样式
    const node = super.create()
    node.style.fontStyle = 'italic'
    return node
  }

  static formats() {
    return true
  }

  optimize(context: any) {
    super.optimize(context)
    if (this.domNode.tagName !== this.statics.tagName[0]) {
      this.replaceWith(this.statics.blotName)
    }
  }
}
MyItalic.blotName = 'italic'
MyItalic.tagName = ['EM', 'I']

export default MyItalic

Quill.register('formats/italic', MyItalic, true)
