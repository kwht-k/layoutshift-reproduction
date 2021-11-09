let isShow = false;

document.getElementById('toggle').addEventListener('click', () => {
  const container = document.getElementById('container');
  if (!isShow) {
    // Append 'Component-A'
    const component = document.createElement('div');
    component.setAttribute('style', 'width: 500px; height: 150px; background-color: orange');
    component.setAttribute('id', 'component-a');
    component.textContent = 'Component-A';
    container.appendChild(component);
  } else {
    // Remove 'Component-A'
    const component = document.getElementById('component-a');
    container.removeChild(component);
  }
  isShow = !isShow;
});
