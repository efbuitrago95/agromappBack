import {Model} from "objection";
import crop_itemsModel from "./crop_items.model";

export default class itemsModel extends Model {
    static get tableName() {
        return 'ITEMS';
    }

    static get relationMappings() {
        return {
            crop_items: {
                relation: Model.HasManyRelation,
                modelClass: crop_itemsModel,
                join: {
                    from: 'ITEMS.id',
                    to: 'CROP_ITEMS.idItem'
                }
            }
        };
    }
}
