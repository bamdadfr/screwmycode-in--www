
function update () {



	/**
	 * incrementing _frame
	 * @type {int}
	 * @private
	 */

	_frame += 1

	/**
	 * col: color
	 * @type {HEX color}
	 */

	if ( _frame >= _grad.color.length)  {
	  _loop += 1
	  _frame = 0
	}

	/**
	* incrementing _time
	* @type {number}
	* @private
	*/

	_time += 0.025


	animateBackground()
	animateCamera()
	// animateIntermediateSphere()


	// console.log(_camera)

}

window.addEventListener('resize', onWindowResize)

document.addEventListener('mousemove', onDocumentMouseMove, false)

init()

