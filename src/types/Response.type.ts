export type Response<D = null> =
  | {
      success: true;
      result: D;
      message: null;
    }
  | {
      success: false;
      result: null;
      error: {
        message: string;
      };
    };
