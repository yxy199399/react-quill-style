// 自定义进度组件
import Quill from "quill"
import './index.css'
const Embed = Quill.import("blots/embed");
class Process extends Embed {
  static create(value: string) {
    // return super.create()
    // 添加样式
    const node = super.create()
    node.setAttribute('class', 'ql-disabled-tag-container')
    
    /* *
       * 将整块内容作为一个整体，不能在中间聚焦，回退删除整体
       * 1.出现bug光标消失(不可编辑元素无法获取光标，并且不可编辑元素又在最后或最前)
       * 在不可编辑块前后添加 &#xFEFF; ，显示光标，该回退不可删除
       * 继承Embed模快创建的元素实现子元素添加contentEditable=false，并在不可编辑元素前后添加&#xFEFF;，用于显示光标
       * 2.enter换行会继承该格式出现多个相同的快
       * 3.同类名标签也会不可编辑
    */
    
    const disabledChild = document.createElement('span')
    // 批量添加样式
    disabledChild.style.cssText = 'width:200px;height:20px;border:2px solid #4DBF7D;border-radius:12px;background:#fff;display:inline-block;overflow:hidden;position:relative'
    

    // 创建子元素
    const child = document.createElement('span')
    child.style.cssText = 'height:20px;background:#4DBF7D;display:inline-block'
    child.style.width = value;
    disabledChild.appendChild(child)
    const numChild = document.createElement('span')
    numChild.style.cssText = 'position:absolute;left:0;top:0;bottom:0;right:0;textAlign:center;color:#333'
    numChild.innerHTML = value
    disabledChild.appendChild(numChild)
    node.appendChild(disabledChild)
    // node.innerHTML += data.value;
    // insertAdjacentHTML将元素插入到指定位置
    // node.insertAdjacentHTML('afterbegin', '&#xFEFF;')
    // node.insertAdjacentHTML('beforeend', '&#xFEFF;')
    // node.innerHTML += value; // 效果等同于在前后添加&#xFEFF;，并给disabledChild加上contentEditable=false属性
    return node
  }

  // static formats() {
  //   return true
  // }

  optimize(context: any) {
    super.optimize(context)
    if (this.domNode.tagName !== this.statics.tagName) {
      this.replaceWith(this.statics.blotName)
    }
  }
}

// blotName使用时的名称
Process.blotName = 'process'
Process.tagName = 'span'

// Quill.register('formats/process', Process, true)
Quill.register(Process)