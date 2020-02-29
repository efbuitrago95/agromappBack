import {Model} from "objection";
import cropsModel from "./crops.model";
import itemsModel from "./items.model";

export default class cropItemsModel extends Model {
    static get tableName() {
        return 'CROP_ITEMS';
    }
    static get relationMappings() {
        return {
            items:{
                relation: Model.HasOneRelation,
                modelClass: itemsModel,
                join: {
                    from: "CROP_ITEMS.idItem",
                    to: "ITEMS.id"
                }
            },
            crops: {
                relation: Model.HasOneRelation,
                modelClass: cropsModel,
                join: {
                    from: "CROP_ITEMS.idCrop",
                    to: "CROPS.id"
                }
            },

        };
    }
}
