import { AxiosResponse } from 'axios';

export default interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}