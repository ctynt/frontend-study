function LogExecutionTime(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
) {
    const originMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Executing ${propertyKey}...`)
        return originMethod.apply(this, args)
    }
}

class MyService {

    @LogExecutionTime
    doSomething() {
        console.log('Doing something...')
    }
}

const service = new MyService();
service.doSomething();