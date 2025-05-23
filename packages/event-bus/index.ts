type Listener<T = any> = (data: T) => void;

class EventBus {
  private listeners: Record<string, Listener[]> = {};

  on<T = any>(event: string, callback: Listener<T>): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback as Listener);
  }

  off<T = any>(event: string, callback: Listener<T>): void {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(
        (listener) => listener !== callback
      );
    }
  }

  emit<T = any>(event: string, data: T): void {
    if (this.listeners[event]) {
      this.listeners[event].forEach((listener) => {
        (listener as Listener<T>)(data);
      });
    }
  }
}

export default EventBus;
