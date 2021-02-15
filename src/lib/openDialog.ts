
import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

export const openDialog = (options: DialogOptions) => {
  const {closeOnClickOverlay, ok, cancel, title, content} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        // @ts-ignore
        Dialog,
        {
          visible: true,
          closeOnClickOverlay,
          ok,
          cancel,
          'onUpdate:visible': (newVisible: boolean) => {
            if (!newVisible) {close();}
          }
        },
        {
          title,
          content
        }
      );
    }
  });
  app.mount(div);
};
