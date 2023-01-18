import Quill from 'quill'
const Inline = Quill.import('blots/inline')
class MyStrike extends Inline {
  static create() {
    // return super.create()
    // 添加样式
    const node = super.create()
    node.style.textDecoration = 'line-through'
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
MyStrike.blotName = 'strike'
MyStrike.tagName = 'S'

export default MyStrike

Quill.register('formats/strike', MyStrike, true)
