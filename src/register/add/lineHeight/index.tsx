import Quill from 'quill'
const Parchment = Quill.import('parchment')
const lineHeight = new Parchment.Attributor.Style('self-lineHeight', 'line-height', {
  scope: Parchment.Scope.BLOCK,
  whitelist: [
    false,
    '1',
    '1.1',
    '1.2',
    '1.3',
    '1.5',
    '1.6',
    '1.7',
    '1.8',
    '1.9',
    '2',
    '2.1',
    '2.2',
    '2.3',
    '2.4',
    '2.5',
    '2.6',
    '2.7',
    '2.8',
    '2.9',
    '3',
  ],
})
Quill.register('formats/lineHeight', lineHeight, true)