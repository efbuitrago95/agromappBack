import { Model } from "objection";

export default class languagesModel extends Model {
  static get tableName() {
    return "LANGUAGES";
  }
}
