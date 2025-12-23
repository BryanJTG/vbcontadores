  document.querySelectorAll('.menu-servicio').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault()

      const targetId = this.getAttribute('href')
      const target = document.querySelector(targetId)

      const windowHeight = window.innerHeight
      const elementHeight = target.offsetHeight

      const offset = (windowHeight / 2) - (elementHeight / 2)
      const position = target.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({
        top: position,
        behavior: 'smooth'
      })
    })
  })
