// async/await =========================
function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

// async функция всегда возвращает Promise
export async function async(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
        // await преобразует Promise<number> в число
        const count: number = await delay(500, i);
        console.log(count);
    }

    console.log("World!");
}

// С использованием конструкции .then/.catch
export function anotherAsync(): void {
    (async function getData() {
        return fetch('https://api.exchangerate-api.com/v4')
    })()
        .then(res => {
            console.log(`Ответ сервера: ${res}`) // промис исполнен
        })
        .catch(err => {
            console.log(err); // промис отклонен
        })
}