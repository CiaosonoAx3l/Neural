// Hamburger
		const hamburger = document.getElementById('hamburger');
		const mobileMenu = document.getElementById('mobileMenu');
		const mobileOverlay = document.getElementById('mobileOverlay');

		hamburger.addEventListener('click', () => {
			mobileMenu.classList.contains('active') ? closeMobile() : openMobile();
		});

		function openMobile() {
			hamburger.classList.add('open');
			mobileMenu.classList.add('active');
			mobileOverlay.classList.add('active');
			document.body.style.overflow = 'hidden';
		}

		function closeMobile() {
			hamburger.classList.remove('open');
			mobileMenu.classList.remove('active');
			mobileOverlay.classList.remove('active');
			document.body.style.overflow = '';
		}
		const cursor = document.getElementById('cursor'), ring = document.getElementById('cursor-ring');
		let mx = 0, my = 0, rx = 0, ry = 0;
		document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
		(function animateRing() { rx += (mx - rx) * .12; ry += (my - ry) * .12; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animateRing); })();
		document.querySelectorAll('a,button').forEach(el => {
			el.addEventListener('mouseenter', () => { cursor.style.width = '6px'; cursor.style.height = '6px'; ring.style.width = '54px'; ring.style.height = '54px'; });
			el.addEventListener('mouseleave', () => { cursor.style.width = '12px'; cursor.style.height = '12px'; ring.style.width = '36px'; ring.style.height = '36px'; });
		});
		const scrollBar = document.getElementById('scrollBar');
		window.addEventListener('scroll', () => { scrollBar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%'; });
		const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }); }, { threshold: .12 });
		document.querySelectorAll('.reveal').forEach(el => obs.observe(el));