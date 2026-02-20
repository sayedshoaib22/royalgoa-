/**
 * RoyalGoa Rentals - Main Application File
 * Merged from data.js and script.js
 * Contains: Vehicles array, all functions, and app logic
 */

// ============================================
// SECTION 1: VEHICLE DATA & CONSTANTS
// ============================================

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800';

const vehicles = [
  // --- Cars: Manual & Automatic Group ---
  {
    id: 'ignis',
    name: 'Maruti Ignis',
    type: 'car',
    category: 'Compact Hatchback',
    pricePerDay: 1600,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771085514586-f48442cc-255d-424b-8a86-bd933470a02e.jpeg',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    features: ['Auto Available', 'Compact Design', 'Touchscreen', 'Reverse Sensors']
  },
  {
    id: 'ignis',
    name: 'Maruti Ignis',
    type: 'car',
    category: 'Compact Hatchback',
    pricePerDay: 1200,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771085703961-71ea43b9-14f6-452a-a93d-1d8b86afdd50.jpeg',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    features: ['Manual Available', 'Compact Design', 'Touchscreen', 'Reverse Sensors']
  },
  {
    id: 'swift',
    name: 'Maruti Swift',
    type: 'car',
    category: 'Premium Hatchback',
    pricePerDay: 1400,
    deposit: 3000,
    image: 'https://www.varunmaruti.com/uploads/products/colors/new-swift-pearlr-arctic-white-with-midnight-black-roof.png',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    features: ['Auto Available', 'Sporty Drive', 'Keyless Entry', 'Bluetooth']
  },
  {
    id: 'swift',
    name: 'Maruti Swift',
    type: 'car',
    category: 'Premium Hatchback',
    pricePerDay: 1200,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771086979849-965ca50c-72cc-4015-a047-c020fa50af0d.jpeg',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    features: ['Manual Available', 'Sporty Drive', 'Keyless Entry', 'Bluetooth']
  },
  {
    id: 'swift',
    name: 'Maruti Swift Dzire',
    type: 'car',
    category: 'Premium Hatchback',
    pricePerDay: 1100,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771082738713-e7c92e6b-5af8-4a10-95ea-2987d819b9c1.jpg',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    features: ['Manual Available', 'Sporty Drive', 'Keyless Entry', 'Bluetooth']
  },
  {
    id: "mercedes_c300",
    name: "Mercedes-Benz C300",
    type: "car",
    category: "Luxury Sedan",
    pricePerDay: 20000,
    deposit: 10000,
    image: "https://image2url.com/r2/default/images/1771086392720-50bf550e-b4e3-4657-841c-8440eb5f8994.jpeg",
    transmission: 'Automatic',
    fuel: "Petrol",
    seats: 5,
    features: [
      "Luxury convertible",
      "Sunroof",
      "Dual-Zone Climate Control",
      "Advanced Safety Features",
      "Premium Sound System"
    ]
  },
  {
    id: 'baleno',
    name: 'Maruti Baleno',
    type: 'car',
    category: 'Luxury Hatchback',
    pricePerDay: 1300,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771081605318-cf7ecfe1-543f-4a35-8672-53cdda6ce892.jpeg',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    features: ['Manual Available', 'Spacious Cabin', '360 Camera', 'Cruise Control']
  },
  {
    id: 'baleno',
    name: 'Maruti Baleno',
    type: 'car',
    category: 'Luxury Hatchback',
    pricePerDay: 1500,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771081605318-cf7ecfe1-543f-4a35-8672-53cdda6ce892.jpeg',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    features: ['Auto Available', 'Spacious Cabin', '360 Camera', 'Cruise Control']
  },
  {
    id: 'i20',
    name: 'Hyundai i20',
    type: 'car',
    category: 'Luxury Hatchback',
    pricePerDay: 1600,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771084107396-de073f29-76b3-4b8d-9009-be3059a77fba.jpeg',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    features: ['Auto Available', 'Sunroof', 'Premium Audio', 'Air Purifier']
  },
  {
    id: 'i20',
    name: 'Hyundai i20',
    type: 'car',
    category: 'Luxury Hatchback',
    pricePerDay: 1200,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771085775326-5bfe945e-d68a-4474-8584-e0faa4d08a1a.jpeg',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 5,
    features: ['Manual Available', 'Sunroof', 'Premium Audio', 'Air Purifier']
  },
  {
    id: 'brezza',
    name: 'Maruti Brezza',
    type: 'car',
    category: 'Compact SUV',
    pricePerDay: 2000,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771080613820-4e08e3eb-6cf3-456d-af67-d620cf20afa2.jpeg',
    transmission: 'Manual ',
    fuel: 'Petrol',
    seats: 5,
    features: ['Manual  Available', 'Sunroof', 'High Ground Clearance', 'Smart Hybrid']
  },
  {
    id: 'brezza',
    name: 'Maruti Brezza',
    type: 'car',
    category: 'Compact SUV',
    pricePerDay: 2500,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771080613820-4e08e3eb-6cf3-456d-af67-d620cf20afa2.jpeg',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 5,
    features: ['Auto Available', 'Sunroof', 'High Ground Clearance', 'Smart Hybrid']
  },
  {
    id: 'creta',
    name: 'Hyundai Creta',
    type: 'car',
    category: 'Premium SUV',
    pricePerDay: 3500,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771082168034-3cea15fd-961e-441b-827a-e772f7a0db43.png',
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 5,
    features: ['Auto Available', 'Panoramic Sunroof', 'Ventilated Seats', 'Bose Speakers']
  },
  {
    id: 'creta',
    name: 'Hyundai Creta',
    type: 'car',
    category: 'Premium SUV',
    pricePerDay: 3000,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771081314416-a3bc164b-c3e0-4074-aff3-0f79b2454253.jpeg',
    transmission: 'Manual',
    fuel: 'Diesel',
    seats: 5,
    features: ['Manual Available', 'Panoramic Sunroof', 'Ventilated Seats', 'Bose Speakers']
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    type: 'car',
    category: 'SUV / 7 Seater',
    pricePerDay: 2300,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771083423558-6d9933ca-f849-46ea-8f35-24715d02f016.jpeg',
    transmission: 'Manual ',
    fuel: 'Petrol',
    seats: 7,
    features: ['Manual  Available', 'Perfect for Families', 'Rear AC Vents', 'Flexible Seating']
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    type: 'car',
    category: 'SUV / 7 Seater',
    pricePerDay: 2800,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771083423558-6d9933ca-f849-46ea-8f35-24715d02f016.jpeg',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 7,
    features: ['Auto Available', 'Perfect for Families', 'Rear AC Vents', 'Flexible Seating']
  },
  {
    id: 'carens',
    name: 'Kia Carens',
    type: 'car',
    category: 'Premium SUV',
    pricePerDay: 3200,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771086756653-26b04aeb-abcb-4bab-bf85-f14a576e0015.jpeg',
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 7,
    features: ['Auto Available', '6 Airbags', 'Ambient Lighting', 'Smart Storage']
  },
  {
    id: 'carens',
    name: 'Kia Carens',
    type: 'car',
    category: 'Premium SUV',
    pricePerDay: 3000,
    deposit: 3000,
    image: 'https://image2url.com/r2/default/images/1771086756653-26b04aeb-abcb-4bab-bf85-f14a576e0015.jpeg',
    transmission: 'Manual',
    fuel: 'Diesel',
    seats: 7,
    features: ['Manual Available', '6 Airbags', 'Ambient Lighting', 'Smart Storage']
  },
  {
    id: 'crysta',
    name: 'Toyota Innova Crysta',
    type: 'car',
    category: 'Luxury SUV',
    pricePerDay: 3000,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771082409934-b12afb7d-7dfd-42d5-a583-c6b96ae3b097.jpeg',
    transmission: 'Manual',
    fuel: 'Diesel',
    seats: 7,
    features: ['Manual Available', 'Maximum Comfort', 'Legendary Reliability', 'Premium Leather']
  },
  {
    id: 'crysta',
    name: 'Toyota Innova Crysta',
    type: 'car',
    category: 'Luxury SUV',
    pricePerDay: 3500,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771082409934-b12afb7d-7dfd-42d5-a583-c6b96ae3b097.jpeg',
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 7,
    features: ['Auto Available', 'Maximum Comfort', 'Legendary Reliability', 'Premium Leather']
  },
  {
    id: 'thar-ht',
    name: 'Mahindra Thar Hardtop',
    type: 'car',
    category: 'Adventure SUV',
    pricePerDay: 3500,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771085007230-e3056cd4-758f-43a1-857c-024057a6fdd5.jpeg',
    transmission: 'Automatic',
    fuel: 'Diesel',
    seats: 4,
    features: ['Auto Available', '4x4 Drivetrain', 'Rugged Build', 'Touchscreen']
  },
  {
    id: 'thar-conv',
    name: 'Mahindra Thar Soft Top',
    type: 'car',
    category: 'Adventure SUV',
    pricePerDay: 3000,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771081798127-60ce84f8-d742-4139-a67d-a559e1a46960.png',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 4,
    features: ['Manual Available', 'Convertible Top', 'Iconic Style', 'All Terrain Tires']
  },
  {
    id: 'thar-conv',
    name: 'Mahindra Thar Soft Top',
    type: 'car',
    category: 'Adventure SUV',
    pricePerDay: 3500,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771081798127-60ce84f8-d742-4139-a67d-a559e1a46960.png',
    transmission: 'Automatic',
    fuel: 'Petrol',
    seats: 4,
    features: ['Auto Available', 'Convertible Top', 'Iconic Style', 'All Terrain Tires']
  },
  // --- Cars: Automatic ONLY Group ---
  {
    id: 'thar-roxx',
    name: 'Mahindra Thar Roxx',
    type: 'car',
    category: 'Premium 4x4 SUV',
    pricePerDay: 7000,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771084019004-13492275-dca8-4f5a-b2e5-e1527576fe03.jpg',
    transmission: 'Automatic Only',
    fuel: 'Diesel',
    seats: 5,
    features: ['Automatic Only', 'Premium Interiors', 'Powerful Engine', 'Advanced Safety']
  },
  {
    id: 'fortuner',
    name: 'Toyota Fortuner',
    type: 'car',
    category: 'Luxury SUV',
    pricePerDay: 9000,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771085163103-0cfc8bf6-b170-4f60-9be3-068e68b08592.jpeg',
    transmission: 'Automatic Only',
    fuel: 'Diesel',
    seats: 7,
    features: ['Automatic Only', 'Road Dominance', '4x4 Capability', 'VIP Presence']
  },
  {
    id: 'hycross',
    name: 'Toyota Innova Hycross',
    type: 'car',
    category: 'Luxury Hybrid SUV',
    pricePerDay: 3500,
    deposit: 5000,
    image: 'https://image2url.com/r2/default/images/1771086867555-f1b998ba-9d26-4c0e-b1c8-d55ddb7e33b8.jpeg',
    transmission: 'Automatic Only',
    fuel: 'Petrol Hybrid',
    seats: 7,
    features: ['Automatic Only', 'Hybrid Efficiency', 'Ottoman Seats', 'ADAS Tech']
  },
  {
    id: 'audi-a3',
    name: 'Audi A3',
    type: 'car',
    category: 'Luxury Sedan',
    pricePerDay: 25000,
    deposit: 10000,
    image: 'https://image2url.com/r2/default/images/1771083007149-3d15f250-cca7-40dd-ba7e-8b3b78a2dbd2.jpeg',
    transmission: 'Automatic Only',
    fuel: 'Petrol',
    seats: 5,
    features: ['Automatic Only', 'German Engineering', 'Matrix LED', 'Virtual Cockpit']
  },
  {
    id: 'mini-cooper',
    name: 'Mini Cooper',
    type: 'car',
    category: 'Luxury Icon',
    pricePerDay: 25000,
    deposit: 10000,
    image: 'https://image2url.com/r2/default/images/1771083165899-7695a97a-57e7-4cf7-98c7-9f88cc0a2dbe.jpeg',
    transmission: 'Automatic Only',
    fuel: 'Petrol',
    seats: 4,
    features: ['Automatic Only', 'Go-Kart Handling', 'British Icon', 'Premium Style']
  },
  // --- Bikes ---
  {
    id: 'activa',
    name: 'Activa 125',
    type: 'bike',
    category: 'Scooter',
    pricePerDay: 500,
    deposit: 1000,
    image: 'https://image2url.com/r2/default/images/1771142393014-49d9578b-16b2-4e2e-b958-77fcbba93a25.jpeg',
    transmission: 'manual',
    fuel: 'Petrol',
    seats: 2,
    features: ['Comfortable Ride', 'Easy Handling', 'Great Mileage', 'Under-seat Storage']
  },
  {
    id: 'fasino',
    name: ' Fasino ',
    type: 'bike',
    category: 'Scooter',
    pricePerDay: 600,
    deposit: 1000,
    image: 'https://image2url.com/r2/default/images/1771141146471-5eb9de67-def0-4725-890d-4e4dbeae6b9e.jpeg',
    transmission: 'manual',
    fuel: 'Petrol',
    seats: 2,
    features: ['Comfortable Ride', 'Easy Handling', 'Great Mileage', 'Under-seat Storage']
  },
  {
    id: 'hunter',
    name: 'Royal Enfield Hunter 350',
    type: 'bike',
    category: 'Cruiser',
    pricePerDay: 2000,
    deposit: 2000,
    image: 'https://images.unsplash.com/photo-1689599943500-0f73b9e5b78b?q=80&w=366&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 2,
    features: ['Agile Handling', 'Modern Retro', 'Punchy Engine', 'Comfort Seating']
  },
  {
    id: 'bullet',
    name: 'Royal Enfield Bullet 350',
    type: 'bike',
    category: 'Classic Cruiser',
    pricePerDay: 2000,
    deposit: 2000,
    image: 'https://images.unsplash.com/photo-1655179552613-4532b003cd50?q=80&w=420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    transmission: 'Manual',
    fuel: 'Petrol',
    seats: 2,
    features: ['Iconic Thump', 'Vintage Design', 'Heavy Presence', 'Built for Roads']
  }
];

// Debug: Log vehicles loaded
console.log('Vehicles Loaded:', vehicles);

// ============================================
// SECTION 2: GLOBAL STATE
// ============================================

let currentPage = 'home';
let isDarkMode = false;
let selectedVehicle = null;
let isScrolled = false;
let searchQuery = '';
let bookingStep = 1;
let bookingFormData = {
  name: '',
  phone: '',
  pickup: 'Madgao Railway Station (Main Exit)',
  date: '',
  duration: '1',
  transmission: ''
};

// ============================================
// SECTION 3: UTILITY FUNCTIONS
// ============================================

function getVehicleImage(vehicle) {
  if (!vehicle) return PLACEHOLDER_IMAGE;
  return (vehicle.image && vehicle.image.trim()) ? vehicle.image : PLACEHOLDER_IMAGE;
}

function $(id) {
  return document.getElementById(id);
}

function getDemoVehicles() {
  return [
    {
      id: 'demo-swift',
      name: 'Maruti Swift',
      type: 'car',
      category: 'Premium Hatchback',
      pricePerDay: 1800,
      image: 'https://images.unsplash.com/photo-1631481358042-3e3c042217f2?auto=format&fit=crop&q=80&w=800',
      transmission: 'Automatic',
      fuel: 'Petrol',
      seats: 5,
      features: ['Manual  Available', 'Sporty Drive', 'Keyless Entry', 'Bluetooth']
    },
    {
      id: 'demo-baleno',
      name: 'Maruti Baleno',
      type: 'car',
      category: 'Luxury Hatchback',
      pricePerDay: 2000,
      image: 'https://images.unsplash.com/photo-1624564858031-6e3e536104e1?auto=format&fit=crop&q=80&w=800',
      transmission: 'Automatic',
      fuel: 'Petrol',
      seats: 5,
      features: ['Manual  Available', 'Spacious Cabin', '360 Camera', 'Cruise Control']
    },
    {
      id: 'demo-hero',
      name: 'Hero Xtreme 160R',
      type: 'bike',
      category: 'Sports Bike',
      pricePerDay: 600,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
      transmission: 'Manual',
      fuel: 'Petrol',
      seats: 2,
      features: ['Powerful Performance', 'Excellent Mileage', 'LED Lights', 'Digital Display']
    }
  ];
}

// ============================================
// SECTION 4: APP INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  try {
    if (typeof vehicles === 'undefined' || !vehicles) {
      console.warn('No vehicles data loaded. Check main.js link.');
      window.vehicles = getDemoVehicles();
      console.log('Using fallback demo vehicles.');
    } else if (vehicles.length === 0) {
      console.warn('Vehicles array is empty.');
      window.vehicles = getDemoVehicles();
      console.log('Using fallback demo vehicles.');
    }

    console.log('Vehicles Loaded:', vehicles);

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDarkMode = true;
      document.body.classList.add('dark');
    }
    updateThemeIcons();

    const loadingScreen = $('loading-screen');
    if (loadingScreen) {
      setTimeout(() => {
        try {
          renderPage();
          console.log('Page rendered successfully');
        } catch (renderErr) {
          console.error('Page render error:', renderErr);
          const mainContent = $('main-content');
          if (mainContent) mainContent.innerHTML = '<div class="p-20 text-center text-red-600">Error loading content. Please refresh the page.</div>';
        }
        loadingScreen.style.display = 'none';
        // Show WhatsApp button after page renders
        const whatsappBtn = $('whatsapp-btn');
        if (whatsappBtn) {
          whatsappBtn.classList.remove('opacity-0', 'invisible');
          whatsappBtn.classList.add('opacity-100', 'visible');
        }
      }, 1500);
      setTimeout(() => {
        if (loadingScreen) loadingScreen.style.display = 'none';
      }, 5000);
    } else {
      renderPage();
      // Show WhatsApp button if loading screen doesn't exist
      const whatsappBtn = $('whatsapp-btn');
      if (whatsappBtn) {
        whatsappBtn.classList.remove('opacity-0', 'invisible');
        whatsappBtn.classList.add('opacity-100', 'visible');
      }
    }

    window.addEventListener('scroll', handleScroll);
  } catch (err) {
    console.error('Init error:', err);
    const mainContent = $('main-content');
    if (mainContent) mainContent.innerHTML = '<div class="p-20 text-center text-slate-600">Something went wrong. Please refresh the page.</div>';
  }
});

// ============================================
// SECTION 5: NAVIGATION & STYLING
// ============================================

function navigateTo(page) {
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderPage();
  updateNavLinks();
}

function updateNavLinks() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const page = link.getAttribute('data-page');
    if (page === currentPage) {
      link.classList.add('text-primary');
      link.classList.remove('text-slate-600', 'text-slate-800');
    } else {
      link.classList.remove('text-primary');
      link.classList.add(isScrolled || isDarkMode ? 'text-slate-600' : 'text-slate-800');
      link.classList.remove(isScrolled || isDarkMode ? 'text-slate-800' : 'text-slate-600');
    }
  });
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark');
  updateThemeIcons();
}

function updateThemeIcons() {
  const desktopIcon = $('theme-toggle');
  const mobileIcon = $('theme-toggle-mobile');
  const sunSVG = `<svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
  const moonSVG = `<svg class="w-5 h-5 text-slate-700 dark-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
  if (desktopIcon) desktopIcon.innerHTML = isDarkMode ? sunSVG : moonSVG;
  if (mobileIcon) mobileIcon.innerHTML = isDarkMode ? sunSVG : moonSVG;
}

function toggleMobileMenu() {
  const menu = $('mobile-menu');
  const btn = $('mobile-menu-btn');
  if (!menu || !btn) return;
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('animate-fade-in-down');
    btn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
  } else {
    menu.classList.add('hidden');
    btn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
  }
}

function handleScroll() {
  const scrolled = window.scrollY > 50;
  if (scrolled !== isScrolled) {
    isScrolled = scrolled;
    const navbar = $('navbar');
    if (navbar) {
      if (isScrolled) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('bg-transparent', 'py-5');
      } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('bg-transparent', 'py-5');
      }
    }
    updateNavLinks();
  }
}

// ============================================
// SECTION 6: VEHICLE SELECTION & RENDERING
// ============================================

function selectVehicle(vehicleId, transmission) {
  if (transmission) {
    bookingFormData.transmission = transmission;
  }
  bookingStep = 1;

  // Use merged vehicle (grouped by id) so selectedVehicle contains transmissions array
  const list = typeof vehicles !== 'undefined' ? vehicles : [];
  const merged = mergeVehiclesByName(list);
  selectedVehicle = merged.find(v => v.id === vehicleId) || null;

  navigateTo('booking');
}

// Merge vehicles with same ID/name to group manual and automatic
function mergeVehiclesByName(vehiclesList) {
  const merged = {};

  vehiclesList.forEach(raw => {
    const vehicle = { ...raw };
    // normalize id and type and name
    vehicle.id = (vehicle.id || '').toString().trim();
    vehicle.type = (vehicle.type || '').toString().trim().toLowerCase();
    if (vehicle.name && typeof vehicle.name === 'string') vehicle.name = vehicle.name.trim();

    const key = `${vehicle.type}_${vehicle.id}`;
    if (!merged[key]) {
      merged[key] = {
        ...vehicle,
        // ensure consistent casing for type
        type: vehicle.type,
        transmissions: []
      };
    }

    // Do not create transmission entries for bikes/scooters
    if (vehicle.type !== 'car') return;

    // Clean and normalize transmission string
    let transType = (vehicle.transmission || '').toString().replace(/\s+/g, ' ').trim();
    // Normalize common variants
    transType = transType.replace(/Automatic Only/i, 'Automatic');
    transType = transType.replace(/Manual Only/i, 'Manual');
    // Some entries may use commas or slashes
    const parts = transType.split(/\s*\/[\s]*|,|\s+and\s+/i).map(p => p.trim()).filter(Boolean);

    if (parts.length === 0) return;

    parts.forEach(partRaw => {
      let part = partRaw.replace(/\s+/g, ' ').trim();
      // Capitalize first letter
      part = part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
      if (!part) return;

      // If transmission already exists, keep the lowest price
      const existing = merged[key].transmissions.find(t => t.type === part);
      const price = Number(vehicle.pricePerDay) || 0;
      if (existing) {
        if (price && price < existing.price) existing.price = price;
      } else {
        merged[key].transmissions.push({ type: part, price });
      }
    });
  });

  return Object.values(merged);
}

function renderPage() {
  const mainContent = $('main-content');
  if (!mainContent) return;

  const list = typeof vehicles !== 'undefined' ? vehicles : [];

  switch (currentPage) {
    case 'home':
      mainContent.innerHTML = renderHomePage(list);
      break;
    case 'cars':
      mainContent.innerHTML = renderVehiclesPage('car', list);
      break;
    case 'bikes':
      mainContent.innerHTML = renderVehiclesPage('bike', list);
      break;
    case 'booking':
      mainContent.innerHTML = renderBookingPage(list);
      break;
    case 'contact':
      mainContent.innerHTML = renderContactPage();
      break;
    default:
      mainContent.innerHTML = renderHomePage(list);
  }
}

function renderHomePage(list) {
  const merged = mergeVehiclesByName(list || []);
  const featured = merged.slice(0, 6);
  const cards = featured.length
    ? featured.map(v => renderMergedVehicleCard(v)).join('')
    : '<div class="col-span-full text-center py-16 text-slate-500">No vehicles found.</div>';

  return `
    <div class="animate-fade-in">
      <section class="hero-section">
        <div class="hero-bg">
          <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1920" alt="Goa Beach">
        </div>
        <div class="hero-content">
          <div style="max-width: 42rem;">
            <span class="hero-badge">Premium Goa Rentals</span>
            <h1 style="font-size: 3.75rem; font-weight: 900; font-family: 'Playfair Display', serif; margin-bottom: 1.5rem; line-height: 1.25;">
              Drive the <span class="text-primary">Prime</span> Experience.
            </h1>
            <p style="font-size: 1.25rem; margin-bottom: 2.5rem; color: #e2e8f0; line-height: 1.625; font-weight: 300;">
              Professional car and bike rentals delivered to Madgao Station and across Goa. Luxury, comfort, and transparency guaranteed.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button onclick="navigateTo('cars')" class="btn-primary">View Cars <svg class="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg></button>
              <button onclick="navigateTo('bikes')" class="btn-secondary">View Bikes <svg class="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></button>
            </div>
          </div>
        </div>
        <div class="ai-concierge-box hidden lg:block">
          <div class="glass p-6 rounded-3xl shadow-2xl ai-box-border">
            <div class="flex items-center space-x-3 mb-4">
              <div class="ai-icon-circle"><svg class="text-white w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div>
              <h4 class="font-black uppercase" style="letter-spacing: -0.05em;">Travel Assistant</h4>
            </div>
            <p class="text-sm mb-4 ai-subtext">Need help picking a ride? Ask me!</p>
            <div class="space-y-3">
              <input type="text" id="ai-prompt" placeholder="e.g. Best car for 4 people to visit Dudhsagar?" class="ai-input">
              <button onclick="handleAiHelp()" id="ai-submit-btn" class="ai-submit-btn">Get Recommendation</button>
              <div id="ai-result" class="ai-result hidden"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white section-featured">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          ${renderSectionHeading('Our Premier Fleet', 'Top Rated', true)}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${cards}</div>
          <div class="text-center mt-12">
            <button onclick="navigateTo('cars')" class="text-primary font-bold hover:underline flex items-center mx-auto">Explore Full Collection <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
          </div>
        </div>
      </section>

      <section class="py-24 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            ${renderFeatureCard('Madgao Station Delivery', 'Arrive by train? We meet you at the platform exit.', 'map-pin')}
            ${renderFeatureCard('Instant Confirmation', 'Real-time availability and fast responses.', 'calendar')}
            ${renderFeatureCard('Elite Support', 'Dedicated concierge for all your road needs.', 'phone')}
            ${renderFeatureCard('Premium Condition', 'Pristine, well-maintained vehicles only.', 'star')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderVehiclesPage(type, list) {
  const vehiclesList = list || [];
  const merged = mergeVehiclesByName(vehiclesList);
  const filtered = merged
    .filter(v => v.type === type)
    .filter(v =>
      (v.name || '').toLowerCase().includes((searchQuery || '').toLowerCase()) ||
      (v.category || '').toLowerCase().includes((searchQuery || '').toLowerCase())
    );

  const title = type === 'car' ? 'Our Premium Cars' : 'Our Iconic Bikes';
  const subtitle = type === 'car' ? 'Elegance in Motion' : 'Freedom on Two Wheels';

  const gridContent = filtered.length > 0
    ? `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${filtered.map(v => renderMergedVehicleCard(v)).join('')}</div>`
    : `
      <div class="empty-state">
        <svg class="h-12 w-12 mx-auto mb-4 empty-state-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <h3 class="text-xl font-bold mb-2 empty-state-title">No vehicles found.</h3>
        <p class="empty-state-text">Try searching for something else or browse our full collection.</p>
        <button onclick="clearSearch()" class="mt-6 text-primary font-bold hover:underline">Clear Search</button>
      </div>
    `;

  return `
    <div class="pt-32 pb-24 px-4 max-w-7xl mx-auto animate-fade-in">
      ${renderSectionHeading(title, subtitle, false)}
      <div class="search-container">
        <svg class="search-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <input type="text" id="vehicle-search" placeholder="Search ${type === 'car' ? 'cars' : 'bikes'} by name or category..." class="search-input" value="${(searchQuery || '').replace(/"/g, '&quot;')}" oninput="handleSearchInput(event.target.value)">
        ${searchQuery ? `<button onclick="clearSearch()" class="search-clear" aria-label="Clear search"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>` : ''}
      </div>
      ${gridContent}
    </div>
  `;
}

function renderBookingPage(list) {
  if (bookingStep === 2) {
    return `
      <div class="pt-32 pb-24 px-4 flex justify-center items-center min-h-booking">
        <div class="max-w-md w-full bg-white booking-success-card">
          <div class="booking-success-icon"><svg class="text-green-600 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
          <h2 class="text-3xl font-black mb-4">Request Sent!</h2>
          <p class="mb-8 booking-success-text">Your booking details have been sent to our concierge via WhatsApp. We will confirm your ride within minutes!</p>
          <button onclick="navigateTo('home')" class="w-full bg-primary py-4 rounded-xl text-white font-bold hover:bg-primary-dark transition-all">Back to Home</button>
        </div>
      </div>
    `;
  }

  const imgSrc = selectedVehicle ? getVehicleImage(selectedVehicle) : '';

  let selectedPrice = selectedVehicle && selectedVehicle.pricePerDay ? selectedVehicle.pricePerDay : 0;
  let selectedTransmissionDisplay = bookingFormData.transmission || 'Select';

  if (selectedVehicle && selectedVehicle.transmissions && bookingFormData.transmission) {
    const selectedTrans = selectedVehicle.transmissions.find(t => t.type === bookingFormData.transmission);
    if (selectedTrans) {
      selectedPrice = selectedTrans.price;
    }
  }

  const selectedBlock = selectedVehicle
    ? `
      <div class="p-6 mb-10 rounded-3xl flex items-center space-x-6 selected-vehicle-block">
        <img src="${imgSrc}" alt="${(selectedVehicle.name || '').replace(/"/g, '&quot;')}" class="w-24 h-24 object-cover rounded-2xl" onerror="this.src='${PLACEHOLDER_IMAGE}'">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">Selected Vehicle</span>
          <h4 class="text-xl font-bold">${(selectedVehicle.name || '').replace(/</g, '&lt;')}</h4>
          <p class="text-sm text-slate-600">${selectedTransmissionDisplay}</p>
          <p class="text-sm font-bold text-primary">₹${selectedPrice}/day</p>
        </div>
      </div>
    `
    : '<p class="text-lg mb-10 text-slate-500 leading-relaxed">Arriving at Madgao Station? We specialize in quick handovers right at the station exit.</p>';

  const pickupOpts = [
    'Madgao Railway Station (Main Exit)',
    'Madgao Railway Station (PFC Exit)',
    'Mopa International Airport',
    'Dabolim Airport',
    'Margao City Center',
    'Colva Beach',
    'seraulim Beach',
    'Palolem Beach',
    'Agonda Beach',
    'varca Beach',
    'Benaulim Beach',
    'Cavelossim Beach',
    'Mobor Beach',
    'Betalbatim Beach',
    'Cabo De Rama Fort',
    'Canacona Bus Stop',
    'Panjim City Center',
    'Vasco Da Gama',
    'Mapusa City Center',
    'Anjuna Beach',
    'Baga Beach',
    'Calangute Beach',
    'Candolim Beach',
    'Sinquerim Beach',
    'Fort Aguada',
    'Miramar Beach',
    'Caranzalem Beach',
    'Dona Paula',
    'Old Goa',
    'Panaji Railway Station',
    'Ponda City Center',
    'Vagator Beach',
    'Morjim Beach',
    'Ashwem Beach',
    'Arambol Beach',
    'Chapora Fort',
    'Anjuna Flea Market',
    'Mapusa Market',
    'Margao Market',
    'Panjim Market',
    'Vasco Market'
  ];
  const pickupSelect = pickupOpts.map(opt => `<option value="${opt.replace(/"/g, '&quot;')}" ${bookingFormData.pickup === opt ? 'selected' : ''}>${opt.replace(/</g, '&lt;')}</option>`).join('');

  return `
    <div class="pt-32 pb-24 px-4 max-w-7xl mx-auto animate-fade-in">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          ${renderSectionHeading('Confirm Your Journey', 'Booking', false)}
          ${selectedBlock}
          <div class="space-y-6">
            ${renderBookingFeature('Pickup at Madgao Station', 'map-pin')}
            ${renderBookingFeature('Direct Concierge Contact', 'message')}
            ${renderBookingFeature('Verified Premium Fleet', 'check')}
          </div>
        </div>
        <div class="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100 booking-form-card">
          <form onsubmit="handleBookingSubmit(event)" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Full Name</label>
                <input type="text" required placeholder="John Doe" id="booking-name" class="input-field" value="${(bookingFormData.name || '').replace(/"/g, '&quot;')}">
              </div>
              <div>
                <label class="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Phone</label>
                <input type="tel" required placeholder="+91 99..." id="booking-phone" class="input-field" value="${(bookingFormData.phone || '').replace(/"/g, '&quot;')}">
              </div>
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Station / Pickup</label>
              <select id="booking-pickup" class="input-field">${pickupSelect}</select>
            </div>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Date</label>
                <input type="date" required id="booking-date" class="input-field" value="${(bookingFormData.date || '').replace(/"/g, '&quot;')}">
              </div>
              <div>
                <label class="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Days</label>
                <input type="number" min="1" required id="booking-duration" class="input-field" value="${(bookingFormData.duration || '1').replace(/"/g, '&quot;')}">
              </div>
            </div>
            ${selectedVehicle && selectedVehicle.transmissions && selectedVehicle.transmissions.length > 1 ? `
            <div>
              <label class="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Select Transmission</label>
              <div class="grid grid-cols-2 gap-3">
                ${selectedVehicle.transmissions.map(trans => `
                  <label class="transmission-radio-label">
                    <input type="radio" name="transmission" value="${trans.type}" ${bookingFormData.transmission === trans.type ? 'checked' : ''} required onchange="document.getElementById('booking-transmission').value = this.value">
                    <span class="transmission-radio-text">${trans.type}<br/>₹${trans.price}</span>
                  </label>
                `).join('')}
              </div>
              <input type="hidden" id="booking-transmission" value="${bookingFormData.transmission || (selectedVehicle.transmissions[0] ? selectedVehicle.transmissions[0].type : '')}">
            </div>
            ` : selectedVehicle && selectedVehicle.transmissions && selectedVehicle.transmissions.length === 1 ? `
            <div>
              <label class="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Transmission</label>
              <div class="input-field bg-slate-100 text-slate-700 font-semibold flex items-center">${selectedVehicle.transmissions[0].type}</div>
              <input type="hidden" id="booking-transmission" value="${selectedVehicle.transmissions[0].type}">
            </div>
            ` : bookingFormData.transmission ? `
            <div>
              <label class="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">Transmission</label>
              <div class="input-field bg-slate-100 text-slate-700 font-semibold flex items-center">${bookingFormData.transmission}</div>
              <input type="hidden" id="booking-transmission" value="${bookingFormData.transmission}">
            </div>
            ` : ''}
            <button type="submit" class="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black text-xl shadow-lg transition-all flex items-center justify-center space-x-3">
              <span>Request on WhatsApp</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
}

function renderContactPage() {
  return `
    <div class="pt-32 pb-24 px-4 max-w-7xl mx-auto animate-fade-in">
      ${renderSectionHeading('Connect With Us', 'Contact', true)}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        ${renderContactCard('Concierge', '+91 99753 56697', 'phone')}
        ${renderContactCard('Corporate', 'bookings@primegoa.com', 'mail')}
        ${renderContactCard('Location', 'Madgao Railway Station, Goa', 'map-pin')}
      </div>
      <div class="contact-map">
        <iframe title="Madgao Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15392.378931765275!2d73.96805252871093!3d15.269477000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb38914b43939%3A0xe54e60123512b9d0!2sMadgaon%20Junction!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin" loading="lazy"></iframe>
      </div>
    </div>
  `;
}

// ============================================
// SECTION 7: COMPONENT RENDERERS
// ============================================

function renderSectionHeading(title, subtitle, centered) {
  return `
    <div class="mb-12 ${centered ? 'text-center' : ''}">
      <span class="text-primary font-black uppercase tracking-widest text-sm mb-2 block">${(subtitle || '').replace(/</g, '&lt;')}</span>
      <h2 class="text-3xl md:text-5xl font-black font-serif">${(title || '').replace(/</g, '&lt;')}</h2>
      ${centered ? '<div class="section-divider"></div>' : ''}
    </div>
  `;
}

function renderMergedVehicleCard(vehicle) {
  if (!vehicle) return '';
  const img = getVehicleImage(vehicle);
  const name = (vehicle.name || '').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const category = (vehicle.category || '').replace(/</g, '&lt;');
  const defaultDeposit = vehicle.type === 'car' ? 3000 : 1000;
  const deposit = (vehicle.deposit !== undefined && vehicle.deposit !== null) ? vehicle.deposit : defaultDeposit;
  const hasMultipleTransmissions = vehicle.transmissions && vehicle.transmissions.length > 1;
  const isCar = vehicle.type === 'car';

  // Sort transmissions: Manual first, then Automatic, then others
  const sortedTransmissions = vehicle.transmissions ? [...vehicle.transmissions].sort((a, b) => {
    const order = { 'Manual': 0, 'Automatic': 1 };
    return (order[a.type] || 2) - (order[b.type] || 2);
  }) : [];

  // Only show transmission buttons for cars
  const transmissionButtons = isCar ? sortedTransmissions.map(trans => `
    <button onclick="selectVehicle('${(vehicle.id || '').replace(/'/g, "\\'")}', '${trans.type}')" class="transmission-btn">
      <span class="transmission-label">${trans.type}</span>
      <span class="transmission-price">₹${trans.price}</span>
    </button>
  `).join('') : '';

  // Specs grid: Show fuel and seats for cars, minimal for bikes
  const specsGrid = isCar ? `
    <div class="spec-item">
      <svg class="spec-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
      <span>${(vehicle.fuel || '').replace(/</g, '&lt;')}</span>
    </div>
    <div class="spec-item">
      <svg class="spec-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>${vehicle.seats || 0} Seats</span>
    </div>
  ` : '';

  // For bikes: show price and a select button instead of transmission options
  const bikePrice = !isCar && vehicle.pricePerDay ? `
    <div class="bike-price-display">₹${vehicle.pricePerDay}<span class="price-unit">/day</span></div>
  ` : '';

  const bikeSelectButton = !isCar ? `
    <button onclick="selectVehicle('${(vehicle.id || '').replace(/'/g, "\\'")}')" class="transmission-btn" style="grid-column: span 2;">
      <span class="transmission-label">Select This Bike</span>
      <span class="transmission-price">Book Now</span>
    </button>
  ` : '';

  const actionSection = isCar ?
    `<div class="transmission-options">${transmissionButtons}</div>` :
    `${bikePrice}<div class="transmission-options">${bikeSelectButton}</div>`;

  return `
    <div class="premium-vehicle-card">
      <div class="vehicle-image-container">
        <img src="${img}" alt="${name}" class="vehicle-image" onerror="this.src='${PLACEHOLDER_IMAGE}'">
        <div class="category-badge">${category}</div>
        <div class="deposit-badge">DEPOSIT<br>₹${deposit}</div>
      </div>
      <div class="card-content">
        <h3 class="vehicle-name">${name}</h3>
        ${specsGrid ? `<div class="specs-grid">${specsGrid}</div>` : ''}
        ${actionSection}
        ${isCar ? `<div class="price-disclaimer">* Per day price excludes fuel</div>` : ''}
      </div>
    </div>
  `;
}

function renderVehicleCard(vehicle) {
  if (!vehicle) return '';
  const img = getVehicleImage(vehicle);
  const name = (vehicle.name || '').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  const category = (vehicle.category || '').replace(/</g, '&lt;');
  const isDualTransmission = vehicle.transmission === 'Manual ';
  const defaultDeposit = vehicle.type === 'car' ? 3000 : 1000;
  const deposit = (vehicle.deposit !== undefined && vehicle.deposit !== null) ? vehicle.deposit : defaultDeposit;

  return `
    <div class="vehicle-card ${isDualTransmission ? 'ring-2 ring-blue-400 shadow-lg' : ''}">
      <div class="vehicle-image">
        <img src="${img}" alt="${name}" onerror="this.src='${PLACEHOLDER_IMAGE}'">
        ${isDualTransmission ? '<div class="absolute top-12 right-4 bg-blue-500 text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-bold">DUAL OPTIONS</div>' : ''}
        <div class="absolute top-4 right-4 px-4 py-1.5 rounded-full shadow-sm vehicle-price-badge">
          <span class="text-primary font-bold">₹${vehicle.pricePerDay || 0}</span>
          <span class="text-xs ml-1 text-slate-500">/ day</span>
        </div>
        <div class="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full shadow-sm">
          <span class="text-white text-xs font-bold uppercase">${category}</span>
        </div>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <h3 class="text-xl font-bold mb-4 font-serif">${name}</h3>
        ${isDualTransmission ? '<div class="mb-4 p-2 bg-blue-50 border-l-4 border-blue-400 rounded"><span class="text-sm font-semibold text-blue-700"></span></div>' : ''}
        <div class="grid grid-cols-2 gap-3 mb-6">
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            ${(vehicle.transmission || '').replace(/</g, '&lt;')}
          </div>
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            ${(vehicle.fuel || '').replace(/</g, '&lt;')}
          </div>
          <div class="flex items-center text-sm text-slate-500">
            <svg class="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            ${vehicle.seats || 0} Seats
          </div>
        </div>
        <p class="deposit-badge">💰 Security Deposit: ₹${deposit}</p>
        <div style="margin-top: auto;">
          <button onclick="selectVehicle('${(vehicle.id || '').replace(/'/g, "\\'")}')" class="vehicle-card-btn">Select Vehicle <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
        </div>
      </div>
    </div>
  `;
}

function renderFeatureCard(title, desc, icon) {
  const icons = {
    'map-pin': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>',
    'calendar': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>',
    'phone': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>',
    'star': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>'
  };
  const svgPath = icons[icon] || icons['star'];
  return `
    <div class="feature-card">
      <div class="feature-icon"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgPath}</svg></div>
      <h3 class="font-bold text-lg mb-2">${(title || '').replace(/</g, '&lt;')}</h3>
      <div class="text-sm text-slate-500 leading-relaxed">${(desc || '').replace(/</g, '&lt;')}</div>
    </div>
  `;
}

function renderBookingFeature(text, icon) {
  const icons = {
    'map-pin': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>',
    'message': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>',
    'check': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>'
  };
  const svgPath = icons[icon] || icons['check'];
  return `
    <div class="flex items-center space-x-4">
      <div class="w-10 h-10 rounded-full flex items-center justify-center text-primary booking-feature-icon"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgPath}</svg></div>
      <span class="font-bold">${(text || '').replace(/</g, '&lt;')}</span>
    </div>
  `;
}

function renderContactCard(title, info, icon) {
  const icons = {
    'phone': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>',
    'mail': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>',
    'map-pin': '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>'
  };
  const svgPath = icons[icon] || icons['map-pin'];
  const extraClass = icon === 'phone' ? 'font-bold' : '';
  const extraStyle = icon === 'map-pin' ? 'font-size: 0.875rem;' : '';
  return `
    <div class="glass p-10 rounded-3xl text-center hover:border-primary transition-colors contact-card">
      <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary contact-card-icon"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">${svgPath}</svg></div>
      <h3 class="font-bold mb-2">${(title || '').replace(/</g, '&lt;')}</h3>
      <p class="${extraClass}" style="color: var(--slate-500); ${extraStyle}">${(info || '').replace(/</g, '&lt;')}</p>
    </div>
  `;
}

// ============================================
// SECTION 8: EVENT HANDLERS
// ============================================

function handleSearchInput(value) {
  searchQuery = value || '';
  renderPage();
}

function clearSearch() {
  searchQuery = '';
  renderPage();
}

function handleAiHelp() {
  const input = $('ai-prompt');
  const btn = $('ai-submit-btn');
  const resultDiv = $('ai-result');
  if (!input || !btn || !resultDiv) return;
  const query = (input.value || '').trim();
  if (!query) return;

  btn.textContent = 'Thinking...';
  btn.disabled = true;
  resultDiv.classList.add('hidden');

  setTimeout(() => {
    const prompt = query.toLowerCase();
    let response = '';
    if (prompt.includes('4 people') || prompt.includes('family')) {
      response = 'For 4 people, I recommend the Hyundai Creta or Maruti Ertiga. The Creta offers premium comfort with great features, while the Ertiga provides spacious seating perfect for families. Both are ideal for Goa\'s coastal roads!';
    } else if (prompt.includes('bike') || prompt.includes('solo')) {
      response = 'For a solo adventure, the Royal Enfield Hunter 350 is perfect! Modern, agile, and great for Goa\'s scenic routes. If you prefer a scooter, the Activa 6G offers comfort and easy handling.';
    } else if (prompt.includes('luxury') || prompt.includes('premium')) {
      response = 'For a luxury experience, consider the Toyota Fortuner or Audi A6. The Fortuner offers commanding road presence, while the A6 delivers German engineering excellence. Both ensure a memorable Goa trip!';
    } else if (prompt.includes('beach') || prompt.includes('offroad')) {
      response = 'For beach adventures and off-roading, the Mahindra Thar (Hardtop or Convertible) is your best bet! With 4x4 capability and rugged build, it\'s perfect for Goa\'s diverse terrain.';
    } else {
      response = 'Based on your needs, I\'d suggest the Maruti Brezza for a balanced experience - compact yet spacious, with great ground clearance for Goa\'s roads. Or consider the Hyundai i20 for city drives with premium features!';
    }
    resultDiv.textContent = response;
    resultDiv.classList.remove('hidden');
    btn.textContent = 'Get Recommendation';
    btn.disabled = false;
  }, 1500);
}

function handleBookingSubmit(event) {
  event.preventDefault();
  const nameEl = $('booking-name');
  const phoneEl = $('booking-phone');
  const pickupEl = $('booking-pickup');
  const dateEl = $('booking-date');
  const durationEl = $('booking-duration');
  const transmissionEl = $('booking-transmission');
  const pickupLocationEl = $('booking-pickup-location');
  const dropLocationEl = $('booking-drop-location');
  const needChargerEl = $('booking-need-charger');

  if (!nameEl || !phoneEl) {
    console.error('Booking form missing required elements', { nameEl, phoneEl });
    alert('Booking form is not available. Please refresh the page.');
    return;
  }

  const name = (nameEl.value || '').trim();
  const phone = (phoneEl.value || '').trim();

  if (!name) {
    console.error('Validation error: name empty');
    alert('Please enter your name.');
    nameEl.focus();
    return;
  }

  if (!phone) {
    console.error('Validation error: phone empty');
    alert('Please enter your phone number.');
    phoneEl.focus();
    return;
  }

  const pickup = pickupEl ? (pickupEl.value || '') : '';
  const date = dateEl ? (dateEl.value || '') : '';
  // Convert date from YYYY-MM-DD to DD-MM-YYYY for WhatsApp message
  let formattedDate = '';
  if (date) {
    try {
      const parts = date.split('-');
      if (parts.length === 3) {
        // parts: [YYYY, MM, DD]
        formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      } else {
        formattedDate = date;
      }
    } catch (err) {
      console.error('Date formatting error', err, { date });
      formattedDate = date;
    }
  }
  const duration = durationEl ? (durationEl.value || '1') : '1';
  const transmission = transmissionEl ? (transmissionEl.value || '') : '';
  const pickupLocation = pickupLocationEl ? (pickupLocationEl.value || '') : '';
  const dropLocation = dropLocationEl ? (dropLocationEl.value || '') : '';
  const needCharger = needChargerEl ? (needChargerEl.checked ? 'Yes' : 'No') : 'No';

  bookingFormData = { name, phone, pickup, date, duration, transmission, pickupLocation, dropLocation, needCharger };
  const vehicleName = selectedVehicle ? (selectedVehicle.name || 'Not specified') : 'Not specified';

  // Build a plain-text message then encode it once for the URL
  let plainMessage = `*New Booking Request from RoyalGoa*\n\nCustomer: ${name}\nPhone: ${phone}\nVehicle: ${vehicleName}\n`;
  if (transmission) plainMessage += `Transmission: ${transmission}\n`;
  if (pickup) plainMessage += `Pickup Station: ${pickup}\n`;
  if (pickupLocation) plainMessage += `Pickup Location: ${pickupLocation}\n`;
  if (dropLocation) plainMessage += `Drop Location: ${dropLocation}\n`;
  if (date) plainMessage += `Date: ${formattedDate}\n`;
  plainMessage += `Duration: ${duration} days\nNeed Charger: ${needCharger}\n\nPlease confirm availability for this ride.`;

  const encoded = encodeURIComponent(plainMessage);
  const whatsappURL = `https://wa.me/919975356697?text=${encoded}`;

  console.log('handleBookingSubmit: sending to WhatsApp', { whatsappURL, bookingFormData });

  try {
    // Use location.href to avoid popup blockers
    window.location.href = whatsappURL;
  } catch (err) {
    console.error('Navigation to WhatsApp failed', err);
    alert('Unable to open WhatsApp automatically. Please contact +919975356697 with your booking details.');
  }

  bookingStep = 2;
  renderPage();
}

// ============================================
// END OF MERGED main.js FILE
// ============================================
