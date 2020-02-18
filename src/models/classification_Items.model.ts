import { Model } from "objection";
import languagesModel from "./languages.model";
import MoonItemsModel from "./moon_Items.model";//pendiente

export default class classification_ItemsModel extends Model {
    static get tableName() {
        return "CLASSIFICATION_ITEMS";
    }

    static get relationMappings() {
        return {
            moon_items: {
                relation: Model.HasManyRelation,
                modelClass: MoonItemsModel,
                join: {
                    from: "CLASSIFICATION_ITEMS.id",
                    to: "MOON_ITEMS.idClassificationItem"
                }
            },
            languages: {
                relation: Model.HasOneRelation,
                modelClass: languagesModel,
                join: {
                    from: "CLASSIFICATION_ITEMS.idLanguage",
                    to: "LANGUAGES.id"
                }
            }
        };
    }
}
