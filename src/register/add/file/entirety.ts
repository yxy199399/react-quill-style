/**
 * 插入文件展示形式有两种
 * 1.将整个文件名当成一个整体，回退删除整个文件，
 * 2.文件名作为普通文本，支持修改编辑等
 * 3.撤回显示undefined bug
 */
import Quill from "quill"
const Embed = Quill.import("blots/embed");
// Embed会在内部创建一块不可编辑内容
interface ValueItem {
  href?: string
  fileId?: string
  innerText?: string
  quill?: any
}
class EntiretyFile extends Embed {
  static create(value: ValueItem) {
    const node = super.create()
    node.setAttribute('class', 'ql-entirety-file')
    node.download = value.innerText;
    node.setAttribute('data-href', value.href)
    node.setAttribute('data-id', value.fileId)
    node.innerText = value.innerText
    node.onclick = function () {
      const quill = value.quill
      if (!quill) return
      const range = quill.getSelection(true)
      if (range) {
        quill.setSelection(range.index)
      }
    }
    return node
  }

  // 解决撤回显示undefined bug，必须存在value和formats
  static value(node: HTMLElement) {
    return {
      href: node.getAttribute('data-href'),
      fileId: node.getAttribute('data-id'),
      innerText: node.children[0].innerHTML,
    }
  }

  static formats(domNode: HTMLElement) {
    return domNode.getAttribute('href')
  }

  optimize(context: any) {
    super.optimize(context)
    if (this.domNode.tagName !== this.statics.tagName) {
      this.replaceWith(this.statics.blotName)
    }
  }
}

EntiretyFile.blotName = 'entirety-file'
EntiretyFile.tagName = 'INS'
Quill.register(EntiretyFile, true)