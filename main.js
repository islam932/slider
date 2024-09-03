let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

let slidesCount = sliderImages.length;

let currentSlide = 1;

let slideNumberElement = document.getElementById('slide-number');

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement('ul');

paginationElement.setAttribute('id', 'pagination-ul');

for (let i = 1; i <= slidesCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);

let paginationCreatedUl = document.getElementById('pagination-ul');

let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

theChecker();

function nextSlide() {
    if (nextButton.classList.contains('edge')) {
        currentSlide = 1;
        theChecker();
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains('edge')) {
        currentSlide = slidesCount;
        theChecker();
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    slideNumberElement.textContent = '#' + (currentSlide) + ' of ' + (slidesCount);
    removeAllActive()
    sliderImages[currentSlide - 1].classList.add('active');
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    if (currentSlide == 1) {
        prevButton.classList.add('edge');
    } else {
        prevButton.classList.remove('edge');
    }
    if (currentSlide == slidesCount) {
        nextButton.classList.add('edge');
    } else {
        nextButton.classList.remove('edge');
    }
}

function removeAllActive() {
    sliderImages.forEach(function(img) {
        img.classList.remove('active');
    });
    paginationsBullets.forEach(function(bullet) {
        bullet.classList.remove('active');
    });
}

document.onkeyup = function(e) {
        if (e.key === "ArrowRight") {
            nextSlide();
        }
        if (e.key === "ArrowLeft") {
            prevSlide();
        }
};

let intervalId;

function startSlider() {
    if (!intervalId) {
        intervalId = setInterval(nextSlide, 250);
    }
}

function stopSlider() {
    clearInterval(intervalId);
    intervalId = null;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        startSlider();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight') {
        stopSlider();
    }
});

let intervalId2;

function startSlider2() {
    if (!intervalId2) {
        intervalId2 = setInterval(prevSlide, 250);
    }
}

function stopSlider2() {
    clearInterval(intervalId2);
    intervalId2 = null;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        startSlider2();
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowLeft') {
        stopSlider2();
    }
});