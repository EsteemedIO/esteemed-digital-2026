// Progressive enhancement: registration remains usable if this script fails.
for (const id of ['password', 'password-confirm']) {
  const input = document.getElementById(id);
  if (!input || input.type !== 'password') continue;
  const wrapper = document.createElement('div');
  wrapper.className = 'password-control';
  input.before(wrapper);
  wrapper.append(input);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'password-visibility';
  button.setAttribute('aria-controls', id);
  button.setAttribute('aria-pressed', 'false');
  const label = id === 'password-confirm' ? 'confirm password' : 'password';
  button.textContent = 'Show';
  button.setAttribute('aria-label', 'Show ' + label);
  button.addEventListener('click', () => {
    const visible = input.type === 'password';
    input.type = visible ? 'text' : 'password';
    button.textContent = visible ? 'Hide' : 'Show';
    button.setAttribute('aria-label', (visible ? 'Hide ' : 'Show ') + label);
    button.setAttribute('aria-pressed', String(visible));
  });
  wrapper.append(button);
}
