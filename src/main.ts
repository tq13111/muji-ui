import './index.scss';
import './lib/muji.scss';
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import 'github-markdown-css';
import Demo from './components/Demo.vue';

const app = createApp(App);

app.use(router);
app.mount('#app');
app.component('Demo', Demo);
