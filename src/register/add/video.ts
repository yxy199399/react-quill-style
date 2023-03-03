import Quill from 'quill'
const Video = Quill.import('formats/video')
class selfVideo extends Video {
  static create(value: string) {
    const node = super.create(value)
    node.setAttribute('style', 'max-width: 100%')
    return node
  }
}

selfVideo.blotName = 'self-video'

Quill.register('formats/selfVideo', selfVideo)

