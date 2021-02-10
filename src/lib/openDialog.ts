import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

export const openDialog = (options) => {
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
        Dialog,
        {
          visible: true,
          closeOnClickOverlay,
          ok,
          cancel,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {close();}
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
