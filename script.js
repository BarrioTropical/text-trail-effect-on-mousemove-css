/* adding mousemove to div text class*/
document.addEventListener("mousemove", i => {
    const texts = document.querySelectorAll(".text");

    texts.forEach((text, index) => {
        setTimeout(() => {
            text.style.transform = `translate(${i.clientX}px, ${i.clientY}px)`;
        }, index * 30); // Stagger effect
    });
});