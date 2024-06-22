<script>
    document.addEventListener("DOMContentLoaded", function() {
        const headerTexts = document.querySelectorAll(".header-text");
        const headerImg = document.querySelector(".header-img");

        headerTexts.forEach(function(textElement) {
            textElement.style.opacity = 1;
        });

        headerImg.style.opacity = 1;
    });
</script>
