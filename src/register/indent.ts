import Quill from 'quill'
const Parchment = Quill.import('parchment')
class IndentStyleAttributor extends Parchment.Attributor.Style {
  constructor(attrName: string, keyName: string, options: any) {
    super(attrName, keyName, options)
  }

  value(node: HTMLElement) {
    // return parseInt(super.value(node)) || undefined
    const value = super.value(node)
    if (!value) return 0
    const valueFormat = parseInt(value) / 3
    return valueFormat
  }

  add(node: HTMLElement, value: string | number) {
    if (value === '+1' || value === '-1') {
      const indent = this.value(node) || 0
      value = value === '+1' ? indent + 1 : indent - 1
    }
    if (value === 0) {
      node.removeAttribute('style')
      return true
    } else {
      return super.add(node, Number(value) * 3 + 'em')
    }
  }

  canAdd(node: HTMLElement, value: string) {
    return super.canAdd(node, value) || super.canAdd(node, parseInt(value))
  }
}
const IndentStyle = new IndentStyleAttributor('indent', 'padding-left', {
  scope: Parchment.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8].map((item) => item * 3 + 'em'),
})

Quill.register('formats/indent', IndentStyle, true)
