import Quill from 'quill'
const Inline = Quill.import('blots/inline')
class  NormalFile extends Inline {
  static create(value: any) {
    let node = super.create(value);
    node.setAttribute('href', value.href);
    node.setAttribute('class', 'ql-normal-file')
    node.setAttribute('rel', 'noopener noreferrer');
    node.setAttribute('target', '_blank');
    node.innerHTML = value.innerText
    return node;
  }

  static value(node: HTMLElement) {
    return {
      href: node.getAttribute('href'),
      innerText: node.getAttribute('download'),
    }
  }

    // 回显处理,返回值即value,可对value进行监听处理后再返回
    // 当在这里使用formats时，自定义剪切板（clipboard）matchers中的方法不会被执行
    static formats(domNode: HTMLElement) {
      return {
        href: domNode.getAttribute('href'),
        innerText: domNode.getAttribute('download'),
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
NormalFile.tagName = 'A'
// Quill.register(FileBlot)
Quill.register(NormalFile, true)
