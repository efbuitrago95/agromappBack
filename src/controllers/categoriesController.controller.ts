import {Request, Response} from "express";
import categoriesModel from "../models/categories.model";

export default class LanguageController {

    public getAll = async (req: Request, res: Response) => {
        categoriesModel.query()
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(400).send(error);
            });
    };

    public create = async (req: Request, res: Response) => {
        categoriesModel.query()
            .insert(req.body)
            .then((data) => {
                res.status(200).send(data);
            }).catch((e: any) => {
                res.status(400).send(e);
            });
    };

    public getById = async (req: Request, res: Response) => {
        categoriesModel.query()
            .findById(req.params.id)
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(200).send(error);
            });
    };

    public update = async (req: Request, res: Response) => {
        categoriesModel.query()
            .patchAndFetchById(req.body.id, req.body)
            .then(res1 => {
                res.status(200).send(res1);
            }).catch((e: any) => {
                res.status(200).send(e);
            });
    };

    public deletedbyId = async (req: Request, res: Response) => {
        categoriesModel.query()
            .deleteById(req.params.id)
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
                res.status(400).send(error);
            });
    };
}
