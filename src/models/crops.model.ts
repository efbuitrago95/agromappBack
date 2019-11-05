import {Model} from "objection";

export default class cropsModel extends Model {
    static get tableName() {
        return 'CROPS';
    }
}
