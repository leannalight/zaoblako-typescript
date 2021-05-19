// Observable =================
import { Observable } from 'rxjs';

// Observable пример 1 ===========================
export function useObservable(element: any, eventName: string) {
    return new Observable(observer => {
        // Создаем обработчик событий, отправляющий данные подписчику
        let handler = event => observer.next(event);
        // Добавляем подписку на событие
        element.addEventListener(eventName, handler, true);
        // Возвращаем функцию очистки, которая будет отменять поток событий
        return () => {
            // Удаляем подписку с элемента
            element.removeEventListener(eventName, handler, true);
        };
    });
}

// Observable пример 2 ===========================

// Создаем Observable, который начнет прослушивать обновления геолокации
// когда потребитель подписывается.
const locations = new Observable((observer) => {
    let watchId: number;
  
    // Простая проверка API геолокации предоставляет значения для публикации
    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
        observer.next(position);
      }, (error: GeolocationPositionError) => {
        observer.error(error);
      });
    } else {
      observer.error('Geolocation not available');
    }
  
   // Когда потребитель откажется от подписки, очищаем данные, готовые к следующей подписке.
    return {
      unsubscribe() {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  });
  
 // Вызов метода subscribe () для прослушивания обновлений.
  const locationsSubscription = locations.subscribe({
    next(position) {
      console.log('Current Position: ', position);
    },
    error(msg) {
      console.log('Error Getting Location: ', msg);
    }
  });
  
  // Прекращаем прослушивание местоположения через 10 секунд
  setTimeout(() => {
    locationsSubscription.unsubscribe();
  }, 10000);