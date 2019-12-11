
const fetchUser = async () => {
  return {
    id: 1,
    name: 'John'
  }
}

interface PromiseMap {
  [key: string]: Promise<unknown>
}

export const suspensify = <T extends PromiseMap>(promiseMap: T) => {
  const wrappedPromiseMap = Object.fromEntries(
    Object
      .entries(promiseMap)
      .map(([key, promise]) => [key, _wrapPromise(promise)])
  );

  return wrappedPromiseMap;
}

const { user } = suspensify({
  user: fetchUser()
});

export const fetchUserData = (userId: number) => {
  const userPromise = fetchUser();

  return {
    user: _wrapPromise(userPromise)
  }
}

const _wrapPromise = <T>(promise: Promise<T>): { read: () => T } => {
  let status: 'pending' | 'success' | 'error' = 'pending';
  let result: T;

  const suspender = promise
    .then(r => {
      status = 'success';
      result = r;
    })
    .catch(e => {
      status = 'error';
      result = e;
    });

  return {
    read(): any {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  }
}