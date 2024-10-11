import {API_BASE_URL} from 'src/constants';
import {
  type AudioDto,
  type HomeDto,
  type LastDto,
  type LatestDto,
  type TopDto,
} from 'src/utils/dtos';
import {Endpoint} from 'src/utils/endpoint';
import {NotFoundError} from 'src/utils/errors';

interface Q<T> {
  data: T;
  err: null | NotFoundError;
}

export class ServerQuery {
  public static async home() {
    return await this.q<HomeDto>(Endpoint.home);
  }

  public static async top() {
    return await this.q<TopDto[]>(Endpoint.top);
  }

  public static async topToday() {
    return await this.q<TopDto[]>(Endpoint.topToday);
  }

  public static async topYesterday() {
    return await this.q<TopDto[]>(Endpoint.topYesterday);
  }

  public static async topHour() {
    return await this.q<TopDto[]>(Endpoint.topHour);
  }

  public static async topWeek() {
    return await this.q<TopDto[]>(Endpoint.topWeek);
  }

  public static async latest() {
    return await this.q<LatestDto[]>(Endpoint.latest);
  }

  public static async last() {
    return await this.q<LastDto[]>(Endpoint.last);
  }

  public static async lastHour() {
    return await this.q<LastDto[]>(Endpoint.lastHour);
  }

  public static async lastDay() {
    return await this.q<LastDto[]>(Endpoint.lastDay);
  }

  public static async lastWeek() {
    return await this.q<LastDto[]>(Endpoint.lastWeek);
  }

  public static async lastMonth() {
    return await this.q<LastDto[]>(Endpoint.lastMonth);
  }

  public static async topMonth() {
    return await this.q<LastDto[]>(Endpoint.topMonth);
  }

  public static async audio(endpoint: Endpoint, slug: string) {
    const route = `${endpoint}/${slug}`;
    return await this.q<AudioDto>(route);
  }

  // base query
  private static async q<T>(endpoint: Endpoint | string): Promise<Q<T>> {
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
