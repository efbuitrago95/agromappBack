import {Model} from "objection";
import permissionsModel from "./permissions.model";

export default class countriesModel extends Model {
    static get tableName() {
        return 'PERMISSIONS';
    }

    static get relationMappings() {
        return {
            languages: {
                relation: Model.HasOneRelation,
                modelClass: permissionsModel,
                join: {
                    from: 'PERMISSIONS.idLanguage',
                    to: 'LANGUAGES.id'
                }
            }
        };
    }
}
