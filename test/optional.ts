describe('Optional', function(){
    it('should be null or undefined', function(){
        function sayHelo (name?: string)  {
                if(name){
                    console.info(`Hello ${name}`);
                } else {
                    console.info('Hello');
                }
                
        }
                sayHelo('iyan');
                const name: string | undefined = undefined;
                sayHelo(name);
    })
})