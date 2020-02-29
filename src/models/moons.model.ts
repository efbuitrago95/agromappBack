import {Model} from "objection";
import TypeMoonsModel from "./type_Moons.model";
import languagesModel from "./languages.model";
import classificationsModel from "./classifications.model";

export default class moonsModel extends Model {
    static get tableName() {
        return 'MOONS';
    }
    static get relationMappings() {
        return {
            languages: {
                relation: Model.HasOneRelation,
                modelClass: languagesModel,
                join: {
                    from: "MOONS.idLanguage",
                    to: "LANGUAGES.id"
                }
            },
            classifications: {
                relation: Model.HasOneRelation,
                modelClass: classificationsModel,
                join: {
                    from: "MOONS.idClassification",
                    to: "CLASSIFICATIONS.id"
                }
            },
            typeMoons :{
                relation: Model.HasOneRelation,
                modelClass: TypeMoonsModel,
                join: {
                    from: "MOONS.idTypeMoon",
                    to: "TYPE_MOONS.id"
                }
            }
        };
    }
}
