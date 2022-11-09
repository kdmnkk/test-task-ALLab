import { createReducer, on } from '@ngrx/store';
import { Pending } from 'src/app/core/enums/pending.enum';
import { JobInterface } from 'src/app/core/interfaces/job.interface';
import * as Actions from './app.actions';

export interface StateInterface {
  jobs: JobInterface[];
  pending: Pending;
}

export const initialState: StateInterface = {
  jobs: [],
  pending: Pending.None,
};

export const reducer = createReducer(
  initialState,
  /*
   * Get Jobs
   */
  on(Actions.GetJobs, (state) => ({
    ...state,
    pending: Pending.Active,
  })),
  on(Actions.GetJobsSuccess, (state, action) => ({
    ...state,
    jobs: action.jobs,
    pending: Pending.None,
  })),
  on(Actions.GetJobs, (state) => ({
    ...state,
    pending: Pending.Error,
  })),
)

export type AppState = ReturnType<typeof reducer>;
