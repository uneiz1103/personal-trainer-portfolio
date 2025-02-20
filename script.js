// ⭐ Image Slider Code (Auto-Sliding)
let currentSlide = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-play slider every 3 seconds
setInterval(nextSlide, 3000);

// ⭐ Services Modal System
const servicesData = {
    'body-transformation': {
        title: 'Body Transformation',
        image: 'images/Body_Transformation.jpeg',
        description: 'Achieve your dream physique with a customized training and diet plan designed to transform your body effectively.'
    },
    'strength-training': {
        title: 'Strength Training',
        image: 'images/Strength_Training.jpeg',
        description: 'Improve your strength, endurance, and overall fitness with guided strength training workouts.'
    },
    'weight-loss': {
        title: 'Weight Loss & Fat Burning',
        image: 'images/Weight_Loss.jpeg',
        description: 'Burn fat and lose weight efficiently with structured workout and nutrition plans tailored for you.'
    },
    'muscle-building': {
        title: 'Muscle Building',
        image: 'images/Muscle_Building.jpeg',
        description: 'Increase muscle mass and enhance your physique with professional muscle-building techniques and diet.'
    },
    'functional-training': {
        title: 'Functional Training',
        image: 'images/Functional_Training.jpeg',
        description: 'Enhance your daily performance and agility through dynamic functional training sessions.'
    },
    'online-coaching': {
        title: 'Online Coaching',
        image: 'images/Online_Coaching.jpeg',
        description: 'Train with expert guidance from anywhere in the world with our personalized online coaching programs.'
    },
    'diet-plans': {
        title: 'Personalized Diet Plans',
        image: 'images/Personalized_Diet.jpeg',
        description: 'Get a customized meal plan tailored to your body type and fitness goals to optimize your nutrition.'
    },
    'supplement-guidance': {
        title: 'Supplement Guidance',
        image: 'images/Supplement_Guidance.jpeg',
        description: 'Learn about the best supplements to support your fitness journey and achieve maximum results.'
    }
};

function showService(serviceKey) {
    const service = servicesData[serviceKey];
    if (service) {
        document.getElementById('service-image').src = service.image;
        document.getElementById('service-title').innerText = service.title;
        document.getElementById('service-description').innerText = service.description;
        document.getElementById('service-details').classList.add('show');

        // ✅ Background Scroll Disable
        document.body.classList.add('modal-open');
    }
}

function closeService() {
    document.getElementById('service-details').classList.remove('show');

    // ✅ Background Scroll Enable
    document.body.classList.remove('modal-open');
}
