
    const icons = ['📘', '🧪', '📐', '🧠', '📖', '🔬', '🧬', '📊', '🎓', '📝'];
    const bgContainer = document.getElementById('bgContainer');
    for (let i = 0; i < 20; i++) {
      const icon = document.createElement('div');
      icon.className = 'icon';
      icon.innerText = icons[Math.floor(Math.random() * icons.length)];
      icon.style.top = Math.random() * 100 + '%';
      icon.style.left = Math.random() * 100 + '%';
      icon.style.animationDuration = (10 + Math.random() * 20) + 's';
      icon.style.fontSize = (2 + Math.random() * 3) + 'rem';
      bgContainer.appendChild(icon);
    }
 



