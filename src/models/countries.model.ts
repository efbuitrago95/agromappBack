import { Model } from "objection";
import languagesModel from "./languages.model";

export default class countriesModel extends Model {
  static get tableName() {
    return "COUNTRIES";
  }

  static get relationMappings() {
    return {
      languages: {
        relation: Model.HasOneRelation,
        modelClass: languagesModel,
        join: {
          from: "COUNTRIES.idLanguage",
          to: "LANGUAGES.id"
        }
      }
    };
  }
}
