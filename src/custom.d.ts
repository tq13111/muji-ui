type  DialogOptions = {
  closeOnClickOverlay?: boolean,
  ok: Function,
  cancel: Function,
  title: string | VNode<RendererNode, RendererElement, { [key: string]: any; }>,
  content: string,
  visible?: boolean,
}
