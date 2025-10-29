// S'assurer que le code s'exécute une fois que la page est entièrement chargée
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Cibler l'élément du bouton WhatsApp par son ID
    const whatsappButton = document.getElementById('whatsapp-float');
    
    if (whatsappButton) {
        // 2. Définir le numéro de téléphone (Mettez votre vrai numéro ici !)
        const phoneNumber = "22962737084"; // EXEMPLE : 22960123456
        
        // 3. Définir le message de bienvenue pré-rempli
        // URL encoding pour s'assurer que les espaces sont corrects
        const prefilledMessage = "Bonjour Esdie Fripe, je souhaite m'informer sur vos articles de premier choix (via le site web).";
        const encodedMessage = encodeURIComponent(prefilledMessage);
        
        // 4. Créer le lien final (Format WhatsApp standard)
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // 5. Assigner le lien créé à l'attribut href du bouton
        whatsappButton.href = whatsappLink;
        
        // Optionnel : Ajouter un petit effet visuel lors du clic (si la plateforme le permet)
        // whatsappButton.style.transform = 'scale(1.1)';
        // setTimeout(() => {
        //     whatsappButton.style.transform = 'scale(1)';
        // }, 150);
    }
});