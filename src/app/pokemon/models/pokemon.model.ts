export class Pokemon {
    id:        number = 0;
    name:      string = '';
    image:     string = '';
    attack:    number = 0;
    defense:   number = 0;
    hp:        number = 50;;
    type:      string = 'Generic';
    id_author: number = 0;
    idAuthor: number = 0;
    constructor(init?: Partial<Pokemon>) {
        Object.assign(this, init);
    }
}
