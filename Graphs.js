let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
   }
  });
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}
dots.forEach((dot,i)=>{
    dot.addEventListener('click',()=>{
        currentIndex = i;
        showImage(currentIndex);
    });
});
setInterval(nextImage, 2000); // Change image every 2 seconds
showImage(currentIndex);
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
  }