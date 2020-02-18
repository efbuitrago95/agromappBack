import {Model} from "objection";
import classificationsModel from "./classifications.model";
import languagesModel from "./languages.model";

export default class MoonItemsModel extends Model {
    static get tableName() {
        return 'MOON_ITEMS';
    }
    static get relationMappings() {
        return {
            items: {
                relation: Model.HasManyRelation,
                modelClass: classificationsModel,
                join: {
                    from: "CLASSIFICATIONS.id",
                    to: "MOON_ITEMS.idClassification"
                }
            },
            languages: {
                relation: Model.HasOneRelation,
                modelClass: languagesModel,
                join: {
                    from: "CLASSIFICATIONS.idLanguage",
                    to: "LANGUAGES.id"
                }
            }
        };
    }
}
