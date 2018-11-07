export function debounce(delay: number = 500): MethodDecorator {

    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const method = descriptor.value;
        let timerDebounce: any = null;
        descriptor.value = async function () {
            let context = this;
            let args = arguments;
            clearTimeout(timerDebounce);
            timerDebounce = setTimeout(async () => {
                const res = await method.apply(context, args);
                return res
            }, delay);
        };
    };
}

export function throttle(mustRunDelay: number = 500): MethodDecorator {

    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const method = descriptor.value;
        let args = arguments;
        // let timerDebounce: any = null;
        let start: any = null
        descriptor.value = async function () {
            let context = this;
            let currentTime = Date.now()
            if (currentTime - start >= mustRunDelay) {
                await method.apply(context, args);
                start = currentTime;
            }

        };
    };
}