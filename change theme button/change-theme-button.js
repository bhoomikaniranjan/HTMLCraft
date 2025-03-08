import { Pane } from 'https://cdn.skypack.dev/tweakpane@4.0.4';

const config = {
  theme: 'dark' };


const ctrl = new Pane({
  title: 'Config',
  expanded: true });


const update = () => {
  document.documentElement.dataset.theme = config.theme;
};

const sync = event => {
  update();
};

const toggle = document.querySelector('.toggle');

ctrl.
addBinding(config, 'theme', {
  label: 'Theme',
  options: {
    System: 'system',
    Light: 'light',
    Dark: 'dark' } }).on('change', () => {
  toggle.setAttribute('aria-pressed', config.theme === 'light');
});

ctrl.on('change', sync);
update();

const handleToggle = () => {
  const light = !!toggle.matches('[aria-pressed="false"]');
  toggle.setAttribute('aria-pressed', light);
  config.theme = light ? 'light' : 'dark';
  ctrl.refresh();
};
toggle.addEventListener('click', handleToggle);