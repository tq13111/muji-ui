type  DialogOptions = {
  closeOnClickOverlay: boolean,
  ok: () => boolean,
  cancel: () => boolean,
  title: string | HTMLDivElement,
  content: string,
  visible?: boolean,
}
