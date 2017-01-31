var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];


$('body').css({'background-image': 'url(./media/images/home/' + images[Math.floor(Math.random() * images.length)] + ')'});