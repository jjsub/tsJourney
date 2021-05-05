const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age, name }: {age: number; name: string} = profile;
// name' was also declared here. is totally fine


const {coords: {lat, lng}}:  {coords: {lat: number; lng: number} } = profile;
//also 
// const {lat, lng}: {lat: number; lng: number} = profile.coords;