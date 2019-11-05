import {Model} from "objection";

export default class categoriesModel extends Model {
    static get tableName() {
        return 'CATEGORIES';
    }
}
