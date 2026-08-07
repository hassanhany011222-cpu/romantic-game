```javascript id="9qf4xk"
/* =====================================================
   لعبة الاعتراف ❤️
   JavaScript
===================================================== */


/* =====================================================
   1 — الأسئلة
===================================================== */

const questions = [

    {
        question: "إيه أكتر حاجة بتحبيها في علاقتنا؟ ❤️",

        answers: [
            "كلامنا سوا ❤️",
            "اهتمامنا ببعض 🥹",
            "الذكريات اللي بينا ✨",
            "كل حاجة فينا ❤️"
        ]
    },


    {
        question: "لو تقدري ترجعي تعيشي لحظة واحدة بينا تاني، تختاري إيه؟",

        answers: [
            "أول مرة اتكلمنا ❤️",
            "أول موقف مميز بينا 🥹",
            "يوم مش هننساه ✨",
            "اليوم ده ❤️"
        ]
    },


    {
        question: "لما ييجي اسمي قدامك فجأة، أول حاجة بتحسي بيها إيه؟",

        answers: [
            "ببتسم ❤️",
            "بفرح 🥹",
            "بفتكرك 💭",
            "كل دول ❤️"
        ]
    },


    {
        question: "تتمني إيه لحكايتنا في الأيام الجاية؟",

        answers: [
            "نفضل قريبين ❤️",
            "نعيش حاجات أجمل ✨",
            "نحقق أحلامنا سوا 🥹",
            "كل اللي فوق ❤️"
        ]
    },


    {
        question: "آخر سؤال... مستعدة تعرفي ليه عملتلك اللعبة دي؟ 👀❤️",

        answers: [
            "أيوه ❤️",
            "قولي بقى 🥹",
            "متحمسة جدًا ✨",
            "افتح المفاجأة ❤️"
        ]
    }

];



/* =====================================================
   2 — عناصر الصفحة
===================================================== */

const homePage =
    document.getElementById("home");

const questionsPage =
    document.getElementById("questions");

const confessionPage =
    document.getElementById("confession");

const startButton =
    document.getElementById("startButton");

const currentQuestionElement =
    document.getElementById("currentQuestion");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const timerElement =
    document.getElementById("timer");

const loveButton =
    document.getElementById("loveButton");

const finalMessage =
    document.getElementById("finalMessage");

const loveSong =
    document.getElementById("loveSong");

const heartsContainer =
    document.getElementById("hearts-container");



/* =====================================================
   3 — متغيرات اللعبة
===================================================== */

let currentQuestion = 0;

let answerLocked = false;

let timerStarted = false;

let loveClicked = false;



/* =====================================================
   4 — تغيير الصفحة
===================================================== */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(item => {

            item.classList.remove("active");

        });


    setTimeout(() => {

        page.classList.add("active");

    }, 100);

}



/* =====================================================
   5 — بدء اللعبة
===================================================== */

startButton.addEventListener(
    "click",
    startGame
);


function startGame() {

    currentQuestion = 0;

    answerLocked = false;

    showPage(questionsPage);

    showQuestion();

}



/* =====================================================
   6 — عرض السؤال
===================================================== */

function showQuestion() {

    const current =
        questions[currentQuestion];


    currentQuestionElement.textContent =
        currentQuestion + 1;


    questionElement.textContent =
        current.question;


    answersElement.innerHTML = "";


    /* -----------------------------------------
       تأثير ظهور السؤال
    ----------------------------------------- */

    questionElement.style.opacity = "0";

    questionElement.style.transform =
        "translateY(15px)";


    setTimeout(() => {

        questionElement.style.opacity = "1";

        questionElement.style.transform =
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
                "answer";


            button.textContent =
                answer;


            setTimeout(() => {

                button.classList.add("show");

            }, 150 + index * 100);


            button.addEventListener(
                "click",
                () => {

                    chooseAnswer(button);

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );

}



/* =====================================================
   7 — اختيار الإجابة
===================================================== */

function chooseAnswer(button) {

    if (answerLocked)
        return;


    answerLocked = true;


    button.classList.add("selected");


    setTimeout(() => {

        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            answerLocked = false;

            showQuestion();

        }

        else {

            finishQuestions();

        }

    }, 500);

}



/* =====================================================
   8 — انتهاء الأسئلة
===================================================== */

function finishQuestions() {

    showPage(confessionPage);

    startTimer();

}



/* =====================================================
   9 — عداد 15 دقيقة
===================================================== */

function startTimer() {

    if (timerStarted)
        return;


    timerStarted = true;


    let remainingSeconds =
        15 * 60;


    updateTimer(
        remainingSeconds
    );


    const timer =
        setInterval(() => {

            remainingSeconds--;


            updateTimer(
                remainingSeconds
            );


            if (
                remainingSeconds <= 0
            ) {

                clearInterval(timer);

            }

        }, 1000);

}



function updateTimer(seconds) {

    const minutes =
        Math.floor(seconds / 60);


    const remaining =
        seconds % 60;


    const formattedMinutes =
        String(minutes)
            .padStart(2, "0");


    const formattedSeconds =
        String(remaining)
            .padStart(2, "0");


    timerElement.textContent =
        `${formattedMinutes}:${formattedSeconds}`;

}



/* =====================================================
   10 — القلوب المتطايرة
===================================================== */

const heartSymbols = [

    "❤️",
    "💕",
    "💗",
    "💖",
    "🤍",
    "💜",
    "💙",
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


    /* مكان عشوائي */

    heart.style.left =
        Math.random() * 100 + "%";


    /* حجم عشوائي */

    heart.style.fontSize =
        Math.random() * 18 + 14
        + "px";


    /* سرعة عشوائية */

    const duration =
        Math.random() * 7 + 6;


    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}



/* إنشاء قلوب باستمرار */

setInterval(
    createFloatingHeart,
    550
);



/* قلوب أول ما الموقع يفتح */

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
   11 — زر "بحبك"
===================================================== */

loveButton.addEventListener(
    "click",
    finalConfession
);



function finalConfession() {

    if (loveClicked)
        return;


    loveClicked = true;



    /* -----------------------------------------
       تشغيل الأغنية
       
       الأغنية لن تعمل إلا هنا
       بعد الضغط على الزر
    ----------------------------------------- */

    loveSong.currentTime = 0;


    loveSong.play()
        .catch(error => {

            console.log(
                "تعذر تشغيل الأغنية:",
                error
            );

        });



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

    }, 350);



    /* -----------------------------------------
       وميض الشاشة
    ----------------------------------------- */

    createFlash();



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
   12 — انفجار القلوب
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



    /* عدد القلوب */

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



        /* اتجاه عشوائي */

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
            Math.random() * 20 + 18
            + "px";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.remove();

        }, 2200);

    }

}



/* =====================================================
   13 — وميض الشاشة
===================================================== */

function createFlash() {

    const flash =
        document.createElement("div");


    flash.className =
        "flash";


    document.body.appendChild(
        flash
    );


    setTimeout(() => {

        flash.remove();

    }, 700);

}
```
