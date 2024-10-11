interface R {
  revalidate: number;
}

export class Revalidate {
  public static get minute(): R {
    return {
      revalidate: 60,
    };
  }
}
