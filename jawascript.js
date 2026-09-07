// Modal Operations
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function openApplyForm(course, type) {
    document.getElementById('formTitle').innerText = course + ' (' + type + ' Apply)';
    document.getElementById('formCourseInput').value = course;
    document.getElementById('formTypeInput').value = type;
    openModal('formModal');
}

// 500+ Courses Auto Generator
const categories = [
    "Class 9", "Class 10", "Class 11", "Class 12",
    "ITI Fitter", "ITI Electrician", "ITI Welder", "ITI COPA", "ITI Motor Mechanic",
    "Polytechnic Civil", "Polytechnic Mechanical", "Polytechnic Electrical", "Polytechnic CS", "Polytechnic Electronics",
    "B.A. (Hindi)", "B.A. (English)", "B.A. (History)", "B.A. (Pol Sci)", "B.A. (Sociology)", "B.A. (Economics)",
    "B.Sc (Maths)", "B.Sc (Bio)", "B.Sc (Physics)", "B.Sc (Chemistry)", "B.Sc (CS)", "B.Sc (Agriculture)",
    "B.Com (General)", "B.Com (Honours)", "BBA", "BCA", "B.Ed", "D.El.Ed (BTC)",
    "B.Tech (CS)", "B.Tech (IT)", "B.Tech (Mechanical)", "B.Tech (Civil)", "B.Tech (Electrical)", "B.Tech (EC)",
    "M.A.", "M.Sc", "M.Com", "M.Tech", "MCA", "MBA", "MBBS", "BAMS", "BHMS", "B.Pharm", "D.Pharm", "GNM", "ANM", "B.Sc Nursing",
    "LL.B.", "B.A. LL.B.", "LL.M.", "Ph.D"
];

function generate500Schemes() {
    const grid = document.getElementById('schemesGrid');
    if (!grid) return;
    
    let html = '';
    let count = 1;

    // Loop through categories to build 500+ courses
    for (let i = 0; i < 10; i++) {
        categories.forEach(course => {
            let yearText = (i === 0) ? "1st Year / Sem 1" : `${i + 1}th Year / Stage ${i + 1}`;
            let fullCourseName = `${course} (${yearText})`;

            html += `
                <div class="card">
                    <h4>${fullCourseName}</h4>
                    <p>छात्रवृत्ति आवेदन सत्र 2026-27 | कोर्स कोड: #${1000 + count}</p>
                    <div class="btn-group">
                        <button class="btn btn-green" onclick="openApplyForm('${fullCourseName}', 'Fresh')">Fresh Apply</button>
                        <button class="btn btn-blue" onclick="openApplyForm('${fullCourseName}', 'Renewal')">Renewal</button>
                    </div>
                </div>
            `;
            count++;
        });
    }

    grid.innerHTML = html;
}

// Search Filter
function filterSchemes() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h4')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Status Check Function
function checkStatus() {
    let regNo = document.getElementById('statusRegNo').value;
    let result = document.getElementById('statusResult');
    
    if (regNo.trim() === '') {
        result.style.color = 'red';
        result.innerText = 'कृपया मान्य रजिस्ट्रेशन नंबर दर्ज करें!';
    } else {
        result.style.color = 'green';
        result.innerText = 'रजिस्ट्रेशन नंबर ' + regNo + ' का आवेदन सत्यापन हेतु विचाराधीन है (Under Process)।';
    }
}

// Window Click Event to close Modals
window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

// Page load hone par courses generate karein
window.onload = function() {
    generate500Schemes();
};
