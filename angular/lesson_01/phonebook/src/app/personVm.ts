import { Person } from './person';

export class PersonVm extends Person {
    groupName: string;

    public static createPersonVm(person: Person, groupName: string): PersonVm {
        const pvm = new PersonVm();
        pvm.email = person.email;
        pvm.groupId = person.groupId;
        pvm.groupName = groupName;
        pvm.id = person.id;
        pvm.name = person.name;
        pvm.number = person.number;
        return pvm;
    }
}
