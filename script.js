```javascript
/* =====================================================
   إعدادات اللعبة
===================================================== */

// اسمها
const herName = "حبيبتي";

// عدد الأسئلة
const totalQuestions = 5;



/* =====================================================
   عناصر الصفحات
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

let currentQuestion = 0;


startButton.addEventListener("click", () => {

    currentQuestion = 0;

    showPage(quizPage);

    displayQuestion();

});



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


    current.answers.forEach(answer => {

        const button =
            document.createElement("button");


        button.className =
            "answer-btn";


        button.textContent =
            answer;


        button.addEventListener(
            "click",
            () => selectAnswer()
        );


        answersContainer.appendChild(button);

    });

}



/* =====================================================
   اختيار الإجابة
===================================================== */

function selectAnswer() {

    if (currentQuestion <
        questions.length - 1) {

        currentQuestion++;

        displayQuestion();

    } else {

        // انتهاء الأسئلة

        showPage(confessionPage);

        startLoveTimer();

    }

}



/* =====================================================
   عداد الـ 15 دقيقة
===================================================== */

let timerStarted = false;

let timerSeconds =
    15 * 60;


function startLoveTimer() {

    // منع تشغيل العداد أكثر من مرة

    if (timerStarted)
        return;


    timerStarted = true;


    const timerElement =
        document.getElementById("timer");


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
   القلوب المتطايرة باستمرار
===================================================== */

const heartsContainer =
    document.getElementById(
        "floating-hearts"
    );


const heartSymbols = [
    "❤️",
    "🤍",
    "💜",
    "💙",
    "💕",
    "💗",
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


    // مكان عشوائي

    heart.style.left =
        Math.random() * 100 + "%";


    // حجم عشوائي

    const size =
        Math.random() * 20 + 15;

    heart.style.fontSize =
        size + "px";


    // سرعة عشوائية

    const duration =
        Math.random() * 6 + 6;

    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}



// إنشاء قلب كل فترة

setInterval(
    createFloatingHeart,
    500
);



/* =====================================================
   تشغيل الأغنية + الاعتراف النهائي
===================================================== */

let loveClicked = false;


loveButton.addEventListener(
    "click",
    () => {

        // منع الضغط أكثر من مرة

        if (loveClicked)
            return;


        loveClicked = true;


        /* ---------------------------------
           تشغيل الأغنية
           تبدأ فقط هنا
        --------------------------------- */

        loveSong.currentTime = 0;


        loveSong.play()
            .catch(error => {

                console.log(
                    "لم يتم تشغيل الأغنية:",
                    error
                );

            });



        /* ---------------------------------
           إخفاء الزر
        --------------------------------- */

        loveButton.style.display =
            "none";



        /* ---------------------------------
           إظهار الرسالة
        --------------------------------- */

        finalMessage.classList.add(
            "show"
        );



        /* ---------------------------------
           تأثير إضاءة الشاشة
        --------------------------------- */

        createScreenFlash();



        /* ---------------------------------
           انفجار القلوب
        --------------------------------- */

        createHeartExplosion(
            loveButton
        );

    }
);



/* =====================================================
   انفجار القلوب
===================================================== */

function createHeartExplosion(
    button
) {

    const rect =
        button.getBoundingClientRect();


    const centerX =
        rect.left +
        rect.width / 2;


    const centerY =
        rect.top +
        rect.height / 2;


    const numberOfHearts =
        80;


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


        /* ---------------------------------
           اتجاه القلب
        --------------------------------- */

        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() * 300 + 100;


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
   أول قلوب عند تحميل الموقع
===================================================== */

for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(
        createFloatingHeart,
        i * 300
    );

}
```
