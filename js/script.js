window.addEventListener('scroll', function(){
	const header = document.querySelector('header');
	header.classList.toggle("d-sticky", window.scrollY > 0);
});

function menu(){
	const menuIlang = document.querySelector('.menuIlang');
	const nav = document.querySelector('.nav');
	menuIlang.classList.toggle('klik');
	nav.classList.toggle('klik');
}