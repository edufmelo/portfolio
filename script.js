$(document).ready(function () {
    const track = $(".carousel-track");
    const items = $(".carousel-track .slider");
    const totalItems = items.length;
    let currentSlide = 2; // Começa no terceiro item

    function calculateGap() {
        let screenWidth = $(window).width(); // Obtém a largura da tela
        
        // Definir pontos de referência
        let maxWidth = 1920, maxGap = 210; // Em 1920px, o gap deve ser 200px
        let minWidth = 400, minGap = 20; // Em 400px, o gap deve ser 20px
        
        // Se a tela for maior que 1920px, mantém 200px
        if (screenWidth >= maxWidth) return maxGap;
        
        // Se a tela for menor que 430px, mantém 20px
        if (screenWidth <= minWidth) return minGap;
        
        // Calcula o gap proporcionalmente entre 1920px e 430px
        let calculatedGap = minGap + (screenWidth - minWidth) * ((maxGap - minGap) / (maxWidth - minWidth));
        
        return calculatedGap;
    }
    
    function updateGap() {
        let newGap = calculateGap();
        track.css("gap", `${newGap}px`); // Aplica o novo gap dinamicamente
        updateCarousel(); // Recalcula a posição
    }

    function getItemSize() {
        let itemWidth = items.outerWidth(); // Largura do item
        let style = window.getComputedStyle(track[0]); // Pega estilos computados
        let gap = parseInt(style.getPropertyValue("gap")) || 0; // Obtém o gap
        return itemWidth + gap; // Retorna a soma correta
    }

    function updateCarousel() {
        items.removeClass("on");
        items.eq(currentSlide).addClass("on");

        let itemSize = getItemSize(); // Pega dinamicamente largura + gap
        let translateValue = -((currentSlide - 2) * itemSize);
        track.css("transform", `translateX(${translateValue}px)`);
    }

    function nextSlider() {
        currentSlide = (currentSlide + 1) % totalItems;
        updateCarousel();
    }

    function prevSlider() {
        currentSlide = (currentSlide - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    // Atualiza o gap ao carregar a página e ao redimensionar
    updateGap();
    $(window).resize(updateGap);

    const translations = {
        en: {
            home: "home",
            about: "about",
            skills: "skills",
            projects: "projects",
            contact: "contact",
            intro: "Computer engineering student & intern as a developer.",
            welcome: "Welcome,",
            aboutMe: "My name is Eduardo Melo, I’m 20 years old, and I’m currently working as a web development intern. I’m pursuing a degree in Computer engineering, where I gain knowledge in both hardware and software. I am highly focused on my professional growth and always looking for opportunities to improve my skills and expand my expertise in the field of technology.",
            tools: "tools and technologies",
            recentproj: "recent projects",
            contactme: "contact me",
            send: "Send",
            placeholders: {
                name: "your name",
                email: "your email",
                message: "your message"
            },
            resume: "resume",
            backtotop: "back to top"
        },
        pt: {
            home: "início",
            about: "sobre",
            skills: "habilidades",
            projects: "projetos",
            contact: "contato",
            intro: "Estudante de engenharia da computação & estagiário como desenvolvedor.",
            welcome: "Bem-vindo,",
            aboutMe: "Meu nome é Eduardo Melo, tenho 20 anos e atualmente trabalho como estagiário em desenvolvimento web. Estou cursando Engenharia da Computação, onde adquiro conhecimentos tanto em hardware quanto em software. Estou extremamente focado no meu crescimento profissional e estou sempre em busca de oportunidades para aprimorar minhas habilidades e expandir minhas experiências na área de tecnologia.",
            tools: "tecnologias e ferramentas",
            recentproj: "projetos recentes",
            contactme: "entre em contato",
            send: "Enviar", 
            placeholders: {
                name: "seu nome",
                email: "seu email",
                message: "sua mensagem"
            },
            resume: "resumo",
            backtotop: "voltar para o topo"
        }
    };
    
    function changeLanguage(lang) {
        let backToTopHidden = $(".backToTop").css("display") === "none";

        $("[data-key]").fadeOut(200, function () { // Esconde com animação
            $(this).text(translations[lang][$(this).data("key")]);
            if (backToTopHidden) {
                $(".backToTop").hide();
            } // Muda o texto
        }).fadeIn(200); // Mostra novamente com efeito
    
        // Atualiza os placeholders diretamente
        $("input, textarea").each(function () {
            let key = $(this).data("key");
            if (key && translations[lang].placeholders[key]) {
                $(this).attr("placeholder", translations[lang].placeholders[key]);
            }
        });
    }
    
    
    $(".english").click(function() {
        changeLanguage("en");
    });

    $(".portuguese").click(function() {
        changeLanguage("pt");
    });
    
    $("#prev").click(prevSlider);
    $("#next").click(nextSlider);

    updateCarousel();

    const menu = document.getElementById("menu");
    const closeButton = document.getElementById("close-mobile");
    const nav = document.getElementById("nav-mobile");
    const navLink = document.querySelectorAll(".nav-link");

    menu.addEventListener("click", () => {
    nav.classList.add("show");
    });

    closeButton.addEventListener("click", () => {
    nav.classList.remove("show");
    });

    navLink.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("show");
    });
    });
});
