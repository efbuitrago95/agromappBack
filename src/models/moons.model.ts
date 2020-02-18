import {Model} from "objection";
import TypeMoonsModel from "./type_Moons.model";
import languagesModel from "./languages.model";

export default class moonsModel extends Model {
    static get tableName() {
        return 'MOONS';
    }

    static get relationMappings() {
        return {
            items: {
                relation: Model.HasManyRelation,
                modelClass: TypeMoonsModel,
                join: {
                    from: "TYPE_MOONS.id",
                    to: "MOONS.idTypeMoon"
                }
            },
            languages: {
                relation: Model.HasOneRelation,
                modelClass: languagesModel,
                join: {
                    from: "MOONS.idLanguage",
                    to: "LANGUAGES.id"
                }
            }
        };
    }
}
