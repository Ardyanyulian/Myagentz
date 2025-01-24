describe('app', () => {
    interface toDo {
        title : string
        description: string
    }
    // for readony
    interface newTodo {
        title: string
    }
    // for record
    interface Person {
        title: string
        contract?: number
    }
    // pick utility
    interface pickperson {
        name: string
        id: number
        description?: string
    }
    const updateTodo = (todO: Partial<toDo>) => {
        todO.description
    }
    
    // readonly
    const update: Readonly<newTodo> = { title: 'iyan tampan' };
    update.title
    // for records
    const updateTodo2: Record<string,  Person> = {
        home: {title: 'iyan'},
        about: {title: 'Also human who wants accuire more btc'}
    
    }
    // pick
    type updatePerson2 = Pick<pickperson, 'name' & 'id'>;
    // omit
    type updatePerson3 = Omit<pickperson, 'description'>;
    it('should return value', function () {
        // pick
        const todo1: updatePerson2 = {
            name: 'iyan',
            id: 123
        }
        console.log(todo1)
    })
})

    



