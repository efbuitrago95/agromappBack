import { Model } from "objection";
import languagesModel from "./languages.model";
import cropsModel from "./crops.model";

export default class classificationsModel extends Model {
    static get tableName() {
        return "CLASSIFICATIONS";
    }

    static get relationMappings() {
        return {
            items: {
                relation: Model.HasManyRelation,
                modelClass: cropsModel,
                join: {
                    from: "CLASSIFICATIONS.id",
                    to: "CROPS.idClassification"
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
