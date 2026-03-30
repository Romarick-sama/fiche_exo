let qcmScore = 0;

function verifier(inputId, bonneReponse, resultId) {
    const valeur = document.getElementById(inputId).value;
    const result = document.getElementById(resultId);

    if (valeur === "") {
        result.innerHTML = "⚠️ Entrez une valeur";
        result.style.color = "orange";
        return;
    }

    let isCorrect = false;
    if (typeof bonneReponse === 'string') {
        isCorrect = valeur.toLowerCase() === bonneReponse.toLowerCase();
    } else {
        isCorrect = Number(valeur) === bonneReponse;
    }

    if (isCorrect) {
        result.innerHTML = "✅ Correct";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Incorrect";
        result.style.color = "red";
    }
}

function verifierAvantSolution() {
    const reponses = [
        document.getElementById('rep1').value,
        document.getElementById('rep2').value,
        document.getElementById('rep3').value,
        document.getElementById('rep4').value
    ];

    const toutesRemplies = reponses.every(val => val !== "");

    if (!toutesRemplies) {
        alert("Veuillez répondre à toutes les équations avant de voir la solution.");
        return;
    }

    // Si tout est rempli → afficher solution
    toggleSolution('sol1');
}

function showTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');

    event.target.classList.add('active');
}

function toggleSolution(id) {
    const solution = document.getElementById(id);
    solution.classList.toggle('show');
}

function checkProblem1() {
    const julie = parseInt(document.getElementById('prob1_julie').value);
    const paul = parseInt(document.getElementById('prob1_paul').value);
    const result = document.getElementById('result1');

    if (julie === 12 && paul === 16) {
        result.className = 'result correct';
        result.innerHTML = '✅ Excellent ! Julie a bien 12 ans et Paul 16 ans.';
    } else {
        result.className = 'result incorrect';
        result.innerHTML = '❌ Ce n\'est pas correct.';
    }
}

function checkProblem2() {
    const largeur = parseInt(document.getElementById('prob2_largeur').value);
    const longueur = parseInt(document.getElementById('prob2_longueur').value);
    const result = document.getElementById('result2');

    if (largeur === 10 && longueur === 18) {
        result.className = 'result correct';
        result.innerHTML = '✅ Parfait !';
    } else {
        result.className = 'result incorrect';
        result.innerHTML = '❌ Incorrect.';
    }
}

function checkQCM() {
    qcmScore = 0;
    let totalQuestions = 10;

    for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.dataset.correct) {
            qcmScore++;
        }
    }

    const resultDiv = document.getElementById('qcm-result');
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Score : ${qcmScore}/${totalQuestions}`;

    if (qcmScore === totalQuestions) {
        resultDiv.className = 'result correct';
        resultDiv.innerHTML = '🎉 Parfait !';
    } else if (qcmScore >= totalQuestions * 0.7) {
        resultDiv.className = 'result correct';
        resultDiv.innerHTML = '✅ Très bien !';
    } else {
        resultDiv.className = 'result incorrect';
        resultDiv.innerHTML = '❌ Continue.';
    }

    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

document.addEventListener('DOMContentLoaded', function() {
    const qcmOptions = document.querySelectorAll('.qcm-option');
    qcmOptions.forEach(option => {
        option.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
        });
    });
});