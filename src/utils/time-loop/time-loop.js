import React, {PureComponent} from 'react';
import raf from 'raf';
import hoistNonReactStatics from 'hoist-non-react-statics';

// NB this is only an utility for the examples
export default (
  C,
  {refreshRate = 60} = {},
) => {
  class TL extends PureComponent {
    // eslint-disable-next-line react/static-property-placement
    static displayName = `timeLoop(${C.displayName || C.name || ''})`;

    // state;

    // eslint-disable-next-line react/state-in-constructor
    state = {
      time: 0,
      tick: 0,
    };

    _r;

    componentDidMount() {
      let startTime;
      let lastTime;
      const interval = 1000 / refreshRate;
      lastTime = -interval;
      const loop = (t) => {
        this._r = raf(loop);
        if (!startTime) {
          startTime = t;
        }
        if (t - lastTime > interval) {
          lastTime = t;
          this.setState({
            time: t - startTime,
            // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
            tick: this.state.tick + 1,
          });
        }
      };
      this._r = raf(loop);
    }

    componentWillUnmount() {
      raf.cancel(this._r);
    }

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <C {...this.props} {...this.state} />;
    }
  }

  hoistNonReactStatics(TL, C);

  return TL;
};
