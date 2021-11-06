const activities = document.querySelector('.activities');
const periodBtns = document.querySelectorAll('button.period');

let activityData = {};
let period = 'weekly';

const renderActivityCardEls = () => {
    
    activities.innerHTML = '';

    activityData.forEach(el => {
        activities.innerHTML += `
            <div class="activity-card activity-card--${el.title.toLowerCase().split(' ').join('-')}">
                <div class="activity-card__inner">
                    <div class="top-row">
                        <h2 class="activity-card__title">Work</h2>
                        <button class="activity-card__action"><img src="assets/images/icon-ellipsis.svg" alt="Ellipsis icon for action button"></button>
                    </div>
                    <div class="bottom-row">
                        <h3 class="activity-card__time">${el.timeframes[period].current}hrs</h3>
                        <span class="activity-card__previous">Last Week - ${el.timeframes[period].previous}hrs</span>
                    </div>
                </div>
            </div>
        `;
    });
};

fetch('../../data.json')
    .then(response => response.json())
    .then(data => {
        activityData = data;
        renderActivityCardEls();
    });

periodBtns.forEach(btn => {
    btn.addEventListener('click', event => {

        periodBtns.forEach(el => el.classList.remove('active'));

        period = event.target.value;
        btn.classList.add('active');
        renderActivityCardEls();
    }, false);
});


    

        