// دالة لإظهار القسم المطلوب وإخفاء الباقي
function showSection(id) {
    const sections = document.querySelectorAll('.section-content');

    // إخفاء كل الأقسام وإزالة الأنيميشن
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('fade-in');
    });

    // عرض القسم المطلوب وتطبيق الأنيميشن
    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.style.display = 'block';
        setTimeout(() => {
            activeSection.classList.add('fade-in');
        }, 10);

        // حفظ القسم الحالي في localStorage
        localStorage.setItem('currentSection', id);
    }
}

// عند تحميل الصفحة، يتم عرض آخر قسم تم زيارته أو القسم "home" افتراضياً
window.onload = () => {
    const lastSection = localStorage.getItem('currentSection') || 'home';
    showSection(lastSection);
};
