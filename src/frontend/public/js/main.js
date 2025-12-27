document.addEventListener("DOMContentLoaded", () => {
    carregarBanners();
    carregarTextoSobre();
});

function carregarBanners() {
    fetch("/api/banners")
        .then(res => res.json())
        .then(banners => {
            const container = document.getElementById("banner-container");
            container.innerHTML = "";

            banners.forEach(banner => {
                const slide = document.createElement("div");
                slide.className = "swiper-slide";
                slide.style.background = `url('${banner.fundo}') no-repeat center/cover`;

                const textoDiv = document.createElement("div");
                textoDiv.className = "texto";

                const img = document.createElement("img");
                img.src = banner.texto;
                img.alt = "Banner";
                img.style.width = "100%";
                img.style.height = "auto";

                textoDiv.appendChild(img);
                slide.appendChild(textoDiv);
                container.appendChild(slide);
            });

            // Inicializa o Swiper depois de adicionar os slides
            new Swiper(".mySwiper", {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        })
        .catch(err => {
            console.error("Erro ao carregar banners:", err);
        });
}

function carregarTextoSobre() {
    fetch("/api/textos")
        .then(res => res.json())
        .then(data => {
            const sobre = document.getElementById("texto-sobre");
            sobre.textContent = data.sobre || "Texto não disponível.";
        })
        .catch(err => {
            console.error("Erro ao carregar texto sobre:", err);
        });
}