import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/SwitchDemo.vue';
import Button from './components/ButtonDemo.vue';
import Dialog from './components/DialogDemo.vue';
import Tabs from './components/TabsDemo.vue';
import DocDefault from './components/DocDefault.vue';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';

const md = filename => h(Markdown, {path: `../markdown/${filename}.md`, key: filename});
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDefault},
        {path: 'intro', component: md('intro')},
        {path: 'get-started', component: md('get-started')},
        {path: 'install', component: md('install')},
        {path: 'switch', component: Switch},
        {path: 'button', component: Button},
        {path: 'dialog', component: Dialog},
        {path: 'tabs', component: Tabs},
      ]
    },

  ],
});

export default router;

