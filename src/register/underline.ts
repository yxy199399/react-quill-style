import Quill from 'quill'
const Inline = Quill.import('blots/inline')
class MyUnderline extends Inline {
  static create() {
    // return super.create()
    // 添加样式
    const node = super.create()
    node.style.textDecoration = 'underline'
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
MyUnderline.blotName = 'underline'
MyUnderline.tagName = 'U'

export default MyUnderline

Quill.register('formats/underline', MyUnderline, true)
