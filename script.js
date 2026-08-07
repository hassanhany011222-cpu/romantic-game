```javascript
/* =====================================================
   ROMANTIC LOVE GAME
   الإصدار النهائي - الجزء الرابع
===================================================== */


/* =====================================================
   إعدادات قابلة للتعديل
===================================================== */

const herName = "حبيبتي";

const totalQuestions = 5;

const confessionDate = "08 • 08 • 2026";



/* =====================================================
   عناصر الصفحة
===================================================== */

const welcomePage =
    document.getElementById("welcome-page");

const quizPage =
    document.getElementById("quiz-page");

const confessionPage =
    document.getElementById("confession-page");

const startButton =
    document.getElementById("start-btn");

const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question-text");

const answersContainer =
    document.getElementById("answers-container");

const loveButton =
    document.getElementById("love-btn");

const finalMessage =
    document.getElementById("final-message");

const loveSong =
    document.getElementById("love-song");

const timerElement =
    document.getElementById("timer");

const floatingHearts =
    document.getElementById("floating-hearts");



/* =====================================================
   الأسئلة
===================================================== */

const questions = [

    {
        question:
            "إيه أكتر حاجة بتحبيها في علاقتنا؟ ❤️",

        answers: [
            "كلامنا سوا ❤️",
            "اهتمامنا ببعض 🥹",
            "الذكريات اللي بينا ✨",
            "كل حاجة فينا ❤️"
        ]
    },


    {
        question:
            "لو تقدري ترجعي تعيشي لحظة واحدة بينا تاني، تختاري إيه؟",

        answers: [
            "أول مرة اتكلمنا ❤️",
            "أول موقف مميز بينا 🥹",
            "يوم مش هننساه ✨",
            "اليوم ده ❤️"
        ]
    },


    {
        question:
            "لما ييجي اسمي قدامك فجأة، أول حاجة بتحسي بيها إيه؟",

        answers: [
            "ببتسم ❤️",
            "بفرح 🥹",
            "بفتكرك 💭",
            "كل دول ❤️"
        ]
    },


    {
        question:
            "تتمني إيه لحكايتنا في الأيام الجاية؟",

        answers: [
            "نفضل قريبين ❤️",
            "نعيش حاجات أجمل ✨",
            "نحقق أحلامنا سوا 🥹",
            "كل اللي فوق ❤️"
        ]
    },


    {
        question:
            "آخر سؤال... مستعدة تعرفي ليه عملتلك اللعبة دي؟ 👀❤️",

        answers: [
            "أيوه ❤️",
            "قولي بقى 🥹",
            "متحمسة جدًا ✨",
            "افتح المفاجأة ❤️"
        ]
    }

];



/* =====================================================
   المتغيرات
===================================================== */

let currentQuestion = 0;

let timerStarted = false;

let timerSeconds = 15 * 60;

let loveClicked = false;

let answerLocked = false;



/* =====================================================
   الانتقال بين الصفحات
===================================================== */

function showPage(pageToShow) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(page => {

        page.classList.remove("active");

    });


    setTimeout(() => {

        pageToShow.classList.add("active");

    }, 100);

}



/* =====================================================
   بدء اللعبة
===================================================== */

startButton.addEventListener(
    "click",
    () => {

        currentQuestion = 0;

        answerLocked = false;

        showPage(quizPage);

        displayQuestion();

    }
);



/* =====================================================
   عرض السؤال
===================================================== */

function displayQuestion() {

    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        currentQuestion + 1;


    questionText.textContent =
        current.question;


    answersContainer.innerHTML = "";


    /* -----------------------------------------
       تأثير ظهور السؤال
    ----------------------------------------- */

    questionText.style.opacity = "0";

    questionText.style.transform =
        "translateY(15px)";


    setTimeout(() => {

        questionText.style.opacity = "1";

        questionText.style.transform =
            "translateY(0)";

    }, 100);



    /* -----------------------------------------
       إنشاء الإجابات
    ----------------------------------------- */

    current.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer-btn";


            button.textContent =
                answer;


            button.style.opacity = "0";

            button.style.transform =
                "translateY(15px)";


            setTimeout(() => {

                button.style.opacity = "1";

                button.style.transform =
                    "translateY(0)";

            }, 150 + index * 100);


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(button);

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}



/* =====================================================
   اختيار الإجابة
===================================================== */

function selectAnswer(button) {

    if (answerLocked)
        return;


    answerLocked = true;


    /* -----------------------------------------
       تأثير الضغط
    ----------------------------------------- */

    button.style.transform =
        "scale(0.96)";


    button.style.background =
        "rgba(255,255,255,0.18)";


    button.style.borderColor =
        "rgba(255,255,255,0.4)";


    setTimeout(() => {

        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            answerLocked = false;

            displayQuestion();

        }

        else {

            finishQuiz();

        }

    }, 450);

}



/* =====================================================
   انتهاء الأسئلة
===================================================== */

function finishQuiz() {

    showPage(confessionPage);

    startLoveTimer();

    revealConfession();

}



/* =====================================================
   ظهور الاعتراف تدريجيًا
===================================================== */

function revealConfession() {

    const confessionCard =
        document.querySelector(
            ".confession-card"
        );


    confessionCard.style.opacity = "0";

    confessionCard.style.transform =
        "translateY(25px)";


    setTimeout(() => {

        confessionCard.style.transition =
            "all 1.2s ease";


        confessionCard.style.opacity = "1";

        confessionCard.style.transform =
            "translateY(0)";

    }, 300);

}



/* =====================================================
   عداد 15 دقيقة
===================================================== */

function startLoveTimer() {

    if (timerStarted)
        return;


    timerStarted = true;


    timerSeconds = 15 * 60;


    const countdown =
        setInterval(() => {

            let minutes =
                Math.floor(
                    timerSeconds / 60
                );


            let seconds =
                timerSeconds % 60;


            minutes =
                String(minutes)
                    .padStart(2, "0");


            seconds =
                String(seconds)
                    .padStart(2, "0");


            timerElement.textContent =
                `${minutes}:${seconds}`;


            timerSeconds--;


            if (timerSeconds < 0) {

                clearInterval(countdown);

                timerElement.textContent =
                    "00:00";

            }

        }, 1000);

}



/* =====================================================
   القلوب المتطايرة
===================================================== */

const heartSymbols = [

    "❤️",
    "🤍",
    "💜",
    "💙",
    "💕",
    "💗",
    "💖",
    "✨"

];



function createFloatingHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 18 + 14;


    heart.style.fontSize =
        size + "px";


    const duration =
        Math.random() * 7 + 6;


    heart.style.animationDuration =
        duration + "s";


    floatingHearts.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}



setInterval(
    createFloatingHeart,
    550
);



/* =====================================================
   تشغيل الأغنية بعد الضغط فقط
===================================================== */

loveButton.addEventListener(
    "click",
    startFinalConfession
);



function startFinalConfession() {

    if (loveClicked)
        return;


    loveClicked = true;


    /* -----------------------------------------
       تشغيل الأغنية
       لا يوجد تشغيل تلقائي
    ----------------------------------------- */

    loveSong.currentTime = 0;


    const playPromise =
        loveSong.play();


    if (playPromise !== undefined) {

        playPromise.catch(
            error => {

                console.log(
                    "تعذر تشغيل الأغنية:",
                    error
                );

            }
        );

    }



    /* -----------------------------------------
       إخفاء الزر
    ----------------------------------------- */

    loveButton.style.transform =
        "scale(0)";


    loveButton.style.opacity =
        "0";


    setTimeout(() => {

        loveButton.style.display =
            "none";

    }, 300);



    /* -----------------------------------------
       وميض الشاشة
    ----------------------------------------- */

    createScreenFlash();



    /* -----------------------------------------
       انفجار القلوب
    ----------------------------------------- */

    createHeartExplosion();



    /* -----------------------------------------
       إظهار الرسالة النهائية
    ----------------------------------------- */

    setTimeout(() => {

        finalMessage.classList.add(
            "show"
        );

        finalMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 700);

}



/* =====================================================
   انفجار القلوب
===================================================== */

function createHeartExplosion() {

    const buttonRect =
        loveButton.getBoundingClientRect();


    const centerX =
        buttonRect.left +
        buttonRect.width / 2;


    const centerY =
        buttonRect.top +
        buttonRect.height / 2;


    const numberOfHearts = 100;


    for (
        let i = 0;
        i < numberOfHearts;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.className =
            "explosion-heart";


        heart.textContent =
            heartSymbols[
                Math.floor(
                    Math.random() *
                    heartSymbols.length
                )
            ];


        heart.style.left =
            centerX + "px";


        heart.style.top =
            centerY + "px";


        const angle =
            Math.random() *
            Math.PI * 2;


        const distance =
            Math.random() * 350 + 100;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        heart.style.setProperty(
            "--x",
            `${x}px`
        );


        heart.style.setProperty(
            "--y",
            `${y}px`
        );


        heart.style.setProperty(
            "--rotate",
            `${Math.random() * 720 - 360}deg`
        );


        heart.style.fontSize =
            `${Math.random() * 20 + 18}px`;


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}



/* =====================================================
   وميض الشاشة
===================================================== */

function createScreenFlash() {

    const flash =
        document.createElement("div");


    flash.className =
        "screen-flash";


    document.body.appendChild(
        flash
    );


    setTimeout(() => {

        flash.remove();

    }, 700);

}



/* =====================================================
   قلوب عند بداية الموقع
===================================================== */

for (
    let i = 0;
    i < 12;
    i++
) {

    setTimeout(
        createFloatingHeart,
        i * 250
    );

}



/* =====================================================
   تعديل اسمها تلقائيًا
===================================================== */

function updateHerName() {

    const nameElements =
        document.querySelectorAll(
            ".her-name"
        );


    nameElements.forEach(
        element => {

            element.textContent =
                herName;

        }
    );

}


updateHerName();
```
