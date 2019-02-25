import { take, put, select } from 'redux-saga/effects';
import * as mutation from './mutations';
import uuid from 'uuid';

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(mutation.REQUEST_TASK_CREATION);
    const ownerID = `U1`;
    const taskID = uuid();
    yield put(mutation.createTask(taskID, groupID, ownerID));
    console.log('Got group ID', groupID);
  }
}
