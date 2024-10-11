import {API_BASE_URL} from 'src/constants';
import {
  type AudioDto,
  type AudioType,
  type HomeDto,
  type LatestDto,
  type TopDto,
} from 'src/utils/dtos';
import {NotFoundError} from 'src/utils/errors';

interface Q<T> {
  data: T;
  err: null | NotFoundError;
}

export class ServerQuery {
  public static async home() {
    return await this.q<HomeDto>('/');
  }

  public static async top() {
    return await this.q<TopDto[]>('/top');
  }

  public static async topToday() {
    return await this.q<TopDto[]>('/top/today');
  }

  public static async topYesterday() {
    return await this.q<TopDto[]>('/top/yesterday');
  }

  public static async topHour() {
    return await this.q<TopDto[]>('/top/hour');
  }

  public static async topWeek() {
    return await this.q<TopDto[]>('/top/week');
  }

  public static async latest() {
    return await this.q<LatestDto[]>('/latest');
  }

  public static async audio(type: AudioType, slug: string) {
    const endpoint = `/${type}/${slug}`;
    return await this.q<AudioDto>(endpoint);
  }

  // base query
  private static async q<T>(endpoint: string): Promise<Q<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    let err: Q<T>['err'] = null;

    if (response.status !== 200) {
      err = new NotFoundError(url);
    }

    return {data, err};
  }
}
