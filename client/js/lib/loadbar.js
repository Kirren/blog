export default function() {
  let target = document.createElement('div')
  target.id = 'loadbar'
  document.body.appendChild(target)

  if (target) {
    document.addEventListener('readystatechange', () => {
      let state = document.readyState
      switch (state) {
        case 'interactive': {
          target.style.width = '50%'
        }; break;
        case 'complete': {
          target.style.width = '100%'
          setTimeout(() => {
            target.style.width = '0%'
          }, 1000)
        }; break;
      }
    })
  }
}
