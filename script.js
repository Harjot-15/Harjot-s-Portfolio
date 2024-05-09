document.addEventListener("DOMContentLoaded", function() {
    // Initialize skills rotation
    rotateSkills();
    // Initialize skill bars animation
    animateSkillBars();
    // Initialize image animations
    animateImages();
    // Initialize smooth scrolling
    initializeSmoothScroll();
    // Initialize Three.js (if necessary)
    initThreeJS();
    // Initialize contact form animation
    initContactFormAnimation();
    gsap.registerPlugin(ScrollTrigger);
    
    // Function definitions below
    function rotateSkills() {
        const skills = ['Visual Media Creator', 'Graphic Designer', 'Content Writer', 'Digital Marketer'];
        let currentSkillIndex = 0;
        const skillsContainer = document.getElementById('dynamic-skills');

        function updateSkill() {
            skillsContainer.style.opacity = 0;
            setTimeout(() => {
                skillsContainer.textContent = skills[currentSkillIndex];
                skillsContainer.style.opacity = 1;
                currentSkillIndex = (currentSkillIndex + 1) % skills.length;
            }, 500);
        }
        setInterval(updateSkill, 3000);
        updateSkill();
    }

    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const skillLevel = bar.dataset.level;
            gsap.to(bar, { width: skillLevel + '%', duration: 2 });
        });
    }

    function animateImages() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray('.animated-image').forEach(image => {
            gsap.fromTo(image,
                { opacity: 0, y: 50 },
                {
                    duration: 1,
                    opacity: 0.8,
                    y: 0,
                    scrollTrigger: {
                        trigger: image,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }

    function initializeSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

  function initContactFormAnimation() {
      const contactFormContainer = document.querySelector('#contact .container');

      gsap.set(contactFormContainer, { xPercent: 100, autoAlpha: 0 }); // Initial state off-screen

      ScrollTrigger.create({
          trigger: contactFormContainer,
          start: 'top bottom-=100',
          onEnter: () => gsap.to(contactFormContainer, {
              xPercent: 0,
              autoAlpha: 1,
              duration: 1.5,
              ease: 'power3.out'
          })
      });
  }
    function initThreeJS() {
        // Place your Three.js initialization code here, if any
    }
});
