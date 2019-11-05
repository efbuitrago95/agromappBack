import {Model} from "objection";
import itemsModel from "./items.model";
import languagesModel from "./languages.model";

export default class propertiesModel extends Model {
    static get tableName() {
        return 'PROPERTIES';
    }

    static get relationMappings() {
        return {
            items: {
                relation: Model.HasManyRelation,
                modelClass: itemsModel,
                join: {
                    from: 'PROPERTIES.id',
                    to: 'ITEMS.idProperty'
                }
            },
            languages: {
                relation: Model.HasOneRelation,
                modelClass: languagesModel,
                join: {
                    from: 'PROPERTIES.idLanguage',
                    to: 'LANGUAGES.id'
                }
            }
        };
    }
}
