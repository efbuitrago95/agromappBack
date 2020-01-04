import {Model} from "objection";
import crop_itemsModel from "./crop_items.model";
import propertiesModel from "./properties.model";

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
            },
            properties: {
                relation: Model.HasOneRelation,
                modelClass: propertiesModel,
                join: {
                    from: 'ITEMS.idProperty',
                    to: 'PROPERTIES.id'
                }
            }
        };
    }
}
