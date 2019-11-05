import {Model} from "objection";
import countriesModel from "./countries.model";
import permissionsModel from "./permissions.model";

export default class UsersModel extends Model {
    static get tableName() {
        return 'USERS';
    }

    static get relationMappings() {
        return {
            countries: {
                relation: Model.HasOneRelation,
                modelClass: countriesModel,
                join: {
                    from: 'USERS.idCountry',
                    to: 'COUNTRIES.id'
                }
            },
            permissions: {
                relation: Model.HasManyRelation,
                modelClass: permissionsModel,
                join: {
                    from: 'USERS.id',
                    to: 'PERMISSIONS.idUser'
                }
            }
        };
    }
}
