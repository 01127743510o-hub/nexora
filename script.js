
document.addEventListener("DOMContentLoaded", function () {

    // CURRENT LANGUAGE

    let currentLanguage =
        localStorage.getItem("nexora-language") || "en";

    if (!["en", "ar"].includes(currentLanguage)) {
        currentLanguage = "en";
    }


    // TRANSLATIONS

    const translations = {

        en: {

            title: "WELCOME TO NEXORA",
            tagline: "BUILD • INNOVATE • TRANSFORM",
            description: "We build modern digital experiences",

            about: "About NEXORA",

            aboutText: `NEXORA is a digital solutions studio focused on building
modern websites, intelligent AI solutions, and creative
digital experiences.

We combine technology, creativity, and innovation to help
businesses grow, improve their online presence, and turn
ideas into reality.

Our mission is to deliver modern, reliable, and user-friendly
digital solutions that make a real difference.`,

            services: "Our Services",
            web: "Web Development",
            ai: "AI Solutions",
            design: "UI/UX Design",

            prices: "Request a Quote",

            quoteDescription1:
                "Every project is unique. Our pricing depends on your requirements, project complexity, and desired features.",

            quoteDescription2:
                "Contact us and tell us about your project. We'll discuss your needs and provide a custom quote.",

            quoteButton: "Request Your Quote",

            contact: "Contact Us",
            personal: "Personal Information",
            project: "Project Information",

            name: "Name:",
            email: "Email:",
            phone: "Phone Number:",
            choose: "Choose a Service:",
            select: "Select a Service",
            interested: "Services Interested In:",
            preferred: "Preferred Contact Method:",
            message: "Message:",
            messagePlaceholder: "Write your message",

            send: "Send Message",

            footer: "© 2026 NEXORA. All rights reserved.",

            emailContact: "Email",
            whatsappContact: "WhatsApp",

            whatsappMessageTitle: "NEXORA - New Project Request",
            whatsappName: "Name",
            whatsappEmail: "Email",
            whatsappPhone: "Phone Number",
            whatsappService: "Requested Service",
            whatsappOtherServices: "Other Services",
            whatsappContactMethod: "Preferred Contact Method",
            whatsappMessage: "Project Details",

            notSpecified: "Not specified",
            noServices: "None",

            darkMode: "🌙 Dark Mode",
            lightMode: "☀️ Light Mode"

        },


        ar: {

            title: "مرحباً بك في NEXORA",
            tagline: "نبني • نبتكر • نطور",
            description: "نصنع تجارب رقمية حديثة",

            about: "عن NEXORA",

            aboutText: `NEXORA هي شركة متخصصة في الحلول الرقمية، وتركز على
إنشاء مواقع ويب حديثة، وحلول ذكية تعتمد على الذكاء الاصطناعي،
وتجارب رقمية إبداعية.

نجمع بين التكنولوجيا والإبداع والابتكار لمساعدة الشركات
على النمو، وتحسين وجودها على الإنترنت، وتحويل الأفكار
إلى واقع ملموس.

مهمتنا هي تقديم حلول رقمية حديثة وموثوقة وسهلة الاستخدام،
تُحدث فرقًا حقيقيًا.`,

            services: "خدماتنا",
            web: "تطوير المواقع",
            ai: "حلول الذكاء الاصطناعي",
            design: "تصميم واجهة المستخدم وتجربة المستخدم ",

            prices: "اطلب عرض سعر",

            quoteDescription1:
                "كل مشروع له متطلباته الخاصة. يتم تحديد السعر حسب احتياجاتك وتعقيد المشروع والخصائص المطلوبة.",

            quoteDescription2:
                "تواصل معنا وأخبرنا عن مشروعك. سنناقش احتياجاتك ونقدم لك عرض سعر مناسباً.",

            quoteButton: "اطلب عرض سعرك",

            contact: "تواصل معنا",
            personal: "المعلومات الشخصية",
            project: "معلومات المشروع",

            name: "الاسم:",
            email: "البريد الإلكتروني:",
            phone: "رقم الهاتف:",
            choose: "اختر خدمة:",
            select: "اختر خدمة",
            interested: "الخدمات التي تهتم بها:",
            preferred: "طريقة التواصل المفضلة:",
            message: "رسالتك:",
            messagePlaceholder: "اكتب رسالتك هنا",

            send: "إرسال الرسالة",

            footer: "© 2026 NEXORA. جميع الحقوق محفوظة.",

            emailContact: "البريد الإلكتروني",
            whatsappContact: "واتساب",

            whatsappMessageTitle: "NEXORA - طلب مشروع جديد",
            whatsappName: "الاسم",
            whatsappEmail: "البريد الإلكتروني",
            whatsappPhone: "رقم الهاتف",
            whatsappService: "الخدمة المطلوبة",
            whatsappOtherServices: "الخدمات الأخرى",
            whatsappContactMethod: "طريقة التواصل المفضلة",
            whatsappMessage: "تفاصيل المشروع",

            notSpecified: "غير محدد",
            noServices: "لا يوجد",

            darkMode: "🌙 الوضع الليلي",
            lightMode: "☀️ الوضع النهاري"

        }

    };


    // HELPER FUNCTION

    function setText(selector, value) {

        const element = document.querySelector(selector);

        if (element) {
            element.textContent = value;
        }

    }


    // WHATSAPP NUMBER

    const whatsappNumber = "201029659500";


    // CONTACT FORM

    const contactForm = document.querySelector("#contact form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            const t = translations[currentLanguage];

            // GET FORM DATA

            const username =
                contactForm.querySelector('[name="username"]').value.trim();

            const email =
                contactForm.querySelector('[name="email"]').value.trim();

            const phone =
                contactForm.querySelector('[name="phone"]').value.trim();

            const service =
                contactForm.querySelector('[name="service"]').value;

            const selectedServices = [
                ...contactForm.querySelectorAll(
                    '[name="services"]:checked'
                )
            ].map(function (item) {
                return item.value;
            });

            const contactMethod =
                contactForm.querySelector(
                    '[name="contact"]:checked'
                )?.value || "";

            const message =
                contactForm.querySelector('[name="message"]').value.trim();


            // SERVICE TRANSLATIONS

            const serviceNames = {

                web: t.web,
                ai: t.ai,
                design: t.design

            };


            const selectedServiceName =
                serviceNames[service] || t.notSpecified;

            const otherServices = selectedServices.length
                ? selectedServices.map(function (item) {
                    return serviceNames[item];
                }).join(", ")
                : t.noServices;


            const contactMethodName =
                contactMethod === "whatsapp"
                    ? t.whatsappContact
                    : contactMethod === "email"
                        ? t.emailContact
                        : t.notSpecified;


            // CREATE WHATSAPP MESSAGE

            const whatsappMessage =

                `${t.whatsappMessageTitle}

${t.whatsappName}: ${username}

${t.whatsappEmail}: ${email}

${t.whatsappPhone}: ${phone || t.notSpecified}

${t.whatsappService}: ${selectedServiceName}

${t.whatsappOtherServices}: ${otherServices}

${t.whatsappContactMethod}: ${contactMethodName}

${t.whatsappMessage}:
${message}`;


            // CREATE WHATSAPP URL

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);


            // OPEN WHATSAPP

            const whatsappWindow = window.open(
                whatsappURL,
                "_blank"
            );

            // FALLBACK IF POPUP IS BLOCKED

            if (!whatsappWindow) {
                window.location.href = whatsappURL;
            }

        });

    }


    // NAVIGATION

    const navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log(
                "Navigation:",
                link.textContent.trim()
            );

        });

    });


    console.log("Welcome to NEXORA!");
    console.log("Website is ready!");


    // DARK MODE AND LIGHT MODE

    const themeButton = document.querySelector("#theme-toggle");

    const savedTheme = localStorage.getItem("nexora-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }


    function updateThemeButton() {

        if (!themeButton) return;

        const t = translations[currentLanguage];

        themeButton.textContent =
            document.body.classList.contains("light-mode")
                ? t.darkMode
                : t.lightMode;

    }


    if (themeButton) {

        updateThemeButton();

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("light-mode");

            const currentTheme =
                document.body.classList.contains("light-mode")
                    ? "light"
                    : "dark";

            localStorage.setItem("nexora-theme", currentTheme);

            updateThemeButton();

        });

    }


    // LANGUAGE TOGGLE

    const languageButton = document.querySelector("#language-toggle");


    function changeLanguage() {

        const t = translations[currentLanguage];


        // PAGE LANGUAGE

        document.documentElement.lang = currentLanguage;

        document.documentElement.dir =
            currentLanguage === "ar" ? "rtl" : "ltr";


        // HEADER

        setText("header h1", t.title);
        setText("header p:nth-of-type(1)", t.tagline);
        setText("header p:nth-of-type(2)", t.description);


        // NAVIGATION

        setText('a[href="#about"]', t.about);
        setText('a[href="#services"]', t.services);
        setText('a[href="#prices"]', t.prices);
        setText('a[href="#contact"]', t.contact);


        // ABOUT SECTION

        const aboutSection = document.getElementById("about");

        if (aboutSection) {

            const aboutTitle = aboutSection.querySelector("h2");
            const aboutParagraph = aboutSection.querySelector("p");

            if (aboutTitle) {
                aboutTitle.textContent = t.about;
            }

            if (aboutParagraph) {
                aboutParagraph.textContent = t.aboutText;
            }

        }


        // SERVICES

        setText("#services h2", t.services);

        const serviceItems =
            document.querySelectorAll("#services li");

        if (serviceItems.length >= 3) {

            serviceItems[0].textContent = t.web;
            serviceItems[1].textContent = t.ai;
            serviceItems[2].textContent = t.design;

        }


        // REQUEST A QUOTE

        setText("#prices h2", t.prices);

        const quoteParagraphs =
            document.querySelectorAll("#prices p");

        if (quoteParagraphs.length >= 2) {

            quoteParagraphs[0].textContent = t.quoteDescription1;
            quoteParagraphs[1].textContent = t.quoteDescription2;

        }

        setText("#prices .quote-button", t.quoteButton);


        // CONTACT

        setText("#contact h2", t.contact);

        const legends =
            document.querySelectorAll("#contact legend");

        if (legends.length >= 2) {

            legends[0].textContent = t.personal;
            legends[1].textContent = t.project;

        }


        // FORM LABELS

        const labels =
            document.querySelectorAll("#contact label");

        const labelTexts = [

            t.name,
            t.email,
            t.phone,
            t.choose,
            t.interested,
            t.web,
            t.ai,
            t.design,
            t.preferred,
            t.emailContact,
            t.whatsappContact,
            t.message

        ];

        labels.forEach(function (label, index) {

            if (labelTexts[index]) {
                label.textContent = labelTexts[index];
            }

        });


        // FORM PLACEHOLDERS

        const usernameInput =
            document.querySelector('input[name="username"]');

        if (usernameInput) {

            usernameInput.placeholder =
                currentLanguage === "ar"
                    ? "اكتب اسمك"
                    : "Enter your name";

        }


        const emailInput =
            document.querySelector('input[name="email"]');

        if (emailInput) {

            emailInput.placeholder =
                currentLanguage === "ar"
                    ? "اكتب بريدك الإلكتروني"
                    : "Enter your email";

        }


        const phoneInput =
            document.querySelector('input[name="phone"]');

        if (phoneInput) {

            phoneInput.placeholder =
                currentLanguage === "ar"
                    ? "اكتب رقم هاتفك"
                    : "Enter your phone number";

        }


        const messageTextarea =
            document.querySelector("#contact textarea");

        if (messageTextarea) {
            messageTextarea.placeholder = t.messagePlaceholder;
        }


        // SELECT

        setText("#contact select option", t.select);


        // SUBMIT BUTTON

        setText("#contact button[type='submit']", t.send);


        // FOOTER

        setText("footer p", t.footer);


        // THEME BUTTON

        updateThemeButton();


        // LANGUAGE BUTTON

        if (languageButton) {

            languageButton.textContent =
                currentLanguage === "ar"
                    ? "English"
                    : "العربية";

        }


        // SAVE LANGUAGE

        localStorage.setItem(
            "nexora-language",
            currentLanguage
        );

    }


    // INITIAL LANGUAGE

    changeLanguage();


    if (languageButton) {

        languageButton.addEventListener("click", function () {

            currentLanguage =
                currentLanguage === "en"
                    ? "ar"
                    : "en";

            changeLanguage();

        });

    }

});
