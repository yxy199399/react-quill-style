import Quill from 'quill'
const Link = Quill.import('formats/link')
// import { lookFile } from '@/utils/lookFile'
class FileBlot extends Link {
  // 继承Link Blot
  static create(value: any) {
    let node = undefined
    if (value && !value.href) {
      // 适应原本的Link Blot
      node = super.create(value)
      if (value.dataHref) {
        // node.href = 'javascript:void(0)';
        node.href = value.dataHref
        node.download = ''
        node.setAttribute('data-href', value.dataHref)
        node.onclick = () => {
          // e.preventDefault();
          const tip = document.querySelector('.ql-tooltip')
          tip?.classList.add('ql-hidden')
          // lookFile(value.dataHref);
        }
      }
    } else {
      // 自定义Link Blot
      node = super.create(value.href)
      node.href = 'javascript:void(0)'
      node.target = ''
      node.setAttribute('data-href', value.href)
      node.onclick = (e: any) => {
        e.preventDefault()
        const tip = document.querySelector('.ql-tooltip')
        tip?.classList.add('ql-hidden')
      }
      node.innerText = value.innerText
    }
    return node
  }

  // 回显处理
  static formats(domNode: HTMLElement) {
    const dataHref = domNode.getAttribute('data-href')
    if (dataHref) {
      return {
        dataHref: dataHref,
      }
    }
    return domNode.getAttribute('href')
  }
}
FileBlot.blotName = 'self-file'
FileBlot.tagName = 'A'
// Quill.register(FileBlot)
Quill.register('formats/selfFile', FileBlot)
