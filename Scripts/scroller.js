document.addEventListener("DOMContentLoaded", function() {
    console.log("working")
    const scrollers = document.querySelectorAll(".scroller");
    
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    } else {
        removeAnimation();
    }
    
    function addAnimation() {
        scrollers.forEach(scroller => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector('.inner_scroller');
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            })
        });
    }

    function removeAnimation() {
        scrollers.forEach(scroller => {
            scroller.setAttribute("data-animated", false);
        });
    }
});