// Booking Form Handler for Royal Goa Ride
// Sends booking details via WhatsApp

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const pickupDateInput = document.getElementById('pickupDate');
    const returnDateInput = document.getElementById('returnDate');
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    pickupDateInput.setAttribute('min', today);
    returnDateInput.setAttribute('min', today);
    
    // Update return date minimum when pickup date changes
    pickupDateInput.addEventListener('change', function() {
        returnDateInput.setAttribute('min', this.value);
        if (returnDateInput.value && returnDateInput.value < this.value) {
            returnDateInput.value = this.value;
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const car = document.getElementById('car').value;
        const pickupDate = document.getElementById('pickupDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const location = document.getElementById('location').value;
        
        // Calculate number of days
        const pickup = new Date(pickupDate);
        const returnD = new Date(returnDate);
        const days = Math.ceil((returnD - pickup) / (1000 * 60 * 60 * 24));
        
        // Format WhatsApp message
        const message = `🚗 *New Booking Request*

👤 *Name:* ${name}
📱 *Phone:* ${phone}
🚘 *Vehicle:* ${car}
📅 *Pickup Date:* ${formatDate(pickupDate)}
📅 *Return Date:* ${formatDate(returnDate)}
⏱️ *Duration:* ${days} day(s)
📍 *Pickup Location:* ${location}

_Sent from RoyalGoaRide.com_`;
        
        // WhatsApp number (Royal Goa Ride)
        const whatsappNumber = '919975356697';
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Optional: Show success message
        showSuccessMessage();
    });
    
    // Format date to readable format
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    }
    
    // Show success message
    function showSuccessMessage() {
        const btn = document.querySelector('.whatsapp-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="bi bi-check-circle-fill"></i> Opening WhatsApp...';
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)';
        }, 3000);
    }
});
