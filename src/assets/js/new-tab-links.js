const links = document.querySelectorAll('a');
const relAttrs = 'noreferrer noopener';

for (let i = 0; i < links.length; i++) {
  const a = links[i];
  if (a.hostname != location.hostname) {
    a.rel = a.rel.length ? `${a.rel} ${relAttrs}` : relAttrs;
    a.target = '_blank';
  }
}
