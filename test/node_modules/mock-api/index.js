import { Observable } from "rxjs";

export default function mockApi(responseData, time = 0) {
  let ms = 0;
  if (typeof time == "number") {
    ms = time * 1000;
  }
  const observable = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(responseData);
    }, ms);
  });

  return observable;
}
