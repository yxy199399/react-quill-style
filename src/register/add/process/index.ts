// 自定义进度组件
import Quill from "quill"
const Inline = Quill.import('blots/inline')
class Process extends Inline {
  static create(value = '50%') {
    // return super.create()
    // 添加样式
    const node = super.create()
    node.style.width = '200px'
    node.style.height = '20px'
    node.style.border = '2px solid #4DBF7D'
    node.style.background = '#fff'
    node.style.borderRadius = '12px'
    node.style.overflow = 'hidden'
    node.style.display = 'inline-block'
    node.class =  'ql-process-value'
    const obj: any = {}
    for(const prop in node){
      obj[prop] = node[prop]
    }

    // 创建子元素
    const child = document.createElement('span')
    child.style.height = '20px';
    child.style.width = value
    child.style.background = '#4DBF7D'
    child.style.textAlign = 'center'
    child.style.color = '#333'
    child.innerHTML = value;
    node.appendChild(child)
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
Process.blotName = 'process'
Process.tagName = 'span'

Quill.register('formats/process', Process, true)