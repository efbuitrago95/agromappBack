import {Model} from "objection";


export default class TypeMoonsModel extends Model {
    static get tableName() {
        return 'TYPE_MOONS';
    }
}
