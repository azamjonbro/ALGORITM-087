let btn = document.querySelector('.btn-success');
let overview = document.querySelector('.overview');
btn.addEventListener('click', function() {
  overview.style.display = 'flex';
});

overview.addEventListener('click', function(event) {
 console.log(event.target);
 if(event.target.classList=='overview') {
   overview.style.display = 'none';
 }
})