// Promise ========================
export function callPromise(): void {
    const promise = new Promise<string>((resolve, reject): void => {
        const random: boolean = Math.random() > 0.3 ? true : false;
        if (random) {
            resolve('исполнено') // переводим промис в режим исполнено
        } else {
            reject('отклонено') // переводим промис в режим отклонено
        }
    });
    promise.then((value: string) => {
        console.log('resolved', value); // исполнено -> выводим значение в консоль
      })
    promise.catch(error => {
        console.log('rejected', error); // отклонено -> выводм ошибку в консоль
    });
}
