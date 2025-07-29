
    const icons = ['📘', '🧪', '📐', '🧠', '📖', '🔬', '🧬', '📊', '🎓', '📝'];
    const bgContainer = document.getElementById('bgContainer');
    for (let i = 0; i < 30; i++) {
      const icon = document.createElement('div');
      icon.className = 'icon';
      icon.innerText = icons[Math.floor(Math.random() * icons.length)];
      icon.style.top = Math.random() * 100 + '%';
      icon.style.left = Math.random() * 100 + '%';
      icon.style.animationDuration = (10 + Math.random() * 20) + 's';
      icon.style.fontSize = (2 + Math.random() * 3) + 'rem';
      bgContainer.appendChild(icon);
    }

    function renderCourses() {
      const allCourses = JSON.parse(localStorage.getItem("courses") || "[]");
      const grade1Courses = allCourses.filter(c => c.grade === "grade1");

      const lessonsContainer = document.getElementById("lessonsContainer");
      const monthsContainer = document.getElementById("monthsContainer");
      const yearsContainer = document.getElementById("yearsContainer");

      lessonsContainer.innerHTML = "";
      monthsContainer.innerHTML = "";
      yearsContainer.innerHTML = "";

      grade1Courses.forEach(course => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${course.image}" alt="${course.title}">
          <div class="card-content">
            <h3>${course.title}</h3>
            <p>${course.desc}</p>
            <button>شراء بـ ${course.price} ج.م</button>
          </div>
        `;
        if (course.type === "lesson") {
          lessonsContainer.appendChild(card);
        } else if (course.type === "month") {
          monthsContainer.appendChild(card);
        } else if (course.type === "year") {
          yearsContainer.appendChild(card);
        }
      });
    }

    window.onload = renderCourses;
  