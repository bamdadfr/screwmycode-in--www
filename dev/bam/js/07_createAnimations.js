let _time = 0

const animateBackground = () => {

  /**
   * incrementing _time
   * @type {number}
   * @private
   */

  _time += 0.025

  /**
   * osc: oscillator
   * @type {number}
   */

  const osc = (Math.sin(_time) + Math.PI) / (Math.PI ** 0.5)

  backgroundGroup.children[0].scale.set(
    osc,
    osc,
    osc,
  )
}
