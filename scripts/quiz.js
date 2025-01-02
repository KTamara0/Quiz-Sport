let currentQuestionIndex = 0;
let points = {
    Nogomet: 0,
    Rukomet: 0,
    Tenis: 0,
    Vaterpolo: 0,
    Boks: 0,
    Plivanje: 0
};

// Pitanja i odgovori za kviz
const questions = [
    {
        question: "1. Koji tip fizičke aktivnosti te najviše privlači?",
        answers: {
            A: { text: "Trčanje i puno kretanja.",
                 points: {Nogomet: 2, Rukomet: 2, Vaterpolo: 1 }
            },
            B: { text: "Skakanje, bacanje ili precizni udarci.",
                points: {Rukomet: 2, Tenis: 2, Vaterpolo: 1, Boks: 1}
            },
            C: { text: "Brzo plivanje i izdržljivost.",
                points: {Vaterpolo: 2, Plivanje: 2, Boks: 1}
            },
            D: { text: "Agresivni pokreti i snažni udarci.",
                points: {Boks: 3}
            }
        }
    },
    {
        question: "2. Jesi li timski igrač ili individualac?",
        answers: {
            A: { text: "Volim raditi u timu.",
                points: {Nogomet: 2, Rukomet: 2, Vaterpolo: 2}
            },
            B: { text: "Više uživam u individualnim izazovima.",
                points: {Tenis: 2, Boks: 2, Plivanje: 2}
            }
        }
    },
    {
        question: "3. Koji nivo intenziteta ti odgovara?",
        answers: {
            A: { text: "Visok intenzitet, uvijek u pokretu.",
                points: {Nogomet: 2, Rukomet: 2, Boks: 2}
            },
            B: {text: "Umjeren intenzitet s povremenim odmorima.",
                points: {Tenis: 2, Vaterpolo: 1}
            },
            C: { text: "Kombinacija snage, brzine i strategije.",
                points: {Boks: 2, Plivanje: 2, Rukomet: 1}
            }
        }
    },
    {
        question: "4. Što ti je važnije u sportu?",
        answers: {
            A: { text: "Preciznost i tehnika.",
                points: {Tenis: 2, Rukomet: 1}
            },
            B: { text: "Kondicija i izdržljivost.",
                points: {Plivanje: 2, Vaterpolo: 2, Nogomet: 2, Rukomet: 1}
            },
            C: {text: "Snaga i mentalna čvrstoća.",
                points: {Boks: 3, Nogomet: 1}
            }
        }
    },
    {
        question: "5. Preferiraš li sportove na otvorenom ili u zatvorenom prostoru?",
        answers: {
            A: { text: "Otvoreni prostor.",
                points: {Nogomet: 2, Vaterpolo: 2, Plivanje: 2}
            },
            B: { text: "Zatvoreni prostor.",
                points: {Rukomet: 2, Tenis: 2, Boks: 2}
            }
        }
    },
    {
        question: "6. Koliko si dobar/ra u koordinaciji pokreta?",
        answers: {
            A: { text: "Odličan/na, mogu precizno uskladiti pokrete.",
                points: {Tenis: 2, Rukomet: 2, Boks: 2}
            },
            B: { text: "Dobar/ra, ali radim na tome.",
                points: {Nogomet: 1, Vaterpolo: 1, Plivanje: 2}
            },
            C: { text: "Više volim sportove koji ne zahtijevaju previše preciznosti.",
                points: {Nogomet: 2, Boks: 1}
            }
        }
    },
    {
        question: "7. Što misliš o vodi u sportu?",
        answers: {
            A: { text: "Volim sportove u vodi.",
                points: {Vaterpolo: 2, Plivanje: 2}
            },
            B: { text: "Radije biram sportove na suhom.",
                points: {Nogomet: 2, Rukomet: 2, Tenis: 2, Boks: 2}
            }
        }
    },
    {
        question: "8. Jesi li spreman/na na fizički kontakt u sportu?",
        answers: {
            A: { text: "Da, volim dinamične sportove s kontaktima.",
                points: {Nogomet: 2, Rukomet: 2, Boks: 3, Vaterpolo: 2}
            },
            B: { text: "Radije bih izbjega/la kontakt.",
                points: {Tenis: 2, Plivanje: 2}
            }
        }
    },
    {
        question: "9. Koja vrsta strategije te najviše privlači?",
        answers: {
            A: { text: "Brza razmjena lopti i timska taktika.",
                points: {Nogomet: 2, Rukomet:2, Vaterpolo: 2}
            },
            B: { text: "Precizni udarci ili servis za bodove.",
                points: {Tenis: 2, Boks: 2, Plivanje: 1}
            },
            C: { text: "Planiranje napada i obrane u timu.",
                points: {Rukomet: 2, Vaterpolo: 2, Nogomet: 1}
            }
        }
    },
    {
        question: "10. Koliko ti je važna popularnost sporta?",
        answers: {
            A: { text: "Jako mi je važna.",
                points: {Nogomet: 2, Boks: 2, Rukomet: 2}
            },
            B: { text: "Nije mi bitno, biram prema osobnim preferencijama.",
                points: {Tenis: 2, Vaterpolo: 2, Plivanje: 2}
            }
        }
    }
    
];

// Funkcija za započeti kviz
function startQuiz() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    showQuestion();
}

// Funkcija za prikazivanje pitanja
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const answers = currentQuestion.answers;
    const answersContainer = document.getElementById('answers');

    // Resetiraj sadržaj odgovora (ako je potrebno)
    answersContainer.innerHTML = '';

    // Prikazivanje odgovora
    for (let answer in answers) {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answers[answer].text;
        
        // Povezivanje funkcionalnosti odgovora
        button.onclick = function() { answerQuestion(answer, button); };

        // Dodavanje gumba u kontejner odgovora
        answersContainer.appendChild(button);
    }

    // Sakrivanje gumba za sljedeće pitanje
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('finish-btn').style.display = 'none';
}


// Funkcija za odgovor
function answerQuestion(choice, button) {
    // Dodajte bodove na temelju odgovora
    const currentQuestion = questions[currentQuestionIndex];
    const answer = currentQuestion.answers[choice];

    // Ako je odgovor već odabran, poništavamo ga
    if (button.classList.contains('selected')) {
        button.classList.remove('selected');
        removePointsForAnswer(answer);
        enableAllAnswers();
        return;
    }

     // Dodajte bodove za svaki odabrani odgovor
     for (let sport in answer.points) {
        points[sport] += answer.points[sport];
    }
    // Dodajemo klasu za odabrani odgovor
    button.classList.add('selected');
    disableOtherAnswers(button); // Onemogućavamo ostale odgovore

    // Prikazivanje gumba za sljedeće pitanje
    if (currentQuestionIndex < questions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        document.getElementById('finish-btn').style.display = 'inline-block';
    }
}

function disableOtherAnswers(selectedButton) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        if (button !== selectedButton) {
            button.disabled = true; // Onemogućavamo ostale odgovore
        }
    });
}

function enableAllAnswers() {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = false; // Ponovno omogućavamo odgovore
        button.classList.remove('selected'); // Uklanjamo klasu sa svih odgovora
    });
}

// Funkcija za prelazak na sljedeće pitanje
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Funkcija za završetak kviza
function finishQuiz() {
    let maxPoints = 0;
    let recommendedSport = "";

    for (let sport in points) {
        if (points[sport] > maxPoints) {
            maxPoints = points[sport];
            recommendedSport = sport;
        }
    }

    // Spremi rezultat u localStorage kako bi bio dostupan na stranici s rezultatima
    localStorage.setItem('rezultat', recommendedSport);

    // Preusmjeri korisnika na stranicu s rezultatima
    window.location.href = '../pages/result.html';  // Ovdje ide naziv tvoje stranice za rezultat

  //  alert("Tvoj preporučeni sport je: " + recommendedSport);
}

// Funkcija za poništavanje bodova
function removePointsForAnswer(answer) {
    for (let sport in answer.points) {
        points[sport] -= answer.points[sport];
    }
}

