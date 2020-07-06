// Varabls
/* navbar */
const navbar = document.querySelector(".navbar"),
    // Button Toggle Nav
    btn_nav = document.querySelector(".navbar button.navbar-toggler"),
    // Select button Intro Vid
    btn_vid_intro = document.querySelector("header #vid-h"),
    // Select Paragraph in Cards
    paragraphs_shows = [...document.querySelectorAll("#shows .card-text")],
    // Select Chat boxes
    btn_chat_1 = document.querySelector(".chat-two .ch-btn"),
    box_chat = document.querySelector(".chat-two .box-ch"),
    a_contacts = document.querySelectorAll(".co");

// Height PARAGRAPGHS SHOW
let hei_parag = paragraphs_shows.map(h => {
        return h.offsetHeight;
    }),
    // Max Height
    max_height_paragraphs = Math.max(...hei_parag);

// Events
/* window scrooll */
window.addEventListener("scroll", () => {
    // make navebar background
    makeBackground();
});
/* Window Load */
window.addEventListener("load", () => {
    // Open Fun Equals
    equalsPara();
    // Header
    gsap.from("#header .paragraph-header", {
        x: 100,
        opacity: 0,
        ease: "bounce"
    });
    gsap.from(".content-links", { y: 100, opacity: 0, ease: "bounce", delay: .5 });
});
/*  Click Toggle Nav To close */
btn_nav.addEventListener("click", () => {
    let pr_btn = document.querySelector(".navbar .navbar-toggler .navbar-toggler-icon"),
        pr_btn_cl = pr_btn.classList[1];
    // Check Open Or Not (NAV)
    if (!btn_nav.classList.contains("collapsed")) {
        // IF pr-class Found Remove 
        if (pr_btn_cl) {
            pr_btn.classList.remove("fa-bars");
            pr_btn.classList.add("fa-times");
        }
    } else {
        // IF pr-class Found Remove 

        pr_btn.classList.add("fa-bars");
        pr_btn.classList.remove("fa-times");


    }
});
/* Show Intro Vid When Click */

btn_vid_intro.addEventListener('click', (e_1) => {
    e_1.preventDefault();
    // Create Elmeents To Vid and apend it to html page
    let vid_ofl = document.createElement("div"),
        of_content_vid = document.createElement("div"),
        icon_close = document.createElement("i");
    // Add class name
    vid_ofl.className = "vid-overflow";
    of_content_vid.className = "content";
    icon_close.className = "fas fa-times clse-vid";
    // Add source and Appending
    of_content_vid.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/SLfsV94WjYs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    of_content_vid.prepend(icon_close);
    vid_ofl.append(of_content_vid);
    document.body.prepend(vid_ofl);
    // Close Vid After Open Intro
    document.addEventListener("click", (e_2) => {
        // Select if this btn or not
        if (e_2.target.classList.contains("clse-vid")) {
            // reomove All overflow
            vid_ofl.remove();
        }
        // if clicked in an point also make that
        if (e_2.target.classList.contains("vid-overflow")) {
            // reomove All overflow
            vid_ofl.remove();
        }
    });

});




/* Chat Boxes */
btn_chat_1.addEventListener("click", (e_2) => {
    let i_ch = document.querySelector(".ch-btn i"),
        anm = gsap.fromTo([".h-ch", ".p-h-ch"], {
            opacity: 0,
            y: -20,
            ease: "bounce"
        }, {
            opacity: 1,
            y: 0,
            delay: 0.5,
            paused: true
        }),
        anm_2 = gsap.from([".h-bx", ".strt-ch"], {
            opacity: 0,
            x: -20,
            ease: "bounce"

        }, {
            opacity: 1,
            x: 0,
            delay: 0.5,
            paused: true
        }),
        anm_3 =
        gsap.from(".my-name", {
            scale: 0,
            ease: "bounce",

            onComplete: function() {
                document.querySelector(".my-name").style.transform = "none"
            }
        }, {
            scale: 1,
            delay: 0.5,
            paused: true
        });
    // check if the chat is open
    if (!box_chat.classList.contains("opn")) {
        box_chat.classList.add("opn");
        i_ch.classList.remove("fa-comment-alt");
        i_ch.classList.add("fa-arrow-down");
        anm.play();
        anm_2.play();
        anm_3.play();
    } else {
        anm.play();
        anm_2.play();
        anm_3.play();
        box_chat.classList.remove("opn");
        i_ch.classList.remove("fa-arrow-down");
        i_ch.classList.add("fa-comment-alt");
    }
});
/* When Click A Chat us */
a_contacts.forEach((a_1) => {
    a_1.addEventListener("click", (e_3) => {
        e_3.preventDefault();
        btn_chat_1.click();
    });
});

/* Functions */
function makeBackground(t) {

    // make navebar background
    if (document.documentElement.scrollTop > 0) {
        // background
        navbar.style.backgroundColor = "#6b7a8f";
        // boxShadow
        navbar.style.boxShadow = "0 1px 3px #6b7a8f";
    } else {
        // background
        navbar.style.backgroundColor = null;
        // boxShadow
        navbar.style.boxShadow = null;

    }

}
// Make equals height for para
function equalsPara() {
    paragraphs_shows.forEach(h => {
        if (h.offsetHeight < max_height_paragraphs) {
            h.style.height = max_height_paragraphs + "px";
        }
    });
}
// Plugins
// Swipe 1
let swiper_one = new Swiper('.s1', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.s1 .swiper-pagination',
        clickable: true,
    }
});
// Sipe 2
let swiper_two = new Swiper('.s2', {
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.s2 .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.s2 .swiper-button-next',
        prevEl: '.s2 .swiper-button-prev',
    },
    // Responsive breakpoints   
    breakpoints: {


        // when window width is <= 480px     
        480: {
            slidesPerView: 1,
            spaceBetween: 40
        },


        // when window width is <= 640px     
        992: {
            slidesPerView: 3,
            spaceBetween: 45
        }

    }
});

/* Animation */

/* Animation */