import multireducer from 'multireducer';
import auth from './modules/auth';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';
import gameapp from './modules/gameapp';
import gameSettings from './modules/gameSettings';
import gameMainSettings from './modules/gameMainSettings';
import gameTranslations from './modules/gameTranslations';

export default function createReducers(asyncReducers) {
  return {
    online: (v = true) => v,
    notifs,
    auth,
    counter: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter
    }),
    info,
    gameapp,
    gameSettings,
    gameMainSettings,
    gameTranslations,
    ...asyncReducers
  };
}
