import Quill from 'quill'

const Block = Quill.import('formats/code-block')
class MyCode extends Block {
  static create(value: any) {
    const node = super.create(value)
    node.setAttribute('spellcheck', false)
    node.setAttribute(
      'style',
      'background-color: #23241f;color: #f8f8f2;overflow: visible;white-space: pre-wrap;margin-bottom: 5px;margin-top: 5px;padding: 5px 10px;border-radius: 3px;'
    )
    return node
  }

  static formats() {
    return true
  }

  // optimize(context: any) {
  //   super.optimize(context)
  //   if (this.domNode.tagName !== this.statics.tagName) {
  //     this.replaceWith(this.statics.blotName)
  //   }
  // }
}

MyCode.blotName = 'code-block'
MyCode.tagName = 'PRE'

Quill.register('formats/code-block', MyCode, true)

// code样式
// background-color: #23241f;
// color: #f8f8f2;
// overflow: visible;

// white-space: pre-wrap;
// margin-bottom: 5px;
// margin-top: 5px;
// padding: 5px 10px;

// border-radius: 3px;
