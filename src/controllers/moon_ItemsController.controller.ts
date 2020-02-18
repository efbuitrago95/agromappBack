import {Request, Response} from "express";
import MoonItemsModel from "../models/moon_Items.model";

export default class MoonItemsController {

    public getAll = async (req: Request, res: Response) => {
        MoonItemsModel.query()
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
            res.status(200).send(error);
        });
    };

    public create = async (req: Request, res: Response) => {
        MoonItemsModel.query()
            .insert(req.body)
            .then((data) => {
                res.status(200).send(data);
            }).catch((e: any) => {
            res.status(400).send(e);
        });
    };

    public getById = async (req: Request, res: Response) => {
        MoonItemsModel.query()
            .findById(req.params.id)
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
            res.status(200).send(error);
        });
    };

    public update = async (req: Request, res: Response) => {
        MoonItemsModel.query()
            .patchAndFetchById(req.body.id, req.body)
            .then(res1 => {
                res.status(200).send(res1);
            }).catch((e: any) => {
            res.status(200).send(e);
        });
    };

    public deletedbyId = async (req: Request, res: Response) => {
        MoonItemsModel.query()
            .deleteById(req.params.id)
            .then(data => {
                res.status(200).send(data);
            }).catch((error: any) => {
            res.status(200).send(error);
        });
    };
}
