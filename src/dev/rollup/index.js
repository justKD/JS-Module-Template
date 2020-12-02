import { bundle } from './bundle';

const entry = './src/module/index.js';
const output = 'bundle.js';

document.getElementById('log').onclick = () => bundle.log(entry);
document.getElementById('dl').onclick = () => bundle.download(entry, output);
