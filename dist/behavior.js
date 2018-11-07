export function debounce(delay = 500) {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        let timerDebounce = null;
        descriptor.value = async function () {
            let context = this;
            let args = arguments;
            clearTimeout(timerDebounce);
            timerDebounce = setTimeout(async () => {
                const res = await method.apply(context, args);
                return res;
            }, delay);
        };
    };
}
export function throttle(mustRunDelay = 500) {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        let args = arguments;
        // let timerDebounce: any = null;
        let start = null;
        descriptor.value = async function () {
            let context = this;
            let currentTime = Date.now();
            if (currentTime - start >= mustRunDelay) {
                await method.apply(context, args);
                start = currentTime;
            }
        };
    };
}
