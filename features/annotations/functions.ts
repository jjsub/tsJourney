const add = (a: number, b: never): number => {
    return a + b; 
};

function divide(a: number, b: number): number {
    return a / b; 
}

const multiply = function(a: number, b: number): number {
    return a * b; 
}

function logger(message: string): void {
    console.log(message);
}

const throwError = (message: string): never => {
    throw new Error(message)
}

const forcast = {
    date: new Date(),
    weather: 'sunny'
};
// destructoring
const logWeather =  ( {date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}