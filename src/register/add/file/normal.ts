import Quill from 'quill'
const Inline = Quill.import('blots/inline')
interface ValueItem {
  href?: string
  fileId?: string
  innerText?: string
}
class  NormalFile extends Inline {
  static create(value: ValueItem) {
    let node = super.create(value);
    node.setAttribute('class', 'ql-normal-file')
    node.download = value.innerText
    node.setAttribute('data-href', value.href)
    node.setAttribute('data-id', value.fileId)
    node.innerText = value.innerText
    return node;
  }

  static value(node: HTMLElement) {
    return {
      href: node.getAttribute('data-href'),
      fileId: node.getAttribute('data-id'),
      innerText: node.innerHTML,
    }
  }

  // 回显处理,返回值即value,可对value进行监听处理后再返回
  static formats(domNode: HTMLElement) {
    return {
      href: domNode.getAttribute('data-href'),
      fileId: domNode.getAttribute('data-id'),
      innerText: domNode.innerHTML,
    }
  }
}
// import { lookFile } from '@/utils/lookFile'
// class NormalFile extends Link {
//   // 继承Link Blot
//   static create(value: any) {
//     const node = super.create(value.href)
//     node.download = value.innerText
//     node.innerHTML = value.innerText
//     node.setAttribute('class', 'ql-normal-file')
//     node.onclick = (e: any) => {
//       // 此处不需要显示ql-tooltip
//       const tip = document.querySelector('.ql-tooltip')
//       tip?.classList.add('ql-hidden')
//     }
//     return node
//   }

//   static value(node: HTMLElement) {
//     return {
//       href: node.getAttribute('href'),
//       innerText: node.getAttribute('download'),
//     }
//   }

//   // 回显处理,返回值即value,可对value进行监听处理后再返回
//   static formats(domNode: HTMLElement) {
//     return {
//       href: domNode.getAttribute('href'),
//       innerText: domNode.getAttribute('download'),
//     }
//   }

//   optimize(context: any) {
//     super.optimize(context)
//     if (this.domNode.tagName !== this.statics.tagName) {
//       this.replaceWith(this.statics.blotName)
//     }
//   }
// }
NormalFile.blotName = 'normal-file'
NormalFile.tagName = 'INS'
// Quill.register(FileBlot)
Quill.register(NormalFile, true)
