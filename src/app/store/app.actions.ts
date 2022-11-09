import { createAction, props, union } from '@ngrx/store';
import { JobInterface } from 'src/app/core/interfaces/job.interface';

export enum ActionsTypes {
  GetJobs = '[] Get Jobs',
  GetJobsSuccess = '[Job Api] Get Jobs Success',
  GetJobsError = '[Job Api] Get Jobs Error',
}

/*
 * Get Jobs
 */
export const GetJobs = createAction(ActionsTypes.GetJobs);

export const GetJobsSuccess = createAction(
  ActionsTypes.GetJobsSuccess,
  props<{ jobs: JobInterface[] }>(),
);

export const GetJobsError = createAction(ActionsTypes.GetJobsError);

const actionsUnion = union({
  /*
   * Get Jobs
   */
  GetJobs,
  GetJobsSuccess,
  GetJobsError,
});

export type Actions = typeof actionsUnion;
