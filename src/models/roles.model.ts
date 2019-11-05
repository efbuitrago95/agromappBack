import {Model} from "objection";

export default class rolesModel extends Model {
    static get tableName() {
        return 'ROLES';
    }
}
