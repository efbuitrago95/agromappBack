import {Model} from "objection";

export default class rolesUsersModel extends Model {
    static get tableName() {
        return 'ROLES_USERS';
    }
}
