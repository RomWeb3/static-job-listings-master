// Role
const frontendFilter = document.getElementById('frontend-filter');
const frontendBadges = document.querySelectorAll('.frontend-badge');
const fullstackFilter = document.getElementById('fullstack-filter');
const fullstackBadges = document.querySelectorAll('.fullstack');
const backendFilter = document.getElementById('backend-filter');
const backendBadges = document.querySelectorAll('.backend-badge');
// Level
const juniorFilter = document.getElementById('junior-filter');
const juniorBadges = document.querySelectorAll('.junior-badge');
const midweightFilter = document.getElementById('midweight-filter');
const midweightBadges = document.querySelectorAll('.midweight-badge');
const seniorFilter = document.getElementById('senior-filter');
const seniorBadges = document.querySelectorAll('.senior-badge');
// Language
const htmlFilter = document.getElementById('html-filter');
const htmlBadges = document.querySelectorAll('.html-badge');
const cssFilter = document.getElementById('css-filter');
const cssBadges = document.querySelectorAll('.css-badge');
const javascriptFilter = document.getElementById('javascript-filter');
const javascriptBadges = document.querySelectorAll('.javascript-badge');
const pythonFilter = document.getElementById('python-filter');
const pythonBadges = document.querySelectorAll('.python-badge');
const reactFilter = document.getElementById('react-filter');
const reactBadges = document.querySelectorAll('.react-badge');
const rubyFilter = document.getElementById('ruby-filter');
const rubyBadges = document.querySelectorAll('.ruby-badge');
const vueFilter = document.getElementById('vue-filter');
const vueBadges = document.querySelectorAll('.vue-badge');
// tools
const rorFilter = document.getElementById('ror-filter');
const rorBadges = document.querySelectorAll('.ror-badge');
const sassFilter = document.getElementById('sass-filter');
const sassBadges = document.querySelectorAll('.sass-badge');
const djangoFilter = document.getElementById('django-filter');
const djangoBadges = document.querySelectorAll('.django-badge');

const modalFilters = document.getElementById('modal-filters');
const badgesArray = [frontendBadges, fullstackBadges, backendBadges, juniorBadges, midweightBadges, seniorBadges, htmlBadges, cssBadges, javascriptBadges, pythonBadges, reactBadges, rubyBadges, vueBadges, rorBadges, sassBadges, djangoBadges];

//Show filters when user click on 'badges'
badgesArray.forEach(badges => {
    badges.forEach(badge => {
        badge.addEventListener('click', (e) => {
            modalFilters.classList.add('active');
            let filter = e.target.innerHTML.toLowerCase() + 'Filter';
            eval(filter).classList.add('active');
            eval(filter).parentElement.classList.add('active');
            hideCard();
        });
    });
});


// Close filter one by one
const closeFilter = document.querySelectorAll('.img');

closeFilter.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeBtn.parentElement.classList.toggle('active');
        closeBtn.parentElement.parentElement.classList.toggle('active');
        showCard()
        hideCard()
    });
});

// Hide card, show card & Clear all filters
const clearAll = document.getElementById('clear-all');
const filtersArray = [frontendFilter, fullstackFilter, backendFilter, juniorFilter, midweightFilter, seniorFilter, htmlFilter, cssFilter, javascriptFilter, pythonFilter, reactFilter, rubyFilter, vueFilter, rorFilter, sassFilter, djangoFilter];
const cards = document.querySelectorAll('.card');
const wraps = document.querySelectorAll('.wrap');

//Hide card
function hideCard() {  
    cards.forEach(card => {
        if (!card.classList.contains('frontend') && frontendFilter.classList.contains('active')
        || !card.classList.contains('fullstack') && fullstackFilter.classList.contains('active')
        || !card.classList.contains('backend') && backendFilter.classList.contains('active')
        || !card.classList.contains('junior') && juniorFilter.classList.contains('active')
        || !card.classList.contains('midweight') && midweightFilter.classList.contains('active')
        || !card.classList.contains('senior') && seniorFilter.classList.contains('active')
        || !card.classList.contains('html') && htmlFilter.classList.contains('active')
        || !card.classList.contains('css') && cssFilter.classList.contains('active')
        || !card.classList.contains('javascript') && javascriptFilter.classList.contains('active')
        || !card.classList.contains('python') && pythonFilter.classList.contains('active')
        || !card.classList.contains('react') && reactFilter.classList.contains('active')
        || !card.classList.contains('ruby') && rubyFilter.classList.contains('active')
        || !card.classList.contains('vue') && vueFilter.classList.contains('active')
        || !card.classList.contains('ror') && rorFilter.classList.contains('active')
        || !card.classList.contains('sass') && sassFilter.classList.contains('active')
        || !card.classList.contains('django') && djangoFilter.classList.contains('active')) {
        card.classList.add('hidden');
        } 
    });
}

// Show card
function showCard() {
    cards.forEach(card => {
        filtersArray.forEach(filter => {
            if (!filter.classList.contains('active')) {
            card.classList.remove('hidden');
        }
        });
    });
}

// Clear all filters
clearAll.addEventListener('click', () => {
    wraps.forEach(wrap => {
    wrap.classList.remove('active');
    });
    filtersArray.forEach(filter => {
    filter.classList.remove('active');
    
    showCard();
    });
});







