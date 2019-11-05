import {Model} from "objection";

export default class cropItemsModel extends Model {
    static get tableName() {
        return 'CROP_ITEMS';
    }
}
